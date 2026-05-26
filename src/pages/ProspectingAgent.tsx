import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import iconPipeline from "@/assets/icon-pipeline.png";

const ProspectingAgent = () => (
  <CaseStudyLayout
    backHref="/work"
    backLabel="All work"
    eyebrow="Case study · Custom AI Product"
    title="The Prospecting Agent"
    intro="A tailored AI prospecting agent that researches companies, verifies LinkedIn profiles, drafts message variants in the client's voice, and logs every outbound touch. Custom built around each client's ICP."
    icon={iconPipeline}
    stats={[
      ["4 to 6 hrs", "Weekly research before"],
      ["5 min", "Same work, after"],
      ["1", "Agent per client"],
      ["100%", "Tuned to their ICP"],
    ]}
    meta={[
      ["Sector", "Custom AI product"],
      ["Role", "Design, build, deploy"],
      ["Stack", "LLM agents · LinkedIn verification · Excel"],
      ["Scope", "Intake → system generation → run"],
    ]}
    seo={{
      path: "/work/prospecting-agent",
      title: "The Prospecting Agent · Drip AI & Data",
      description: "Custom AI prospecting agents that research companies, verify LinkedIn profiles, and draft outreach in your voice. Built around each client's ICP.",
    }}
  >
    <h2>What it is</h2>
    <p>
      Each Prospecting Agent is custom built for one client. The client fills a structured intake form,
      and we generate a complete prospecting system tuned to their ICP, voice, message strategy, and
      disqualifiers, then hand it back as a working tool they run themselves.
    </p>

    <h2>How it works</h2>
    <ul>
      <li><strong>Client intake.</strong> A four section intake form covering ICP, offer, voice, and context.</li>
      <li><strong>System generation.</strong> We generate a full prospecting workspace pre loaded with message variants, research rules, and verification logic.</li>
      <li><strong>Run prospecting.</strong> The client runs two commands. The system handles research, qualification, message drafting, and logging.</li>
    </ul>

    <h2>What clients receive</h2>
    <ul>
      <li><strong>Prospecting instructions.</strong> Custom ICP, message variants, and hard rules.</li>
      <li><strong>Pipeline state tracker.</strong> Live state of companies, counts, and priorities.</li>
      <li><strong>Session log.</strong> Auto written history of every prospecting session.</li>
      <li><strong>Prospect research skill.</strong> Governs how "find prospects" is run.</li>
      <li><strong>LinkedIn profile verifier.</strong> Profile checks before any outreach.</li>
      <li><strong>Session log writer.</strong> Logs activity at the end of every command.</li>
      <li><strong>Excel tracker.</strong> Pre loaded with generated message variants.</li>
    </ul>

    <h2>Case study: a creative agency</h2>
    <h3>The challenge</h3>
    <p>
      A creative agency was spending <strong>4 to 6 hours every week</strong> on account research and
      cold outreach. They were manually digging through company sites, hunting down the right person on
      LinkedIn, and drafting one off messages. The work was real but mechanical, and it crowded out the
      part of the job that actually moved deals forward: engaging with accounts and people already
      showing interest.
    </p>

    <h3>What we built</h3>
    <p>
      We built them a tailored Prospecting Agent. ICP tuned to their target buyers, message variants
      written in their voice, LinkedIn verification before any send, and full session logging. Two
      commands replaced the entire weekly workflow.
    </p>

    <h3>The outcome</h3>
    <p>
      That 4 to 6 hour weekly grind now takes about <strong>5 minutes</strong>. The team gets the same
      researched, qualified, ready to send pipeline without losing a morning to it. The hours they got
      back go straight to the work that compounds: real conversations with the people and accounts
      already engaging with them.
    </p>

    <h2>Want one built for your business?</h2>
    <p>
      Each Prospecting Agent is custom built around your ICP, voice, and offer. If outbound research is
      eating hours your team should be spending on real conversations, that is the gap this closes.
    </p>
  </CaseStudyLayout>
);

export default ProspectingAgent;
