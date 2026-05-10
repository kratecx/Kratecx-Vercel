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
  /** Default Open Graph / Twitter card image (file in /public). */
  ogImage: "/kratecx_logo.svg",
  /** Declared pixel size for `ogImage` (matches SVG viewBox ratio ~589.56×310.11). */
  ogImageWidth: 1200,
  ogImageHeight: 631,
  /** Brand logo — used for schema, `<link rel="icon">`, apple-touch-icon, and mask-icon. */
  logo: "/kratecx_logo.svg",
  author: "Kratecx",
  social: {
    twitter: "https://twitter.com/kratecx",
    twitterHandle: "@kratecx",
    facebook:
      "https://www.facebook.com/profile.php?id=61570819612588",
    instagram:
      "https://www.instagram.com/kratecxdigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    linkedin: "https://www.linkedin.com/company/kratecxdigital/",
  },
  /** Used inside Organization schema → contactPoint */
  contact: {
    email: "hello@kratecx.com",
    telephone: "+92-000-0000000",
  },
} as const;

/** All URLs kratecx's Organization schema should list under sameAs. */
export const SAME_AS = [
  SITE.social.facebook,
  SITE.social.instagram,
  SITE.social.linkedin,
  SITE.social.twitter,
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
    title: "Kratecx | Websites, Shopify & SaaS Builds That Convert",
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
    title: "About Kratecx|A Web Studio For Startups & E-Commerce Brands",
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
    title: "Services | Web, Shopify, WordPress, SaaS & AI Solutions",
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
    title: "Backend Development Services | APIs, Databases & Integrations",
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
  "/services/business-websites": {
    title: "Business Website Design & Development | Professional Company Sites",
    description:
      "Professional business websites that build trust, capture leads, and load fast — with responsive design, forms, analytics, and SEO-friendly structure.",
    keywords: [
      "business website development",
      "company website design",
      "professional website services",
      "lead generation website",
      "corporate website design",
    ],
  },
  "/services/ecommerce-stores": {
    title: "E-Commerce Website Development | Online Stores That Convert",
    description:
      "Shopify and custom online stores built for product discovery, checkout trust, and performance — integrations for payments, shipping, and marketing pixels.",
    keywords: [
      "ecommerce website development",
      "shopify development services",
      "online store design",
      "ecommerce conversion optimization",
      "shopify store setup",
    ],
  },
  "/services/custom-web-apps": {
    title: "Custom Web Application Development | Portals, Tools & SaaS",
    description:
      "Custom web apps with secure authentication, APIs, and integrations — internal tools, customer portals, and SaaS-style products built for reliability.",
    keywords: [
      "custom web application development",
      "web app developers",
      "saas development",
      "business web portal",
      "custom software development",
    ],
  },
  "/services/landing-pages": {
    title: "Landing Page Design | High-Converting Campaign Pages",
    description:
      "Conversion-focused landing pages for paid and organic campaigns — fast loads, strong message match, forms, and tracking that keeps attribution clean.",
    keywords: [
      "landing page design",
      "ppc landing page development",
      "high converting landing page",
      "campaign landing page",
      "lead capture page",
    ],
  },
  "/services/website-redesign": {
    title: "Website Redesign Services | Modern UX Without Losing SEO",
    description:
      "End-to-end website redesigns with migration planning, redirect strategy, and updated UI systems — improve trust and performance while protecting rankings.",
    keywords: [
      "website redesign services",
      "website modernization",
      "site migration seo",
      "ux redesign agency",
      "website refresh",
    ],
  },
  "/services/seo": {
    title: "On-Page & Technical SEO Services | Visibility & Structured Data",
    description:
      "Technical and on-page SEO: metadata, structured data, internal links, Core Web Vitals improvements, and Search Console–aligned fixes.",
    keywords: [
      "technical seo services",
      "on page seo",
      "structured data seo",
      "core web vitals optimization",
      "website seo audit implementation",
    ],
  },
  "/services/speed-optimization": {
    title: "Website Speed Optimization | Core Web Vitals & Faster Loads",
    description:
      "Performance tuning for faster load times and better Core Web Vitals — asset optimization, caching, third-party scripts, and front-end fixes that reduce bounce.",
    keywords: [
      "website speed optimization",
      "core web vitals services",
      "page speed optimization",
      "improve website performance",
      "web performance tuning",
    ],
  },
  "/services/cms-development": {
    title: "CMS Development | WordPress, Headless & Editor-Friendly Sites",
    description:
      "Content management systems your team can use safely: flexible fields, previews, roles, and integrations — WordPress, headless, or hybrid architectures.",
    keywords: [
      "cms development services",
      "wordpress development agency",
      "headless cms development",
      "content management system",
      "editor friendly website",
    ],
  },
  "/services/maintenance-support": {
    title: "Website Maintenance & Support | Updates, Backups & Monitoring",
    description:
      "Ongoing website maintenance: security updates, backups, monitoring, and small improvements — keep your site secure, fast, and aligned with platform changes.",
    keywords: [
      "website maintenance services",
      "website support retainer",
      "wordpress maintenance",
      "shopify maintenance",
      "website security updates",
    ],
  },
  "/services/deployment-hosting": {
    title: "Deployment & Hosting Setup | CI/CD, SSL, CDN & Cloud Ops",
    description:
      "Deployment pipelines, hosting strategy, SSL, CDN configuration, and observability — reliable releases and environment best practices for production web apps.",
    keywords: [
      "web deployment services",
      "ci cd setup",
      "cloud hosting setup",
      "cdn configuration",
      "managed web deployment",
    ],
  },
  "/services/website-audit": {
    title: "Website Audit & Strategy | UX, SEO, Performance & Analytics",
    description:
      "Structured website audits covering UX friction, technical SEO, speed, and analytics — prioritized backlog with evidence, screenshots, and effort estimates.",
    keywords: [
      "website audit services",
      "technical seo audit",
      "ux audit website",
      "conversion audit",
      "digital strategy review",
    ],
  },
  "/services/conversion-optimization": {
    title: "Conversion Rate Optimization | Experiments & Funnel Improvements",
    description:
      "CRO focused on forms, CTAs, proof, and page flow — hypothesis-led changes measured in your analytics to lift leads and revenue.",
    keywords: [
      "conversion rate optimization",
      "cro services",
      "ab testing website",
      "funnel optimization",
      "lead conversion improvement",
    ],
  },
  "/portfolio": {
    title: "Portfolio: Shipped Projects by Kratecx",
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
    title: "Our Process | How Kratecx Builds Websites That Convert",
    description:
      "A clear, five-phase process from discovery and strategy to launch and optimisation — built to take your website from idea to business asset.",
    keywords: [
      "web design process",
      "website development process",
      "kratecx process",
    ],
  },
  "/faqs": {
    title: "FAQs | Timelines, Process, Support & IP | Kratecx",
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
    title: "Contact Kratecx | Start a Web, Shopify or SaaS Project",
    description:
      "Tell us about your project. We reply within one business day with next steps, a scoped plan and transparent pricing.",
    keywords: [
      "contact kratecx",
      "hire web agency",
      "start web project",
    ],
  },
  "/blog": {
    title: "Blog | Web, Shopify, WordPress & SaaS Insights | Kratecx",
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
