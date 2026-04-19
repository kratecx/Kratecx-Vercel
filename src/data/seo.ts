/**
 * Site-wide SEO constants + per-page metadata.
 * Edit the values below when you launch. Everything else reads from here.
 */

export const SITE = {
  name: "Kratecx",
  legalName: "Kratecx",
  domain: "https://www.kratecx.com",
  /** Default site description — used on any page that doesn't override it. */
  description:
    "Kratecx builds fast, modern websites and AI-powered platforms — Shopify e-commerce, WordPress, SaaS products and conversion-focused sites for startups.",
  /** 5-8 long-tail keywords that describe the whole brand. */
  keywords: [
    "web development agency",
    "shopify development",
    "wordpress development",
    "saas website development",
    "ai web solutions",
    "startup website design",
    "e-commerce website development",
    "conversion-focused web design",
  ],
  locale: "en_US",
  /** Brand primary (used as <meta name="theme-color">). */
  themeColor: "#f98502",
  /** Absolute URL to the default Open Graph image (1200x630). Drop a real file at /public/og-default.jpg when ready. */
  ogImage: "/og-default.jpg",
  /** Brand logo, used for schema and favicons. */
  logo: "/kratecx_logo.svg",
  favicon: "/favicon.svg",
  author: "Kratecx",
  social: {
    twitter: "https://twitter.com/kratecx",
    twitterHandle: "@kratecx",
    linkedin: "https://www.linkedin.com/company/kratecx",
    instagram: "https://www.instagram.com/kratecx",
  },
  /** Used inside Organization schema → contactPoint */
  contact: {
    email: "hello@kratecx.com",
    telephone: "+92-000-0000000",
  },
} as const;

/** All URLs kratecx's Organization schema should list under sameAs. */
export const SAME_AS = [
  SITE.social.twitter,
  SITE.social.linkedin,
  SITE.social.instagram,
];

/** Shape of every page's SEO entry. */
export interface PageSeo {
  title: string;
  description: string;
  keywords?: string[];
  /** Override OG/Twitter image for a specific page. */
  image?: string;
  /** Default true — set false on pages you don't want crawled. */
  index?: boolean;
}

/** Per-page SEO. Keys are absolute pathnames (always start with "/"). */
export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "Kratecx — Websites, Shopify & SaaS Builds That Convert",
    description:
      "Kratecx is a web studio building fast Shopify, WordPress, SaaS and AI-powered websites for startups and growing brands. See our work.",
    keywords: [
      "web development agency",
      "shopify development agency",
      "startup website design",
      "ai website development",
      "saas product website",
    ],
  },
  "/about": {
    title: "About Kratecx — A Web Studio For Startups & E-Commerce Brands",
    description:
      "We are a small, senior team shipping conversion-focused websites, Shopify stores, WordPress sites and SaaS platforms for ambitious teams worldwide.",
    keywords: [
      "about kratecx",
      "web design studio",
      "shopify agency",
      "saas development team",
    ],
  },
  "/services": {
    title: "Services — Web, Shopify, WordPress, SaaS & AI Solutions",
    description:
      "Custom web apps, landing pages, Shopify e-commerce, WordPress, speed optimisation and maintenance — delivered with measurable business outcomes.",
    keywords: [
      "web development services",
      "shopify development services",
      "wordpress development services",
      "saas website development",
      "ai web solutions",
      "speed optimization services",
    ],
  },
  "/services/backend-development": {
    title: "Backend Development Services — APIs, Databases & Integrations",
    description:
      "Secure, scalable backends: REST/GraphQL APIs, auth, payments, CRM and database design for websites and SaaS products.",
    keywords: [
      "backend development services",
      "api development",
      "saas backend",
      "node.js backend development",
      "database design",
    ],
  },
  "/portfolio": {
    title: "Portfolio — Shipped Projects by Kratecx",
    description:
      "Selected case studies: business websites, startup brands, e-commerce stores, landing pages and website redesigns built by Kratecx.",
    keywords: [
      "kratecx portfolio",
      "web design portfolio",
      "shopify case studies",
      "startup website examples",
    ],
  },
  "/process": {
    title: "Our Process — How Kratecx Builds Websites That Convert",
    description:
      "A clear, five-phase process from discovery and strategy to launch and optimisation — built to take your website from idea to business asset.",
    keywords: [
      "web design process",
      "website development process",
      "kratecx process",
    ],
  },
  "/faqs": {
    title: "FAQs — Timelines, Process, Support & IP | Kratecx",
    description:
      "Answers to the most common questions about project timelines, integrations, ongoing support and intellectual property when working with Kratecx.",
    keywords: [
      "kratecx faq",
      "web agency faq",
      "website project timeline",
      "website support",
    ],
  },
  "/contact": {
    title: "Contact Kratecx — Start a Web, Shopify or SaaS Project",
    description:
      "Tell us about your project. We reply within one business day with next steps, a scoped plan and transparent pricing.",
    keywords: [
      "contact kratecx",
      "hire web agency",
      "start web project",
    ],
  },
  "/blog": {
    title: "Blog — Web, Shopify, WordPress & SaaS Insights | Kratecx",
    description:
      "Practical essays on web performance, Shopify, WordPress, SaaS product design and conversion — written by the Kratecx team.",
    keywords: [
      "web development blog",
      "shopify blog",
      "saas product blog",
      "web performance blog",
    ],
  },
};

/** Resolve SEO for a pathname, with a sane fallback. */
export function resolveSeo(pathname: string): PageSeo {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return (
    PAGE_SEO[clean] ?? {
      title: SITE.name,
      description: SITE.description,
      keywords: [...SITE.keywords],
    }
  );
}
