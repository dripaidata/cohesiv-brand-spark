import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FractionalCTOBand = () => (
  <section className="relative bg-navy-ink py-28 text-primary-foreground md:py-40">
    <div className="container-wide">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">ENGAGEMENT MODEL</p>
          <h2 className="display-serif mt-6 text-5xl text-balance md:text-6xl">
            Or take all three on retainer. Fractional CTO.
          </h2>
        </div>
        <div className="flex flex-col justify-end md:col-span-5">
          <p className="text-lg leading-relaxed text-primary-foreground/75">
            Hiring a full-time CTO takes six to nine months, costs north of $300K loaded, and needs another year of ramp. A retainer gives you that caliber of technical leadership starting Monday, applied to whichever of the three capabilities matters most that month. Some engagements are advisory. Others include owning your engineers and vendor relationships. We scope that with you rather than assuming it.
          </p>
          <div className="mt-8">
            <Button asChild variant="hero" size="xl">
              <a href="/fractional-cto">
                How the retainer works <ArrowRight className="!size-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FractionalCTOBand;
