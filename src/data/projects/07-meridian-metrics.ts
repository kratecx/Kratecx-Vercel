// src/data/projects/07-meridian-metrics.ts
import { TrendingUp, Target, ShieldCheck, Zap } from 'lucide-react';

export const project07 = {
  id: "07",
  hero: {
    category: "Landing Conversion",
    title: "Meridian Metrics",
    clientType: "AI Analytics Product",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    description: "A single-page landing engineered as a focused conversion unit for paid acquisition.",
    vLabel: "Signup Rate",
    vValue: "+74",
    vUnit: "%",
    vTag: "Paid Traffic Cohort",
    cLabel: "Bounce Reduction",
    cValue: "-48",
    cUnit: "%",
    cTag: "First-Visit Engagement"
  },
  problems: {
    reportDate: "Audit Report 2026.v7",
    sectionTitle: "Attention Leakage",
    subheading: "Paid traffic arrived, read three seconds, and left.",
    stickyTitle: "Message Friction",
    problems: [
      {
        title: "Cluttered Above-The-Fold",
        description: "Three competing headlines, two CTAs, and a video carousel split attention before the value landed.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Feature-Centric Copy",
        description: "The page listed capabilities, not outcomes, so paid visitors never saw themselves in the product.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Soft CTA Pattern",
        description: "CTA copy defaulted to ‘Learn More’, wasting the intent of a visitor who already clicked an ad.",
        priority: "CONVERSION RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Single",
    mainHeadingBottom: "Decision Page",
    mainDescription: "One headline, one benefit stack, one action — engineered to convert a specific ad cohort, not a general audience.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "ABOVE_FOLD",
        title: "SIX-SECOND CLARITY",
        desc: "A single headline that names the user, the problem, and the outcome."
      },
      {
        id: "STRAT-02",
        tag: "STORY_STACK",
        title: "FEATURE → BENEFIT",
        desc: "Every feature collapses into a named, measurable benefit."
      },
      {
        id: "STRAT-03",
        tag: "CTA_HIERARCHY",
        title: "ONE ACTION PATH",
        desc: "Single primary action repeated at each scroll depth."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Landing",
    heroHeadingBottom: "Precision",
    heroDescription: "A landing page tuned for one paid cohort, one decision, one action.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    section2Title: "Message Integrity",
    checkpoints: [
      { title: "Named Audience", text: "Hero speaks to one buyer persona, not the market." },
      { title: "Benefit Stack", text: "Features rewritten as outcomes with measurable framing." },
      { title: "Testimonial Anchors", text: "Each section closes with a short, named proof point." }
    ],
    section3TitleTop: "Proof",
    section3TitleBottom: "Cadence",
    section3Description: "Social proof, product imagery, and measurable outcomes repeated at every scroll depth.",
    section3ImageBack: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    parityChecks: [
      { title: "Named Customers", text: "Logos replaced with short, attributed outcome quotes." },
      { title: "Interface Proof", text: "Real dashboard imagery, no abstract gradients." },
      { title: "Outcome Metrics", text: "Before / after figures embedded beside every claim." }
    ],
    matrixTitleTop: "Landing",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "‘Learn More’ cloned five times.",
        after_desc: "‘Start Free Trial’ as single action.",
        rationale: "Concentrating intent reduces decision fatigue."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Eight-field marketing form.",
        after_desc: "Email-only capture, enrichment post-signup.",
        rationale: "Less up-front input lifts paid-traffic conversion."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Pricing omitted from landing page.",
        after_desc: "Transparent tiers above the final CTA.",
        rationale: "Public pricing closes the decision inside the ad session."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Landing",
    headingBottom: "Yield",
    description: "A page rebuilt around the ad cohort that actually pays the bills.",
    results: [
      { metric: "Signup Rate", legacy: "2.4%", stable: "4.2%", icon: TrendingUp, logic: "Hero & CTA Focus" },
      { metric: "Bounce Rate", legacy: "71%", stable: "37%", icon: Zap, logic: "Message-Match Alignment" },
      { metric: "Cost Per Trial", legacy: "$38", stable: "$14", icon: Target, logic: "Conversion Rate Lift" }
    ],
    ctaTitleHighlight: "Precision."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "08", title: "Security Campaign", client: "Haldren Cyber", outcome: "Registrations +3.1x", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200" },
      { id: "09", title: "Corporate Redesign", client: "Atlasby Group", outcome: "Engagement +2.4x", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" }
    ]
  }
};
