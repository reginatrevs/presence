export type Skill = string;

export type SkillGroup = {
  label: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    label: "Front-end",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next.js",
      "Tailwind",
      "GSAP",
      "PHP",
      "WCAG",
    ],
  },
  {
    label: "Design",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Blender",
      "Wireframing",
      "Prototyping",
    ],
  },
  {
    label: "CMS & commerce",
    items: ["WordPress", "Webflow", "Framer", "Shopify", "HubSpot", "Drupal", "Wix"],
  },
  {
    label: "Data & analytics",
    items: [
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Search Console",
      "Meta reporting",
      "Performance analysis",
    ],
  },
  {
    label: "Tooling",
    items: [
      "Git",
      "GitHub",
      "AI-assisted development",
      "Workflow automation",
    ],
  },
  {
    label: "Languages",
    items: ["English", "Spanish"],
  },
];

export type TimelineEntry = {
  years: string;
  role: string;
  org: string;
  orgUrl?: string;
  summary: string;
};

export const timeline: TimelineEntry[] = [
  {
    years: "2024 — Now",
    role: "Digital experience & web production",
    org: "The Cyclery",
    orgUrl: "https://instagram.com/cycleryottawa",
    summary:
      "Leading improvements to the e-commerce experience — usability, page structure, and customer journeys across key storefront pages. Managing site updates and digital campaign launches that support seasonal priorities and conversion-focused work.",
  },
  {
    years: "2025",
    role: "UX research & front-end",
    org: "Pyralume",
    orgUrl: "https://www.linkedin.com/company/pyralume/",
    summary:
      "Built a user testing kit to support research and usability evaluation. Synthesized findings into interface decisions and front-end components in React, TypeScript, and Tailwind.",
  },
  {
    years: "2025",
    role: "Front-end developer",
    org: "Project Heart",
    summary:
      "Adapted a responsive site to support its transition toward an e-learning platform. Improved front-end structure and usability while keeping pace with an evolving brand identity.",
  },
  {
    years: "2025",
    role: "UI designer",
    org: "Lately",
    orgUrl: "https://www.getlately.app/",
    summary:
      "Designed v2 of an iOS time-management app for Erik MacInnis. A calmer, more playful direction — soft palette, gamified feedback, a flexible design system that defined the prototype.",
  },
  {
    years: "2023 — 2024",
    role: "Web developer",
    org: "Notto",
    orgUrl: "https://notto.ca",
    summary:
      "Built and launched a self-hosted operations platform site for design studios. Responsive front-end with Next.js, TypeScript, React, and Tailwind; Supabase for the founding-studio waitlist.",
  },
  {
    years: "2023 — 2025",
    role: "Interactive media design, honours",
    org: "Algonquin College",
    orgUrl: "https://www.algonquincollege.com/",
    summary:
      "School of Media and Design. 4.0, with honours — mostly because the work felt worth doing carefully.",
  },
  {
    years: "2021 — Now",
    role: "Freelance designer & developer",
    org: "Independent",
    summary:
      "Designed and developed adaptive websites, product interfaces, and digital content for clients across media, culture, and service brands — including a major record label.",
  },
  {
    years: "2019 — 2023",
    role: "Digital & CMS specialist",
    org: "Immersive3dspaces",
    summary:
      "Developed and launched the site showcasing VR-focused services. Designed and optimized content for search visibility, mobile responsiveness, and audience engagement across email and web.",
  },
];
