/**
 * Single source of truth for services grid (ServicesCards) and nav dropdown (Header).
 */
export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const servicesCatalog: ServiceCard[] = [
  {
    title: "Business Websites",
    description:
      "Professional websites designed to build trust, establish credibility, and generate consistent leads for your business.",
    href: "/services/business-websites",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "E-Commerce Websites",
    description:
      "High-performance online stores built to increase conversions, improve user experience, and drive more sales.",
    href: "/services/ecommerce-stores",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Web Applications",
    description:
      "Custom-built web applications tailored to your business processes and operational needs.",
    href: "/services/custom-web-apps",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages built to capture leads and maximize your marketing results.",
    href: "/services/landing-pages",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern, high-performing platforms that improve trust and engagement.",
    href: "/services/website-redesign",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "On-Page & Technical SEO",
    description:
      "Optimize your website structure and content to improve visibility, rankings, and organic traffic.",
    href: "/services/seo",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Performance Optimization",
    description:
      "Improve speed and performance to reduce bounce rates and deliver a smooth user experience.",
    href: "/services/speed-optimization",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "CMS Solutions",
    description:
      "Flexible content management systems that allow you to easily manage and update your website.",
    href: "/services/cms-development",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing support to keep your website secure, updated, and performing at its best.",
    href: "/services/maintenance-support",
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  },
  {
    title: "Deployment & Hosting",
    description:
      "Reliable deployment and hosting solutions to ensure your website runs smoothly and securely.",
    href: "/services/deployment-hosting",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Website Audit & Strategy",
    description:
      "A detailed analysis of your current website with clear recommendations to improve performance, trust, and conversions.",
    href: "/services/website-audit",
    icon: "M9 17v-6h13M9 5h13M5 12h.01M5 19h.01M5 5h.01",
  },
  {
    title: "Conversion Optimization",
    description:
      "Improve how visitors interact with your website to increase leads, inquiries, and overall business results.",
    href: "/services/conversion-optimization",
    icon: "M13 17h8m0 0v-8m0 8L3 3",
  },
];
