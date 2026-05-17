import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import dynastyWarRoomLogo from "@/assets/dynasty-war-room-logo.png";

const STORAGE_KEY = "dripAnnouncementDynastyWarRoomDismissed";

const AnnouncementBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;
    const t = window.setTimeout(() => setOpen(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[60] transition-transform duration-500 ease-out ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-hidden={!open}
      role="region"
      aria-label="Announcement"
    >
      <div className="border-b border-cyan/30 bg-navy-ink text-primary-foreground shadow-elev">
        <div className="container-wide flex items-center gap-4 py-3 md:py-4">
          <a
            href="https://dynastywarroom.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="group flex flex-1 items-center gap-3 md:gap-4"
          >
            <img
              src={dynastyWarRoomLogo}
              alt="Dynasty War Room"
              className="h-10 w-10 flex-shrink-0 rounded-sm bg-white/5 object-contain p-1 md:h-12 md:w-12"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-snug md:text-base">
                <span className="text-cyan">Drip Labs</span> is proud to announce the launch of{" "}
                <span className="underline decoration-cyan decoration-2 underline-offset-4 group-hover:text-cyan">
                  Dynasty War Room
                </span>
                <ArrowUpRight className="ml-1 inline size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
              <p className="hidden text-xs text-primary-foreground/65 md:block">
                A multi-league dynasty fantasy football platform with a full salary-cap engine. Visit dynastywarroom.com →
              </p>
            </div>
          </a>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss announcement"
            className="flex-shrink-0 rounded-full p-2 text-primary-foreground/60 transition-colors hover:bg-white/5 hover:text-primary-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
