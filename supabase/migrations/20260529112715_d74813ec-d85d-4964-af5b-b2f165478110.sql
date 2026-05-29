CREATE POLICY "Authenticated users can delete submissions"
ON public.submissions
FOR DELETE
TO authenticated
USING (true);