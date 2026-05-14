import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import dynastyWarRoomLogo from "@/assets/dynasty-war-room-logo.png";

const DynastyWarRoom = () => (
  <CaseStudyLayout
    backHref="/labs"
    backLabel="All labs"
    eyebrow="Drip Labs · May 2026"
    title="Dynasty War Room"
    intro="A fantasy football platform built to model the NFL — manage a full salary cap, contract types, and more as you look to build a true dynasty."
    icon={dynastyWarRoomLogo}
    stats={[
      ["Multi-league", "production system"],
      ["8", "phase state machine"],
      ["91", "salary-cap features"],
      ["12yr", "league origin"],
    ]}
    meta={[
      ["Type", "Internal R&D"],
      ["Stack", "React · Vite · Node · PostgreSQL · Socket.io"],
      ["Status", "Live, multi-league"],
      ["Started", "January 2026"],
    ]}
    next={{ href: "/work/congressional-trades-fund", label: "Congressional Trades Fund" }}
    seo={{
      path: "/labs/dynasty-cap-manager",
      title: "Dynasty Cap Manager — Drip Labs",
      description: "Multi-league fantasy football platform modeling NFL salary caps, contract types, and an 8-phase state machine across isolated league databases.",
    }}
  >
    <h2>The Quality Audit — March 2026</h2>
    <p>
      Four months into the build, feature work stopped and a full audit began. 28 distinct issues
      surfaced across security, data integrity, and code quality.
    </p>
    <p>
      Eight were critical: hardcoded API keys (a leftover from earlier prototypes), socket column
      mismatches that could silently corrupt state, scoring rules that weren't actually configurable
      per league despite the new multi-league architecture. Twelve were warnings: season year, team
      count, and roster size hardcoded in places where they should have been pulled from config.
      Eight were cleanup items: dead code, unused imports, orphaned files from earlier pivots.
    </p>
    <p>
      In two focused sessions, 23 of 28 issues were fixed. The remaining 5 went into a migration
      framework for schema versioning, so the database can evolve without breaking existing leagues.
      The audit also added dynamic configuration for previously-hardcoded values and per-league
      scoring rule customization that the original v1 promised but never fully delivered.
    </p>
    <p>
      The codebase is now meaningfully more maintainable. More importantly, the audit established a
      habit: stop, look honestly, pay down debt before it compounds.
    </p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>Schema migration framework for safe long-term evolution</li>
      <li>Dynamic configuration replacing hardcoded league assumptions</li>
      <li>Audit cadence baked into the development rhythm</li>
    </ul>
    <p><em>What's next:</em> The trading system — multi-team trades, conditional picks, and salary retention.</p>

    <h2>Build Log: Feb–Mar 2026 — Multi-League Architecture</h2>
    <p>
      Within a week of v1 going live, two other commissioners asked if their leagues could use it. The
      original schema assumed one league — salary caps, roster sizes, and scoring rules were all baked
      into calculation functions. Supporting a second league meant rebuilding the foundation.
    </p>
    <p>
      The new architecture splits the database three ways: shared NFL data (32 teams, 2,550+ players —
      read-only), shared auth (users, sessions, permissions), and per-league dynasty databases (rosters,
      contracts, trades — completely isolated). Every league is its own world. A bug in one league's
      cap math can't corrupt another league's data.
    </p>
    <p>
      A 3-step league creation wizard handles provisioning. Name and basic config → roster + scoring
      rules → review and commit. The system spins up a fresh per-league database, seeds it from
      templates, and registers the commissioner in under five seconds.
    </p>
    <p>
      A league state machine — 8 distinct phases from "setup" through "regular season" to "offseason" —
      controls what features are visible at any given time. You can't accidentally cut a player during
      the live draft. You can't open waivers before week 1. The state machine is the difference between
      "configurable" and "safe."
    </p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>Three-database split: shared NFL data + shared auth + isolated per-league</li>
      <li>Wizard-based provisioning under five seconds</li>
      <li>8-phase state machine controlling feature availability</li>
    </ul>
    <p><em>What's next:</em> Auditing the codebase honestly — 28 issues found, fixes prioritized.</p>

    <h2>Build Log: Feb 2026 — Real-Time Drafts &amp; Auctions</h2>
    <p>
      The live draft system uses Socket.io for real-time, multi-user interaction. When a commissioner
      opens the draft lobby, all connected team owners see updates instantly — no refreshing.
    </p>
    <p>
      Draft features include a configurable pick timer with auto-skip, smart auto-pick (fills critical
      roster needs first, then best available), and full commissioner controls: pause, resume, skip,
      reassign, and edit picks. Draft order is determined by season standings, playoff/consolation
      brackets, and a lottery system.
    </p>
    <p>
      The Free Agent Auction system uses the same Socket.io infrastructure with nomination/bidding
      mechanics, RFA matching rights, and max bid calculations based on remaining cap space.
    </p>
    <p>
      The startup draft system supports two formats: snake drafts with a linear salary curve ensuring
      identical total salary commitment regardless of draft position, and full auctions where every
      dollar matters. Both include real-time available player panels with search, sort, and position
      filters.
    </p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>Socket.io for atomic state broadcasts across 12+ clients</li>
      <li>Server-side validation for every action (no optimistic-only updates)</li>
      <li>Shared infrastructure between draft formats for maintainability</li>
    </ul>
    <p><em>What's next:</em> Multi-league architecture — turning a single-league app into a true SaaS platform.</p>

    <h2>Build Log: Feb 2026 — The Salary Cap Engine</h2>
    <p>
      The most complex phase of the build: 91 distinct features across salary cap management, contract
      extensions, and the offseason cuts/extensions workflow.
    </p>
    <p>
      The engine calculates extension costs as a blend of a player's current contract tier and their
      market fair value — rookies weight 75% fair value / 25% old value, veterans split 50/50. Four
      salary tiers ($35+, $25–34, $11–24, $1–10) drive different annual escalation rates.
    </p>
    <p>
      Dead money is modeled accurately: guaranteed cuts incur full current year plus two-thirds of
      future years. Non-guaranteed cuts prorate by games played. Eight contract actions are available
      per player, with roster-wide limits enforced (max 5 non-guaranteed contracts, max 1 RFA
      designation, max 1 early extension per team per offseason).
    </p>
    <p>Every decision is saved as a timestamped snapshot, preserving a full audit trail.</p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>Fair value blending with rookie/veteran weighting</li>
      <li>Tier-based salary escalation mirroring NFL economics</li>
      <li>Snapshot-based audit trail for every contract action</li>
    </ul>
    <p><em>What's next:</em> Real-time drafts — 12 people connected simultaneously via Socket.io.</p>

    <h2>Build Log: Jan–Feb 2026 — The NFL Data Pipeline</h2>
    <p>
      Connecting to real NFL data was the first major challenge. We started with the Sportradar API
      but hit trial key limitations before we could test a full season pull. After evaluating
      alternatives, we migrated to RapidAPI NFL Data (PRO plan, 5,000 requests/day).
    </p>
    <p>
      A Python data pipeline was built to pull, transform, and store: 32 NFL teams with logos and
      branding, 2,550+ players with biographical data and headshots, 17,540 game stat records across
      the 2025 season, and half-PPR fantasy scoring calculated and stored per game.
    </p>
    <p>
      The frontend now features a full player browser with game logs spanning 2021–2025, career stats,
      defensive rank indicators, and current-week opponent matchup data.
    </p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>RapidAPI over Sportradar for rate limit headroom</li>
      <li>Store calculated fantasy scores per game (not compute on the fly)</li>
      <li>Five seasons of historical data for meaningful career context</li>
    </ul>
    <p><em>What's next:</em> The salary cap engine — 91 features to replace the league's most painful Google Sheet.</p>

    <h2>Build Log: Jan 2026 — The Origin Story</h2>
    <p>
      BroNasty League has been running for 12 years across four disconnected platforms: Sleeper for
      matchups, Google Sheets for salary caps, Google Docs for rules, and Yahoo Email for waivers. The
      commissioner spent hours every offseason reconciling spreadsheets. Salary cap errors slipped
      through. Contract disputes turned into group chat archaeology.
    </p>
    <p>
      No existing platform handles what makes dynasty leagues worth playing: salary caps with rollover
      and dead money, multi-year contracts with guaranteed vs. non-guaranteed structures, and
      restricted free agency.
    </p>
    <p>
      Development started in January 2026 with a React + Vite frontend and Node.js + Express backend.
      Core architecture decisions: click-to-swap roster management (more reliable on mobile than
      drag-and-drop), SQLite for development with a clear migration path to PostgreSQL, JWT
      authentication with role-based permissions from day one.
    </p>
    <p>
      The initial build delivered login, team selection, roster editing with position validation, and
      a 9-position starting lineup with 14 bench spots and IR.
    </p>
    <h3>Key technical decisions</h3>
    <ul>
      <li>Click-to-swap over drag-and-drop for mobile reliability</li>
      <li>SQLite → PostgreSQL migration path for zero-config dev</li>
      <li>Role-based access (Commissioner vs. Owner) from the start</li>
    </ul>
    <p><em>What's next:</em> Connecting to real NFL data — 2,550+ players, 5 seasons of stats, and a Python pipeline to pull it all together.</p>
  </CaseStudyLayout>
);

export default DynastyWarRoom;
