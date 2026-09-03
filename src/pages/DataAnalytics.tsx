import PillarPage from "@/components/site/PillarPage";
import iconData from "@/assets/icon-data.png";
import iconMartech from "@/assets/icon-martech.png";

const DataAnalytics = () => (
  <PillarPage
    eyebrow="Data & Analytics"
    title={
      <>
        Everyone has the data. <em className="text-cyan not-italic">Almost nobody trusts it.</em>
      </>
    }
    intro="Two teams pull the same metric and get different numbers. The dashboard broke in March and nobody has fixed it. The monthly report is four people, three days, and a spreadsheet only one of them understands. This is what scaling without a data foundation actually looks like."
    seoTitle="Data & Analytics Consulting for Mid-Market | Drip AI & Data"
    seoDescription="Warehouse architecture, resilient pipelines, a governed semantic layer, and live dashboards so one metric means one thing across your company."
    path="/data-analytics"
    problemHeading={
      <>
        The reporting works. <em className="text-cyan not-italic">The trust does not.</em>
      </>
    }
    problemBody={[
      "Most mid-market data problems are not tooling problems. Numbers are assembled by hand in a dozen places, definitions drift between teams, and the person who understands the spreadsheet becomes a dependency nobody planned for.",
      "The fix is a foundation. One place the data lands, one definition per metric, monitoring that tells you when something breaks before a board deck does, and documentation your team owns after we leave.",
    ]}
    buildHeading={
      <>
        A foundation your team can actually <em className="text-cyan not-italic">operate</em>.
      </>
    }
    buildItems={[
      "Warehouse or lakehouse architecture on your existing cloud",
      "Ingestion pipelines that survive schema changes",
      "A semantic layer so a metric means one thing company-wide",
      "Live dashboards replacing manual exports",
      "Data quality monitoring and governance for PII, HIPAA, and SEC/FINRA obligations",
      "Documentation your team owns after we leave",
    ]}
    deliveryHeading={
      <>
        Decision Intelligence Platform, <em className="text-cyan not-italic">typically 120 days.</em> Or on retainer.
      </>
    }
    deliveryBody="Most engagements run as a scoped 120 day build with clear milestones and handover. If the work is ongoing, the same capability is available on retainer."
    proofHeading={
      <>
        Built, shipped, and <em className="text-cyan not-italic">still running.</em>
      </>
    }
    caseStudies={[
      {
        href: "/work/real-estate-data-and-ai-platform",
        project: "Real Estate Data & AI Platform",
        stat: "Weeks → hours",
        label: "Monthly and quarterly reporting",
        summary:
          "A family-run real estate investor replaced manual exports and a breaking dashboard with a governed data foundation, always on analytics, and LLM analysts for financial reporting, leasing, performance vs pro forma, and distributions.",
        icon: iconData,
      },
      {
        href: "/work/global-martech-transformation",
        project: "Global MarTech Transformation",
        stat: "+293%",
        label: "Quote form conversion",
        summary:
          "Rebuilt the analytics and personalization stack for a global insurer across nine markets, with a single measurement framework the regional teams could all work from.",
        icon: iconMartech,
      },
    ]}
    offersHeading="Where this work usually starts"
    offers={[
      {
        id: "platform",
        number: "03",
        tag: "DATA & ANALYTICS",
        name: "Decision Intelligence Platform",
        price: "Mid five figures",
        detail: "typical starting range · 120 days",
        summary:
          "Data foundation, metrics layer, live dashboards, and LLM analysts that turn weeks of work into hours.",
        icon: iconData,
      },
    ]}
  />
);

export default DataAnalytics;
