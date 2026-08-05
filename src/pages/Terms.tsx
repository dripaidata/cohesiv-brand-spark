import terms from "@/content/legal/terms-of-service.md?raw";
import LegalLayout from "@/components/site/LegalLayout";

const Terms = () => (
  <LegalLayout
    title="Terms of Service"
    seoTitle="Terms of Service | Drip AI & Data"
    description="The terms governing use of dripaidata.com and the software products developed by Drip AI & Data LLC."
    path="/terms"
    markdown={terms}
  />
);

export default Terms;
