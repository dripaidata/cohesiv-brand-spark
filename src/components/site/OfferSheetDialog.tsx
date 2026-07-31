import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const requestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(200),
});

const OfferSheetDialog = ({
  offer,
  triggerLabel = "Get the full offer sheet",
}: {
  offer: string;
  triggerLabel?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const parsed = requestSchema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
    });

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("offer_sheet_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      offer,
    });
    setSubmitting(false);

    if (error) {
      console.error("Offer sheet request failed", error);
      toast.error("Something went wrong. Please try again or email danny@dripaidata.com.");
      return;
    }

    setDone(true);
    form.reset();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setDone(false);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="hero" size="lg" className="w-full" onClick={(e) => e.stopPropagation()}>
          {triggerLabel} <ArrowRight className="!size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-sm sm:max-w-md" onClick={(e) => e.stopPropagation()}>
        <DialogHeader>
          <DialogTitle className="display-serif text-2xl text-navy-ink">
            {done ? "It's on the way" : "Get the full offer sheet"}
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {done ? "Check your inbox." : offer}
          </DialogDescription>
        </DialogHeader>

        {done ? (
          <p className="text-sm leading-relaxed text-muted-foreground">
            It's on the way - check your inbox. If it doesn't land in a few minutes, email danny@dripaidata.com.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="os-name" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Name <span className="text-cyan">*</span>
              </Label>
              <Input id="os-name" name="name" required className="h-11 rounded-sm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="os-email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Work email <span className="text-cyan">*</span>
              </Label>
              <Input id="os-email" name="email" type="email" required className="h-11 rounded-sm" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="os-company" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Company <span className="text-cyan">*</span>
              </Label>
              <Input id="os-company" name="company" required className="h-11 rounded-sm" />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={submitting} className="w-full">
              {submitting ? (
                <>
                  <Loader2 className="!size-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send it over <ArrowRight className="!size-5" />
                </>
              )}
            </Button>
            <p className="text-xs leading-relaxed text-muted-foreground">
              We'll also send occasional notes on AI for mid-market operators. Unsubscribe anytime.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OfferSheetDialog;
