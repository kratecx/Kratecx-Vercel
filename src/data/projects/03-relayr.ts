// src/data/projects/03-relayr.ts
import { TrendingUp, Target, ShieldCheck } from 'lucide-react';

export const project03 = {
  id: "03",
  hero: {
    category: "SaaS Growth",
    title: "Relayr Cloud",
    clientType: "B2B SaaS Platform",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
    description: "A funnel-first landing rebuild that converted passive traffic into activated trial users.",
    vLabel: "Trial Signups",
    vValue: "+62",
    vUnit: "%",
    vTag: "Uplift vs. Legacy",
    cLabel: "Activation Rate",
    cValue: "47.8",
    cUnit: "%",
    cTag: "Day-7 Product Adoption"
  },
  problems: {
    reportDate: "Audit Report 2026.v3",
    sectionTitle: "Funnel Leakage",
    subheading: "Visitors understood the category — not the product.",
    stickyTitle: "Activation Blockers",
    problems: [
      {
        title: "Vague Value Proposition",
        description: "The hero described what the platform was, not what it removed from a buyer’s week. Intent never locked in.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Unsupported Claims",
        description: "Feature sections promised outcomes without showing interface, customers, or measurable proof.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Hidden Pricing Logic",
        description: "Pricing required three clicks and a live chat, triggering drop-off at the highest-intent moment.",
        priority: "CONVERSION RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Funnel",
    mainHeadingBottom: "Precision",
    mainDescription: "Rebuilding every section as a unit of conversion, with hero, proof, and pricing tuned for one decision.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "HERO_CLARITY",
        title: "OUTCOME-LED HEADLINE",
        desc: "Name the problem the product removes — in the first six seconds."
      },
      {
        id: "STRAT-02",
        tag: "PROOF_ARCHITECTURE",
        title: "VISUAL EVIDENCE",
        desc: "Product screens, named customers, and measurable outcomes stacked inline."
      },
      {
        id: "STRAT-03",
        tag: "PRICING_CLARITY",
        title: "TRANSPARENT TIERS",
        desc: "Public, self-serve pricing with a clear upgrade path."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Activation",
    heroHeadingBottom: "Funnel",
    heroDescription: "A single-page narrative engineered to move cold traffic into activated accounts.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
    section2Title: "Conversion Integrity",
    checkpoints: [
      { title: "Outcome Hero", text: "A headline anchored to a measurable buyer outcome." },
      { title: "Feature → Benefit", text: "Every feature block resolves into a named benefit." },
      { title: "Transparent Pricing", text: "Public tiers with trial CTA above the fold." }
    ],
    section3TitleTop: "Trust",
    section3TitleBottom: "Surface",
    section3Description: "Customer logos, live product screens, and credibility markers woven through every scroll depth.",
    section3ImageBack: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200",
    parityChecks: [
      { title: "Product Truth", text: "Real screens, not abstract illustrations." },
      { title: "Customer Voice", text: "Named testimonials with role, company, and outcome." },
      { title: "Security Signals", text: "Compliance and uptime markers surfaced near pricing." }
    ],
    matrixTitleTop: "Funnel",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "‘Request Demo’ fighting ‘Learn More’.",
        after_desc: "Single ‘Start Free Trial’ primary action.",
        rationale: "One high-conviction action concentrates intent signal."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "11-field demo request form.",
        after_desc: "Email-only trial with onboarding routing.",
        rationale: "Reducing input cost trades short-term data for activated pipeline."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Pricing hidden behind sales gate.",
        after_desc: "Public tiers, annotated for fit.",
        rationale: "Self-serve pricing builds trust before the first sales call."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Funnel",
    headingBottom: "Compounded",
    description: "A rebuild that moved the growth motion from hand-held demos to self-serve activation.",
    results: [
      { metric: "Trial Signups", legacy: "+12% QoQ", stable: "+62% QoQ", icon: TrendingUp, logic: "Hero & CTA Rework" },
      { metric: "Day-7 Activation", legacy: "18%", stable: "47.8%", icon: Target, logic: "Onboarding Path Clarity" },
      { metric: "Sales-Assisted Rate", legacy: "82%", stable: "34%", icon: ShieldCheck, logic: "Self-Serve Surface" }
    ],
    ctaTitleHighlight: "Activation."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "04", title: "AI Platform", client: "Corelane AI", outcome: "Demo Requests +88%", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200" },
      { id: "05", title: "Apparel Store", client: "North Atelier", outcome: "ATC Rate +41%", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" }
    ]
  }
};
