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
    org: "The Cyclery / Cyclery Racing",
    orgUrl: "https://instagram.com/cycleryottawa",
    summary:
      "Supporting digital experience and web production across The Cyclery and Cyclery Racing, including the creation of the new Cyclery Racing website, sponsor facing content, digital asset systems, and workflow improvements tied to team and brand visibility.",
  },
  {
    years: "2025",
    role: "UX research & front end",
    org: "Pyralume",
    orgUrl: "https://www.linkedin.com/company/pyralume/",
    summary:
      "Created a user testing kit to support research and usability evaluation, then translated those findings into interface decisions and front end components built with React, TypeScript, and Tailwind.",
  },
  {
    years: "2025",
    role: "Front end developer",
    org: "Project Heart",
    summary:
      "Adapted and implemented a responsive website to support its transition toward an e learning platform. Improved front end structure, usability, and clarity while keeping pace with an evolving identity and set of goals.",
  },
  {
    years: "2025",
    role: "UI designer",
    org: "Lately",
    orgUrl: "https://www.getlately.app/",
    summary:
      "Designed the second version of an iOS time management app, shaping a calmer and more playful direction through interface design, feedback systems, and a flexible visual language.",
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
    role: "Freelance designer & developer",
    org: "Independent",
    summary:
      "Designing and developing websites, interfaces, and digital content for clients across media, culture, and service based brands, including work for a major record label.",
  },
  {
    years: "2019 — 2023",
    role: "Digital & CMS specialist",
    org: "Immersive3dspaces",
    summary:
      "Developed and launched a website centered on VR focused services. Designed and optimized content for search visibility, mobile responsiveness, and audience engagement across email and web.",
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
