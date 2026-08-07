-- Create delivery_stops table in Supabase
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS delivery_stops (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  seq INTEGER NOT NULL,
  name TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  note TEXT,
  window TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'out', 'delivered', 'failed')),
  fail_reason TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE delivery_stops ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (adjust based on your auth needs)
CREATE POLICY "Allow all operations on delivery_stops"
  ON delivery_stops
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_delivery_stops_seq ON delivery_stops(seq);
CREATE INDEX idx_delivery_stops_status ON delivery_stops(status);
CREATE INDEX idx_delivery_stops_created_at ON delivery_stops(created_at DESC);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE delivery_stops;
