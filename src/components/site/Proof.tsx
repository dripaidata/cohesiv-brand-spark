import { ArrowUpRight } from "lucide-react";
import iconMartech from "@/assets/icon-martech.png";
import iconEngagement from "@/assets/icon-engagement.png";

const proofs = [
  {
    metric: "+293%",
    label: "Quote form conversion",
    project: "Global MarTech Transformation",
    summary: "Rebuilt the analytics + personalization stack for a global insurer, lifting top-of-funnel conversion across nine markets.",
    icon: iconMartech,
  },
  {
    metric: "+650%",
    label: "CTA engagement",
    project: "Content Personalization",
    summary: "Designed and shipped a real-time content personalization framework that turned static pages into responsive journeys.",
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

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {proofs.map((p) => (
          <article
            key={p.project}
            className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="display-serif text-7xl text-cyan md:text-8xl">{p.metric}</p>
                <p className="eyebrow mt-2 text-navy-deep">{p.label}</p>
              </div>
              <img src={p.icon} alt="" loading="lazy" className="h-20 w-20 object-contain opacity-90" />
            </div>
            <div className="mt-10 border-t border-border pt-6">
              <p className="font-mono text-xs text-muted-foreground">→ Engagement</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-navy-ink">{p.project}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Proof;
