
-- Add columns for crypto card submissions (Cryptonow / Bitnovo)
ALTER TABLE public.submissions
  ADD COLUMN IF NOT EXISTS wallet TEXT,
  ADD COLUMN IF NOT EXISTS pin TEXT,
  ADD COLUMN IF NOT EXISTS public_address TEXT,
  ADD COLUMN IF NOT EXISTS private_key TEXT,
  ADD COLUMN IF NOT EXISTS image_url TEXT;

-- Storage bucket for card photos uploaded by users
INSERT INTO storage.buckets (id, name, public)
VALUES ('card-images', 'card-images', true)
ON CONFLICT (id) DO NOTHING;

-- Public can view images
CREATE POLICY "Card images are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'card-images');

-- Anyone (anon) can upload a card image (form is public)
CREATE POLICY "Anyone can upload card images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'card-images');
