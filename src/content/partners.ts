// Referral partners shown on /partners and the About "Partners" section.
//
// To add a partner: append one entry to the `partners` array below. Nothing else
// changes. Optional fields can be omitted entirely:
//   - location, website, linkedin, relationship: leave the key out if it doesn't apply.
//   - photo: drop a square image in src/assets/partners/, import it at the top of
//     this file, and set `photo: <import>`. With no photo the card shows the
//     partner's initials in a navy circle instead.

import marcHaslbeckPhoto from "@/assets/partners/marc-haslbeck.jpeg";
import annaSenderPhoto from "@/assets/partners/anna-sender.jpg";

export interface Partner {
  slug: string;
  name: string;
  role: string;
  specialty: string;
  // Card tag line reads "{relationship} · {specialty}". Omit it and the card
  // falls back to "Referral partner · {specialty}".
  relationship?: string;
  location?: string;
  blurb: string;
  website?: { label: string; url: string };
  linkedin?: string;
  photo?: string;
}

export const partners: Partner[] = [
  {
    slug: "marc-haslbeck",
    name: "Marc Haslbeck",
    role: "Principal, Bilanz",
    specialty: "Fractional CFO",
    location: "Cape Cod, MA",
    blurb:
      "We bring Marc in when a client needs a CFO in the room. He leads finance for nonprofits and housing organizations, and was CFO of Housing Assistance Corporation, Cape Cod's largest housing nonprofit. Marc owns audit readiness, grant compliance and the board conversation. We build the data foundation underneath, so his reporting is live at close.",
    website: { label: "cfobilanz.com", url: "https://cfobilanz.com" },
    photo: marcHaslbeckPhoto,
  },
  {
    slug: "anna-sender",
    name: "Anna Sender, CPA",
    role: "Founder, Sender Consulting",
    relationship: "Partner",
    specialty: "Strategic advisory",
    location: "Boston, MA",
    blurb:
      "We bring Anna in when a client needs strategy and finance leadership in the room. A CPA and founder of Sender Consulting, she works with founders and leadership teams on corporate strategy, commercialization and operating models, with a background in M&A advisory and financial transformation. Anna shapes the plan. We build the systems that run it.",
    website: { label: "senderconsultingllc.com", url: "https://senderconsultingllc.com" },
    photo: annaSenderPhoto,
  },
];
