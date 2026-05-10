/**
 * Section titles for service pages — plain language + natural SEO terms (no jargon walls).
 */
export type ServiceStripHeading = {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
};

export type ServiceSectionHeadings = {
  features: ServiceStripHeading;
  deliverables: ServiceStripHeading;
};

export const SERVICE_SECTION_HEADINGS: Record<string, ServiceSectionHeadings> = {
  "business-websites": {
    features: {
      eyebrow: "What we include",
      title: "Your business",
      titleAccent: "website",
      intro:
        "Clear layout, fast pages, lead forms, and search-friendly structure so customers find you and contact you.",
    },
    deliverables: {
      eyebrow: "When we launch",
      title: "You",
      titleAccent: "receive",
      intro:
        "Page templates, forms and tools connected, handover notes, and a checklist so you can run the site with confidence.",
    },
  },
  "ecommerce-stores": {
    features: {
      eyebrow: "Online store",
      title: "Shopping",
      titleAccent: "experience",
      intro:
        "Product pages, secure checkout, fast mobile load times, and tools that help turn visitors into buyers.",
    },
    deliverables: {
      eyebrow: "Go live",
      title: "Store",
      titleAccent: "setup",
      intro:
        "Store configuration, payment and shipping setup, testing, and a launch plan before you take real orders.",
    },
  },
  "custom-web-apps": {
    features: {
      eyebrow: "How we build",
      title: "Web app",
      titleAccent: "features",
      intro:
        "Secure sign-in, APIs and data, and reliable releases so your software works for staff and customers every day.",
    },
    deliverables: {
      eyebrow: "What ships",
      title: "Live",
      titleAccent: "product",
      intro:
        "Working software, documentation, admin tools, and training so your team can use and extend the app.",
    },
  },
  "landing-pages": {
    features: {
      eyebrow: "Campaign pages",
      title: "Landing",
      titleAccent: "page",
      intro:
        "Fast loading, message that matches your ads, and simple tracking so you know which campaigns work.",
    },
    deliverables: {
      eyebrow: "Delivery",
      title: "Page",
      titleAccent: "handover",
      intro:
        "Built page, forms connected, and a short guide so marketing can launch and measure results.",
    },
  },
  "website-redesign": {
    features: {
      eyebrow: "Redesign",
      title: "Site",
      titleAccent: "upgrade",
      intro:
        "Modern look, easier navigation, and careful URL handling so Google rankings and traffic stay as strong as possible.",
    },
    deliverables: {
      eyebrow: "New site",
      title: "Design",
      titleAccent: "delivered",
      intro:
        "Updated pages, redirects from old links, tests before launch, and checks after go-live.",
    },
  },
  seo: {
    features: {
      eyebrow: "Search engine",
      title: "SEO",
      titleAccent: "work",
      intro:
        "Page titles, headings, links, structured data, and speed fixes so your site is easier for Google and people to use.",
    },
    deliverables: {
      eyebrow: "After review",
      title: "Optimization",
      titleAccent: "plan",
      intro:
        "Prioritized list of fixes, updates to key pages, and simple reporting on traffic and visibility.",
    },
  },
  "speed-optimization": {
    features: {
      eyebrow: "Website speed",
      title: "Faster",
      titleAccent: "loading",
      intro:
        "Finding slow images and scripts, then fixing them so pages feel snappy on phones and desktops.",
    },
    deliverables: {
      eyebrow: "Results",
      title: "Speed",
      titleAccent: "report",
      intro:
        "Before-and-after metrics, code or settings changes, and tips so new content does not slow the site down again.",
    },
  },
  "cms-development": {
    features: {
      eyebrow: "Content system",
      title: "Easy",
      titleAccent: "editing",
      intro:
        "Flexible fields, previews, and permissions so writers update the site without breaking the design.",
    },
    deliverables: {
      eyebrow: "Your team",
      title: "CMS",
      titleAccent: "handover",
      intro:
        "Reusable blocks, short training, and notes so staff can publish and update pages safely.",
    },
  },
  "maintenance-support": {
    features: {
      eyebrow: "Ongoing care",
      title: "Site",
      titleAccent: "support",
      intro:
        "Updates, backups, uptime checks, and small improvements on a steady schedule so your site stays secure and fast.",
    },
    deliverables: {
      eyebrow: "The plan",
      title: "Care",
      titleAccent: "details",
      intro:
        "What is included each month — updates, backups, how to ask for help, and response expectations.",
    },
  },
  "deployment-hosting": {
    features: {
      eyebrow: "Hosting & deploy",
      title: "Go",
      titleAccent: "live",
      intro:
        "Safe releases, SSL, caching, and hosting choices that fit your traffic, budget, and security needs.",
    },
    deliverables: {
      eyebrow: "Your team",
      title: "Run",
      titleAccent: "book",
      intro:
        "Access details, DNS notes, how to roll back a release, and who to call when something breaks.",
    },
  },
  "website-audit": {
    features: {
      eyebrow: "Full review",
      title: "Website",
      titleAccent: "audit",
      intro:
        "We check usability, speed, SEO, and analytics setup — with evidence so you know what to fix first.",
    },
    deliverables: {
      eyebrow: "Your report",
      title: "Clear",
      titleAccent: "findings",
      intro:
        "Plain-language summary, step-by-step issues with screenshots, and cost and effort so you can plan next steps.",
    },
  },
  "conversion-optimization": {
    features: {
      eyebrow: "More sales & leads",
      title: "Conversion",
      titleAccent: "focus",
      intro:
        "Clear funnels, better forms and buttons, and tests tied to your goals so improvements are based on data.",
    },
    deliverables: {
      eyebrow: "After testing",
      title: "Results",
      titleAccent: "summary",
      intro:
        "What we changed, what we measured, and what to try next — without guessing.",
    },
  },
  "backend-development": {
    features: {
      eyebrow: "Server & data",
      title: "Backend",
      titleAccent: "development",
      intro:
        "APIs, databases, secure logins, and integrations so your app handles traffic and data reliably.",
    },
    deliverables: {
      eyebrow: "Production",
      title: "What we",
      titleAccent: "ship",
      intro:
        "Live APIs, hosting setup, security basics, and docs so your team can operate and grow the system.",
    },
  },
};

export function getServiceSectionHeadings(
  slug: string,
): ServiceSectionHeadings | undefined {
  return SERVICE_SECTION_HEADINGS[slug];
}
