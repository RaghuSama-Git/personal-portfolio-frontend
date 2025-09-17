-- Allow public access to insert contact form submissions
CREATE POLICY "Allow public contact form submissions" 
ON public.Portfolio 
FOR INSERT 
WITH CHECK (true);

-- Allow public read access to contact form submissions (optional, for admin purposes)
CREATE POLICY "Allow public read access to contact forms" 
ON public.Portfolio 
FOR SELECT 
USING (true);