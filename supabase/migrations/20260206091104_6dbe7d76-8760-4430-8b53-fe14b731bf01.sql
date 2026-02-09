-- Create submissions table for prepaid card codes
CREATE TABLE public.submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    card_type TEXT NOT NULL,
    email TEXT NOT NULL,
    code_1 TEXT,
    code_2 TEXT,
    code_3 TEXT,
    code_4 TEXT,
    code_5 TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processed'))
);

-- Enable Row Level Security
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert submissions (public form)
CREATE POLICY "Anyone can submit codes"
ON public.submissions
FOR INSERT
WITH CHECK (true);

-- Policy: Only authenticated admins can view submissions
-- For now, allow all authenticated users to read (we'll add admin role later if needed)
CREATE POLICY "Authenticated users can view submissions"
ON public.submissions
FOR SELECT
TO authenticated
USING (true);

-- Policy: Only authenticated users can update status
CREATE POLICY "Authenticated users can update submissions"
ON public.submissions
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);