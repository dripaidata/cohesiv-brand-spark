import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import iconEngagement from "@/assets/icon-engagement.png";

const RealTimeContentPersonalization = () => (
  <CaseStudyLayout
    backHref="/work"
    backLabel="All work"
    eyebrow="Case study · Financial Services"
    title="Real-Time Content Personalization"
    intro="A first-party, real-time personalization framework that turned static marketing pages into responsive journeys — lifting CTA engagement by +650% inside the first two release cycles."
    icon={iconEngagement}
    stats={[
      ["+650%", "CTA engagement"],
      ["3x", "Conversion uplift"],
      ["12wk", "From kickoff to live"],
      ["100%", "First-party data"],
    ]}
    meta={[
      ["Sector", "Financial services"],
      ["Role", "Director, Insights & Personalization"],
      ["Stack", "Adobe Target · CDP · Real-time decisioning"],
      ["Scope", "Strategy, decisioning model, experimentation"],
    ]}
    next={{ href: "/work/global-martech-transformation", label: "Global MarTech Transformation" }}
    seo={{
      path: "/work/real-time-content-personalization",
      title: "Real-Time Content Personalization — Drip AI & Data",
      description: "First-party, real-time personalization framework for financial services — CTA engagement +650% with experimentation built in.",
    }}
  >
    <h2>The situation</h2>
    <p>
      The marketing site was a beautifully designed brochure — and behaved like one. Every visitor saw the
      same headline, the same hero, the same CTAs, regardless of whether they were a new prospect, a
      returning researcher, or an existing customer halfway through an application.
    </p>
    <p>
      The personalization tooling was already paid for. The decisioning model wasn't. Without a clear
      framework for what to personalize, when, and based on which signals, the platform was producing
      noise instead of lift.
    </p>

    <h2>What we built</h2>
    <ul>
      <li>A first-party signal model — drawing on behavioral, contextual, and CRM signals — that defined who a visitor was without relying on third-party cookies.</li>
      <li>A component-level personalization framework: hero, value proposition, social proof, and CTAs all individually decisioned, individually measured.</li>
      <li>An experimentation discipline — every personalized experience shipped with a holdout, so lift was measured, not assumed.</li>
      <li>A content operating model that gave marketers the ability to author, target, and measure variants without engineering involvement.</li>
    </ul>

    <h2>The outcome</h2>
    <p>
      CTA engagement lifted <strong>+650%</strong> on the personalized surfaces, with a 3x compound effect
      on downstream conversion. Just as importantly, the marketing team finally had a feedback loop —
      every variant produced data, every test produced a decision, and the system got smarter every week.
    </p>

    <h2>Why it matters for mid-market</h2>
    <p>
      Personalization is not a tool purchase, it's an operating model. Mid-market organizations win when
      they treat their marketing site as a living product — instrumented, experimented on, and tuned by
      the team closest to the customer. The framework we built here is portable. The principles travel.
    </p>
  </CaseStudyLayout>
);

export default RealTimeContentPersonalization;
