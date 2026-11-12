ALTER TABLE public.enquiries
  ADD COLUMN IF NOT EXISTS source text NOT NULL DEFAULT 'contact'
  CHECK (source IN ('booking', 'contact'));

NOTIFY pgrst, 'reload schema';
