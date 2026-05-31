# Arkode Labs Production Readiness

This project is ready as a polished frontend prototype. Before using the admin area in production, replace browser-only storage with a real backend and protect the editor with server-side authentication.

## Recommended Backend Path

Use Supabase for the fastest production setup:

- Supabase Auth for admin login.
- Postgres tables for `case_studies` and `posts`.
- Row Level Security so public users can only read published content.
- Storage bucket for case study and blog images.

Suggested tables:

```sql
create table case_studies (
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

create table posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  status text not null check (status in ('Draft', 'Published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

Environment variables for Vercel or Cloudflare Pages:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_ADMIN_PASSCODE=
```

The current `/admin` passcode gate is intentionally lightweight for local demo use. It is not a replacement for Supabase Auth, Strapi roles, Sanity authentication, or a custom server session.

## Deployment Checklist

- Set the production domain, then update `public/sitemap.xml`, `public/robots.txt`, and Open Graph URLs if the domain is not `arkodelabs.id`.
- Add `VITE_ADMIN_PASSCODE` for demo deployments.
- Deploy to Vercel or Cloudflare Pages with `npm run build`.
- Submit `https://your-domain/sitemap.xml` in Google Search Console.
- Replace prototype case studies with approved real client work or clearly label concept projects.
