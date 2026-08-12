import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SCHEDULE_URL = "https://calendar.app.google/bGhsbEhewJtu8zTf7";

const ScheduleCallButton = ({
  label = "Schedule a call",
}: {
  label?: string;
}) => (
  <Button
    asChild
    variant="hero"
    size="lg"
    className="w-full"
    onClick={(e) => e.stopPropagation()}
  >
    <a
      href={SCHEDULE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
    >
      {label} <ArrowRight className="!size-5" />
    </a>
  </Button>
);

export default ScheduleCallButton;
