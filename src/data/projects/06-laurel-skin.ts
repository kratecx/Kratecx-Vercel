// src/data/projects/06-laurel-skin.ts
import { TrendingUp, Target, ShieldCheck } from 'lucide-react';

export const project06 = {
  id: "06",
  hero: {
    category: "Niche Commerce",
    title: "Laurel Skin",
    clientType: "Clinical Skincare Brand",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
    description: "A conversion-led product system where reviews, ingredients, and routines removed purchase hesitation.",
    vLabel: "Conversion Rate",
    vValue: "+36",
    vUnit: "%",
    vTag: "Uplift vs. Legacy",
    cLabel: "Repeat Purchase",
    cValue: "2.1",
    cUnit: "x",
    cTag: "90-Day Customer Cohort"
  },
  problems: {
    reportDate: "Audit Report 2026.v6",
    sectionTitle: "Purchase Hesitation",
    subheading: "Educated buyers needed proof the brand was not showing.",
    stickyTitle: "Trust Gaps",
    problems: [
      {
        title: "Ingredient Opacity",
        description: "Actives were listed without concentration, mechanism, or clinical framing — undermining the premium price point.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Buried Reviews",
        description: "Reviews lived on a tab nobody clicked, starving the PDP of the social proof that drives this category.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Missed Upsell Logic",
        description: "Routine bundles and complementary products were invisible, leaving AOV far below potential.",
        priority: "REVENUE RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Clinical",
    mainHeadingBottom: "Confidence",
    mainDescription: "Surface ingredient science, center review evidence, and restructure bundles around routines that match real skin goals.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "INGREDIENT_SCIENCE",
        title: "TRANSPARENT FORMULATION",
        desc: "Every active shown with concentration, role, and clinical framing."
      },
      {
        id: "STRAT-02",
        tag: "SOCIAL_PROOF",
        title: "REVIEW-FIRST PDP",
        desc: "Verified reviews surfaced above the fold, segmented by skin concern."
      },
      {
        id: "STRAT-03",
        tag: "ROUTINE_LOGIC",
        title: "BUNDLE ARCHITECTURE",
        desc: "AM / PM routines replace isolated product carts."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Skin",
    heroHeadingBottom: "Science",
    heroDescription: "A PDP system built around the questions educated skincare buyers actually ask.",
    heroImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
    section2Title: "Proof Integrity",
    checkpoints: [
      { title: "Actives Breakdown", text: "Each ingredient explained with role and concentration." },
      { title: "Review Surface", text: "Concern-filtered reviews above the fold on every PDP." },
      { title: "Routine Bundles", text: "AM / PM bundles mapped to specific skin outcomes." }
    ],
    section3TitleTop: "Trust",
    section3TitleBottom: "Signals",
    section3Description: "Derm-backed claims, clinical testing language, and guarantee policy woven across the buyer path.",
    section3ImageBack: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    parityChecks: [
      { title: "Clinical Framing", text: "Results studies cited with sample size and duration." },
      { title: "Guarantee Policy", text: "60-day refund restated at cart and checkout." },
      { title: "Dermatologist Voice", text: "Expert endorsement integrated without celebrity filler." }
    ],
    matrixTitleTop: "Conversion",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Single-product CTA, no routine context.",
        after_desc: "‘Build Your Routine’ path alongside ‘Buy Now’.",
        rationale: "Routine framing lifts basket size and repeat purchase."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Generic newsletter capture at footer.",
        after_desc: "Skin profile quiz feeding personalization.",
        rationale: "Quiz-based intake turns email captures into segmented revenue."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Reviews hidden behind a tab.",
        after_desc: "Concern-filtered reviews in the hero.",
        rationale: "Social proof at first contact removes hesitation before price."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Category",
    headingBottom: "Authority",
    description: "A PDP rebuild that converted educated skeptics into repeat customers.",
    results: [
      { metric: "Site-wide Conversion", legacy: "1.9%", stable: "2.6%", icon: TrendingUp, logic: "Review & Proof Surfacing" },
      { metric: "Average Order Value", legacy: "$48", stable: "$91", icon: Target, logic: "Routine Bundle Logic" },
      { metric: "90-Day Repeat Rate", legacy: "14%", stable: "29%", icon: ShieldCheck, logic: "Quiz-Led Personalization" }
    ],
    ctaTitleHighlight: "Loyalty."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "07", title: "Meridian Metrics", client: "Analytics Product", outcome: "Signups +74%", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" },
      { id: "08", title: "Haldren Cyber", client: "Security Campaign", outcome: "Registrations +3.1x", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" }
    ]
  }
};
