/**
 * Portfolio index (grid) — shared by `pages/portfolio/index.astro` and `Footer.astro`.
 * Each project has a cover `img`; `gallery` holds extra screenshots from `src/assets/Portfolio/`.
 */
import type { ImageMetadata } from "astro";

/* —— Cover images —— */
import activ8StoryImg from "@/assets/Portfolio/activ 8 story .png";
import bestAntennaImg from "@/assets/Portfolio/Best Antenna.png";
import eAndGFinancialImg from "@/assets/Portfolio/E & G Financial Solutions.png";
import graysTravelsImg from "@/assets/Portfolio/Grays Travels.png";
import perfumeImg from "@/assets/Portfolio/Perfume.png";
import qasGiftsImg from "@/assets/Portfolio/qasgifts.png";
import system4SolutionsImg from "@/assets/Portfolio/System4 Solutions.png";
import victoryStoreImg from "@/assets/Portfolio/victory store.png";
import chatifaiImg from "@/assets/Portfolio/Chatify.png";
import craftColorsImg from "@/assets/Portfolio/craft colours.png";

/* —— Galleries (filename prefix → portfolio) —— */
import activStory2 from "@/assets/Portfolio/activ 8 story2.png";
import activStory3 from "@/assets/Portfolio/activ 8 story3.png";
import activStory4 from "@/assets/Portfolio/activ 8 story4.png";
import activStory5 from "@/assets/Portfolio/activ 8 story5.png";
import activStory6 from "@/assets/Portfolio/activ 8 story6.png";
import activStory7 from "@/assets/Portfolio/activ 8 story7.png";

import antenna1 from "@/assets/Portfolio/antenna1.png";
import antenna2 from "@/assets/Portfolio/antenna2.png";
import antenna3 from "@/assets/Portfolio/antenna3.png";
import antenna4 from "@/assets/Portfolio/antenna4.png";
import antenna5 from "@/assets/Portfolio/antenna5.png";
import antenna6 from "@/assets/Portfolio/antenna6.png";

import efg1 from "@/assets/Portfolio/efg1.png";
import efg2 from "@/assets/Portfolio/efg2.png";
import efg3 from "@/assets/Portfolio/efg3.png";
import efg4 from "@/assets/Portfolio/efg4.png";
import efg5 from "@/assets/Portfolio/efg5.png";
import efg6 from "@/assets/Portfolio/efg6.png";

import gray1 from "@/assets/Portfolio/gray1.png";
import gray2 from "@/assets/Portfolio/gray2.png";
import gray3 from "@/assets/Portfolio/gray3.png";
import gray4 from "@/assets/Portfolio/gray4.png";
import gray5 from "@/assets/Portfolio/gray5.png";
import gray6 from "@/assets/Portfolio/gray6.png";

import craft1 from "@/assets/Portfolio/craft1.png";
import craft2 from "@/assets/Portfolio/craft2.png";
import craft3 from "@/assets/Portfolio/craft3.png";
import craft4 from "@/assets/Portfolio/craft4.png";
import craft5 from "@/assets/Portfolio/craft5.png";
import craft6 from "@/assets/Portfolio/craft6.png";

import hamza1 from "@/assets/Portfolio/hamza1.png";
import hamza2 from "@/assets/Portfolio/hamza2.png";
import hamza3 from "@/assets/Portfolio/hamza3.png";
import hamza4 from "@/assets/Portfolio/hamza4.png";
import hamza5 from "@/assets/Portfolio/hamza5.png";
import hamza6 from "@/assets/Portfolio/hamza6.png";

import chatify1 from "@/assets/Portfolio/chatify1.png";
import chatify2 from "@/assets/Portfolio/chatify2.png";
import chatify3 from "@/assets/Portfolio/chatify3.png";
import chatify4 from "@/assets/Portfolio/chatify4.png";
import chatify5 from "@/assets/Portfolio/chatify5.png";
import chatify6 from "@/assets/Portfolio/chatify6.png";

import sys1 from "@/assets/Portfolio/sys1.png";
import sys2 from "@/assets/Portfolio/sys2.png";
import sys3 from "@/assets/Portfolio/sys3.png";
import sys4 from "@/assets/Portfolio/sys4.png";
import sys5 from "@/assets/Portfolio/sys5.png";
import sys6 from "@/assets/Portfolio/sys6.png";

import vic1 from "@/assets/Portfolio/vic1.png";
import vic2 from "@/assets/Portfolio/vic2.png";
import vic3 from "@/assets/Portfolio/vic3.png";
import vic4 from "@/assets/Portfolio/vic4.png";
import vic5 from "@/assets/Portfolio/vic5.png";
import vic6 from "@/assets/Portfolio/vic6.png";

import qas1 from "@/assets/Portfolio/qas1.png";
import qas2 from "@/assets/Portfolio/qas2.png";
import qas3 from "@/assets/Portfolio/qas3.png";
import qas4 from "@/assets/Portfolio/qas4.png";
import qas5 from "@/assets/Portfolio/qas5.png";
import qas6 from "@/assets/Portfolio/qas6.png";

export type PortfolioGridProject = {
  id: string;
  title: string;
  tech: string;
  description: string;
  img: ImageMetadata;
  /** Extra screenshots for case-study / detail layouts (excluding cover unless you omit duplicate). */
  gallery?: ImageMetadata[];
  liveUrl: string;
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
    id: "business-websites",
    heading: "Business Websites",
    subheading: "Professional Presence & Lead Generation",
    desc: "Business-focused websites built to improve brand trust, communicate services clearly, and generate quality leads.",
    projects: [
      {
        id: "01",
        title: "Activ8 Story",
        tech: "WordPress // Elementor",
        description: "Corporate business website focused on service visibility and consultation-driven conversions.",
        img: activ8StoryImg,
        gallery: [activStory2, activStory3, activStory4, activStory5, activStory6, activStory7],
        liveUrl: "https://activ8story.com/",
      },
      {
        id: "02",
        title: "Best Antennas",
        tech: "WordPress // Conversion UX",
        description: "Local service website built to drive direct calls, quote requests, and fast trust-building.",
        img: bestAntennaImg,
        gallery: [antenna1, antenna2, antenna3, antenna4, antenna5, antenna6],
        liveUrl: "https://www.bestantennas.com.au/",
      },
    ],
  },
  {
    id: "wordpress-websites",
    heading: "WordPress Websites",
    subheading: "Scalable CMS Websites",
    desc: "WordPress websites structured for easy content management, strong SEO foundations, and better conversion flow.",
    projects: [
      {
        id: "03",
        title: "E & G Financial Solutions",
        tech: "WordPress // Custom Theme",
        description: "Financial solutions site with a credibility-first layout and clear lead capture touchpoints.",
        img: eAndGFinancialImg,
        gallery: [efg1, efg2, efg3, efg4, efg5, efg6],
        liveUrl: "https://egfsolution.com/",
      },
      {
        id: "04",
        title: "Grays Travels",
        tech: "WordPress // Booking Flow",
        description: "Travel agency homepage designed to spotlight packages and generate booking inquiries.",
        img: graysTravelsImg,
        gallery: [gray1, gray2, gray3, gray4, gray5, gray6],
        liveUrl: "https://graystravels.com/",
      },
    ],
  },
  {
    id: "shopify-stores",
    heading: "Shopify Stores",
    subheading: "High-Converting E-Commerce",
    desc: "Shopify and store-focused builds crafted for conversion, product discovery, and smooth purchase journeys.",
    projects: [
      {
        id: "10",
        title: "Craft Colors",
        tech: "Shopify // E-Commerce",
        description: "Wall paint Shopify store focused on clean product browsing, color-led merchandising, and checkout flow.",
        img: craftColorsImg,
        gallery: [craft1, craft2, craft3, craft4, craft5, craft6],
        liveUrl: "https://www.craft-colors.de/",
      },
      {
        id: "05",
        title: "Abu Hamza Perfume",
        tech: "Shopify // Storefront",
        description: "Premium fragrance storefront structured for fast discovery, trust signals, and checkout flow.",
        img: perfumeImg,
        gallery: [hamza1, hamza2, hamza3, hamza4, hamza5, hamza6],
        liveUrl: "https://abuhamza.com/",
      },
    ],
  },
  {
    id: "ai-saas-platforms",
    heading: "AI-SaaS Platforms",
    subheading: "Product Positioning & Growth",
    desc: "Platform-style websites designed to explain product value quickly, build trust, and support SaaS growth.",
    projects: [
      {
        id: "07",
        title: "System4 Solutions",
        tech: "SaaS UI // Product Marketing",
        description: "Platform-focused experience with strong messaging hierarchy and conversion-centered layout.",
        img: system4SolutionsImg,
        gallery: [sys1, sys2, sys3, sys4, sys5, sys6],
        liveUrl: "https://system4solution.com/",
      },
      {
        id: "09",
        title: "Chatifai",
        tech: "AI SaaS // Shopify App",
        description: "AI-powered Shopify assistant website built to explain product value and drive trial signups.",
        img: chatifaiImg,
        gallery: [chatify1, chatify2, chatify3, chatify4, chatify5, chatify6],
        liveUrl: "https://chatifai.eu/",
      },
    ],
  },
  {
    id: "landing-websites",
    heading: "Landing Websites",
    subheading: "Focused Conversion Pages",
    desc: "Campaign-ready landing pages built for clarity, speed, and measurable lead conversion performance.",
    projects: [
      {
        id: "08",
        title: "Victory Store",
        tech: "Landing UX // Retail Campaign",
        description: "Retail-focused landing layout with strong category highlights and clear conversion pathways.",
        img: victoryStoreImg,
        gallery: [vic1, vic2, vic3, vic4, vic5, vic6],
        liveUrl: "https://victorystore.pk/",
      },
      {
        id: "06",
        title: "QAS Gifts",
        tech: "WooCommerce // Catalog UX",
        description: "Corporate gifts store focused on category-first browsing and clear product merchandising.",
        img: qasGiftsImg,
        gallery: [qas1, qas2, qas3, qas4, qas5, qas6],
        liveUrl: "https://qasgifts.ae/",
      },
    ],
  },
];

export const portfolioFilters = [
  { label: "Business Websites", id: "business-websites" },
  { label: "WordPress Websites", id: "wordpress-websites" },
  { label: "Shopify Stores", id: "shopify-stores" },
  { label: "AI-SaaS Platforms", id: "ai-saas-platforms" },
  { label: "Landing Websites", id: "landing-websites" },
] as const;

/** Flat list for footer “Our Works” — same order as portfolio index. */
export const portfolioCaseStudiesFlat = portfolioCategories.flatMap((cat) =>
  cat.projects.map((p) => ({
    title: p.title,
    href: `/portfolio/${p.id}` as const,
  })),
);
