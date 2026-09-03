import PillarPage from "@/components/site/PillarPage";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconAgentic from "@/assets/icon-agentic.png";
import iconPipeline from "@/assets/icon-pipeline.png";
import iconData from "@/assets/icon-data.png";

const AIImplementation = () => (
  <PillarPage
    eyebrow="AI Implementation"
    title={
      <>
        The hard part was never the model. <em className="text-cyan not-italic">It's the criteria nobody wrote down.</em>
      </>
    }
    intro="Most AI projects stall in the same place. Not model selection, not infrastructure. They stall because the judgment the system needs to replicate lives in someone's head and has never been written down. Getting that on paper is the work. Everything after it is engineering."
    seoTitle="AI Implementation for Mid-Market Companies | Drip AI & Data"
    seoDescription="Use case selection with real ROI math, agents that research and draft, LLM analysts on your own data, and deployment into the tools your team already uses."
    path="/ai-implementation"
    problemHeading={
      <>
        Pilots are easy. <em className="text-cyan not-italic">Production is the test.</em>
      </>
    }
    problemBody={[
      "A demo that works once is not a system. The gap between the two is made of edge cases, review points, and the unwritten rules an experienced person applies without thinking about it.",
      "We start by making that judgment explicit, then build around it. Evaluation so you can see quality over time, human review where the cost of being wrong is real, and deployment into the tools people already open every morning.",
    ]}
    buildHeading={
      <>
        AI that gets used, <em className="text-cyan not-italic">not just demoed.</em>
      </>
    }
    buildItems={[
      "Use case selection with ROI math and honest build-versus-buy tradeoffs",
      "Agents that research, qualify, draft, and route",
      "LLM analysts sitting on your own data",
      "Evaluation harnesses so you know when quality drifts",
      "Human review loops at the points that actually matter",
      "Deployment into the tools your team already opens every morning",
    ]}
    deliveryHeading={
      <>
        AI Enablement Workshop, Prospecting Agent, <em className="text-cyan not-italic">or on retainer.</em>
      </>
    }
    deliveryBody="Start with a workshop to find the use cases worth funding, ship a productized agent, or keep senior capacity reserved on retainer for a longer program of work."
    proofHeading={
      <>
        Systems in production, <em className="text-cyan not-italic">with numbers attached.</em>
      </>
    }
    caseStudies={[
      {
        href: "/work/prospecting-agent",
        project: "The Prospecting Agent",
        stat: "5 min",
        label: "Replaces 4 to 6 weekly hours",
        summary:
          "A creative agency turned account research and cold outreach into a five minute review, and put the reclaimed time back into conversations with people already engaging with them.",
        icon: iconPipeline,
      },
      {
        href: "/work/real-estate-data-and-ai-platform",
        project: "Real Estate Data & AI Platform",
        stat: "Weeks → hours",
        label: "LLM analysts on governed data",
        summary:
          "LLM analysts for financial reporting, leasing and vacancy, performance vs pro forma, and distributions, grounded in governed views rather than guesses.",
        icon: iconData,
      },
    ]}
    offersHeading="Where this work usually starts"
    offers={[
      {
        id: "workshop",
        number: "01",
        tag: "AI IMPLEMENTATION",
        name: "AI Enablement Workshop",
        price: "$4,000",
        detail: "$7,500 full day",
        summary: "Hands-on AI training built around your team's real work, with a playbook they can use immediately.",
        icon: iconAi,
      },
      {
        id: "prospecting-agent",
        number: "02",
        tag: "AI IMPLEMENTATION · PRODUCT",
        name: "Prospecting Agent",
        price: "$7,500",
        detail: "one-time · 4 weeks to handoff",
        summary: "A custom AI agent that researches accounts, verifies contacts, and drafts outreach in your voice.",
        icon: iconAgentic,
      },
    ]}
  />
);

export default AIImplementation;
