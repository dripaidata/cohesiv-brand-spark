import deletion from "@/content/legal/data-deletion.md?raw";
import LegalLayout from "@/components/site/LegalLayout";
import { ROUTE_SEO } from "@/seo/routes";

const DataDeletion = () => (
  <LegalLayout
    title="Data Deletion"
    seoTitle={ROUTE_SEO["/data-deletion"].title}
    description={ROUTE_SEO["/data-deletion"].description}
    path="/data-deletion"
    markdown={deletion}
  />
);

export default DataDeletion;
