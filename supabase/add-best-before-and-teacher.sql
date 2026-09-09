-- Run once in Supabase SQL Editor before using the new inventory fields.
alter table public.inventory
  add column if not exists image_url text not null default '',
  add column if not exists best_before text not null default '',
  add column if not exists teacher_name text not null default '';

comment on column public.inventory.best_before is
  'วันที่ควรใช้ก่อน แยกจากวันหมดอายุ (DD/MM/YYYY)';

comment on column public.inventory.teacher_name is
  'ชื่ออาจารย์หรือผู้รับผิดชอบสารเคมี';
