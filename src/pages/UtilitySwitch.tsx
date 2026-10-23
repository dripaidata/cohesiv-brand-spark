import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
import ConsultationForm from "@/components/site/ConsultationForm";
import CalendarButton from "@/components/site/CalendarButton";
import { ROUTE_SEO } from "@/seo/routes";
import logo from "@/assets/utility-switch-logo-lockup.png.asset.json";

const seo = ROUTE_SEO["/work/utility-switch"];
const SITE_URL = "https://theutilityswitch.com";

const stats: [string, string][] = [
  ["About 2 months", "from idea to launched pilot"],
  ["1,000+", "real addresses tested for provider matching"],
  ["Local partners", "on board at launch"],
];

const steps = [
  {
    title: "Research first",
    body: "Before writing code, AI research agents and hands-on review mapped the published requirements for every provider in the launch market, graded by evidence, so the product only promises what each utility actually allows.",
  },
  {
    title: "Address-level provider matching",
    body: "A coverage engine built on county service-area maps works out exactly which providers serve a home, because a city name alone isn't reliable. It was validated against more than a thousand real addresses before launch.",
  },
  {
    title: "One guided flow for the customer",
    body: "Enter your move once, pick your services, sign one authorization electronically, pay, upload your documents, and track every utility's status in one dashboard. Reminder emails bring people back to anything unfinished.",
  },
  {
    title: "Privacy built in from day one",
    body: "Sensitive details are encrypted, and documents are deleted as soon as the provider that needed them confirms. Signed authorizations and consent records are kept for the audit trail.",
  },
  {
    title: "The back office to run it",
    body: "A staff console for moves, payments, partner promo codes, and authority reviews, plus a daily operations digest, so the team can run a manual-fulfillment pilot today and see exactly what to automate next.",
  },
];

const results: [string, string][] = [
  ["Speed", "About two months from first conversation to a launched pilot."],
  ["Partners", "Real estate brokers and a moving company in South Florida are already handing promo codes to their clients."],
  ["Built to grow", "The pilot is instrumented so every automation decision comes from real operating data, not guesses."],
];

/** Hidden until a founder quote is supplied. */
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

const UtilitySwitch = () => (
  <div className="min-h-screen bg-background font-sans">
    <Seo
      title={seo.title}
      description={seo.description}
      path={seo.path}
      ogType="article"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "A great idea, deep industry knowledge, and no one to build it.",
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
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener"
            className="logo-tile mt-12 inline-block rounded-md px-5 py-3"
          >
            <img src={logo.url} alt="Utility Switch logo" className="h-[88px] w-auto md:h-[120px]" />
          </a>
          <p className="eyebrow mt-10 text-cyan">Case study · Fractional CTO · Product build</p>
          <h1 className="display-serif mt-6 max-w-5xl text-4xl text-balance sm:text-5xl md:text-7xl">
            A great idea, deep industry knowledge, <em className="text-cyan">and no one to build it.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75">
            Utility Switch's founder knew exactly what was broken about moving your utilities. Drip AI and Data came on
            as fractional CTO and took it from idea to a launched pilot in about two months.
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener"
            className="group mt-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-cyan"
          >
            Visit theutilityswitch.com <ArrowUpRight className="size-4" />
          </a>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
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
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">Moving means calling every utility, one by one</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep">
            Every move means separate calls, forms, holds, and document uploads with each water, electric, and gas
            provider, and every provider has different rules for owners, renters, and anyone acting on someone else's
            behalf. Utilities feel it too: incomplete applications and repeat calls slow down every new account. The
            founder had spent years in the utility industry and knew the problem cold. What he didn't have was a
            technical partner to turn it into a product.
          </p>
        </div>
      </section>

      {/* Partnership */}
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">The partnership</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">The technical half of the founding team</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep">
            Drip AI and Data stepped in as fractional CTO, owning research, architecture, the platform, and the launch,
            while the founder owned the industry relationships, partners, and sales. Scope was set on regular working
            sessions, decisions were made together, and the build moved in small, shippable increments toward three
            clear launch gates: money handling, legal sign-off, and security.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <h2 className="display-serif text-4xl text-navy-ink md:text-5xl">What we built</h2>
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
      <section className="border-t border-border bg-card py-20 md:py-28">
        <div className="container-wide">
          <p className="eyebrow text-cyan">The result</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">Pilot launched, partners on board</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.map(([k, v]) => (
              <div key={k} className="rounded-sm border border-border border-t-4 border-t-cyan bg-background p-6 shadow-sm md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">{k}</p>
                <p className="mt-4 text-base leading-relaxed text-navy-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="py-20 md:py-28">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">What's next</p>
          <h2 className="display-serif mt-4 text-4xl text-navy-ink md:text-5xl">More partners, more automation, more markets</h2>
          <p className="mt-6 text-lg leading-relaxed text-navy-deep">
            With the pilot live, the work shifts to automating submissions to providers, moving to fully managed cloud
            infrastructure, bringing on more partners, and expanding to new markets.
          </p>
          <Testimonial />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-ink py-20 text-primary-foreground md:py-28">
        <div className="container-wide max-w-3xl">
          <h2 className="display-serif text-4xl text-balance md:text-5xl">
            Got the idea and the industry chops, but no one to build it?
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/75">
            That's exactly the founder I work with. Let's talk about what you're building and what it would take to get
            it in front of customers.
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

export default UtilitySwitch;
