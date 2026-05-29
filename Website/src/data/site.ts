/**
 * a3b — single source of truth for site-wide content.
 * Brand voice rules apply to every string here: lowercase brand name,
 * short sentences, no exclamation points, no hype words.
 *
 * Placeholders to replace before launch are marked PLACEHOLDER.
 */

export const site = {
  name: "a3b",
  /** spoken form, for aria-labels and structured data */
  legalName: "a3b",
  tagline: "minimal video, considered craft",
  motto: "Quiet work, loud results.",
  description:
    "a3b makes calm, considered, documentary-style video for brands and people who want their work remembered, not just watched.",
  /** production URL — keep in sync with astro.config.mjs */
  url: "https://a3b.video",
  locale: "en_AU",
  /** PLACEHOLDER — swap for the real handles before going live */
  email: "hello@a3b.video",
  instagram: {
    handle: "@a3b.video",
    url: "https://instagram.com/a3b.video",
  },
  location: "Australia",
  locationLong: "Australia · working with clients anywhere",
  replyTime: "Within two working days",
  /** PLACEHOLDER — paste a Cal.com / Calendly link to enable the booking embed */
  bookingUrl: "",
  /** PLACEHOLDER — set a Plausible/Fathom domain to switch on privacy-first analytics */
  analyticsDomain: "",
} as const;

export type NavLink = { label: string; href: string };

// Minimal single landing page for now — work, services, about and contact
// were removed, so the nav carries no in-page links (just logo + CTA).
export const navLinks: NavLink[] = [];

export const footerCols: { heading: string; links: NavLink[] }[] = [
  {
    heading: "elsewhere",
    links: [
      { label: site.email, href: `mailto:${site.email}` },
      { label: site.instagram.handle, href: site.instagram.url },
      { label: "Book a brief", href: "/contact" },
    ],
  },
];

export type Tier = {
  id: string;
  num: string;
  name: string;
  heading: string;
  price: string;
  priceSuffix?: string;
  summary: string;
  includes: string[];
  cta: { label: string; accent: "sage" | "ink" };
};

export const tiers: Tier[] = [
  {
    id: "short-film",
    num: "01 — the short film",
    name: "The short film",
    heading: "Single brand story",
    price: "from AUD $1,200",
    summary:
      "One considered piece, 60 to 180 seconds. The right shape for a founder story, a product hero, or a brand reveal.",
    includes: [
      "One finished film, 60–180 seconds",
      "Calm grade and sound design included",
      "Two rounds of revisions",
      "Delivery in every format you need",
      "First draft within seven days",
    ],
    cta: { label: "Start a short film", accent: "ink" },
  },
  {
    id: "content-set",
    num: "02 — the content set",
    name: "The content set",
    heading: "Multi-piece campaign",
    price: "from AUD $3,500",
    summary:
      "Three to ten coordinated edits across formats — a hero film with social cutdowns and vertical variants, all on one visual spine.",
    includes: [
      "Three to ten coordinated edits",
      "Hero film plus social and vertical cutdowns",
      "Consistent grade and pacing across the set",
      "Two rounds of revisions per piece",
      "Staggered delivery on an agreed schedule",
    ],
    cta: { label: "Start a content set", accent: "sage" },
  },
  {
    id: "retainer",
    num: "03 — the retainer",
    name: "The retainer",
    heading: "Ongoing editing partner",
    price: "from AUD $2,500",
    priceSuffix: "/ month",
    summary:
      "A dedicated editor for your brand. Defined monthly deliverables, predictable turnaround, one consistent taste across everything.",
    includes: [
      "A set number of edits each month",
      "Priority turnaround on every piece",
      "One editor who knows your brand",
      "Predictable monthly cost, no surprises",
      "Available after one completed project",
    ],
    cta: { label: "Talk retainers", accent: "ink" },
  },
];

export type Step = { num: string; title: string; body: string };

export const process: Step[] = [
  {
    num: "01",
    title: "Brief",
    body: "Twenty minutes. We learn what matters, who it is for, and what to cut. You get an honest read on fit.",
  },
  {
    num: "02",
    title: "Cut",
    body: "First draft within seven days. Considered, not rushed — built around the one idea the piece is carrying.",
  },
  {
    num: "03",
    title: "Refine",
    body: "Two rounds of revisions, always included. The scope is fixed up front, so there are no hidden rounds.",
  },
  {
    num: "04",
    title: "Deliver",
    body: "Final files in every format you need — landscape, square, vertical — labelled and ready to publish.",
  },
];
