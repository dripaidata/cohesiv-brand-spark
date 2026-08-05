import deletion from "@/content/legal/data-deletion.md?raw";
import LegalLayout from "@/components/site/LegalLayout";

const DataDeletion = () => (
  <LegalLayout
    title="Data Deletion"
    seoTitle="Data Deletion | Drip AI & Data"
    description="How to delete data associated with Drip AI & Data products and with dripaidata.com."
    path="/data-deletion"
    markdown={deletion}
  />
);

export default DataDeletion;
