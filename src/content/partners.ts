// Referral partners shown on /partners and the About "Partners" section.
//
// To add a partner: append one entry to the `partners` array below. Nothing else
// changes. Optional fields can be omitted entirely:
//   - location, website, linkedin: leave the key out if it doesn't apply.
//   - photo: drop a square image in src/assets/partners/, import it at the top of
//     this file, and set `photo: <import>`. With no photo the card shows the
//     partner's initials in a navy circle instead.

import marcHaslbeckPhoto from "@/assets/partners/marc-haslbeck.jpeg";

export interface Partner {
  slug: string;
  name: string;
  role: string;
  specialty: string;
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
];
