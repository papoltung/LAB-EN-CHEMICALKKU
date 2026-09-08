-- Run once in Supabase SQL Editor to persist chemical photos.
alter table public.inventory
  add column if not exists image_url text;

comment on column public.inventory.image_url is
  'Optional public image URL for the chemical bottle/container';

-- Create the image bucket once. Keep the bucket public so card thumbnails can
-- load directly in the static site. Tighten upload policies when Auth is added.
insert into storage.buckets (id, name, public)
values ('chemical-images', 'chemical-images', true)
on conflict (id) do update set public = true;

drop policy if exists "chemical images are readable" on storage.objects;
drop policy if exists "chemical images can be uploaded" on storage.objects;

create policy "chemical images are readable"
on storage.objects for select
using (bucket_id = 'chemical-images');

create policy "chemical images can be uploaded"
on storage.objects for insert
with check (bucket_id = 'chemical-images');
