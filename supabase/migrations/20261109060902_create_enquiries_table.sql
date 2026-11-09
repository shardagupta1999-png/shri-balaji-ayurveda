/*
# Create enquiries table for website contact and appointment requests

1. New Tables
- `enquiries`
  - `id` (uuid, primary key, generated automatically)
  - `created_at` (timestamptz, defaults to now)
  - `source` (text): either 'booking' (appointment modal) or 'contact' (contact page form)
  - `name` (text, required, 2-80 characters)
  - `phone` (text, required, 7-20 characters)
  - `email` (text, optional, up to 120 characters)
  - `service` (text, required, up to 100 characters)
  - `preferred_date` (date, optional)
  - `preferred_time` (text, optional, up to 40 characters)
  - `message` (text, optional, up to 1000 characters)

2. Security
- Row level security is enabled on `enquiries`.
- Visitors (anon and signed-in users) may only INSERT new enquiries. They cannot read, edit, or delete any enquiry, including their own.
- Length and format checks on the database protect against oversized or malformed submissions.
- The owner reads enquiries from the database dashboard.

3. Important Notes
- No existing data is modified. This is a new table.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  source text NOT NULL CHECK (source IN ('booking', 'contact')),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 80),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 7 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 120),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
  preferred_date date,
  preferred_time text CHECK (preferred_time IS NULL OR char_length(preferred_time) <= 40),
  message text CHECK (message IS NULL OR char_length(message) <= 1000)
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
