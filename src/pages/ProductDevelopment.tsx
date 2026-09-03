import { Link } from "react-router-dom";
import PillarPage from "@/components/site/PillarPage";
import iconAgentic from "@/assets/icon-agentic.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import dripLabsLogo from "@/assets/drip-labs-logo.png";
import dynastyWarRoomLogo from "@/assets/dynasty-war-room-logo.png";

const labs = [
  {
    href: "/labs/dynasty-war-room",
    title: "Dynasty War Room",
    blurb:
      "A live multi-league dynasty fantasy football platform with a 91-feature salary-cap engine and an eight-phase state machine that keeps every league consistent.",
    stat: "Live production platform",
    icon: dynastyWarRoomLogo,
  },
  {
    href: "/labs/congressional-trades-fund",
    title: "Congressional Trades Fund",
    blurb:
      "An autonomous pipeline that ingests disclosures, scores them with ML, and executes through a brokerage API without a human in the loop.",
    stat: "Autonomous pipeline",
    icon: iconPipeline,
  },
];

const LabsSection = (
  <section className="relative overflow-hidden bg-gradient-fade py-24 md:py-32">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <img src={dripLabsLogo} alt="Drip Labs" className="h-20 w-auto md:h-24" loading="lazy" />
          <h2 className="display-serif mt-6 text-4xl text-navy-ink text-balance md:text-5xl">
            The products <em className="text-cyan not-italic">we own and run ourselves.</em>
          </h2>
        </div>
        <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
          Drip Labs is where we prove the build capability on our own money before we apply it to a client's. Every
          pattern we use in client work has already been shipped, operated, and maintained here first.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {labs.map((l) => (
          <Link
            key={l.title}
            to={l.href}
            className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-elev"
          >
            <img src={l.icon} alt="" loading="lazy" className="h-16 w-16 object-contain" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy-ink">{l.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{l.blurb}</p>
            <p className="mt-6 border-t border-border pt-4 font-mono text-xs uppercase tracking-wider text-cyan">
              {l.stat}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const ProductDevelopment = () => (
  <PillarPage
    eyebrow="Product Development"
    title={
      <>
        Most consultancies hand you a roadmap. <em className="text-cyan not-italic">We hand you working software.</em>
      </>
    }
    intro="There is a gap between a strategy deck and a running system, and it is usually where mid-market projects die. We close it by building the thing. Same operator who scoped it, shipping in two-week increments, transferring ownership as we go."
    seoTitle="Product Development for Mid-Market Companies | Drip AI & Data"
    seoDescription="Full-stack applications in React, Node, and PostgreSQL, with multi-tenant architecture, integrations, autonomous pipelines, and handover documentation."
    path="/product-development"
    problemHeading={
      <>
        The deck was never <em className="text-cyan not-italic">the deliverable.</em>
      </>
    }
    problemBody={[
      "Plenty of firms will tell you what to build. Far fewer will sit in the codebase and ship it, then stay accountable when the first version meets real users.",
      "We build in two-week increments so you see working software early, and we transfer ownership as we go rather than at the end. The handover is documentation a junior engineer can pick up tomorrow.",
    ]}
    buildHeading={
      <>
        Production systems, <em className="text-cyan not-italic">not prototypes.</em>
      </>
    }
    buildItems={[
      "Full-stack applications in React, Node, and PostgreSQL",
      "Multi-tenant architecture committed from day one",
      "API and third-party integrations",
      "Authentication, roles, and audit trails",
      "Autonomous pipelines and scheduled agents",
      "Deployment, monitoring, and handover documentation",
    ]}
    extraSection={LabsSection}
    deliveryHeading={
      <>
        A scoped project, <em className="text-cyan not-italic">or on retainer.</em>
      </>
    }
    deliveryBody="Fixed scope when the outcome is clear, or reserved senior capacity on retainer when the roadmap will keep moving."
    proofHeading={
      <>
        Shipped software, <em className="text-cyan not-italic">running today.</em>
      </>
    }
    proofIntro="Dynasty War Room is a live multi-league platform with a 91-feature salary-cap engine and an eight-phase state machine. Congressional Trades Fund is an autonomous pipeline that ingests disclosures, scores them with ML, and executes through a brokerage API. The Prospecting Agent is productized and running in production for two clients."
    caseStudies={[
      {
        href: "/work/prospecting-agent",
        project: "The Prospecting Agent",
        stat: "2 clients",
        label: "Productized and in production",
        summary:
          "A custom agent that researches accounts, verifies contacts, and drafts outreach in the client's voice, now packaged and running for multiple teams.",
        icon: iconAgentic,
      },
      {
        href: "/labs/dynasty-war-room",
        project: "Dynasty War Room",
        stat: "91 features",
        label: "Salary-cap engine",
        summary:
          "A live multi-league platform with an eight-phase state machine, built and operated end to end by the same team that builds for clients.",
        icon: dynastyWarRoomLogo,
      },
    ]}
    offersHeading="Where this work usually starts"
    offers={[
      {
        id: "prospecting-agent",
        number: "02",
        tag: "AI IMPLEMENTATION · PRODUCT",
        name: "Prospecting Agent",
        price: "$7,500",
        detail: "one-time · 4 weeks to handoff",
        summary: "A custom AI agent that researches accounts, verifies contacts, and drafts outreach in your voice.",
        icon: iconAgentic,
      },
    ]}
  />
);

export default ProductDevelopment;
