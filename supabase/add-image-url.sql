-- Run once in Supabase SQL Editor to persist chemical photos.
alter table public.inventory
  add column if not exists image_url text;

comment on column public.inventory.image_url is
  'Optional public image URL for the chemical bottle/container';
