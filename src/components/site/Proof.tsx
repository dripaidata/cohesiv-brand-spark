import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import iconMartech from "@/assets/icon-martech.png";
import iconEngagement from "@/assets/icon-engagement.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import iconData from "@/assets/icon-data.png";
import AnimatedNumber from "./AnimatedNumber";
import Reveal from "./Reveal";

const featured = [
  {
    href: "/case-studies/real-estate-data-and-ai-platform",
    value: 4,
    suffix: " months",
    label: "Data foundation, analytics & AI",
    project: "Real Estate Data & AI Platform",
    summary:
      "A family-run real estate investor replaced manual exports and a breaking dashboard with a custom data foundation, always on analytics, and LLM analysts for financial reporting, leasing, performance vs pro forma, and distributions. Weeks of manual work now done in hours.",
    icon: iconData,
    badge: "Newest",
  },
  {
    href: "/work/prospecting-agent",
    value: 5,
    suffix: " min",
    label: "Replaces 4 to 6 weekly hours",
    project: "The Prospecting Agent",
    summary:
      "A custom AI prospecting agent that researches accounts, verifies LinkedIn profiles, and drafts outreach in the client's voice. Built around their ICP. A creative agency reclaimed an entire morning every week and put it back into real conversations.",
    icon: iconPipeline,
    badge: "Engagement",
  },
];

const proofs = [
  {
    href: "/work/global-martech-transformation",
    value: 293,
    prefix: "+",
    suffix: "%",
    label: "Quote form conversion",
    project: "Global MarTech Transformation",
    summary: "Rebuilt the analytics + personalization stack for a global insurer, lifting top of funnel conversion across nine markets.",
    icon: iconMartech,
  },
  {
    href: "/work/real-time-content-personalization",
    value: 650,
    prefix: "+",
    suffix: "%",
    label: "CTA engagement",
    project: "Content Personalization",
    summary: "Designed and shipped a real time content personalization framework that turned static pages into responsive journeys.",
    icon: iconEngagement,
  },
];

const Proof = () => (
  <section className="bg-background py-28 md:py-40">
    <div className="container-wide">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-cyan">Outcomes</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            Real engagements. <em className="text-cyan not-italic">Measurable outcomes.</em>
          </h2>
        </div>
        <a
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan"
        >
          View all case studies
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {featured.map((f, i) => (
        <Reveal key={f.project} delay={i * 120}>
          <Link
            to={f.href}
            className={`group ${i === 0 ? "mt-16" : "mt-6"} flex flex-col overflow-hidden rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev md:p-12`}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">{f.badge}</p>
                <h3 className="display-serif mt-3 text-4xl text-navy-ink md:text-5xl">{f.project}</h3>
              </div>
              <img src={f.icon} alt="" loading="lazy" className="h-24 w-24 flex-shrink-0 object-contain md:h-28 md:w-28" />
            </div>
            <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <AnimatedNumber
                  value={f.value}
                  suffix={f.suffix}
                  className="display-serif block text-7xl text-cyan md:text-8xl"
                />
                <p className="eyebrow mt-2 text-navy-deep">{f.label}</p>
              </div>
              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-muted-foreground">{f.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-deep group-hover:text-cyan">
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {proofs.map((p, i) => (
          <Reveal key={p.project} delay={i * 120}>
            <Link
              to={p.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev"
            >
              <div className="flex items-start justify-between">
                <div>
                  <AnimatedNumber
                    value={p.value}
                    prefix={p.prefix}
                    suffix={p.suffix}
                    className="display-serif block text-7xl text-cyan md:text-8xl"
                  />
                  <p className="eyebrow mt-2 text-navy-deep">{p.label}</p>
                </div>
                <img src={p.icon} alt="" loading="lazy" className="h-20 w-20 object-contain opacity-90" />
              </div>
              <div className="mt-10 border-t border-border pt-6">
                <p className="font-mono text-xs text-muted-foreground">→ Engagement</p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-navy-ink">{p.project}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Proof;
