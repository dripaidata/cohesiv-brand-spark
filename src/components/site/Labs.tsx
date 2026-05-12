import { ArrowUpRight } from "lucide-react";
import iconFantasy from "@/assets/icon-fantasy.png";
import iconPipeline from "@/assets/icon-pipeline.png";

const labs = [
  {
    title: "Congressional Trades Fund",
    blurb: "A fully autonomous pipeline that ingests STOCK Act disclosures, scores them with ML, and executes trades via brokerage API.",
    stat: "222% CAGR validated",
    icon: iconPipeline,
  },
  {
    title: "Fantasy Football Platform",
    blurb: "An agentic decision engine for fantasy football managers — combining real-time stats, odds, and contextual reasoning.",
    stat: "11 autonomous agents",
    icon: iconFantasy,
  },
];

const Labs = () => (
  <section className="relative overflow-hidden bg-gradient-fade py-28 md:py-40">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">Drip Labs</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            Our R&amp;D arm. <em className="text-cyan not-italic">Where we prove things work</em> before we sell them.
          </h2>
        </div>
        <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
          We don't just talk about agentic AI — we ship it. Drip Labs is where we build production-grade autonomous systems on real data, real money, and real outcomes.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {labs.map((l) => (
          <article key={l.title} className="group relative flex flex-col rounded-sm border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-cyan hover:shadow-elev">
            <img src={l.icon} alt="" loading="lazy" className="h-16 w-16 object-contain" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy-ink">{l.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{l.blurb}</p>
            <p className="mt-6 border-t border-border pt-4 font-mono text-xs uppercase tracking-wider text-cyan">
              {l.stat}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <a href="/labs" className="group inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan">
          Explore Drip Labs
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </section>
);

export default Labs;
