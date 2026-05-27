create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  label text not null,
  summary text not null,
  stack text[] not null default '{}',
  timeline text not null,
  result text not null,
  visual text not null check (visual in ('website', 'dashboard', 'process', 'maintenance')),
  status text not null check (status in ('Draft', 'Published')),
  demo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  status text not null check (status in ('Draft', 'Published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_case_studies_updated_at on public.case_studies;
create trigger set_case_studies_updated_at
before update on public.case_studies
for each row
execute function public.set_updated_at();

drop trigger if exists set_posts_updated_at on public.posts;
create trigger set_posts_updated_at
before update on public.posts
for each row
execute function public.set_updated_at();

create index if not exists case_studies_status_created_idx on public.case_studies (status, created_at desc);
create index if not exists posts_status_created_idx on public.posts (status, created_at desc);

alter table public.case_studies enable row level security;
alter table public.posts enable row level security;

drop policy if exists "Public can read published case studies" on public.case_studies;
create policy "Public can read published case studies"
on public.case_studies
for select
using (status = 'Published' or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage case studies" on public.case_studies;
create policy "Authenticated users can manage case studies"
on public.case_studies
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
on public.posts
for select
using (status = 'Published' or auth.role() = 'authenticated');

drop policy if exists "Authenticated users can manage posts" on public.posts;
create policy "Authenticated users can manage posts"
on public.posts
for all
to authenticated
using (true)
with check (true);
