import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import iconMartech from "@/assets/icon-martech.png";
import iconEngagement from "@/assets/icon-engagement.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import iconFantasy from "@/assets/icon-fantasy.png";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconData from "@/assets/icon-data.png";

const cases = [
  {
    slug: "global-martech",
    icon: iconMartech,
    sector: "Global Insurance",
    title: "Global MarTech Transformation",
    metric: "+293%",
    metricLabel: "quote form conversion",
    blurb: "Rebuilt the analytics + personalization stack across nine markets for a Fortune 500 insurer.",
  },
  {
    slug: "content-personalization",
    icon: iconEngagement,
    sector: "Financial Services",
    title: "Real-Time Content Personalization",
    metric: "+650%",
    metricLabel: "CTA engagement",
    blurb: "Designed and shipped a content personalization framework that turned static pages into responsive journeys.",
  },
  {
    slug: "congressional-trades-fund",
    icon: iconPipeline,
    sector: "Drip Labs",
    title: "Congressional Trades Fund",
    metric: "222%",
    metricLabel: "CAGR validated",
    blurb: "Autonomous pipeline ingesting STOCK Act disclosures, scoring with ML, and executing trades end-to-end.",
  },
  {
    slug: "fantasy-football",
    icon: iconFantasy,
    sector: "Drip Labs",
    title: "Agentic Fantasy Football Platform",
    metric: "11",
    metricLabel: "autonomous agents",
    blurb: "Real-time decision engine combining stats, odds, and contextual reasoning across an agent swarm.",
  },
  {
    slug: "ai-readiness",
    icon: iconAi,
    sector: "Healthcare",
    title: "AI Readiness Assessment",
    metric: "12-week",
    metricLabel: "roadmap delivered",
    blurb: "Mapped the data, governance, and capability gaps blocking a regional health system from production AI.",
  },
  {
    slug: "data-platform",
    icon: iconData,
    sector: "Cybersecurity",
    title: "Single Source of Truth",
    metric: "1",
    metricLabel: "warehouse, 47 sources",
    blurb: "Consolidated a fragmented analytics estate into a governed, compliant warehouse the GTM team actually trusts.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        {/* Header */}
        <section className="border-b border-border bg-navy-ink py-28 text-primary-foreground md:py-40">
          <div className="container-wide grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow text-cyan">Our Work</p>
              <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">
                What enterprise-grade <em className="text-cyan not-italic">looks like</em> in mid-market.
              </h1>
            </div>
            <p className="md:col-span-4 self-end text-base leading-relaxed text-primary-foreground/70">
              Selected engagements across financial services, healthcare, cybersecurity, and our internal R&amp;D arm. Numbers verified, names redacted on request.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-24 md:py-32">
          <div className="container-wide grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {cases.map((c) => (
              <Link
                key={c.slug}
                to={c.slug === "congressional-trades-fund" ? "/work/congressional-trades-fund" : "#"}
                className="group relative flex flex-col gap-6 bg-card p-10 transition-all hover:bg-cyan-soft/30 md:p-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {c.sector}
                    </p>
                    <h2 className="display-serif mt-3 text-4xl text-navy-ink md:text-5xl">{c.title}</h2>
                  </div>
                  <img src={c.icon} alt="" loading="lazy" className="h-20 w-20 flex-shrink-0 object-contain" />
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">{c.blurb}</p>

                <div className="mt-auto flex items-end justify-between border-t border-border pt-6">
                  <div>
                    <p className="display-serif text-5xl text-cyan">{c.metric}</p>
                    <p className="eyebrow mt-1 text-navy-deep">{c.metricLabel}</p>
                  </div>
                  <ArrowUpRight className="size-6 text-navy-deep transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
