import backendHeroImage from "../../assets/backend-services/security2.jpg";
import type {
  ServiceCaseStudyItem,
  ServiceDeliverableItem,
  ServiceFaqItem,
  ServiceFeatureItem,
  ServiceHeroContent,
  ServicePageSectionTitles,
} from "./types";

export const backendDevelopmentPage = {
  layoutTitle: "Backend Development — Kratecs",
  heroImage: backendHeroImage,
  hero: {
    title: "BACKEND",
    subtitle: "SYSTEMS.",
    tag: "Core_Infrastructure_v2",
    description:
      "Architecting high-concurrency server environments with 99.9% uptime. We build the engine that powers your digital scale.",
    imageAlt: "Backend infrastructure and security",
    primaryCTA: { text: "Start Your Journey", link: "/contact" },
  } satisfies ServiceHeroContent,

  sectionTitles: {
    caseStudiesTitle: "SYSTEM",
    caseStudiesTitleAccent: "RELEASES.",
    faqTitle: "SYSTEM",
    faqTitleAccent: "LOGISTICS.",
  } satisfies ServicePageSectionTitles,

  features: [
    {
      label: "RESTful APIs",
      value:
        "High-performance endpoints with comprehensive documentation and error handling.",
      icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    },
    {
      label: "Database Design",
      value: "Optimized schemas and indexing for fast data retrieval at scale.",
      icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    },
    {
      label: "Authentication",
      value:
        "Secure JWT, OAuth, and RBAC patterns to protect sensitive data and operations.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
  ] satisfies ServiceFeatureItem[],

  deliverables: [
    {
      title: "Production Core",
      description:
        "Well-documented, secure APIs built for high-scale environments.",
    },
    {
      title: "Cloud Infrastructure",
      description:
        "Dockerized environments with infrastructure-as-code for AWS/GCP.",
    },
    {
      title: "Security Suite",
      description:
        "Authentication, automated testing, and hardening with strong coverage.",
    },
  ] satisfies ServiceDeliverableItem[],

  caseStudies: [
    {
      tag: "FinTech Architecture",
      title: "Apex Ledger",
      desc: "Engineered a high-frequency banking dashboard for sub-100ms latency.",
      image: backendHeroImage,
      link: "/portfolio/01",
    },
    {
      tag: "Infrastructure Scale",
      title: "Vanguard Core",
      desc: "Global distribution patterns for real-time asset tracking and reliability.",
      image: backendHeroImage,
      link: "/portfolio",
    },
  ] satisfies ServiceCaseStudyItem[],

  faqs: [
    {
      question: "How do you handle massive scaling?",
      answer:
        "We use Kubernetes-based auto-scaling with well-defined service boundaries so response times stay predictable under load.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Deployments follow strong encryption in transit (TLS 1.3) and encryption at rest, with access control reviewed as part of delivery.",
    },
    {
      question: "Do you provide API documentation?",
      answer:
        "Yes. We ship OpenAPI/Swagger-style documentation alongside the codebase so your team can integrate quickly.",
    },
  ] satisfies ServiceFaqItem[],
};
