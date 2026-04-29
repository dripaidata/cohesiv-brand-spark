import logo from "@/assets/logo-full.png";

const Footer = () => (
  <footer className="border-t border-border bg-navy-ink text-primary-foreground">
    <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
      <div className="md:col-span-5">
        <img src={logo} alt="Drip AI & Data" className="h-14 w-auto bg-background/95 rounded-sm p-2" />
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
          Enterprise-grade decision intelligence for mid-market leaders. A decade of data and AI leadership, deployed at a fraction of the in-house cost.
        </p>
      </div>
      <div className="md:col-span-3">
        <p className="eyebrow text-cyan">Explore</p>
        <ul className="mt-4 space-y-3 text-sm">
          <li><a href="/work" className="hover:text-cyan">Our Work</a></li>
          <li><a href="/labs" className="hover:text-cyan">Drip Labs</a></li>
          <li><a href="/about" className="hover:text-cyan">About</a></li>
          <li><a href="/#consultation" className="hover:text-cyan">Book a consultation</a></li>
        </ul>
      </div>
      <div className="md:col-span-4">
        <p className="eyebrow text-cyan">Connect</p>
        <ul className="mt-4 space-y-3 text-sm">
          <li><a href="https://www.linkedin.com/company/drip-ai-data/" target="_blank" rel="noreferrer" className="hover:text-cyan">Drip AI &amp; Data on LinkedIn</a></li>
          <li><a href="https://www.linkedin.com/in/danny-ellowitz/" target="_blank" rel="noreferrer" className="hover:text-cyan">Danny Ellowitz on LinkedIn</a></li>
          <li><a href="mailto:hello@dripaidata.com" className="hover:text-cyan">hello@dripaidata.com</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-wide flex flex-col items-start justify-between gap-2 py-6 text-xs text-primary-foreground/50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Drip AI &amp; Data. All rights reserved.</p>
        <p className="font-mono">DRIP / AI / DATA</p>
      </div>
    </div>
  </footer>
);

export default Footer;
