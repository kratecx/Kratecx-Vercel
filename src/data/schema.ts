/**
 * Reusable JSON-LD schema builders for Kratecx.
 * Each function returns a plain object ready for <SchemaOrg schema={...}>.
 */
import { SITE, SAME_AS } from "./seo";

/** Absolute URL helper. */
const abs = (path: string) =>
  path.startsWith("http") ? path : new URL(path, SITE.domain).href;

/** Organization — used site-wide (inject once in the root Layout). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.legalName,
    url: SITE.domain,
    logo: {
      "@type": "ImageObject",
      url: abs(SITE.logo),
    },
    description: SITE.description,
    sameAs: SAME_AS,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contact.email,
        telephone: SITE.contact.telephone,
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };
}

/** WebSite — enables Google sitelinks search box if you add a search page. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.domain}/#organization` },
    inLanguage: "en",
  };
}

/** WebPage — one per page. */
export function webPageSchema(opts: {
  url: string;
  title: string;
  description: string;
  breadcrumbsId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    isPartOf: { "@id": `${SITE.domain}/#website` },
    about: { "@id": `${SITE.domain}/#organization` },
    inLanguage: "en",
    ...(opts.breadcrumbsId ? { breadcrumb: { "@id": opts.breadcrumbsId } } : {}),
  };
}

/** BreadcrumbList — fed from the Breadcrumb component. */
export function breadcrumbSchema(
  crumbs: { label: string; href: string }[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: abs(c.href),
    })),
  };
}

/** FAQPage — takes an array of {question, answer}. */
export function faqSchema(
  faqs: { question: string; answer: string }[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Service — one per service page. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.serviceType ?? opts.name,
    areaServed: opts.areaServed ?? "Worldwide",
    provider: { "@id": `${SITE.domain}/#organization` },
  };
}

/** BlogPosting — every blog article page. */
export function articleSchema(opts: {
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  tags?: string[];
}) {
  const imageAbs = opts.image ? abs(opts.image) : abs(SITE.ogImage);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    headline: opts.title,
    description: opts.description,
    image: imageAbs,
    author: {
      "@type": "Person",
      name: opts.authorName ?? SITE.author,
      url: SITE.domain,
    },
    publisher: { "@id": `${SITE.domain}/#organization` },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    keywords: opts.tags?.join(", "),
  };
}
