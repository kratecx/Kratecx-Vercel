/**
 * Portfolio index (grid) — shared by `pages/portfolio/index.astro` and `Footer.astro`.
 * Titles and images mirror the portfolio cards.
 */
import type { ImageMetadata } from "astro";

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

export type PortfolioGridProject = {
  id: string;
  title: string;
  tech: string;
  description: string;
  img: ImageMetadata;
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
        liveUrl: "https://activ8story.com/",
      },
      {
        id: "02",
        title: "Best Antennas",
        tech: "WordPress // Conversion UX",
        description: "Local service website built to drive direct calls, quote requests, and fast trust-building.",
        img: bestAntennaImg,
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
        liveUrl: "https://egfsolution.com/",
      },
      {
        id: "04",
        title: "Grays Travels",
        tech: "WordPress // Booking Flow",
        description: "Travel agency homepage designed to spotlight packages and generate booking inquiries.",
        img: graysTravelsImg,
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
        liveUrl: "https://www.craft-colors.de/",
      },
      {
        id: "05",
        title: "Abu Hamza Perfume",
        tech: "Shopify // Storefront",
        description: "Premium fragrance storefront structured for fast discovery, trust signals, and checkout flow.",
        img: perfumeImg,
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
        liveUrl: "https://system4solution.com/",
      },
      {
        id: "09",
        title: "Chatifai",
        tech: "AI SaaS // Shopify App",
        description: "AI-powered Shopify assistant website built to explain product value and drive trial signups.",
        img: chatifaiImg,
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
        liveUrl: "https://victorystore.pk/",
      },
      {
        id: "06",
        title: "QAS Gifts",
        tech: "WooCommerce // Catalog UX",
        description: "Corporate gifts store focused on category-first browsing and clear product merchandising.",
        img: qasGiftsImg,
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
