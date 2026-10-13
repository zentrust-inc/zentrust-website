-- Applied to Supabase project "zentrust-website" (eybirgvvmxikarnabssy) on 2026-10-13.
-- Kept here as a record; re-run only when setting up a new project.

create table if not exists public.newsletter_subscribers (
  id          bigint generated always as identity primary key,
  email       text not null unique
              check (char_length(email) <= 254 and email ~* '^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'),
  source      text not null default 'website' check (char_length(source) <= 64),
  created_at  timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

-- The website's public key may only ADD a subscriber. Nobody can read, change
-- or delete rows with the public key; read them in the Supabase dashboard.
revoke all on public.newsletter_subscribers from anon, authenticated;
grant insert (email, source) on public.newsletter_subscribers to anon;

create policy "website can add subscribers"
  on public.newsletter_subscribers
  for insert to anon
  with check (true);

-- Daily keep-alive called by /api/keepalive so the free project never pauses.
create or replace function public.ping() returns integer
language sql stable security invoker set search_path = '' as $$ select 1 $$;
revoke all on function public.ping() from public;
grant execute on function public.ping() to anon;
