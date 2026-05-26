-- Explicitly deny SELECT on consultation_submissions for anon and authenticated roles.
-- Submissions contain PII (name, email, company) and should only be readable by
-- service_role (which bypasses RLS) or via a future admin-scoped policy.
CREATE POLICY "Deny public reads of consultation submissions"
  ON public.consultation_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);

-- Revoke SELECT from anon/authenticated at the table-grant level for defense in depth.
REVOKE SELECT ON public.consultation_submissions FROM anon;
REVOKE SELECT ON public.consultation_submissions FROM authenticated;