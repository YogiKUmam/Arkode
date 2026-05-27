# Arkode Labs Production Readiness

This project is ready as a polished frontend with Supabase integration support. When `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are present, the admin reads and writes content through Supabase and uses Supabase Auth. Without those variables, it falls back to localStorage for local preview.

## Recommended Backend Path

Use Supabase for the fastest production setup:

- Supabase Auth for admin login.
- Postgres tables for `case_studies` and `posts`.
- Row Level Security so public users can only read published content.
- Storage bucket for case study and blog images.

The SQL schema is available in `supabase/schema.sql`. Run it in the Supabase SQL editor before deploying with Supabase env vars.

The included RLS policies allow public visitors to read only `Published` content. Authenticated Supabase users can manage draft and published rows. Keep public signups disabled unless you add an admin allowlist.

Environment variables for Vercel or Cloudflare Pages:

```text
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_ADMIN_PASSCODE=
```

`VITE_ADMIN_PASSCODE` is only used by the local fallback mode. In Supabase mode, `/admin` uses email/password login through Supabase Auth.

## Supabase Setup

1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL editor.
3. In Authentication, disable open public signups for production.
4. Create the admin user from Supabase Dashboard > Authentication > Users.
5. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to `.env.local` and the deployment provider.
6. Restart the dev server and sign in at `/admin` with the Supabase user.

## Deployment Checklist

- Set the production domain, then update `public/sitemap.xml`, `public/robots.txt`, and Open Graph URLs if the domain is not `arkodelabs.id`.
- Add Supabase env vars in the deployment provider.
- Deploy to Vercel or Cloudflare Pages with `npm run build`.
- Submit `https://your-domain/sitemap.xml` in Google Search Console.
- Replace prototype case studies with approved real client work or clearly label concept projects.
