import privacy from "@/content/legal/privacy-policy.md?raw";
import LegalLayout from "@/components/site/LegalLayout";

const Privacy = () => (
  <LegalLayout
    title="Privacy Policy"
    seoTitle="Privacy Policy | Drip AI & Data"
    description="How Drip AI & Data collects, uses, and protects information across our website, products, and client communications."
    path="/privacy"
    markdown={privacy}
  />
);

export default Privacy;
