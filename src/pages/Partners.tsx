import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ConsultationForm from "@/components/site/ConsultationForm";
import Seo from "@/components/site/Seo";
import { PartnerGrid } from "@/components/site/PartnerCard";
import { partners } from "@/content/partners";
import { ROUTE_SEO } from "@/seo/routes";

const Partners = () => (
  <div className="min-h-screen bg-background font-sans">
    <Seo {...ROUTE_SEO["/partners"]} />
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-navy-ink py-28 text-primary-foreground md:py-36">
        <div className="container-wide max-w-3xl">
          <p className="eyebrow text-cyan">Partners</p>
          <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl">
            A bench of specialists, <em className="text-cyan not-italic">one call away.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Drip AI and Data is a fractional CTO practice. When a client needs expertise beyond
            technology, we bring in people we trust. These are the partners we refer clients to, and
            who refer clients to us.
          </p>
        </div>
      </section>

      {/* Partner grid */}
      <section className="py-24 md:py-32">
        <div className="container-wide">
          <PartnerGrid partners={partners} />
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Run a practice that pairs well with ours? We're always open to meeting people who do
            great work for the same kinds of clients.{" "}
            <a
              href="mailto:danny@dripaidata.com"
              className="font-medium text-navy-deep transition-colors hover:text-cyan"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </section>

      <ConsultationForm />
    </main>
    <Footer />
  </div>
);

export default Partners;
