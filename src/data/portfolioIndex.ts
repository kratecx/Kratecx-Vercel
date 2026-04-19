/**
 * Portfolio index (grid) — shared by `pages/portfolio/index.astro` and `Footer.astro`.
 * Titles, images and tech stacks mirror the case studies in `src/data/projects/*`.
 */

export type PortfolioGridProject = {
  id: string;
  title: string;
  tech: string;
  img: string;
};

export type PortfolioCategory = {
  id: string;
  heading: string;
  subheading: string;
  desc: string;
  projects: PortfolioGridProject[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "business",
    heading: "Business Websites",
    subheading: "Professional Presence & Lead Generation",
    desc: "Websites built to establish credibility, communicate clearly, and generate consistent leads for service-based businesses.",
    projects: [
      {
        id: "01",
        title: "Vanguard Group",
        tech: "Astro // Tailwind",
        img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200",
      },
      {
        id: "02",
        title: "Northbridge Partners",
        tech: "Next.js // CMS",
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
      },
    ],
  },
  {
    id: "startup",
    heading: "Startup Websites",
    subheading: "Launch, Positioning & Early Growth",
    desc: "High-impact websites designed to communicate value, build trust, and support early-stage growth for startups and SaaS products.",
    projects: [
      {
        id: "03",
        title: "Relayr Cloud",
        tech: "React // Node API",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      },
      {
        id: "04",
        title: "Corelane AI",
        tech: "Next.js // Python API",
        img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200",
      },
    ],
  },
  {
    id: "ecommerce",
    heading: "E\u2011Commerce Websites",
    subheading: "Conversion & Scalable Online Stores",
    desc: "Online stores built for performance, smooth user experience, and higher conversion rates across devices.",
    projects: [
      {
        id: "05",
        title: "North Atelier",
        tech: "Shopify // Custom Theme",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
      },
      {
        id: "06",
        title: "Laurel Skin",
        tech: "Shopify // Headless",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
      },
    ],
  },
  {
    id: "landing",
    heading: "Landing Pages",
    subheading: "Focused Conversion & Campaign Performance",
    desc: "Landing pages designed to capture attention, communicate value quickly, and convert visitors into qualified leads.",
    projects: [
      {
        id: "07",
        title: "Meridian Metrics",
        tech: "Astro // Tailwind",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      },
      {
        id: "08",
        title: "Haldren Cyber",
        tech: "Next.js // Animations",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200",
      },
    ],
  },
  {
    id: "redesign",
    heading: "Redesigned Websites",
    subheading: "Modernization & Performance Improvement",
    desc: "Redesigning outdated websites to improve user experience, increase trust, and align with modern business goals.",
    projects: [
      {
        id: "09",
        title: "Atlasby Group",
        tech: "React // UI System",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
      },
      {
        id: "10",
        title: "Hearth & Oak",
        tech: "Astro // CMS",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
      },
    ],
  },
];

export const portfolioFilters = [
  { label: "Business Websites", id: "business" },
  { label: "Startup Websites", id: "startup" },
  { label: "E\u2011Commerce Websites", id: "ecommerce" },
  { label: "Landing Pages", id: "landing" },
  { label: "Website Redesigns", id: "redesign" },
] as const;

/** Flat list for footer “Our Works” — same order as portfolio index. */
export const portfolioCaseStudiesFlat = portfolioCategories.flatMap((cat) =>
  cat.projects.map((p) => ({
    title: p.title,
    href: `/portfolio/${p.id}` as const,
  })),
);
