import { useEffect, useRef } from "react";

const SCHEDULE_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2fUKpgf62qjDycvC33C_9hklBknwxwNBYhBtJAkvtH_auJacgrf3jlp3F-wla7ph83zpEj67YG?gv=true";

const CSS_HREF = "https://calendar.google.com/calendar/scheduling-button-script.css";
const JS_SRC = "https://calendar.google.com/calendar/scheduling-button-script.js";

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (opts: { url: string; color: string; label: string; target: Element }) => void;
      };
    };
  }
}

const loadScript = () =>
  new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${JS_SRC}"]`);
    if (existing) {
      if (window.calendar?.schedulingButton) resolve();
      else {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", () => reject());
      }
      return;
    }
    const script = document.createElement("script");
    script.src = JS_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });

const CalendarButton = ({ label = "Book an appointment" }: { label?: string }) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const host = hostRef.current;
    if (!host) return;

    loadScript()
      .then(() => {
        if (cancelled || !host || !window.calendar?.schedulingButton) return;
        host.innerHTML = "";
        window.calendar.schedulingButton.load({
          url: SCHEDULE_URL,
          color: "#039BE5",
          label,
          target: host,
        });
      })
      .catch(() => {
        // Fallback: plain link styled by the site if Google's script is blocked.
        if (cancelled || !host) return;
        const a = document.createElement("a");
        a.href = SCHEDULE_URL;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = label;
        a.className = "calendar-button-fallback";
        host.appendChild(a);
      });

    return () => {
      cancelled = true;
    };
  }, [label]);

  return <div ref={hostRef} className="calendar-scheduling-button" />;
};

export default CalendarButton;
