export type Project = {
  slug: string;
  index: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  stack: string[];
  liveUrl?: string;
  externalCase?: string;
  image?: string;
  caseStudy: {
    frame: string;
    decisionLabel: string;
    decision: string;
    build: string;
    credits: string;
    accent: string;
  };
};

export const projects: Project[] = [
  {
    slug: "cyclery-racing",
    index: "01",
    title: "Cyclery Racing",
    role: "Brand & launch site",
    year: "2026",
    summary:
      "A launch site for a Canadian racing team. Long, deliberate scroll; pink on black; sponsors as a closing wall rather than an opening one.",
    stack: ["Next.js", "GSAP", "TypeScript", "Vercel"],
    liveUrl: "https://www.cycleryracing.ca",
    image: "/cycleryracing.png",
    caseStudy: {
      frame:
        "A new launch site for a competitive Canadian cycling team. The brief was to convey speed and discipline without leaning on motorsport tropes. The constraint was that the site had to feel as deliberate parked as it does in motion.",
      decisionLabel: "Pacing over volume",
      decision:
        "Most racing sites stack everything above the fold — stats, riders, sponsors, news. This one does the opposite. The page reads as a long, slow scroll where each section gets a beat of room to breathe; the rhythm reads like an interval — calm, then sharp, then calm again. The sponsor wall closes the page on a black field instead of opening on a busy hero, because the team's story has to land before the brand list does.",
      build:
        "Next.js with custom CSS variables for the pink-on-black palette. GSAP for the scroll-driven reveals — used sparingly, with a single timeline per section instead of one per element. Deployed on Vercel. The team can update riders and sponsors without touching code.",
      credits: "Design and build, with the Cyclery Racing team.",
      accent: "#ff2d6f",
    },
  },
  {
    slug: "notto",
    index: "02",
    title: "Notto",
    role: "Product site",
    year: "2023",
    summary:
      "A marketing site for B2B operations software that adapts to how studios actually work. The page itself had to argue the product's thesis.",
    stack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    liveUrl: "https://notto.ca",
    image: "/notto.png",
    caseStudy: {
      frame:
        "Notto is operations software for design studios — interior, workspace, architecture. The founders had a clear thesis: most software forces studios to adapt to it; Notto adapts to studios. The marketing site's job was to make that argument the moment a principal landed on the page.",
      decisionLabel: "Lead with the artifact, not the brief",
      decision:
        "Most B2B sites open with a headline plus a hero illustration. Notto opens with a real (anonymized) project dashboard — a residence, FF&E status, vendor lead times — above the fold, before any words explain what's being looked at. The page assumes the reader is a studio principal who recognizes the work, and treats them like one. The thesis is shown before it's stated.",
      build:
        "Next.js front-end with TypeScript and Tailwind, Supabase for the founding-studio waitlist. The component vocabulary is shared with the eventual product surface so the visual language stays consistent post-conversion.",
      credits: "Front-end design and build, with Notto's founding team.",
      accent: "#0c0c0c",
    },
  },
  {
    slug: "specimen",
    index: "03",
    title: "Specimen",
    role: "A type study, in CSS",
    year: "2026",
    summary:
      "A small typographic system shown as a site. CSS-driven scroll choreography, no animation library — just the platform, behaving carefully.",
    stack: ["CSS", "Next.js", "Instrument Serif", "Geist"],
    externalCase: "/lab/specimen",
    image: "/specimen.png",
    caseStudy: {
      frame: "",
      decisionLabel: "",
      decision: "",
      build: "",
      credits: "",
      accent: "#0c0c0c",
    },
  },
];

export type SmallThing = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  description: string;
  note: string;
  href?: string;
  external?: boolean;
  image?: string;
  caseUrl?: string;
};

export const smallThings: SmallThing[] = [
  {
    slug: "motion",
    title: "Motion",
    kind: "A motion study",
    year: "2026",
    description:
      "Four small studies in the kind of web motion I actually reach for — a magnetic button, a count-up, a hover marquee, a scroll-traced SVG.",
    note: "Held together by one rule: every animation has to earn the milliseconds it takes. Most of these took longer to tune than to write.",
    href: "/lab/motion",
  },
  {
    slug: "enduser",
    title: "Enduser",
    kind: "Creative lead, design & build · pre-launch",
    year: "2026",
    description:
      "Creative lead, design, and web app build for a donations platform around recycling — teaching people how to take part and showing them, with full transparency, where their weekly materials actually end up.",
    note: "A donation flow paired with a quiet education layer: what each material becomes, and the local cycle behind the weekly pickup. Led the creative direction and built the web app end to end; pre-launch.",
    image: "/enduser.png",
  },
  {
    slug: "pyralume",
    title: "Pyralume",
    kind: "Research + components",
    year: "2025",
    description:
      "Led the user testing kit and built the React components from the same desk. Every contract earned by an interview.",
    note: "Most days started with a video call and ended with a refactor. The testing kit told me where the friction lived; the components answered. By the time the system was stable, every decision had a person behind it.",
    href: "https://www.linkedin.com/company/pyralume/",
    external: true,
  },
  {
    slug: "alo-runner",
    title: "Alo Runner Ottawa",
    kind: "Event microsite",
    year: "2025",
    description:
      "A small gallery for a local 5K. Built fast, kept careful — type, breathing room, a download button that works.",
    note: "Cata ran the race; I helped shoot photos and built the site. The whole thing was a weekend. The best constraints come from a real Friday.",
    href: "https://alorunnerottawa.netlify.app/",
    external: true,
    image: "/alo.png",
  },
  {
    slug: "lately",
    title: "Lately",
    kind: "iOS time-management UI",
    year: "2025",
    description:
      "UI for v2 of Lately, a time-management app built by Erik MacInnis. Redesigned to feel calm, simple, and playful — away from the cold of typical time apps.",
    note: "Soft colours, gamified feedback, a flexible system. The shipped app eventually went with a different direction, but the prototype defined the language.",
    href: "https://www.getlately.app/",
    external: true,
    caseUrl: "https://www.instagram.com/p/DM9MOAXMT9-/",
    image: "/lately.png",
  },
  {
    slug: "project-heart",
    title: "Project Heart",
    kind: "E-learning launch",
    year: "2025",
    description:
      "Adapted a responsive site for a nonprofit moving into e-learning. Volunteer work, real users, my favourite kind.",
    note: "The brief was tight, the audience wasn’t. The site had to work equally well on a teenager’s phone and on a slow rural connection. The compromises were the point.",
  },
];
