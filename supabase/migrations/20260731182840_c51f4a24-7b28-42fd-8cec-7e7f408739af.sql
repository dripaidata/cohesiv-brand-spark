CREATE TABLE public.offer_sheet_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT NOT NULL,
  offer TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.offer_sheet_requests TO anon, authenticated;
GRANT ALL ON public.offer_sheet_requests TO service_role;

ALTER TABLE public.offer_sheet_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can request an offer sheet"
  ON public.offer_sheet_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(name) BETWEEN 1 AND 200
    AND char_length(email) BETWEEN 3 AND 255
    AND char_length(company) BETWEEN 1 AND 200
    AND (offer IS NULL OR char_length(offer) <= 200)
  );

CREATE POLICY "Deny public reads of offer sheet requests"
  ON public.offer_sheet_requests
  FOR SELECT
  TO anon, authenticated
  USING (false);