import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
import ConsultationForm from "@/components/site/ConsultationForm";
import CalendarButton from "@/components/site/CalendarButton";
import { ROUTE_SEO } from "@/seo/routes";

const seo = ROUTE_SEO["/work/real-estate-data-and-ai-platform"];

const stats: [string, string][] = [
  ["Up to 6 weeks to hours", "quarterly close and investor distributions"],
  ["27 properties", "about 1,350 units, reconciled to the penny"],
  ["18 reports", "loaded automatically every night"],
  ["Under $20/mo", "in cloud cost"],
];

const steps = [
  {
    title: "The data foundation",
    body: "Every report from their property management system now lands in a cloud data warehouse automatically each night, including about 227,000 general ledger rows, so the numbers are always current and always in one place.",
  },
  {
    title: "Reporting built around how they run the business",
    body: "A metrics layer encodes their business logic once, so every dashboard and every answer computes the numbers their way. Leadership gets live dashboards and timed reports designed with them, nothing out of the box.",
  },
  {
    title: "A team of AI analysts",
    body: "Separate AI analysts for financial performance, leasing and vacancy, rent roll and pro forma, and distributions. The CEO, CFO and team ask plain-English questions and get answers backed by real SQL and a QA suite.",
  },
  {
    title: "Distributions on autopilot",
    body: "Quarterly distributions across every investor and property are now calculated automatically, including the waterfall, promote, and investor-specific terms. It reconciles against every recorded capital event, and deal-level returns match the CFO's own model within 2 basis points. Investor letters that used to take days now take moments.",
  },
  {
    title: "Decisions, not just reports",
    body: "A projections tool tied to actuals and loan terms models refinance and sale scenarios for every deal and ranks the options, so leadership can see how to get the most for themselves and their investors.",
  },
];

const results: [string, string][] = [
  ["Quarter-end", "From up to six weeks of manual work to hours of review across a few days."],
  ["Answers", "From waiting days on a spreadsheet to asking a question in plain English."],
  ["Ownership", "Their team runs it day to day. No analyst in the loop."],
];

/** Hidden until a client quote is supplied. */
const Testimonial = ({ quote, attribution }: { quote?: string; attribution?: string }) => {
  if (!quote) return null;
  return (
    <figure className="mt-12 border-l-4 border-cyan bg-cyan-soft/40 p-6 md:p-8">
      <blockquote className="display-serif text-2xl leading-snug text-navy-ink md:text-3xl">{quote}</blockquote>
      {attribution && (
        <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
};

const RealEstateDataAndAIPlatform = () => (
  <div className="min-h-screen bg-background font-sans">
    <Seo
      title={seo.title}
      description={seo.description}
      path={seo.path}
      ogType="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Quarter-end used to take up to six weeks. Now it's hours of review.",
        description: seo.description,
        author: { "@type": "Person", name: "Danny Ellowitz" },
        publisher: { "@type": "Organization", name: "Drip AI & Data" },
        mainEntityOfPage: `https://dripaidata.com${seo.path}`,
      }}
    />
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-navy-ink py-20 text-primary-foreground md:py-32">
        <div className="container-wide">
          <Link to="/work" className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-cyan">
            <ArrowLeft className="size-4" /> All work
          </Link>
          <p className="eyebrow mt-12 text-cyan">Case study · Real estate investment and property management</p>
          <h1 className="display-serif mt-6 max-w-5xl text-4xl text-balance sm:text-5xl md:text-7xl">
            Quarter-end used to take up to six weeks. <em className="text-cyan">Now it's hours of review.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75">
            A family-run real estate investment firm was running finance and operations out of property management
            exports and spreadsheets. We rebuilt the back end, then kept building on it.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(([n, l]) => (
              <div key={n} className="bg-navy-ink p-6 md:p-8">
                <p className="display-serif text-3xl text-cyan md:text-4xl">{n}</p>
                <p className="eyebrow mt-2 text-primary-foreground/60">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">The problem</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">Sound familiar?</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep">
            Every month took days of exports and copy and paste to reconcile. Every quarter took up to six weeks to
            close the books, calculate distributions across every investor and property, and write the investor
            letters. The analysis that actually runs an investment firm, like pro forma tracking and refinance or sale
            decisions, lived in workbooks only a couple of people understood. A simple question from leadership could
            take days to answer.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">What we built</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">How it came together</h2>
          <ol className="relative mt-12 space-y-10 border-l border-border pl-8 md:pl-10">
            {steps.map((s, i) => (
              <li key={s.title} className="relative">
                <span className="absolute -left-[calc(2rem+0.75rem)] top-0 flex size-6 items-center justify-center rounded-full bg-cyan font-mono text-xs text-navy-ink md:-left-[calc(2.5rem+0.75rem)]">
                  {i + 1}
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Step {i + 1}</p>
                <h3 className="display-serif mt-2 text-2xl text-navy-ink md:text-3xl">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-deep">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Result */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <p className="eyebrow text-cyan">The result</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">What changed</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map(([k, v]) => (
              <div key={k} className="rounded-sm border border-border border-t-4 border-t-cyan bg-card p-6 shadow-sm md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">{k}</p>
                <p className="mt-4 text-base leading-relaxed text-navy-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship */}
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">The relationship</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">Where it went next</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep">
            What started as a data foundation is now our fourth engagement with this client, with each phase building
            on the last. Next up is custom market research software for pricing properties in every market nationwide.
          </p>
          <Testimonial />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-ink py-20 text-primary-foreground md:py-28">
        <div className="container-wide max-w-3xl">
          <h2 className="display-serif text-4xl text-balance md:text-5xl">Running your firm on spreadsheets and exports?</h2>
          <p className="mt-6 text-lg text-primary-foreground/75">
            Let's talk through how your team closes the month and the quarter today, and whether it's worth automating.
          </p>
          <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <CalendarButton label="Book a call" />
            <Link to="/fractional-cto" className="group inline-flex items-center gap-2 text-primary-foreground/80 hover:text-cyan">
              See how we work <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationForm />
    </main>
    <Footer />
  </div>
);

export default RealEstateDataAndAIPlatform;
