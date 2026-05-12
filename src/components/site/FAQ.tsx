import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from hiring a Chief Data Officer or AI lead?",
    a: "A great CDO is the right answer eventually. But hiring one takes 6–9 months, costs $300K+ loaded, and you still need 12 months for them to ramp. We give you that caliber of leadership starting Monday — and help you hire the right permanent leader when the time comes.",
  },
  {
    q: "What size company do you typically work with?",
    a: "Mid-market — roughly $20M to $500M in revenue. Big enough to have real data complexity and AI ambition. Small enough that Big 4 engagements would drain a year of budget for one deliverable.",
  },
  {
    q: "What industries do you focus on?",
    a: "We have the deepest pattern recognition in financial services, healthcare, and cybersecurity — sectors where data sensitivity, regulatory pressure, and decision velocity all collide. We've also shipped in MarTech, insurance, B2B SaaS, and real estate investment — and we're a particularly strong fit for industries still operating on legacy tools and spreadsheets.",
  },
  {
    q: "How do you price engagements?",
    a: "Two models depending on what you need: project-based scoping for defined deliverables, or retainers that layer fractional leadership on top of the IC work. Retainers carry a 3-month minimum commitment.",
  },
  {
    q: "Will you work with our existing team and tools?",
    a: "Almost always. We're operators, not platform sellers. We optimize what you have before recommending new spend, and we embed alongside your team — not in place of it.",
  },
  {
    q: "What's the engagement timeline?",
    a: "Diagnostics ship in 2–4 weeks. Strategy roadmaps in 4–6 weeks. Build engagements run in two-week sprints with shipped value at the end of each. We're allergic to multi-quarter discovery phases.",
  },
];

const FAQ = () => (
  <section className="bg-secondary py-28 md:py-40">
    <div className="container-wide grid gap-16 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="eyebrow text-cyan">Common questions</p>
        <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
          The things <em className="text-cyan not-italic">everyone asks</em> on the first call.
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
          Don't see your question? Ask it in the consultation form — we'll answer honestly, even if the honest answer is "we're not the right fit."
        </p>
      </div>
      <div className="md:col-span-7">
        <Accordion type="single" collapsible className="border-t border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left text-lg font-medium text-navy-ink hover:text-cyan hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
