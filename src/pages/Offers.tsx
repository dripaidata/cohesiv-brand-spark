import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
import Reveal from "@/components/site/Reveal";
import ConsultationForm from "@/components/site/ConsultationForm";
import { Button } from "@/components/ui/button";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconAgentic from "@/assets/icon-agentic.png";
import iconData from "@/assets/icon-data.png";

interface Offer {
  id: string;
  icon: string;
  eyebrow: string;
  title: string;
  payoff: string;
  who: string;
  problem: string;
  problemList?: string[];
  gets: { lead: string; rest: string }[];
  price: string;
  timeline: string;
  value: string;
  proof: string;
  proofHref: string;
  proofLabel: string;
}

const offers: Offer[] = [
  {
    id: "workshop",
    icon: iconAi,
    eyebrow: "Offer 01 · AI Enablement Workshop",
    title: "Your team, working with AI ",
    payoff: "on their real work.",
    who: "Mid-market leadership and revenue teams (5–20 people) who know they should be using AI but haven't gotten past ChatGPT experiments.",
    problem:
      "Generic AI training doesn't stick. Teams leave inspired and change nothing, because none of it was built on their workflows or data.",
    gets: [
      { lead: "Pre-session audit", rest: "identifying the 3–5 highest-leverage tasks on your team" },
      { lead: "Hands-on session in Claude", rest: "(half or full day), built entirely around your real work, not demos" },
      { lead: "Take-home playbook:", rest: "the prompts, workflows, and guardrails your team built" },
      { lead: "30-day follow-up session", rest: "to reinforce adoption and answer what came up in practice" },
    ],
    price: "$4,500",
    timeline: "$7,500 full day · 2 weeks from signing to session",
    value:
      "Trained by the architect who shipped production AI at Fidelity, Manulife, and Rocket Software.",
    proof: "Clients run their own AI systems day-to-day after handoff, with no analyst in the loop.",
    proofHref: "/about",
    proofLabel: "About Drip AI & Data",
  },
  {
    id: "prospecting-agent",
    icon: iconAgentic,
    eyebrow: "Offer 02 · Prospecting Agent",
    title: "Your outbound research, ",
    payoff: "done before you sit down.",
    who: "B2B teams where anyone — founders, sellers, partners, consultants — runs their own research, account and contact logging, and outreach.",
    problem:
      "Research, LinkedIn verification, and one-off drafting is real but mechanical work. It crowds out the conversations that actually move deals.",
    gets: [
      { lead: "A custom AI prospecting agent", rest: "built around your ICP, your voice, and your offer" },
      { lead: "Researches accounts,", rest: "verifies LinkedIn profiles, drafts outreach in your voice, logs every touch" },
      { lead: "One intake form in,", rest: "a working system out, handed back as a tool you run yourselves" },
      { lead: "Team training included:", rest: "2 hands-on Claude sessions ($2,500 value), so handoff doubles as AI enablement" },
      { lead: "Optional ongoing tuning:", rest: "ICP refinement, message variant refreshes, list updates" },
    ],
    price: "$12,000",
    timeline: "per system + $1,000/mo · 4 weeks from intake to handoff",
    value:
      "Anyone running their own prospecting loses 4–5 hours a week to it. This gives that time back.",
    proof:
      "In production with a creative agency: a full morning reclaimed weekly, every prospect verified on their live LinkedIn profile before contact, every touch logged.",
    proofHref: "/work/prospecting-agent",
    proofLabel: "Read the case study",
  },
  {
    id: "platform",
    icon: iconData,
    eyebrow: "Offer 03 · Decision Intelligence Platform",
    title: "From manual exports ",
    payoff: "to AI analysts.",
    who: "Mid-market companies ($10M–$250M) running finance, operations, or an investment function on manual exports and fragile workbooks.",
    problem: "",
    problemList: [
      "Month-end takes days of exports and copy-paste.",
      "The same metric shows three numbers in three spreadsheets.",
      "One person knows how the workbook works.",
      "A simple board question takes a week.",
    ],
    gets: [
      { lead: "Data foundation:", rest: "automated nightly pipelines from your systems of record into a governed cloud warehouse" },
      { lead: "Metrics layer:", rest: "your business logic encoded once, so every dashboard and AI answer computes numbers one way, yours" },
      { lead: "Live executive dashboards:", rest: "performance, budget vs. actual with drill-down, and views your current system can't produce" },
      { lead: "A team of LLM analysts", rest: "answering plain-English questions with real SQL, guardrails, and a QA suite" },
      { lead: "Enablement throughout,", rest: "so your people run it after handoff" },
    ],
    price: "From $40,000",
    timeline: "+ $2,500–3,500/mo · 120 days · 3 phases with hard outputs and an off-ramp at each",
    value:
      "A single data hire runs $120k+ plus ramp time, then they onboard, and only then do you begin to build the platform.",
    proof:
      "~1,350 units. Reconciled to the penny across 516 property-months. Weeks of work now done in hours, on under $20/mo of cloud cost.",
    proofHref: "/case-studies/real-estate-data-and-ai-platform",
    proofLabel: "Read the case study",
  },
];

const OfferSection = ({ offer, index }: { offer: Offer; index: number }) => (
  <section
    id={offer.id}
    className={`scroll-mt-24 py-24 md:py-32 ${index % 2 === 0 ? "bg-background" : "bg-secondary"}`}
  >
    <div className="container-wide">
      <Reveal>
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <img src={offer.icon} alt="" loading="lazy" className="h-16 w-16 object-contain" />
            <p className="eyebrow mt-8 text-cyan">{offer.eyebrow}</p>
            <h2 className="display-serif mt-5 text-4xl text-navy-ink text-balance md:text-6xl">
              {offer.title}
              <em className="text-cyan not-italic">{offer.payoff}</em>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground md:col-span-4">{offer.value}</p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-16 grid gap-10 border-t border-border pt-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-navy-deep">Who it's for</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{offer.who}</p>
          </div>
          <div>
            <p className="eyebrow text-navy-deep">The problem</p>
            {offer.problemList ? (
              <ul className="mt-4 space-y-2.5">
                {offer.problemList.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                    <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{offer.problem}</p>
            )}
          </div>
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="mt-12 rounded-sm border border-border bg-card p-8 shadow-card md:p-10">
          <p className="eyebrow text-cyan">What you get</p>
          <ul className="mt-6 space-y-4">
            {offer.gets.map((g) => (
              <li key={g.lead} className="flex items-start gap-3 text-base leading-relaxed text-navy-deep">
                <span className="mt-2.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                <span>
                  <strong className="font-semibold text-navy-ink">{g.lead}</strong> {g.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="mt-8 flex flex-col gap-8 rounded-sm bg-navy-ink p-8 text-primary-foreground md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="eyebrow text-cyan">Investment</p>
            <p className="display-serif mt-3 text-5xl text-cyan md:text-6xl">{offer.price}</p>
          </div>
          <div className="md:max-w-sm">
            <p className="eyebrow text-primary-foreground/60">Timeline</p>
            <p className="mt-3 text-base leading-relaxed text-primary-foreground/80">{offer.timeline}</p>
          </div>
          <Button asChild variant="hero" size="lg">
            <a href="/#consultation">Start here <ArrowRight className="!size-5" /></a>
          </Button>
        </div>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-8 border-t border-border pt-8">
          <p className="eyebrow text-navy-deep">Proof</p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{offer.proof}</p>
          <Link
            to={offer.proofHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-ink transition-colors hover:text-cyan"
          >
            {offer.proofLabel} <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

const Offers = () => (
  <div className="min-h-screen bg-background font-sans">
    <Seo
      title="Productized AI & Data Engagements | Drip AI & Data"
      description="Three fixed-scope engagements with published pricing: an AI enablement workshop, a custom prospecting agent, and a decision intelligence platform."
      path="/offers"
    />
    <Navbar />
    <main>
      <section className="bg-background py-24 md:py-32">
        <div className="container-wide">
          <p className="eyebrow text-cyan">Productized engagements</p>
          <h1 className="display-serif mt-6 max-w-4xl text-5xl text-navy-ink text-balance md:text-7xl">
            Three ways to start. <em className="text-cyan not-italic">One that fits.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Fixed scopes, published pricing, and hard outputs. No six-month discovery phases.
          </p>
        </div>
      </section>

      {offers.map((o, i) => (
        <OfferSection key={o.id} offer={o} index={i} />
      ))}

      <ConsultationForm />
    </main>
    <Footer />
  </div>
);

export default Offers;
