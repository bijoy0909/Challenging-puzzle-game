-- ==========================================================
-- Challenging Puzzle: Database setup
-- Supabase SQL Editor এ পুরোটা পেস্ট করে Run করুন
-- ==========================================================

-- 1. Profiles table (username for each user)
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  created_at timestamp default now()
);

alter table profiles enable row level security;

create policy "Profiles are viewable by everyone"
on profiles for select
using (true);

create policy "Users can insert their own profile"
on profiles for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on profiles for update
using (auth.uid() = id);


-- 2. Scores table (leaderboard)
create table if not exists scores (
  id bigint generated always as identity primary key,
  user_id uuid references profiles(id) on delete cascade,
  game_name text not null,
  difficulty text,
  time_seconds integer,
  score integer not null,
  played_at timestamp default now()
);

alter table scores enable row level security;

create policy "Scores are viewable by everyone"
on scores for select
using (true);

create policy "Users can insert their own scores"
on scores for insert
with check (auth.uid() = user_id);
