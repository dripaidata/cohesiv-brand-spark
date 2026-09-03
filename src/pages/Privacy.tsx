import privacy from "@/content/legal/privacy-policy.md?raw";
import LegalLayout from "@/components/site/LegalLayout";
import { ROUTE_SEO } from "@/seo/routes";

const Privacy = () => (
  <LegalLayout
    title="Privacy Policy"
    seoTitle={ROUTE_SEO["/privacy"].title}
    description={ROUTE_SEO["/privacy"].description}
    path="/privacy"
    markdown={privacy}
  />
);

export default Privacy;
