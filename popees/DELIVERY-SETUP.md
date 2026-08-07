# Delivery Dashboard Setup Guide

## Step 1: Install Supabase

```bash
npm install @supabase/supabase-js
```

## Step 2: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key from Settings > API

## Step 3: Set Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 4: Run Database Migration

1. Open Supabase SQL Editor in your project dashboard
2. Copy and run the entire `supabase-schema.sql` file
3. This creates the `delivery_stops` table with all required columns

## Step 5: Test the Dashboard

1. Start your Next.js dev server: `npm run dev`
2. Navigate to `/delivery`
3. Click "+ Add stop" to create your first delivery
4. Test marking deliveries as complete/failed

## Features

- **Real-time updates** — Changes sync across all devices instantly
- **Status tracking** — Pending, Out for delivery, Delivered, Failed
- **Route management** — Reorder stops with up/down arrows
- **Navigation** — One-tap Google Maps navigation and phone calls
- **Filter tabs** — View pending, delivered, failed, or all stops
- **Progress bar** — Visual progress through the day's route

## Database Schema

The `delivery_stops` table includes:
- `id` — UUID primary key
- `seq` — Sequence number for ordering stops
- `name` — Customer name
- `phone` — Customer phone number
- `address` — Delivery address
- `note` — Package notes (COD amount, special instructions)
- `window` — Delivery time window
- `status` — pending | out | delivered | failed
- `fail_reason` — Reason if delivery failed
- `created_at` — Timestamp

## Security Note

The current setup allows anyone to read/write the delivery stops. For production:

1. Enable Supabase Auth
2. Update Row Level Security policies to check `auth.uid()`
3. Assign delivery personnel specific roles/permissions

## Access the Dashboard

URL: `https://your-domain.com/delivery`

This dashboard is mobile-optimized and works offline (with sync when back online).
