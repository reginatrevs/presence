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
    items: ["PostgreSQL", "MySQL", "Supabase", "Search Console", "Meta reporting"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "AI-assisted IDEs", "Agent-based coding"],
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
    role: "Digital commerce & web solutions, media manager",
    org: "The Cyclery",
    orgUrl: "https://thecyclery.ca",
    summary:
      "Owning the online store experience — UX of the customer journey, seasonal campaigns, conversion-minded content, and the day-to-day work that keeps a real shop open.",
  },
  {
    years: "2025",
    role: "UX research lead + front-end",
    org: "Pyralume",
    orgUrl: "https://www.linkedin.com/company/pyralume/",
    summary:
      "Built the user testing kit and shipped the React component system from the same desk. Every component contract earned by a real interview.",
  },
  {
    years: "2025",
    role: "Front-end developer",
    org: "Project Heart",
    summary:
      "Volunteer build of a responsive site for a nonprofit moving into e-learning — designed for low bandwidth and a wide age range.",
  },
  {
    years: "2025",
    role: "UI designer",
    org: "Lately",
    orgUrl: "https://www.getlately.app/",
    summary:
      "Designed v2 of a time-management iOS app for Erik MacInnis. Soft colours, gamified feedback, a calmer system.",
  },
  {
    years: "2024 — 2025",
    role: "Web developer",
    org: "Notto",
    orgUrl: "https://notto.ca",
    summary:
      "Front-end build of an operations platform for design studios — Next.js, Supabase, TypeScript, Tailwind.",
  },
  {
    years: "2023 — 2025",
    role: "Interactive Media Design, Honours",
    org: "Algonquin College",
    summary:
      "School of Media and Design. Finished with honours, 4.0 GPA, mostly because I liked the work.",
  },
  {
    years: "2021 — Now",
    role: "Freelance interactive media designer",
    org: "Independent",
    summary:
      "Adaptive websites, iOS interfaces in Swift, and digital content for clients including a major record label.",
  },
  {
    years: "2019 — 2023",
    role: "Digital & CMS specialist",
    org: "Immersive3dspaces",
    summary:
      "Launched and ran the site around VR technology — mobile-responsive content, SEO, and the marketing system behind the launches.",
  },
];
