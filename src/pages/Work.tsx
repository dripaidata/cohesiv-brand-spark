import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
import iconMartech from "@/assets/icon-martech.png";
import iconEngagement from "@/assets/icon-engagement.png";

const cases = [
  {
    slug: "global-martech-transformation",
    icon: iconMartech,
    sector: "Global Insurance",
    title: "Global MarTech Transformation",
    metric: "+293%",
    metricLabel: "quote form conversion",
    blurb: "Rebuilt the analytics + personalization stack across nine markets for a Fortune 500 insurer.",
  },
  {
    slug: "real-time-content-personalization",
    icon: iconEngagement,
    sector: "Financial Services",
    title: "Real-Time Content Personalization",
    metric: "+650%",
    metricLabel: "CTA engagement",
    blurb: "Designed and shipped a content personalization framework that turned static pages into responsive journeys.",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Seo
        title="Our Work — Drip AI & Data"
        description="Selected client engagements across financial services, insurance, healthcare, and cybersecurity. Verified outcomes from enterprise data and AI leadership."
        path="/work"
      />
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
                to={`/work/${c.slug}`}
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
