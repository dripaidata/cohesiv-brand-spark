import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import iconPipeline from "@/assets/icon-pipeline.png";

const stats = [
  ["83K+", "Trades analyzed"],
  ["11", "Autonomous agents"],
  ["222%", "CAGR validated"],
  ["30", "Days to build"],
];

const CongressionalTradesFund = () => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <main>
      <section className="bg-navy-ink py-24 text-primary-foreground md:py-32">
        <div className="container-wide">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-cyan">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <div className="mt-12 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow text-cyan">Drip Labs · Engineering case study</p>
              <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">
                Congressional Trades Fund
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75">
                The STOCK Act requires members of Congress to disclose their trades — but a 45-day delay and the volume of disclosures make it nearly impossible for individual investors to act on the data. We closed the loop.
              </p>
            </div>
            <img src={iconPipeline} alt="" className="md:col-span-4 h-48 w-48 self-end justify-self-end object-contain" />
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={l} className="bg-navy-ink p-8">
                <p className="display-serif text-5xl text-cyan md:text-6xl">{n}</p>
                <p className="eyebrow mt-2 text-primary-foreground/60">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            <p className="eyebrow text-cyan">Engagement</p>
            <dl className="mt-6 space-y-6 text-sm">
              {[
                ["Type", "Internal R&D"],
                ["Stack", "Python · ML · Brokerage API"],
                ["Timeline", "30 days, build to validation"],
                ["Status", "Live, paper-traded, monitored"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-border pt-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-navy-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="md:col-span-8 space-y-12 text-base leading-relaxed text-navy-deep">
            <div>
              <h2 className="display-serif text-4xl text-navy-ink">What we built and why it matters</h2>
              <p className="mt-6">
                Tools exist to surface STOCK Act filings, but none close the loop from disclosure to trade execution. We built a fully automated pipeline that ingests disclosures, enriches them with lobbying and government contract intelligence, scores every signal with machine learning, and executes trades through a brokerage API — with mandatory human approval at two separate gates.
              </p>
            </div>
            <div>
              <h2 className="display-serif text-4xl text-navy-ink">How the agents work together</h2>
              <p className="mt-6">
                Eleven autonomous agents handle distinct responsibilities — from disclosure ingestion and entity resolution to signal scoring, position sizing, and execution. Each agent has a narrow remit and a clear handoff. The orchestration layer is the product.
              </p>
            </div>
            <div>
              <h2 className="display-serif text-4xl text-navy-ink">Why we built it</h2>
              <p className="mt-6">
                Drip Labs exists so we can prove production-grade agentic systems work on real data and real money before we recommend them to a client. The Congressional Trades Fund is one of those proofs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-fade py-24">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="display-serif text-4xl text-navy-ink md:text-5xl">Want one of these for your business?</h2>
          <Button asChild variant="hero" size="xl">
            <a href="/#consultation">Book a consultation <ArrowRight className="!size-5" /></a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CongressionalTradesFund;
