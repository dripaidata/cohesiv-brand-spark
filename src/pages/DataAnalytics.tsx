import ServicePageShell from "@/components/site/ServicePageShell";

const DataAnalytics = () => (
  <ServicePageShell
    eyebrow="Services"
    title={
      <>
        Data &amp; <em className="text-cyan not-italic">Analytics</em>
      </>
    }
    intro="A single source of truth your team can trust, with governed pipelines, warehousing, and reporting built on top of it."
    seoTitle="Data & Analytics - Drip AI & Data"
    seoDescription="Data warehouse design, governed pipelines, analytics frameworks, and reporting layers for mid-market teams."
    path="/data-analytics"
  />
);

export default DataAnalytics;
