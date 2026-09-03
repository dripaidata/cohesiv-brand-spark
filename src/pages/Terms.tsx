import terms from "@/content/legal/terms-of-service.md?raw";
import LegalLayout from "@/components/site/LegalLayout";
import { ROUTE_SEO } from "@/seo/routes";

const Terms = () => (
  <LegalLayout
    title="Terms of Service"
    seoTitle={ROUTE_SEO["/terms"].title}
    description={ROUTE_SEO["/terms"].description}
    path="/terms"
    markdown={terms}
  />
);

export default Terms;
