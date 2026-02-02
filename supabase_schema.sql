
-- Create the requests table
create table public.requests (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  video_description text not null,
  reel_link text,
  brand_name text not null,
  industry text not null,
  tone text not null,
  logo_filename text,
  offer_cta text not null,
  plan text not null,
  delivery_preference text not null,
  whatsapp text not null,
  email text not null,
  status text default 'pending_payment'
);

-- Enable Row Level Security (RLS)
alter table public.requests enable row level security;

-- Create a policy to allow inserting data (public access for form submission)
create policy "Allow public insert access"
  on public.requests
  for insert
  to anon
  with check (true);

-- Create a policy to allow reading own data (optional, maybe restricted to authenticated users or admin)
-- For now, we only allow insert for public
