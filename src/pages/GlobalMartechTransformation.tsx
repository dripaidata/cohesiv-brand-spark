import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import iconMartech from "@/assets/icon-martech.png";

const GlobalMartechTransformation = () => (
  <CaseStudyLayout
    backHref="/work"
    backLabel="All work"
    eyebrow="Case study · Global Insurance"
    title="Global MarTech Transformation"
    intro="A nine-market rebuild of the analytics, tagging, and personalization stack at a Fortune 500 insurer — moving the digital organization from siloed reporting to a single, governed engagement platform."
    icon={iconMartech}
    stats={[
      ["+293%", "Quote form conversion"],
      ["9", "Markets unified"],
      ["1", "Source of truth"],
      ["18mo", "End to end"],
    ]}
    meta={[
      ["Sector", "Global insurance / wealth"],
      ["Role", "Global Director, MarTech & Analytics"],
      ["Stack", "Adobe Experience Cloud · Tealium · GCP"],
      ["Scope", "Strategy, architecture, vendor, delivery"],
    ]}
    next={{ href: "/work/real-time-content-personalization", label: "Real-Time Content Personalization" }}
  >
    <h2>The situation</h2>
    <p>
      A global insurance and wealth business was running nine country sites on inconsistent tagging, three
      different analytics tools, and a personalization platform that nobody trusted. Marketing leadership
      could not answer basic questions — how many quote starts did we have last week, what is our true
      cost per acquisition, which campaigns actually moved the needle — without a two-week analyst project.
    </p>
    <p>
      The quote funnel was the most expensive surface in the business and also the least understood.
      Drop-off was treated as a UX problem, but the data needed to test that hypothesis didn't exist
      in a usable form.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>A single global data layer specification, deployed across all nine markets via a centrally governed tag management implementation.</li>
      <li>A unified analytics architecture consolidating three legacy tools into one governed reporting layer with shared KPIs and definitions.</li>
      <li>A re-architected personalization platform — moving from page-level rule chaos to a component-level decisioning model with experimentation built in.</li>
      <li>A measurement framework that tied every campaign, audience, and experience to revenue, not clicks.</li>
    </ul>

    <h2>The outcome</h2>
    <p>
      Within the first two release waves, quote form conversion lifted <strong>+293%</strong> on the
      highest-traffic market, with double-digit gains replicated across the other eight. More importantly,
      the marketing organization could answer its own questions for the first time — without filing a
      ticket, and without waiting for an analyst.
    </p>
    <p>
      The platform is still in production today and remains the foundation the rest of the digital
      organization is built on.
    </p>

    <h2>Why it matters for mid-market</h2>
    <p>
      Most mid-market companies don't need a Fortune 500 budget to get a Fortune 500 outcome. They need
      the same architectural discipline applied at a sensible scale: one source of truth, governed tagging,
      component-level personalization, and a measurement model that ties activity to revenue. That's the
      playbook we bring to every engagement.
    </p>
  </CaseStudyLayout>
);

export default GlobalMartechTransformation;
