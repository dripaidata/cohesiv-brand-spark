import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import iconFantasy from "@/assets/icon-fantasy.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import dripLabsIcon from "@/assets/drip-labs-icon.jpg";

const labs = [
  {
    slug: "dynasty-cap-manager",
    href: "/labs/dynasty-cap-manager",
    icon: iconFantasy,
    date: "May 2026",
    title: "Dynasty Cap Manager",
    blurb:
      "A fantasy football platform built to model the NFL — full salary cap, contract types, multi-league architecture, and a state machine that keeps every league safe.",
    stat: "Multi-league",
    statLabel: "production system",
  },
  {
    slug: "congressional-trades-fund",
    href: "/labs/congressional-trades-fund",
    icon: iconPipeline,
    date: "February 2026",
    title: "Congressional Trades Fund",
    blurb:
      "AI-powered trading system that monitors congressional stock disclosures, scores them with ML, and executes trades via brokerage API — with human approval at every step.",
    stat: "222%",
    statLabel: "CAGR validated",
  },
];

const Labs = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <section className="border-b border-border bg-navy-ink py-28 text-primary-foreground md:py-40">
          <div className="container-wide grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-sm bg-white p-2 md:size-20">
                  <img src={dripLabsIcon} alt="" className="h-full w-full object-contain" />
                </div>
                <p className="eyebrow text-cyan">Drip Labs</p>
              </div>
              <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">
                Our R&amp;D arm. <em className="text-cyan not-italic">Where we prove things work</em> before we sell them.
              </h1>
            </div>
            <p className="md:col-span-4 self-end text-base leading-relaxed text-primary-foreground/70">
              We don't just talk about agentic AI — we ship it. Drip Labs is where we build production-grade autonomous systems on real data, real money, and real outcomes.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-wide grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
            {labs.map((l) => (
              <Link
                key={l.slug}
                to={l.href}
                className="group relative flex flex-col gap-6 bg-card p-10 transition-all hover:bg-cyan-soft/30 md:p-12"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                      {l.date}
                    </p>
                    <h2 className="display-serif mt-3 text-4xl text-navy-ink md:text-5xl">{l.title}</h2>
                  </div>
                  <img src={l.icon} alt="" loading="lazy" className="h-20 w-20 flex-shrink-0 object-contain" />
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">{l.blurb}</p>

                <div className="mt-auto flex items-end justify-between border-t border-border pt-6">
                  <div>
                    <p className="display-serif text-5xl text-cyan">{l.stat}</p>
                    <p className="eyebrow mt-1 text-navy-deep">{l.statLabel}</p>
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

export default Labs;
