import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
import Reveal from "@/components/site/Reveal";
import ConsultationForm from "@/components/site/ConsultationForm";
import ScheduleCallButton from "@/components/site/ScheduleCallButton";
import { Button } from "@/components/ui/button";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconAgentic from "@/assets/icon-agentic.png";
import iconData from "@/assets/icon-data.png";
import iconEngagement from "@/assets/icon-engagement.png";
import { ROUTE_SEO } from "@/seo/routes";

interface Offer {
  id: string;
  icon: string;
  number: string;
  tag: string;
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
  value: string;
  proof: string;
  proofHref: string;
  proofLabel: string;
  ctaLabel: string;
}

const offers: Offer[] = [
  {
    id: "workshop",
    icon: iconAi,
    number: "01",
    tag: "AI IMPLEMENTATION",
    name: "AI Enablement Workshop",
    title: "Hands-on AI training for teams ready to use AI in their daily work",
    payoff: "",
    who: "Mid-market leadership and revenue teams (5 to 20 people) who know they should be using AI but have not gotten past ChatGPT experiments.",
    problem:
      "Most AI training is generic. Teams leave inspired but do not change how they work, because nothing was built around their workflows or data.",
    gets: [
      { lead: "Pre-session audit", rest: "identifying the 3 to 5 highest-leverage tasks on your team" },
      { lead: "Hands-on session in Claude", rest: "(half or full day), built entirely around your real work, not demos" },
      { lead: "Take-home playbook:", rest: "the prompts, workflows, and guardrails your team built" },
      { lead: "30-day follow-up session", rest: "to reinforce adoption and answer what came up in practice" },
    ],
    price: "$4,000",
    timeline: "half-day workshop · $7,500 full day · 2 weeks from signing to session",
    value:
      "Training led by the person who shipped production AI systems at Fidelity, Manulife, and Rocket Software.",
    proof: "Clients run their own AI systems day-to-day after handoff, with no analyst in the loop.",
    proofHref: "/about",
    proofLabel: "About Drip AI & Data",
    ctaLabel: "Start here",
  },
  {
    id: "prospecting-agent",
    icon: iconAgentic,
    number: "02",
    tag: "AI IMPLEMENTATION · PRODUCT",
    name: "Prospecting Agent",
    title: "A prospecting agent that prepares accounts and outreach before you start selling",
    payoff: "",
    who: "B2B teams where founders, sellers, partners, and consultants each handle their own research, account and contact logging, and outreach.",
    problem:
      "Research, LinkedIn verification, and drafting are mechanical tasks that take time away from the conversations that move deals forward.",
    gets: [
      { lead: "A custom AI prospecting agent", rest: "built around your ICP, your voice, and your offer" },
      { lead: "Researches accounts,", rest: "verifies LinkedIn profiles, drafts outreach in your voice, logs every touch" },
      { lead: "One intake form in,", rest: "a working system out, handed back as a tool you run yourselves" },
      { lead: "Team training included:", rest: "2 hands-on Claude sessions ($2,500 value), so handoff doubles as AI enablement" },
      { lead: "Yours to run:", rest: "no monthly fee, no lock-in after handoff" },
    ],
    price: "$7,500",
    timeline: "per system · 4 weeks from intake to handoff",
    value:
      "Anyone running their own prospecting loses 4 to 5 hours a week to it. This gives that time back.",
    proof:
      "In production with a creative agency: a full morning reclaimed weekly, every prospect verified on their live LinkedIn profile before contact, every touch logged.",
    proofHref: "/work/prospecting-agent",
    proofLabel: "Read the case study",
    ctaLabel: "Start here",
  },
  {
    id: "platform",
    icon: iconData,
    number: "03",
    tag: "DATA & ANALYTICS",
    name: "Decision Intelligence Platform",
    title: "A decision intelligence platform with governed data, dashboards, and AI analysts",
    payoff: "",
    who: "Mid-market companies ($10M to $250M) running finance, operations, or an investment function on manual exports and fragile workbooks.",
    problem: "",
    problemList: [
      "Month-end takes days of exports and copy-paste.",
      "The same metric shows three different numbers in three different spreadsheets.",
      "Only one person knows how the workbook works.",
      "A simple board question takes a week to answer.",
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
    value:
      "A single data hire costs more than $120,000 per year plus ramp time, and the platform still needs to be built after they start.",
    proof:
      "~1,350 units. Reconciled to the penny across 516 property-months. Weeks of work now done in hours, on under $20/mo of cloud cost.",
    proofHref: "/case-studies/real-estate-data-and-ai-platform",
    proofLabel: "Read the case study",
    ctaLabel: "Schedule a call",
  },
  {
    id: "retainer",
    icon: iconEngagement,
    number: "04",
    tag: "FRACTIONAL CTO",
    name: "AI & Product Development Retainer",
    title: "Monthly AI and product development capacity from a senior builder",
    payoff: "",
    who: "Founder-led and PE-backed mid-market teams that have more AI and product ideas than senior capacity to build them. Usually this is a second engagement, after the workshop, the agent, or the platform is live and the list of next steps keeps growing.",
    problem:
      "AI work does not hold still long enough for a fixed scope. Priorities move monthly, projects stall between SOWs, and a senior hire costs more than $200,000 fully loaded and takes six months to ramp.",
    gets: [
      { lead: "Reserved capacity:", rest: "40 hours a month of senior strategy and hands-on build, priorities set with you each month" },
      { lead: "Strategy that ends in decisions:", rest: "use case selection, sequencing, build versus buy, and vendor evaluation without 80-page decks" },
      { lead: "Product development:", rest: "agents, pipelines, internal tools, and client-facing features shipped to production" },
      { lead: "Direct access:", rest: "a shared channel, a weekly working session, no account manager and no ticket queue" },
      { lead: "Enablement throughout:", rest: "your team runs what we build, documented as we go" },
    ],
    timeline: "40 hours included · 3-month minimum, then month to month",
    value:
      "A senior AI hire costs more than $200,000 fully loaded and takes six months to ramp. The retainer starts in two weeks.",
    proof:
      "The Prospecting Agent, Social Coach, and real estate data and AI platform were all built on this capacity, solo, in production, with real money.",
    proofHref: "/work",
    proofLabel: "See the work",
    ctaLabel: "Schedule a call",
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
    {offer.id === "platform" ? (
      <ScheduleCallButton label={offer.ctaLabel} />
    ) : (
      <Button asChild variant="hero" size="lg" className="w-full">
        <a href="#consultation">
          {offer.ctaLabel} <ArrowRight className="!size-5" />
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
    <p className="eyebrow mt-6 text-cyan">{offer.tag}</p>
    <p className="mt-2 text-base font-medium text-navy-ink">{offer.name}</p>
    <h2 className="display-serif mt-3 text-3xl text-navy-ink text-balance">
      {offer.title}
      {offer.payoff && <em className="text-cyan not-italic">{offer.payoff}</em>}
    </h2>

    <div className="mt-6 border-t border-border pt-5">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {offer.price ? (
          <>
            <span className="display-serif text-4xl text-cyan">{offer.price}</span>
            <span className="text-xs leading-relaxed text-muted-foreground">{offer.timeline}</span>
          </>
        ) : (
          <span className="display-serif text-2xl text-cyan">{offer.timeline}</span>
        )}
      </div>
      {offer.priceNote && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.priceNote}</p>
      )}
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
  const hashId = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
  const initial = Math.max(0, offers.findIndex((o) => o.id === hashId));
  const [active, setActive] = useState(initial);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Seo {...ROUTE_SEO["/offers"]} />
      <Navbar />
      <main>
        <section className="bg-background pb-10 pt-16 md:pb-14 md:pt-20">
          <div className="container-wide">
            <p className="eyebrow text-cyan">Productized engagements</p>
            <h1 className="display-serif mt-4 max-w-3xl text-4xl text-navy-ink text-balance md:text-6xl">
              Four engagements with clear scope and published pricing
            </h1>
            <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
              Each engagement has a fixed scope, published pricing, and a clear deliverable. The retainer adds ongoing strategy and build capacity when the work does not stop.
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
