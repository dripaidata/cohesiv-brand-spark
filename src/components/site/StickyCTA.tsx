import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

const StickyCTA = () => {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("dripStickyClosed") === "1") setClosed(true);
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (closed) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      aria-hidden={!show}
    >
      <div className="container-wide pb-4 md:pb-6">
        <div className="pointer-events-auto flex flex-col items-stretch gap-3 rounded-sm border border-cyan/30 bg-navy-ink/95 p-4 shadow-elev backdrop-blur md:flex-row md:items-center md:justify-between md:p-5">
          <div className="flex items-center gap-4">
            <span className="hidden h-2 w-2 animate-pulse-soft rounded-full bg-cyan md:inline-block" />
            <div>
              <p className="text-sm font-semibold text-primary-foreground md:text-base">
                Not sure where your data and AI gaps are?
              </p>
              <p className="text-xs text-primary-foreground/60 md:text-sm">
                Take the free 5-minute Mid-Market AI Readiness Scorecard.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="lg">
              <a href="#scorecard">
                Get the scorecard <ArrowRight className="!size-4" />
              </a>
            </Button>
            <button
              onClick={() => {
                sessionStorage.setItem("dripStickyClosed", "1");
                setClosed(true);
              }}
              aria-label="Dismiss"
              className="rounded-full p-2 text-primary-foreground/60 transition-colors hover:bg-white/5 hover:text-primary-foreground"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
