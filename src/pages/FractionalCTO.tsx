import PillarPage from "@/components/site/PillarPage";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import iconData from "@/assets/icon-data.png";
import iconAgentic from "@/assets/icon-agentic.png";
import iconAiStrategy from "@/assets/icon-ai-strategy.png";
import iconEngagement from "@/assets/icon-engagement.png";
import iconMartech from "@/assets/icon-martech.png";
import { ROUTE_SEO } from "@/seo/routes";

const capabilities = [
  {
    href: "/data-analytics",
    title: "Data & Analytics",
    description:
      "Untangle legacy stacks, build a governed source of truth, and put reporting on autopilot.",
    icon: iconData,
  },
  {
    href: "/ai-implementation",
    title: "AI Implementation",
    description:
      "Pick use cases with real ROI, build agents and automations, and deploy into the tools your team already uses.",
    icon: iconAgentic,
  },
  {
    href: "/product-development",
    title: "Product Development",
    description:
      "Design, build, and ship working software, then hand over documentation a junior engineer can pick up tomorrow.",
    icon: iconAiStrategy,
  },
];

const CapabilitiesSection = () => (
  <section className="bg-background py-24 md:py-32">
    <div className="container-wide">
      <p className="eyebrow text-cyan">What the retainer can be applied to</p>
      <h2 className="display-serif mt-6 max-w-3xl text-4xl text-navy-ink text-balance md:text-5xl">
        One operator across data, AI, and product.
      </h2>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {capabilities.map((c) => (
          <Link
            key={c.href}
            to={c.href}
            className="group flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-card transition-all hover:border-cyan hover:shadow-elev"
          >
            <img src={c.icon} alt="" loading="lazy" className="h-14 w-14 object-contain" />
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy-ink">{c.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-deep group-hover:text-cyan">
              Explore the pillar
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const FractionalCTO = () => (
  <PillarPage
    eyebrow="FRACTIONAL CTO"
    title={
      <>
        A full-time CTO takes six months to hire.{" "}
        <em className="text-cyan not-italic">We start Monday.</em>
      </>
    }
    intro="A permanent CTO is the right answer eventually. But the hire takes six to nine months, costs north of $300K fully loaded, and needs another year to ramp. A retainer gives you that seniority now, and we help you hire the right permanent leader when the time comes."
    seoTitle={ROUTE_SEO["/fractional-cto"].title}
    seoDescription={ROUTE_SEO["/fractional-cto"].description}
    path="/fractional-cto"
    problemEyebrow="The problem"
    problemHeading={
      <>
        You need the leadership.{" "}
        <em className="text-cyan not-italic">Not the nine-month search.</em>
      </>
    }
    problemBody={[
      "Hiring a full-time CTO takes six to nine months, costs north of $300K fully loaded, and needs another year of ramp. Most mid-market companies cannot afford to wait that long while their data, AI, and product decisions pile up.",
      "A fractional CTO gives you that caliber of technical leadership starting Monday. We apply it to whichever capability matters most that month, and we help you hire the right permanent leader when the time comes.",
    ]}
    buildHeading={
      <>
        What the retainer{" "}
        <em className="text-cyan not-italic">covers.</em>
      </>
    }
    buildItems={[
      "Technical strategy and architecture decisions",
      "Build-versus-buy and vendor evaluation",
      "The data platform roadmap",
      "AI strategy and deployment",
      "Product and engineering direction",
      "Security and compliance posture",
      "Hiring and interviewing your permanent technical team",
    ]}
    extraSection={<CapabilitiesSection />}
    deliveryHeading={
      <>
        40 hours per month.{" "}
        <em className="text-cyan not-italic">Three-month minimum.</em>
      </>
    }
    deliveryBody="Some engagements are advisory. Others include direct ownership of your engineers and vendor relationships. We scope that up front rather than assuming it."
    proofHeading={
      <>
        Leadership applied across{" "}
        <em className="text-cyan not-italic">real work.</em>
      </>
    }
    proofIntro="The same judgment that runs a fractional engagement has shaped data platforms, AI deployments, and product builds for mid-market teams."
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
    offersHeading="Where this usually starts"
    offers={[
      {
        id: "retainer",
        number: "04",
        tag: "FRACTIONAL CTO",
        name: "AI & Product Development Retainer",
        detail: "40 hrs/mo · 3-month minimum",
        summary:
          "A senior AI builder and technical operator embedded in your team, applied to data, AI, or product work as priorities shift.",
        icon: iconEngagement,
      },
    ]}
  />
);

export default FractionalCTO;
