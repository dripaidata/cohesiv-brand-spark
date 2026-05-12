import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import logo from "@/assets/logo-full.png";

const roles = [
  {
    company: "Drip AI & Data",
    title: "Founder & Principal Consultant",
    period: "2025 — Present",
    note: "Bringing enterprise-grade data and AI leadership to mid-market companies — without the enterprise price tag.",
  },
  {
    company: "Rocket Software",
    title: "Head of Analytics & Journey Orchestration",
    period: "2022 — 2025",
    note: "Owned the analytics and orchestration stack across a global B2B portfolio. Built the team, the platform, and the operating model behind it.",
  },
  {
    company: "Fidelity Investments",
    title: "Director of Insights & Analytics for Personalization",
    period: "2019 — 2022",
    note: "Led the analytics organization behind Fidelity's customer personalization program — measurement, experimentation, and decisioning at scale.",
  },
  {
    company: "Manulife / John Hancock",
    title: "Global Director of Marketing Technology & Analytics",
    period: "2016 — 2019",
    note: "Rebuilt the global MarTech and analytics stack across nine markets. Lifted quote form conversion +293%.",
  },
  {
    company: "Kaspersky Labs",
    title: "Global Digital Analytics",
    period: "2013 — 2016",
    note: "Stood up the global digital analytics function across product, marketing, and e-commerce surfaces.",
  },
];

const principles = [
  {
    title: "Foundations before features.",
    body: "AI doesn't fix a broken data layer — it amplifies it. Every engagement starts with the boring, important plumbing.",
  },
  {
    title: "Strategy is what you don't build.",
    body: "We say no to more use cases than we say yes to. Focus is the whole job.",
  },
  {
    title: "Ship into production or it doesn't count.",
    body: "Decks don't move metrics. We build, deploy, measure, and hand back something that runs without us.",
  },
  {
    title: "Mid-market deserves enterprise rigor.",
    body: "The same architectural discipline that runs a Fortune 500 stack works at one-tenth the cost when applied with intent.",
  },
];

const About = () => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-navy-ink py-28 text-primary-foreground md:py-40">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-cyan">About</p>
            <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">
              A decade of <em className="text-cyan not-italic">enterprise data leadership</em>, built for mid-market.
            </h1>
            <p className="mt-10 max-w-2xl text-lg text-primary-foreground/75">
              Drip AI &amp; Data is a boutique consultancy founded by Danny Ellowitz — built on fourteen years of leading data, analytics, and AI inside global enterprises like Fidelity, Manulife, Rocket Software, and Kaspersky Labs.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/65">
              We exist because mid-market companies have outgrown spreadsheets but can't justify the cost of a Big 4 engagement or a full in-house data team. We bring the same playbook the Fortune 500 uses — applied with focus, shipped end to end, and priced for the businesses that actually need it.
            </p>
          </div>
          <div className="md:col-span-4 self-end">
            <div className="rounded-sm border border-white/10 bg-white/5 p-6">
              <img src={logo} alt="Drip AI & Data" className="h-12 w-auto" />
              <dl className="mt-6 space-y-4 text-sm">
                <div className="border-t border-white/10 pt-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-primary-foreground/50">Founded</dt>
                  <dd className="mt-1">2025 · Boston, MA</dd>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-primary-foreground/50">Founder</dt>
                  <dd className="mt-1">Danny Ellowitz</dd>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-primary-foreground/50">Practice</dt>
                  <dd className="mt-1">AI Strategy · Data &amp; Analytics · Agentic Workflows</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Founder bio */}
      <section className="py-28 md:py-40">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-cyan">Founder</p>
            <h2 className="display-serif mt-6 text-4xl text-navy-ink md:text-5xl">Danny Ellowitz</h2>
            <p className="mt-3 text-sm text-muted-foreground">Founder &amp; Principal Consultant</p>
            <a
              href="https://www.linkedin.com/in/danny-ellowitz/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan"
            >
              <Linkedin className="size-4" /> Connect on LinkedIn
            </a>
          </div>
          <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-navy-deep">
            <p>
              Danny has spent fourteen years inside global enterprises building the data and AI infrastructure that mid-market leaders only read about in case studies. He's led analytics organizations at Fidelity Investments, run global marketing technology and analytics for Manulife / John Hancock across nine markets, headed analytics and journey orchestration at Rocket Software, and stood up global digital analytics for Kaspersky Labs.
            </p>
            <p>
              The pattern across all of those roles was the same: take a fragmented, half-instrumented, politically-tangled data estate and turn it into something a marketing or product organization could actually run on. The work was rarely glamorous — governed tagging, single sources of truth, decisioning frameworks, measurement models, experimentation discipline — but it was the work that moved the metrics.
            </p>
            <p>
              He started Drip AI &amp; Data because he kept watching mid-market companies get sold one of two things: a $2M Big 4 deck, or an off-the-shelf SaaS tool that promised AI and delivered a dashboard. Neither one ships into production. Both leave the customer worse off than when they started.
            </p>
            <p>
              Outside of client work, Danny runs <strong>Drip Labs</strong> — an internal R&amp;D arm where he ships production-grade agentic systems on real data and real money before recommending the same patterns to clients. Recent builds include an 11-agent congressional trades pipeline (222% backtested CAGR) and a multi-league dynasty fantasy football platform with a full salary-cap engine.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-card py-24 md:py-32">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan">Experience</p>
            <h2 className="display-serif mt-6 text-4xl text-navy-ink md:text-5xl">
              Where the playbook <em className="text-cyan not-italic">came from.</em>
            </h2>
          </div>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-1">
            {roles.map((r) => (
              <li key={r.company} className="grid gap-4 bg-card p-8 md:grid-cols-12 md:items-baseline md:p-10">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:col-span-2">
                  {r.period}
                </p>
                <div className="md:col-span-4">
                  <p className="display-serif text-2xl text-navy-ink md:text-3xl">{r.company}</p>
                  <p className="mt-1 text-sm text-navy-deep">{r.title}</p>
                </div>
                <p className="md:col-span-6 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Principles */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan">How we work</p>
            <h2 className="display-serif mt-6 text-4xl text-navy-ink md:text-5xl">
              Four principles that <em className="text-cyan not-italic">decide every engagement.</em>
            </h2>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <article
                key={p.title}
                className="rounded-sm border border-border bg-card p-10 transition-colors hover:border-cyan"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-cyan">0{i + 1}</p>
                <h3 className="display-serif mt-4 text-3xl text-navy-ink">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-gradient-fade py-24">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="display-serif text-4xl text-navy-ink md:text-5xl">Let's figure out what's holding you back.</h2>
          <Button asChild variant="hero" size="xl">
            <a href="/#consultation">Book a consultation <ArrowRight className="!size-5" /></a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;
