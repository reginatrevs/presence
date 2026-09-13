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
    role: "Digital Experience & E-commerce Developer",
    org: "The Cyclery / Cyclery Racing",
    orgUrl: "https://instagram.com/cycleryottawa",
    summary:
      "Digital experience, e-commerce, and web development for The Cyclery and Cyclery Racing. I own the store's e-commerce experience and the systems behind it, and I designed and built the new Cyclery Racing site end to end.",
  },
  {
    years: "2025",
    role: "Front-End Developer & UX Researcher",
    org: "Pyralume",
    orgUrl: "https://www.linkedin.com/company/pyralume/",
    summary:
      "Built interface components in React, TypeScript, and Tailwind for Pyralume, a networking platform for filmmakers. Created the user testing kit and usability programme, then translated those findings into interface decisions and shipped code.",
  },
  {
    years: "2025",
    role: "Front-end developer",
    org: "Project Heart",
    summary:
      "Adapted and implemented a responsive website supporting its transition toward an e-learning platform. Improved front-end structure, usability, and accessibility while keeping pace with an evolving identity and set of goals.",
  },
  {
    years: "2025",
    role: "UI Designer",
    org: "Lately",
    orgUrl: "https://www.getlately.app/",
    summary:
      "Designed and shipped v2 of an iOS time-management app, shaping a calmer and more playful direction through interface design, a Figma design system, feedback patterns, and a flexible visual language.",
  },
  {
    years: "2024 — 2025",
    role: "Web developer",
    org: "Notto",
    orgUrl: "https://notto.ca",
    summary:
      "Built and launched a self hosted website for a studio focused operations platform. Developed the responsive front end using Next.js, TypeScript, React, and Tailwind, with Supabase supporting the founding studio waitlist.",
  },
  {
    years: "2021 — Now",
    role: "Freelance creative lead & developer",
    org: "Independent",
    summary:
      "Creative direction, brand and visual systems, websites, interfaces, and iOS app UI for clients across media, culture, and service-based brands, including work for a major international record label. I usually lead the direction and build the result.",
  },
  {
    years: "2019 — 2023",
    role: "Web & Digital Specialist",
    org: "Immersive3dspaces",
    summary:
      "Developed and launched a website centered on VR and immersive services. Designed and optimized content for search visibility, mobile responsiveness, and audience engagement across email and web.",
  },
  {
    years: "2023 — 2025",
    role: "Interactive media design, honours",
    org: "Algonquin College",
    orgUrl: "https://www.algonquincollege.com/",
    summary:
      "Studied interactive media design at Algonquin College, graduating with honours and a 4.0 GPA. A lot of what shaped my approach came from learning to build with both craft and intention.",
  },
];
