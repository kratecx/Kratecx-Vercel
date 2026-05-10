import type { ImageMetadata } from "astro";
import webImg from "../../assets/backend-services/web.png";
import ecomImg from "../../assets/backend-services/ecom.png";
import seoImg from "../../assets/backend-services/seo.png";
import speedImg from "../../assets/backend-services/speed.png";
import cloudImg from "../../assets/backend-services/cloud.png";
import serviceImg from "../../assets/backend-services/service.png";
import conversionImg from "../../assets/backend-services/conversion.png";
import auditImg from "../../assets/backend-services/audit.png";
import type {
  ServiceCaseStudyItem,
  ServiceDeliverableItem,
  ServiceFaqItem,
  ServiceFeatureItem,
  ServiceHeroContent,
  ServicePageSectionTitles,
} from "./types";

export type ServicePageModel = {
  heroImage: ImageMetadata;
  hero: ServiceHeroContent;
  sectionTitles: ServicePageSectionTitles;
  features: ServiceFeatureItem[];
  deliverables: ServiceDeliverableItem[];
  caseStudies: ServiceCaseStudyItem[];
  faqs: ServiceFaqItem[];
  jsonLd: { serviceName: string; serviceType: string };
};

const IC = {
  api: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  db: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  lock: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  zap: "M13 10V3L4 14h7v7l9-11h-7z",
  chart: "M3 3v18h18M7 12l4-4 4 4 6-6",
  search: "M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z",
};

function cs(
  img: ImageMetadata,
  links: [string, string] = ["/portfolio/01", "/portfolio"],
): ServiceCaseStudyItem[] {
  return [
    {
      tag: "Recent ship",
      title: "Client launch",
      desc: "Design system, performance baseline, and analytics set up for measurable growth.",
      image: img,
      link: links[0],
    },
    {
      tag: "Portfolio",
      title: "More work",
      desc: "Browse additional launches across industries and engagement models.",
      image: img,
      link: links[1],
    },
  ];
}

export const SERVICE_PAGES: Record<string, ServicePageModel> = {
  "business-websites": {
    heroImage: webImg,
    hero: {
      title: "BUSINESS",
      subtitle: "WEBSITES.",
      tag: "Trust And Leads",
      description:
        "Professional websites for companies and local services: fast loading, clear layout, contact forms, and search-friendly pages so visitors trust you and get in touch.",
      imageAlt: "Professional business website design and development",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "RECENT",
      caseStudiesTitleAccent: "LAUNCHES.",
      faqTitle: "PROJECT",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "Brand & layout",
        value:
          "Clear menus and headings, readable text, and layouts that lead people to contact you or book.",
        icon: IC.chart,
      },
      {
        label: "Lead capture",
        value:
          "Contact forms, email or CRM hooks, and prominent buttons so visitors know what to do next.",
        icon: IC.api,
      },
      {
        label: "Search-friendly setup",
        value:
          "Clean web addresses, basic structured data, and fast pages that help Google understand your site.",
        icon: IC.search,
      },
    ],
    deliverables: [
      {
        title: "Responsive site",
        description:
          "Mobile-first layouts, fast interaction targets, and consistent components across breakpoints.",
      },
      {
        title: "Content structure",
        description:
          "Reusable sections and an editorial model so your team can update copy without breaking design.",
      },
      {
        title: "Handover pack",
        description:
          "Documentation, analytics goals, and launch checklist so you can operate confidently post-go-live.",
      },
    ],
    caseStudies: cs(webImg),
    faqs: [
      {
        question: "How long does a typical business website take?",
        answer:
          "Most marketing sites land between four and ten weeks depending on copy readiness, number of templates, and integrations. You get a week-by-week plan after discovery.",
      },
      {
        question: "Do you work with our existing brand guidelines?",
        answer:
          "Yes. We implement your colors, type, and voice — and extend the system only where it improves clarity and conversion.",
      },
      {
        question: "What platform do you recommend?",
        answer:
          "We match stack to your team: lean static builds, headless setups, WordPress, or custom — whichever best balances speed, cost, and maintainability.",
      },
    ],
    jsonLd: {
      serviceName: "Business Website Development",
      serviceType: "Business Website Design",
    },
  },

  "ecommerce-stores": {
    heroImage: ecomImg,
    hero: {
      title: "E-COMMERCE",
      subtitle: "STORES.",
      tag: "Checkout And Scale",
      description:
        "Online stores that sell: easy product browsing, secure checkout, reviews and policies people trust, and fast pages on phones — for Shopify or a custom store.",
      imageAlt: "E-commerce online store development",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "STORE",
      caseStudiesTitleAccent: "STORIES.",
      faqTitle: "STORE",
      faqTitleAccent: "OPS.",
    },
    features: [
      {
        label: "Product browsing",
        value:
          "Categories, filters, and product pages that answer buyer questions and work with Google Shopping where needed.",
        icon: IC.api,
      },
      {
        label: "Payments & trust",
        value:
          "Smooth checkout, clear shipping and tax, and security people expect when they pay online.",
        icon: IC.lock,
      },
      {
        label: "Fast store pages",
        value:
          "Optimized images, smart loading, and lean code so your store feels quick on mobile and improves Google scores.",
        icon: IC.zap,
      },
    ],
    deliverables: [
      {
        title: "Store setup",
        description:
          "Theme customization or headless front end wired to your catalog, discounts, and operational workflows.",
      },
      {
        title: "Apps & integrations",
        description:
          "ERP, email, reviews, and fulfillment hooks scoped to what you actually need — avoiding plugin bloat.",
      },
      {
        title: "Launch playbook",
        description:
          "QA flows, analytics and pixel verification, and a rollout plan for campaigns and promos.",
      },
    ],
    caseStudies: cs(ecomImg),
    faqs: [
      {
        question: "Shopify or custom — how do you choose?",
        answer:
          "Shopify suits most growing brands needing a proven checkout and ecosystem. Custom stacks help when rules, pricing, or integrations are non-standard — we recommend after a short discovery.",
      },
      {
        question: "Can you migrate our existing catalog?",
        answer:
          "Yes. We plan URL redirects, handle variant and image imports, and test orders before DNS cutover to protect SEO and revenue.",
      },
      {
        question: "Do you handle international selling?",
        answer:
          "We configure multi-currency and market policies where the platform supports them, and document limits up front.",
      },
    ],
    jsonLd: {
      serviceName: "E-Commerce Website Development",
      serviceType: "E-Commerce Development",
    },
  },

  "custom-web-apps": {
    heroImage: webImg,
    hero: {
      title: "WEB",
      subtitle: "APPLICATIONS.",
      tag: "Product Build",
      description:
        "Browser-based tools for your team or customers: secure login, roles, databases, and connections to email, payments, or your other software.",
      imageAlt: "Custom web application development",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "PRODUCT",
      caseStudiesTitleAccent: "BUILDS.",
      faqTitle: "BUILD",
      faqTitleAccent: "NOTES.",
    },
    features: [
      {
        label: "APIs & data",
        value:
          "Stable APIs, checked inputs, and a database design that fits your usage and rules (including compliance where needed).",
        icon: IC.api,
      },
      {
        label: "Users & permissions",
        value:
          "Teams, roles, and secure sessions so the right people see the right data.",
        icon: IC.lock,
      },
      {
        label: "Reliable releases",
        value:
          "Test environment, automated checks where they help, and a release process you can repeat with confidence.",
        icon: IC.zap,
      },
    ],
    deliverables: [
      {
        title: "Product core",
        description:
          "Implemented workflows with documented APIs and environments your team can extend.",
      },
      {
        title: "Admin & reporting",
        description:
          "Operator views, exports, and guardrails that match how your staff actually works.",
      },
      {
        title: "Enablement",
        description:
          "Runbooks, access instructions, and knowledge transfer so adoption isn’t blocked on us.",
      },
    ],
    caseStudies: cs(webImg),
    faqs: [
      {
        question: "How do you scope an MVP?",
        answer:
          "We map jobs-to-be-done, ruthlessly prioritize workflows, and timebox integrations. The goal is a narrow launch that still delights core users.",
      },
      {
        question: "What about security reviews?",
        answer:
          "We follow OWASP-minded practices, encrypt secrets, and can align with your vendor questionnaire or pentest window.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer:
          "Yes — via APIs, webhooks, ETL, or secure file drops, depending on maturity and SLAs.",
      },
    ],
    jsonLd: {
      serviceName: "Custom Web Application Development",
      serviceType: "Web Application Development",
    },
  },

  "landing-pages": {
    heroImage: conversionImg,
    hero: {
      title: "LANDING",
      subtitle: "PAGES.",
      tag: "Campaign Conversion",
      description:
        "Single pages for ads and promotions: strong headline, proof, and forms hooked to your email or CRM — built to load fast and show what works.",
      imageAlt: "High-converting landing page design",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "CAMPAIGN",
      caseStudiesTitleAccent: "WINS.",
      faqTitle: "PPC",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "Message match",
        value:
          "Copy and design that match your ads so visitors feel they landed in the right place and ads perform better.",
        icon: IC.chart,
      },
      {
        label: "Fast load",
        value:
          "Light pages that open quickly on phones so you do not waste ad spend on bounces.",
        icon: IC.zap,
      },
      {
        label: "Tracking",
        value:
          "Thank-you pages and events set up so you can see leads and tie them back to campaigns.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Variant-ready layout",
        description:
          "Modular sections for fast tests on offer, form length, and social proof placement.",
      },
      {
        title: "Form & routing",
        description:
          "Validation, spam controls, and routing to email, Sheets, or your CRM as required.",
      },
      {
        title: "Experiment brief",
        description:
          "Hypotheses and measurement plan so marketing can iterate without guesswork.",
      },
    ],
    caseStudies: cs(conversionImg),
    faqs: [
      {
        question: "Do you work from our Figma files?",
        answer:
          "Yes — we implement existing designs or propose refinements when data suggests a change.",
      },
      {
        question: "How fast can a page go live?",
        answer:
          "Simple pages can ship in days once copy and brand assets are ready; complex integrations add QA time.",
      },
      {
        question: "Can you run A/B tests?",
        answer:
          "We integrate with your testing tool of choice and keep DOM IDs stable for experiment frameworks.",
      },
    ],
    jsonLd: {
      serviceName: "Landing Page Design & Development",
      serviceType: "Landing Page Development",
    },
  },

  "website-redesign": {
    heroImage: webImg,
    hero: {
      title: "SITE",
      subtitle: "REDESIGN.",
      tag: "Modern Website",
      description:
        "Refresh an outdated site with a modern look and faster pages. We move content carefully and set up redirects so you keep as much Google traffic as possible.",
      imageAlt: "Website redesign and modernization",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "BEFORE",
      caseStudiesTitleAccent: "/ AFTER.",
      faqTitle: "REDESIGN",
      faqTitleAccent: "RISKS.",
    },
    features: [
      {
        label: "Google-friendly move",
        value:
          "List of old and new URLs, redirects, and checks so search engines and visitors find the right pages after launch.",
        icon: IC.search,
      },
      {
        label: "Easier to use",
        value:
          "Clear menus, readable pages, and mobile-friendly layout guided by your analytics where helpful.",
        icon: IC.chart,
      },
      {
        label: "Consistent design",
        value:
          "Reusable components and a short style guide so new pages stay on-brand.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Migration plan",
        description:
          "Mapping legacy URLs, handling attachments, and prioritizing templates for phased rollout.",
      },
      {
        title: "Refreshed UI",
        description:
          "Updated layout, typography, and imagery that reflects today’s brand without gimmicks.",
      },
      {
        title: "QA & launch",
        description:
          "Cross-browser checks, form tests, and post-launch monitoring for errors and crawl issues.",
      },
    ],
    caseStudies: cs(webImg),
    faqs: [
      {
        question: "Will we lose rankings?",
        answer:
          "Risk is managed with redirects, sitemap updates, and staged validation. We plan launches to minimize volatility.",
      },
      {
        question: "Can we keep the same CMS?",
        answer:
          "Often yes — redesign doesn’t have to mean replatforming. We’ll advise if your tools block performance or editing velocity.",
      },
      {
        question: "How is content handled?",
        answer:
          "You can rewrite in parallel or we help tighten copy in key templates while preserving messages that convert.",
      },
    ],
    jsonLd: {
      serviceName: "Website Redesign Services",
      serviceType: "Website Redesign",
    },
  },

  seo: {
    heroImage: seoImg,
    hero: {
      title: "TECHNICAL",
      subtitle: "SEO.",
      tag: "Organic Growth",
      description:
        "Help your business get found on Google: page titles and descriptions, internal links, technical fixes, and faster pages — written for real people, not tricks.",
      imageAlt: "SEO optimization for websites",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "SEARCH",
      caseStudiesTitleAccent: "WINS.",
      faqTitle: "SEO",
      faqTitleAccent: "DETAILS.",
    },
    features: [
      {
        label: "On-page SEO",
        value:
          "Titles, descriptions, heading order, and duplicate-page fixes so Google understands each page once.",
        icon: IC.search,
      },
      {
        label: "Structured data",
        value:
          "Schema markup where it helps (rich results) with testing so it works as intended.",
        icon: IC.api,
      },
      {
        label: "Page speed for SEO",
        value:
          "Front-end improvements that support Google’s Core Web Vitals and a better user experience.",
        icon: IC.zap,
      },
    ],
    deliverables: [
      {
        title: "Audit backlog",
        description:
          "Prioritized issues with effort/impact so stakeholders know what to fix first.",
      },
      {
        title: "Template fixes",
        description:
          "Rollout across key templates: metadata, internal links, and media hygiene.",
      },
      {
        title: "Measurement",
        description:
          "Search Console alignment, annotation of releases, and reporting that ties to business goals.",
      },
    ],
    caseStudies: cs(seoImg),
    faqs: [
      {
        question: "Do you guarantee rankings?",
        answer:
          "No ethical SEO can. We focus on sustainable technical and content signals within Google’s guidelines.",
      },
      {
        question: "Is this separate from content writing?",
        answer:
          "This engagement centers technical and on-page SEO. Copy projects can run in parallel if you need net-new pages.",
      },
      {
        question: "How soon will we see movement?",
        answer:
          "Indexation and CTR tweaks can show quickly; competitive queries often need several update cycles.",
      },
    ],
    jsonLd: {
      serviceName: "SEO Services",
      serviceType: "Search Engine Optimization",
    },
  },

  "speed-optimization": {
    heroImage: speedImg,
    hero: {
      title: "PERFORMANCE",
      subtitle: "FIRST.",
      tag: "Website Speed",
      description:
        "Make your site load faster: smaller images, fewer heavy scripts, and smarter caching — especially on phones, where most visitors decide to stay or leave in seconds.",
      imageAlt: "Website speed and performance optimization",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "SPEED",
      caseStudiesTitleAccent: "GAINS.",
      faqTitle: "SPEED",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "Find the bottlenecks",
        value:
          "We use tools and real visitor data to see what actually slows the page down.",
        icon: IC.search,
      },
      {
        label: "Images & code",
        value:
          "Right image sizes and formats, lazy load where it helps, fonts and CSS that do not block the screen.",
        icon: IC.zap,
      },
      {
        label: "Third-party scripts",
        value:
          "Analytics, chat, and ads loaded in a controlled way so they hurt speed less.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Before/after report",
        description:
          "Lab and field metrics, with screenshots and release notes for stakeholders.",
      },
      {
        title: "Theme fixes",
        description:
          "Template-level changes safe for your stack — avoiding hacks that break on update.",
      },
      {
        title: "Guardrails",
        description:
          "Lightweight checklist so new content doesn’t undo performance wins.",
      },
    ],
    caseStudies: cs(speedImg),
    faqs: [
      {
        question: "Will this affect design?",
        answer:
          "We preserve visual intent while improving weight and render path — flagging trade-offs when they exist.",
      },
      {
        question: "Do you handle hosting?",
        answer:
          "We tune apps for your host/CDN; migration recommendations are optional if infrastructure is the limiter.",
      },
      {
        question: "What about Shopify or WordPress specifically?",
        answer:
          "Yes — we optimize within platform constraints, apps, and theme practices you rely on.",
      },
    ],
    jsonLd: {
      serviceName: "Website Speed Optimization",
      serviceType: "Web Performance Optimization",
    },
  },

  "cms-development": {
    heroImage: webImg,
    hero: {
      title: "CMS",
      subtitle: "SOLUTIONS.",
      tag: "Easy Editing",
      description:
        "A website your marketing team can update: WordPress, headless, or hybrid CMS with simple fields, previews, and layouts that do not break when you add content.",
      imageAlt: "CMS development and content management",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "CONTENT",
      caseStudiesTitleAccent: "OPS.",
      faqTitle: "CMS",
      faqTitleAccent: "CHOICE.",
    },
    features: [
      {
        label: "Content structure",
        value:
          "Fields and relationships that match how your team writes — not a one-size-fits-all drag-and-drop mess.",
        icon: IC.db,
      },
      {
        label: "Editor experience",
        value:
          "Preview before publish, user roles, and reusable blocks that keep branding consistent.",
        icon: IC.api,
      },
      {
        label: "Integrations",
        value:
          "Search, forms, and media tools connected with as few unstable plugins as possible.",
        icon: IC.lock,
      },
    ],
    deliverables: [
      {
        title: "Information model",
        description:
          "Content types, taxonomies, and migration notes from the old structure.",
      },
      {
        title: "Component library",
        description:
          "Composable blocks editors can reuse across campaigns and locales.",
      },
      {
        title: "Training",
        description:
          "Short video or live session plus a cheat sheet for your publishing team.",
      },
    ],
    caseStudies: cs(webImg),
    faqs: [
      {
        question: "Headless or traditional WordPress?",
        answer:
          "Headless helps multi-channel and strict front-end control; classic admin wins for editorial speed — we pick based on staff and roadmap.",
      },
      {
        question: "Can we migrate posts safely?",
        answer:
          "Yes — with redirect maps, featured images, and slug checks so traffic continuity is preserved.",
      },
      {
        question: "Who maintains plugins?",
        answer:
          "We document a minimal, supported set and can hand off updates or keep them under a care plan.",
      },
    ],
    jsonLd: {
      serviceName: "CMS Development Services",
      serviceType: "Content Management System Development",
    },
  },

  "maintenance-support": {
    heroImage: serviceImg,
    hero: {
      title: "CARE",
      subtitle: "PLANS.",
      tag: "Ongoing Care",
      description:
        "Keep your website secure and online: regular updates, backups, uptime checks, and small fixes — so browsers, WordPress, or Shopify changes do not catch you off guard.",
      imageAlt: "Website maintenance and ongoing support",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "UPTIME",
      caseStudiesTitleAccent: "STORIES.",
      faqTitle: "SUPPORT",
      faqTitleAccent: "SCOPE.",
    },
    features: [
      {
        label: "Updates",
        value:
          "Platform, theme, and plugin updates with a safe way to roll back if something breaks.",
        icon: IC.lock,
      },
      {
        label: "Monitoring",
        value:
          "Uptime and error alerts so we often spot problems before your customers do.",
        icon: IC.zap,
      },
      {
        label: "Small changes",
        value:
          "A regular slot for text tweaks, new sections, or minor features without a full project.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Runbook",
        description:
          "Hosting access, DNS, and escalation paths documented for your team.",
      },
      {
        title: "Monthly rhythm",
        description:
          "Defined windows for updates, reporting, and priority reviews.",
      },
      {
        title: "Incident response",
        description:
          "SLA-style expectations for restores and urgent fixes within agreed hours.",
      },
    ],
    caseStudies: cs(serviceImg),
    faqs: [
      {
        question: "What is not included?",
        answer:
          "Large redesigns, brand-new product features, or major integrations are scoped separately to keep monthly plans predictable.",
      },
      {
        question: "Do you support e-commerce during sales?",
        answer:
          "Yes — we can align higher-touch coverage around launches with advance notice.",
      },
      {
        question: "How do requests work?",
        answer:
          "Typically a single channel (email or tracker) with priorities agreed each month.",
      },
    ],
    jsonLd: {
      serviceName: "Website Maintenance & Support",
      serviceType: "Website Maintenance",
    },
  },

  "deployment-hosting": {
    heroImage: cloudImg,
    hero: {
      title: "DEPLOY",
      subtitle: "& HOST.",
      tag: "Cloud And Hosting",
      description:
        "Put your site or app live with confidence: hosting setup, HTTPS, caching, automated deploys, and choices that fit your traffic, budget, and security needs.",
      imageAlt: "Cloud deployment and web hosting setup",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "INFRA",
      caseStudiesTitleAccent: "STORIES.",
      faqTitle: "OPS",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "Deploy process",
        value:
          "Build, basic tests, and staged releases so updates are predictable and easy to undo.",
        icon: IC.zap,
      },
      {
        label: "CDN & caching",
        value:
          "Global CDN and cache settings tuned for your framework so pages load quickly worldwide.",
        icon: IC.api,
      },
      {
        label: "Access & secrets",
        value:
          "Separate live vs test environments and limited access so production stays safe.",
        icon: IC.lock,
      },
    ],
    deliverables: [
      {
        title: "Architecture brief",
        description:
          "Diagrammed environments with RTO/RPO assumptions documented.",
      },
      {
        title: "Automation",
        description:
          "Repeatable deploy scripts or platform-native pipelines with rollback.",
      },
      {
        title: "Handover",
        description:
          "Credentials, DNS records, and escalation contacts for your internal team.",
      },
    ],
    caseStudies: cs(cloudImg),
    faqs: [
      {
        question: "Do you manage servers for us?",
        answer:
          "We can operate or co-manage depending on compliance — many clients prefer managed platforms with guardrails.",
      },
      {
        question: "Can you containerize an existing app?",
        answer:
          "Yes, with local parity and health checks so containers behave like production.",
      },
      {
        question: "What observability do you include?",
        answer:
          "Baselines for logs, uptime, and error tracking; deeper APM can be layered where budgets allow.",
      },
    ],
    jsonLd: {
      serviceName: "Deployment & Hosting Services",
      serviceType: "Web Deployment & Hosting",
    },
  },

  "website-audit": {
    heroImage: auditImg,
    hero: {
      title: "AUDIT",
      subtitle: "PACK.",
      tag: "Clear Findings",
      description:
        "A full picture of what is wrong and what to fix: usability, speed, SEO, and analytics — with screenshots, priority order, and rough effort so you can plan the work.",
      imageAlt: "Website audit and digital strategy review",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "FINDINGS",
      caseStudiesTitleAccent: "BOARD.",
      faqTitle: "AUDIT",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "Technical & SEO",
        value:
          "Broken links, indexing issues, slow pages, and search problems — each noted with proof.",
        icon: IC.search,
      },
      {
        label: "UX & conversion",
        value:
          "Where people get stuck on key paths and what usually improves sign-ups or sales.",
        icon: IC.chart,
      },
      {
        label: "Analytics",
        value:
          "Whether goals and events are set up correctly so your numbers reflect real behavior.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Executive summary",
        description:
          "Risks, quick wins, and roadmap themes readable for non-technical stakeholders.",
      },
      {
        title: "Issue register",
        description:
          "Tickets-ready items with repro steps, URLs, and suggested owners.",
      },
      {
        title: "Workshop",
        description:
          "Optional walkthrough to align on priorities and sequencing.",
      },
    ],
    caseStudies: cs(auditImg),
    faqs: [
      {
        question: "How long does an audit take?",
        answer:
          "Most audits run one to three weeks depending on site size, access, and number of properties.",
      },
      {
        question: "Do you need analytics access?",
        answer:
          "It helps ground recommendations — we’ll list what we need up front and can work read-only.",
      },
      {
        question: "Can you implement fixes afterward?",
        answer:
          "Yes — many clients roll findings into an implementation phase with fixed or retainer models.",
      },
    ],
    jsonLd: {
      serviceName: "Website Audit & Strategy",
      serviceType: "Website Audit",
    },
  },

  "conversion-optimization": {
    heroImage: conversionImg,
    hero: {
      title: "CONVERT",
      subtitle: "HIGHER.",
      tag: "Better Results",
      description:
        "Raise sign-ups and sales by improving forms, buttons, offers, and page layout — then measure results in your analytics so decisions are based on data, not guesses.",
      imageAlt: "Conversion rate optimization for websites",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "EXPERIMENT",
      caseStudiesTitleAccent: "LOG.",
      faqTitle: "CRO",
      faqTitleAccent: "FAQ.",
    },
    features: [
      {
        label: "User journey",
        value:
          "See where visitors drop off from first click to purchase or sign-up.",
        icon: IC.chart,
      },
      {
        label: "A/B testing",
        value:
          "Compare versions with clear success metrics and enough traffic to trust the result.",
        icon: IC.zap,
      },
      {
        label: "Copy & layout",
        value:
          "Headlines, proof, and layout tweaks that match your brand and encourage action.",
        icon: IC.api,
      },
    ],
    deliverables: [
      {
        title: "Insight brief",
        description:
          "Baseline metrics, segments, and hypotheses tied to business goals.",
      },
      {
        title: "Implementation",
        description:
          "Variants built with clean tracking for unbiased reads.",
      },
      {
        title: "Readout",
        description:
          "Interpretation, next tests, and guardrails to avoid false positives.",
      },
    ],
    caseStudies: cs(conversionImg),
    faqs: [
      {
        question: "How much traffic do we need to test?",
        answer:
          "Meaningful tests require sufficient volume and time. For low traffic, we favor directional UX fixes and qualitative research.",
      },
      {
        question: "Do you write copy?",
        answer:
          "We can collaborate with your writer or draft alternatives for key modules when scoped.",
      },
      {
        question: "What tools do you support?",
        answer:
          "Google Optimize successors, VWO, Optimizely, or platform-native experiments where available.",
      },
    ],
    jsonLd: {
      serviceName: "Conversion Optimization Services",
      serviceType: "Conversion Rate Optimization",
    },
  },

  "backend-development": {
    heroImage: cloudImg,
    hero: {
      title: "BACKEND",
      subtitle: "SYSTEMS.",
      tag: "Secure Systems",
      description:
        "The server side of your product: APIs, databases, secure logins, and links to payment or email providers — built to stay fast and reliable as you grow.",
      imageAlt: "Backend development, APIs, and cloud infrastructure",
      primaryCTA: { text: "Start Your Journey", link: "/contact" },
    },
    sectionTitles: {
      caseStudiesTitle: "SYSTEM",
      caseStudiesTitleAccent: "RELEASES.",
      faqTitle: "SYSTEM",
      faqTitleAccent: "LOGISTICS.",
    },
    features: [
      {
        label: "APIs",
        value:
          "Fast, documented web services with clear errors so apps and partners can integrate safely.",
        icon: IC.api,
      },
      {
        label: "Database design",
        value:
          "Tables and indexes shaped for your queries so data stays quick as volume grows.",
        icon: IC.db,
      },
      {
        label: "Sign-in & roles",
        value:
          "Industry-standard login (OAuth, JWT) and role-based access for sensitive actions.",
        icon: IC.lock,
      },
    ],
    deliverables: [
      {
        title: "Production core",
        description:
          "Well-documented, secure APIs built for maintainable scaling paths.",
      },
      {
        title: "Cloud infrastructure",
        description:
          "Containerized environments with infrastructure-as-code patterns for AWS/GCP targets.",
      },
      {
        title: "Security suite",
        description:
          "Auth flows, automated tests for critical paths, and hardening checklists.",
      },
    ],
    caseStudies: cs(cloudImg),
    faqs: [
      {
        question: "How do you handle massive scaling?",
        answer:
          "We design stateless services, horizontal scale paths, and observability so bottlenecks are visible before users feel them.",
      },
      {
        question: "Is my data secure?",
        answer:
          "We apply TLS for transit, encryption-at-rest where supported, and principle-of-least-privilege access patterns.",
      },
      {
        question: "Do you provide API documentation?",
        answer:
          "Yes — OpenAPI-style docs ship alongside code so client teams integrate faster.",
      },
    ],
    jsonLd: {
      serviceName: "Backend Development Services",
      serviceType: "Backend Development",
    },
  },
};

export const SERVICE_PAGE_SLUGS = Object.keys(SERVICE_PAGES);

export function getServicePage(slug: string): ServicePageModel | undefined {
  return SERVICE_PAGES[slug];
}

export const backendDevelopmentPage = SERVICE_PAGES["backend-development"];
