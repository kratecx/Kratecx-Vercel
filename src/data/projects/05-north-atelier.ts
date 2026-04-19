// src/data/projects/05-north-atelier.ts
import { TrendingUp, Target, ShieldCheck } from 'lucide-react';

export const project05 = {
  id: "05",
  hero: {
    category: "E‑Commerce Conversion",
    title: "North Atelier",
    clientType: "Premium Apparel Brand",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
    description: "A commerce rebuild engineered around product storytelling, discovery, and checkout discipline.",
    vLabel: "Add-to-Cart Rate",
    vValue: "+41",
    vUnit: "%",
    vTag: "Uplift vs. Legacy",
    cLabel: "Checkout Completion",
    cValue: "68.2",
    cUnit: "%",
    cTag: "Post-Cart Conversion"
  },
  problems: {
    reportDate: "Audit Report 2026.v5",
    sectionTitle: "Commerce Friction",
    subheading: "A premium brand presented like a generic catalog.",
    stickyTitle: "Buying Barriers",
    problems: [
      {
        title: "Weak Product Presentation",
        description: "Flat imagery, low-context thumbnails, and inconsistent crop ratios undermined the brand’s price positioning.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Navigation Overload",
        description: "Seven overlapping category structures forced shoppers to work, not browse.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "High Cart Abandonment",
        description: "Checkout demanded account creation, surprised users with shipping costs, and broke on mobile input.",
        priority: "REVENUE RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Commerce",
    mainHeadingBottom: "Discipline",
    mainDescription: "Elevate product presentation, collapse navigation into editorial collections, and rebuild checkout for mobile-first completion.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "VISUAL_BRAND",
        title: "EDITORIAL PRODUCT GRID",
        desc: "Consistent crops, contextual imagery, and typographic restraint across collections."
      },
      {
        id: "STRAT-02",
        tag: "DISCOVERY",
        title: "COLLECTION NARRATIVE",
        desc: "Seasonal stories replace redundant category trees."
      },
      {
        id: "STRAT-03",
        tag: "CHECKOUT",
        title: "FRICTIONLESS PATH",
        desc: "Guest checkout, transparent costs, and mobile-first input rebuild trust at the final step."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Retail",
    heroHeadingBottom: "Rebuilt",
    heroDescription: "A storefront designed like an editorial, engineered like a checkout system.",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000",
    section2Title: "Discovery Integrity",
    checkpoints: [
      { title: "Editorial Grid", text: "Unified crop ratios with consistent typographic rhythm." },
      { title: "Collection Stories", text: "Seasonal narratives replace redundant navigation." },
      { title: "PDP Depth", text: "Fit, fabric, and sizing logic surfaced before scroll." }
    ],
    section3TitleTop: "Checkout",
    section3TitleBottom: "Confidence",
    section3Description: "Transparent shipping, guest checkout, and mobile-first field logic engineered for completion.",
    section3ImageBack: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    parityChecks: [
      { title: "Transparent Costs", text: "Shipping and duties surfaced in-cart, never at the final step." },
      { title: "Guest Checkout", text: "Account creation optional, never required." },
      { title: "Mobile Input Logic", text: "Field validation rebuilt for one-thumb completion." }
    ],
    matrixTitleTop: "Commerce",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Flat ‘Add to Cart’ blending with body.",
        after_desc: "High-contrast primary action with live inventory.",
        rationale: "Clear intent surface lifts add-to-cart rate across catalog."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Forced account signup before purchase.",
        after_desc: "Guest checkout with optional save.",
        rationale: "Removing gate recovers high-intent mobile traffic."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Shipping revealed at final step.",
        after_desc: "Cost transparency from cart onward.",
        rationale: "Trust at the cart stage outperforms aggressive funneling."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Commerce",
    headingBottom: "Delivered",
    description: "A storefront that moved browse traffic into completed orders, on every device.",
    results: [
      { metric: "Add-to-Cart Rate", legacy: "4.1%", stable: "5.8%", icon: TrendingUp, logic: "PDP Storytelling" },
      { metric: "Checkout Completion", legacy: "41%", stable: "68.2%", icon: Target, logic: "Mobile-First Checkout" },
      { metric: "Return Rate", legacy: "18.4%", stable: "9.1%", icon: ShieldCheck, logic: "Fit & Sizing Clarity" }
    ],
    ctaTitleHighlight: "Revenue."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "06", title: "Laurel Skin", client: "Skincare Brand", outcome: "Conv Rate +36%", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200" },
      { id: "07", title: "Meridian Metrics", client: "Analytics Product", outcome: "Signups +74%", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" }
    ]
  }
};
