import { useState } from "react";
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
  number: string;
  name: string;
  title: string;
  payoff: string;
  who: string;
  problem: string;
  problemList?: string[];
  gets: { lead: string; rest: string }[];
  price?: string;
  timeline: string;
  priceNote?: string;
  offerSheet?: boolean;
  value: string;
  proof: string;
  proofHref: string;
  proofLabel: string;
}

const offers: Offer[] = [
  {
    id: "workshop",
    icon: iconAi,
    number: "01",
    name: "AI Enablement Workshop",
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
    price: "$4,000",
    timeline: "half-day workshop · $7,500 full day · 2 weeks from signing to session",
    value:
      "Trained by the architect who shipped production AI at Fidelity, Manulife, and Rocket Software.",
    proof: "Clients run their own AI systems day-to-day after handoff, with no analyst in the loop.",
    proofHref: "/about",
    proofLabel: "About Drip AI & Data",
  },
  {
    id: "prospecting-agent",
    icon: iconAgentic,
    number: "02",
    name: "Prospecting Agent",
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
    timeline: "per system · $1,000/mo optional management after handoff · 4 weeks from intake to handoff",
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
    number: "03",
    name: "Decision Intelligence Platform",
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
    timeline: "120 days · 3 phases · hard outputs at each",
    priceNote:
      "Engagements are scoped to your systems and typically start in the mid five figures.",
    offerSheet: true,
    value:
      "A single data hire runs $120k+ plus ramp time, then they onboard, and only then do you begin to build the platform.",
    proof:
      "~1,350 units. Reconciled to the penny across 516 property-months. Weeks of work now done in hours, on under $20/mo of cloud cost.",
    proofHref: "/case-studies/real-estate-data-and-ai-platform",
    proofLabel: "Read the case study",
  },
];

const OfferDetail = ({ offer }: { offer: Offer }) => (
  <div className="mt-6 space-y-6 border-t border-border pt-6">
    <div>
      <p className="eyebrow text-navy-deep">Who it's for</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{offer.who}</p>
    </div>
    <div>
      <p className="eyebrow text-navy-deep">The problem</p>
      {offer.problemList ? (
        <ul className="mt-2 space-y-1.5">
          {offer.problemList.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
              {p}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{offer.problem}</p>
      )}
    </div>
    <div>
      <p className="eyebrow text-cyan">What you get</p>
      <ul className="mt-2 space-y-2.5">
        {offer.gets.map((g) => (
          <li key={g.lead} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-cyan" />
            <span>
              <strong className="font-semibold text-navy-ink">{g.lead}</strong> {g.rest}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-sm bg-navy-ink p-5 text-primary-foreground">
      <p className="eyebrow text-primary-foreground/60">Why it's worth it</p>
      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{offer.value}</p>
      <p className="eyebrow mt-5 text-primary-foreground/60">Proof</p>
      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{offer.proof}</p>
      <Link
        to={offer.proofHref}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan transition-colors hover:text-primary-foreground"
      >
        {offer.proofLabel} <ArrowRight className="size-4" />
      </Link>
    </div>
    {offer.offerSheet ? (
      <OfferSheetDialog offer={offer.name} />
    ) : (
      <Button asChild variant="hero" size="lg" className="w-full">
        <a href="/#consultation">
          Start here <ArrowRight className="!size-5" />
        </a>
      </Button>
    )}
  </div>
);

const OfferCard = ({
  offer,
  active,
  onActivate,
}: {
  offer: Offer;
  active: boolean;
  onActivate: () => void;
}) => (
  <article
    id={offer.id}
    onMouseEnter={onActivate}
    onFocus={onActivate}
    onClick={onActivate}
    tabIndex={0}
    className={`group relative scroll-mt-28 cursor-pointer rounded-sm border bg-card p-7 text-left shadow-card w-full outline-none transition-all duration-500 ease-out lg:min-w-0 ${
      active
        ? "border-cyan shadow-elev lg:flex-[2.2] lg:-translate-y-1"
        : "border-border lg:flex-[1] lg:opacity-80 hover:border-cyan/50"
    }`}
  >
    <div className="flex items-start justify-between gap-4">
      <img src={offer.icon} alt="" loading="lazy" className="h-12 w-12 object-contain" />
      <span className="eyebrow text-muted-foreground">{offer.number}</span>
    </div>
    <p className="eyebrow mt-6 text-cyan">{offer.name}</p>
    <h2 className="display-serif mt-3 text-3xl text-navy-ink text-balance">
      {offer.title}
      <em className="text-cyan not-italic">{offer.payoff}</em>
    </h2>

    <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-border pt-5">
      <span className="display-serif text-4xl text-cyan">{offer.price}</span>
      <span className="text-xs leading-relaxed text-muted-foreground">{offer.timeline}</span>
    </div>

    <div
      className={`grid transition-all duration-500 ease-out ${
        active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">
        <OfferDetail offer={offer} />
      </div>
    </div>

    {!active && (
      <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy-ink">
        Hover to see details <ArrowRight className="size-4" />
      </p>
    )}
  </article>
);

const Offers = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Seo
        title="Productized AI & Data Engagements | Drip AI & Data"
        description="Three fixed-scope engagements with published pricing: an AI enablement workshop, a custom prospecting agent, and a decision intelligence platform."
        path="/offers"
      />
      <Navbar />
      <main>
        <section className="bg-background pb-10 pt-16 md:pb-14 md:pt-20">
          <div className="container-wide">
            <p className="eyebrow text-cyan">Productized engagements</p>
            <h1 className="display-serif mt-4 max-w-3xl text-4xl text-navy-ink text-balance md:text-6xl">
              Three ways to start. <em className="text-cyan not-italic">One that fits.</em>
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Fixed scopes, published pricing, and hard outputs. No six-month discovery phases.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-28">
          <div className="container-wide">
            <Reveal>
              <div className="flex flex-col items-start gap-5 lg:flex-row">
                {offers.map((o, i) => (
                  <OfferCard
                    key={o.id}
                    offer={o}
                    active={active === i}
                    onActivate={() => setActive(i)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
