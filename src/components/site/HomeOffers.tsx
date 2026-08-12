import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconAgentic from "@/assets/icon-agentic.png";
import iconData from "@/assets/icon-data.png";
import iconEngagement from "@/assets/icon-engagement.png";

const offers = [
  {
    id: "workshop",
    icon: iconAi,
    number: "01",
    name: "AI Enablement Workshop",
    price: "$4,000",
    detail: "$7,500 full day",
    summary: "Hands-on AI training built around your team's real work, with a playbook they can use immediately.",
  },
  {
    id: "prospecting-agent",
    icon: iconAgentic,
    number: "02",
    name: "Prospecting Agent",
    price: "$7,500",
    detail: "one-time · 4 weeks to handoff",
    summary: "A custom AI agent that researches accounts, verifies contacts, and drafts outreach in your voice.",
  },
  {
    id: "platform",
    icon: iconData,
    number: "03",
    name: "Decision Intelligence Platform",
    price: "Mid five figures",
    detail: "typical starting range · 120 days",
    summary: "Data foundation, metrics layer, live dashboards, and LLM analysts that turn weeks of work into hours.",
  },
  {
    id: "retainer",
    icon: iconEngagement,
    number: "04",
    name: "AI & Product Development Retainer",
    price: "$10,000/mo",
    detail: "40 hours included · 3-month minimum",
    summary: "Reserved senior capacity for strategy, product development, and hands-on build, without the cost and time of a full-time hire.",
  },
];

const HomeOffers = () => (
  <section className="bg-secondary py-28 md:py-40">
    <div className="container-wide">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-cyan">Productized engagements</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            Four engagements with clear scope and published pricing
          </h2>
        </div>
        <Link
          to="/offers"
          className="group inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan"
        >
          View all offers
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {offers.map((o, i) => (
          <Reveal key={o.id} delay={i * 120}>
            <Link
              to={`/offers#${o.id}`}
              className="group flex h-full flex-col rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev"
            >
              <div className="flex items-start justify-between gap-4">
                <img src={o.icon} alt="" loading="lazy" className="h-16 w-16 object-contain" />
                <span className="eyebrow text-muted-foreground">{o.number}</span>
              </div>
              <p className="eyebrow mt-8 text-cyan">{o.name}</p>
              <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="display-serif text-3xl text-navy-ink">{o.price}</span>
                <span className="text-xs text-muted-foreground">{o.detail}</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{o.summary}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-navy-deep group-hover:text-cyan">
                See details <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default HomeOffers;
