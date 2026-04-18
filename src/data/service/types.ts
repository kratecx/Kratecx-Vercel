import type { ImageMetadata } from "astro";

/** Hero block (image passed separately when using `astro:assets` imports). */
export type ServiceHeroContent = {
  title: string;
  subtitle?: string;
  tag?: string;
  description: string;
  imageAlt?: string;
  primaryCTA?: { text: string; link: string };
};

export type ServiceFeatureItem = {
  label: string;
  value: string;
  icon: string;
};

export type ServiceDeliverableItem = {
  title: string;
  description: string;
};

/** Case study card — `image` may be a remote URL string or imported `ImageMetadata`. */
export type ServiceCaseStudyItem = {
  tag: string;
  title: string;
  desc: string;
  image: string | ImageMetadata;
  link: string;
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServicePageSectionTitles = {
  caseStudiesTitle: string;
  caseStudiesTitleAccent: string;
  faqTitle: string;
  faqTitleAccent: string;
};
