-- Run once in Supabase: Dashboard → SQL Editor → New query → paste → Run.
-- Creates the table used by app/api/newsletter/route.ts.

create table if not exists public.newsletter_subscribers (
  id          bigint generated always as identity primary key,
  email       text not null unique,
  source      text not null default 'website',
  created_at  timestamptz not null default now()
);

-- Lock the table down: only the server (service role key) can read/write.
alter table public.newsletter_subscribers enable row level security;
-- (No policies are created on purpose — anon/public clients get no access.)
