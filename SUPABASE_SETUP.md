# Supabase Setup for DAYFLOW

## 1. Create a Supabase project
- Go to [supabase.com](https://supabase.com) and create a new project.
- Note down your project URL and anon key.

## 2 Configure environment variables
Create a `.env` file in the root of the project with the following:

```
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

Replace `your_project_url` and `your_anon_key` with the values from your Supabase project settings.

## 3 Enable email confirmations (required for verification)
In your Supabase project dashboard:
- Go to **Authentication** > **Settings**
- Under **Email confirmations**, enable **Confirm email before sign-in**
- You can also customize the confirmation email template if desired.

## 4 Create the profiles table
Run the following SQL in the Supabase SQL editor to create the profiles table:

```sql
create table profiles (
  id uuid references auth.users not null primary key,
  employee_id text unique not null,
  role text not null check (role in ('employee', 'hr')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table profiles enable row level security;

-- Create policies for profiles
-- Users can only view and update their own profile
create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

-- Allow service role to manage all profiles (if needed)
create policy "Service role can manage all profiles"
  on profiles for all
  using (false); -- No one can bypass via this policy, but service role bypasses RLS
```

## 5 Add additional columns for employee profile
Run the following SQL to add columns for the employee profile information:

```sql
alter table profiles add column if not exists full_name text;
alter table profiles add column if not exists phone text;
alter table profiles add column if not exists address text;
alter table profiles add column if not exists department text;
alter table profiles add column if not exists designation text;
alter table profiles add column if not exists joining_date date;
alter table profiles add column if not exists basic_salary decimal;
alter table profiles add column if not exists employment_status text default 'active';
```

## 6 Test the authentication flow
After setting up the database and environment variables, run the development server:

```bash
npm run dev
```

Test the following scenarios:
- Employee signup (role: employee)
- HR signup (role: hr)
- Password validation (min 8 chars, uppercase, lowercase, number)
- Password mismatch
- Verification email required (after signup, check email and click link)
- Correct login (should redirect to appropriate dashboard)
- Incorrect password (show error)
- Unverified email (show error and prevent login)
- Employee accessing /admin (should redirect to /employee)
- HR accessing /admin (should allow access)
- Logout
- Refresh while logged in (should maintain session)

## Notes
- The auth state is managed via Supabase Auth Context.
- The profiles table stores additional user data (employee_id, role, and profile fields like phone, address, etc.).
- Row Level Security (RLS) is enabled to ensure users can only access their own profile data.
- Email verification is mandatory; users cannot sign in without verifying their email.