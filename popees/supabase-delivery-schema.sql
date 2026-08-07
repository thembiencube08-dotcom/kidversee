-- ============================================================
-- DELIVERY PERSON APP — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- 1. Delivery persons (linked to Supabase Auth users)
CREATE TABLE IF NOT EXISTS delivery_persons (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name   TEXT NOT NULL,
  email       TEXT NOT NULL,
  phone       TEXT,
  avatar_url  TEXT,
  rating      NUMERIC(3,1) DEFAULT 5.0,
  role        TEXT DEFAULT 'courier',
  is_active   BOOLEAN DEFAULT TRUE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE delivery_persons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Delivery person can read own profile"
  ON delivery_persons FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Delivery person can update own profile"
  ON delivery_persons FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Delivery person can insert own profile"
  ON delivery_persons FOR INSERT WITH CHECK (auth.uid() = id);

-- 2. Delivery stops / packages
CREATE TABLE IF NOT EXISTS delivery_stops (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assigned_to  UUID REFERENCES delivery_persons(id),
  tracking_no  TEXT UNIQUE NOT NULL DEFAULT ('RU' || floor(random()*90000000+10000000)::TEXT),
  customer_name TEXT NOT NULL,
  phone        TEXT,
  address      TEXT NOT NULL,
  city         TEXT,
  note         TEXT,
  window       TEXT,
  seq          INTEGER DEFAULT 1,
  status       TEXT NOT NULL DEFAULT 'pending'
               CHECK (status IN ('pending','out','picked_up','delivered','failed')),
  fail_reason  TEXT DEFAULT '',
  cod_amount   NUMERIC(10,2) DEFAULT 0,
  weight_kg    NUMERIC(6,2) DEFAULT 0,
  picked_at    TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT NOW(),
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE delivery_stops ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Assigned courier can manage their stops"
  ON delivery_stops FOR ALL
  USING (auth.uid() = assigned_to)
  WITH CHECK (auth.uid() = assigned_to);

-- Admins can insert and assign stops
CREATE POLICY "Service role full access to stops"
  ON delivery_stops FOR ALL
  USING (TRUE)
  WITH CHECK (TRUE);

-- Realtime
ALTER PUBLICATION supabase_realtime ADD TABLE delivery_stops;
ALTER PUBLICATION supabase_realtime ADD TABLE delivery_persons;
