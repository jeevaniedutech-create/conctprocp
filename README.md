# CPA Kerala — Static SPA

A fully static Vite + React + TypeScript single-page app for the
**Counselling Psychological Association, Kerala**. Backend is Supabase
(only the publishable anon key ships to the browser).

## 1. Supabase setup (run once)

In the Supabase SQL editor, run:

```sql
create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  status text not null default 'active' check (status in ('active','paused')),
  created_at timestamptz not null default now()
);

grant select, insert, update on public.members to anon;

alter table public.members enable row level security;

drop policy if exists "members_all_anon" on public.members;
create policy "members_all_anon"
  on public.members for all
  to anon
  using (true)
  with check (true);
```

Members are capped at **250** and **never deleted** — only paused (enforced in the admin UI).

## 2. Local dev

```bash
npm install
npm run dev
```

`.env` already contains the project's `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY`. Never commit service-role keys.

## 3. Deploy

### GitHub Pages (repo `athprojecttb`)
```bash
npm run build      # base is /athprojecttb/
# push dist/ to the gh-pages branch (or use any GH Pages action)
```
`public/404.html` provides SPA fallback for deep links.

### Netlify
`netlify.toml` is included — publish dir `dist`, SPA redirects on.

### Cloudflare Pages
Build command: `VITE_BASE=/ npm run build`  ·  Output: `dist`  ·  SPA fallback handled by `public/_redirects`.

### Firebase Hosting
`firebase.json` is included. `firebase deploy --only hosting`.

## Admin

Visit `/admin`. Username **cpaadmin** / password **cpaadmin**.
