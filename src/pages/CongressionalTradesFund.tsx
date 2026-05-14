import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import iconPipeline from "@/assets/icon-pipeline.png";

const CongressionalTradesFund = () => (
  <CaseStudyLayout
    backHref="/labs"
    backLabel="All labs"
    eyebrow="Drip Labs · February 2026"
    title="Congressional Trades Fund"
    intro="A fully autonomous pipeline that ingests STOCK Act disclosures, enriches them with lobbying and contract intelligence, scores every signal with ML, and executes trades through a brokerage API — with mandatory human approval at two gates."
    icon={iconPipeline}
    stats={[
      ["83K+", "Trades analyzed"],
      ["11", "Autonomous agents"],
      ["222%", "CAGR validated"],
      ["30", "Days to build"],
    ]}
    meta={[
      ["Type", "Internal R&D"],
      ["Stack", "Python · ML · Alpaca · Telegram"],
      ["Timeline", "30 days, build to validation"],
      ["Status", "Live, paper-traded, monitored"],
    ]}
    next={{ href: "/labs/dynasty-war-room", label: "Dynasty War Room" }}
    seo={{
      path: "/labs/congressional-trades-fund",
      title: "Congressional Trades Fund — Drip Labs",
      description: "Autonomous pipeline ingesting STOCK Act disclosures, scoring signals with ML, and executing trades via brokerage API with human approval gates.",
    }}
  >
    <h2>What we built and why it matters</h2>
    <p>
      The STOCK Act requires members of Congress to disclose their stock trades — but the 45-day filing
      delay and sheer volume of disclosures make it nearly impossible for individual investors to act on
      the data. Tools exist to surface the filings, but none close the loop from disclosure to trade
      execution.
    </p>
    <p>
      We built a system that does. The Congressional Trades Fund is a fully automated pipeline that
      ingests disclosures, enriches them with lobbying and government contract intelligence, scores
      every signal with machine learning, and executes trades through a brokerage API — with mandatory
      human approval at two separate gates.
    </p>

    <h2>Public data, private advantage</h2>
    <p>
      Members of Congress trade stocks while shaping the laws that move markets. Their disclosures are
      public, but the delay between execution and disclosure means most people never see them in time
      to act.
    </p>
    <p>
      Hundreds of filings land every month. Manually tracking them, cross-referencing with lobbying
      records, evaluating committee conflicts, and making timely decisions is impractical for any
      individual investor. Existing tools show you the filings — they don't tell you which ones matter,
      and they certainly don't trade on them.
    </p>
    <p>
      <strong>The opportunity:</strong> Build a system that closes the entire loop — from the moment a
      disclosure is filed to a trade placed in a brokerage account — with intelligent filtering at
      every stage.
    </p>

    <h2>An 11-agent automated pipeline</h2>
    <p>
      The system is built as a pipeline of eleven specialized agents, each responsible for a single
      stage of the workflow. This isn't a monolith — each agent has a defined input, a defined output,
      and can be tested, replaced, or improved independently.
    </p>
    <p><strong>Agent 1 — Data Acquisition.</strong> Pulls congressional trade disclosures from the Quiver API, fetches price data from Yahoo Finance, and ingests lobbying records and government contract data. Rate-limit aware with scoped fetching.</p>
    <p><strong>Agent 2 — Data Processing.</strong> Validates and cleans incoming trades. Calculates disclosure lag, enriches records with price data, and flags data quality issues. The dataset achieved an 86.6% quality score across 83,000+ records.</p>
    <p><strong>Agent 3 — Performance Analytics.</strong> Multi-dimensional analysis across party, chamber, sector, trade size, and individual member. Produces performance rankings with composite scoring.</p>
    <p><strong>Agent 4 — Model Development.</strong> Walk-forward backtesting engine evaluating 18 scoring models across expanding time windows. Quick daily updates, full weekly comparisons on Sundays.</p>
    <p><strong>Agent 5 — Signal Generation.</strong> The decision engine. Applies the trained model to recent disclosures, layers in lobbying and contract intelligence, checks committee conflicts, and produces scored buy/sell signals. Nine trigger-based exit conditions replace arbitrary holding periods.</p>
    <p><strong>Agents 6 &amp; 7 — Approval &amp; Risk Management.</strong> Trade proposals sent to Telegram with inline keyboard buttons — no trade moves forward without explicit human approval. Eight risk checks per signal: position limits, sector concentration, cash reserves, correlation analysis. A second human approval is required before execution.</p>
    <p><strong>Agent 8 — Trade Execution.</strong> Submits approved orders to Alpaca's brokerage API. Includes stale order reconciliation on startup and deduplication to prevent double-execution.</p>
    <p><strong>Agent 9 — Reconciliation.</strong> Compares internal ledger against broker-reported positions and cash. Across all validation runs: zero discrepancies.</p>
    <p><strong>Agent 10 — Reporting.</strong> Generates daily, weekly, and monthly performance reports delivered via Telegram.</p>
    <p><strong>Orchestrator.</strong> Coordinates the entire pipeline via APScheduler. Seven automated jobs run throughout the day. Every job sends a Telegram summary on completion.</p>

    <h2>Layered signals, compounding edge</h2>
    <p>The system didn't start with four data sources. It evolved through three iterations, each adding context that sharpened signal quality.</p>
    <p><strong>V1 — Congressional Trades.</strong> Ingested 83,000+ trade disclosures from 2012 to present. A fixed-rule strategy filtering by member quality and disclosure speed generated 232% total return over 2020–2024 — roughly 2.4x the S&amp;P 500.</p>
    <p><strong>V2 — Lobbying &amp; Government Contracts.</strong> Expanded to 25,400+ lobbying records across 1,220 tickers and 48,700 government contracts across 2,200 tickers. Lobbying spend is quartile-bucketed with graduated score boosts.</p>
    <p><strong>V3 — Committee Conflict Detection.</strong> Maps 532 members across 230 committees to 79 policy issues. When a member of the Armed Services Committee buys defense contractor stock, the system detects the conflict and applies a 2.50x multiplier.</p>
    <p><strong>Key insight:</strong> Layered filtering produces 4–9x better returns than any single filter alone. Each data source adds modest individual value. Combined, they compound.</p>

    <h2>18 models. One deliberate choice.</h2>
    <p>
      Scoring congressional trades is not a standard classification problem. The signal is noisy, the
      labels are ambiguous, and the data has strong regime shifts between market environments.
    </p>
    <p>
      The system evaluates six model architectures: WeightedScorers, MLScorers (gradient-boosted trees
      on 21 features), HybridScorer, EnsembleScorers, GatedScorers, and BlendScorers. Walk-forward
      validation uses expanding windows — train on all data up to a cutoff, score the next period
      against actual returns. No look-ahead bias.
    </p>
    <p>
      The most aggressive model posted a 626% CAGR in its best splits. We didn't pick it. It had a
      losing split in one validation window. The winning model is a BlendScorer at 60/40 — 222% CAGR
      with zero losing splits across all validation windows. We gave up upside ceiling for downside
      consistency, because in production what kills you isn't missing the best month — it's the
      drawdown that shakes you out of the strategy entirely.
    </p>

    <h2>Results &amp; validation</h2>
    <p>Validated through eleven end-to-end runs, each exercising all thirteen pipeline phases including full portfolio resets.</p>
    <h3>Production model — walk-forward (2024–2026)</h3>
    <ul>
      <li>CAGR: 222%</li>
      <li>Profit factor: 3.11</li>
      <li>Win rate: 55.1%</li>
      <li>Losing splits: 0 / 4</li>
      <li>Stability score: 0.697</li>
    </ul>
    <h3>Earlier fixed-rule backtest (2020–2024)</h3>
    <ul>
      <li>Total return: 232.8%</li>
      <li>vs. S&amp;P 500: 95.3%</li>
      <li>Alpha: +137.5 pp</li>
      <li>Sharpe ratio: 0.73</li>
      <li>Win rate: 66.3%</li>
    </ul>

    <h2>How this was built in 30 days</h2>
    <p>
      Everyone has access to AI coding tools now. The tools are not the differentiator. Knowing what to
      build — and how to direct the tools toward a production-grade result — is.
    </p>
    <p>
      This system was built across 21 development sessions spanning 30 days, using Claude Code as the
      AI-assisted development tool. That timeline would have been unthinkable for a system this complex
      even two years ago. But the speed didn't come from the tool alone — it came from years of
      experience in backend data infrastructure, pipeline architecture, and ML systems.
    </p>
    <p>
      The eleven-agent pipeline design, the two-gate Telegram approval flow, the decision to use
      trigger-based exits instead of fixed holding periods, the choice to build reconciliation before
      scaling — none of that came from an AI suggestion. An AI tool can write a SQLAlchemy model or
      wire up an API integration in minutes. It cannot tell you that your pipeline needs a
      reconciliation agent, or that your ML model selection should penalize volatility.
    </p>
    <p>
      <strong>The pattern is reusable.</strong> Swap out congressional trades for any other data source —
      earnings transcripts, patent filings, supply chain signals — and the same pipeline architecture
      applies. Eleven agents. Human approval gates. ML scoring with automated retraining.
      Reconciliation. Reporting.
    </p>

    <h2>Your complex data workflow, automated</h2>
    <p>
      If your organization has a complex data workflow that needs to be automated — collecting from
      multiple sources, applying intelligence to filter and score, executing decisions with audit
      trails — that's exactly what we do.
    </p>
    <p>
      <em>
        Built by Drip AI &amp; Data LLC. The Congressional Trades Fund is a research and paper-trading
        system. Past backtested performance does not guarantee future results. This is not investment
        advice.
      </em>
    </p>
  </CaseStudyLayout>
);

export default CongressionalTradesFund;
