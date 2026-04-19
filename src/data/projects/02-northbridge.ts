// src/data/projects/02-northbridge.ts
import { TrendingUp, Target, ShieldCheck, Zap } from 'lucide-react';

export const project02 = {
  id: "02",
  hero: {
    category: "Authority Positioning",
    title: "Northbridge Partners",
    clientType: "Digital Consulting Firm",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000",
    description: "A narrative-driven rebuild that turned a scattered service list into a clear, authority-led consulting brand.",
    vLabel: "Qualified Leads",
    vValue: "2.4",
    vUnit: "x",
    vTag: "Month-Over-Month Growth",
    cLabel: "Message Clarity",
    cValue: "91",
    cUnit: "%",
    cTag: "User Comprehension Score"
  },
  problems: {
    reportDate: "Audit Report 2026.v2",
    sectionTitle: "Positioning Drift",
    subheading: "Why prospects read the site but never booked a call.",
    stickyTitle: "Authority Gaps",
    problems: [
      {
        title: "Undefined Service Ladder",
        description: "Five service lines competed for attention with no hierarchy, leaving buyers unsure which engagement matched their stage.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Thin Proof Surface",
        description: "Case work lived on disconnected PDFs, breaking the evidence trail that senior buyers expect before a first call.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Weak Narrative Spine",
        description: "The homepage described capabilities, not an opinion, so the firm felt interchangeable with every other agency.",
        priority: "STRATEGIC RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Consulting",
    mainHeadingBottom: "Architecture",
    mainDescription: "Rebuilding the site around a defensible point of view, with service ladders and proof tightly stitched to every claim.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "NARRATIVE",
        title: "POINT-OF-VIEW FIRST",
        desc: "A homepage that leads with an opinion buyers can agree or disagree with."
      },
      {
        id: "STRAT-02",
        tag: "SERVICE_LADDER",
        title: "ENGAGEMENT TIERING",
        desc: "Three clear entry points, mapped to buyer maturity and budget."
      },
      {
        id: "STRAT-03",
        tag: "PROOF_FABRIC",
        title: "EVIDENCE AT EVERY CLAIM",
        desc: "Case excerpts and metrics embedded inline with each service promise."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Authority",
    heroHeadingBottom: "Framework",
    heroDescription: "A homepage engineered around one thesis, reinforced by proof at every scroll depth.",
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000",
    section2Title: "Narrative Integrity",
    checkpoints: [
      { title: "Hero With A Thesis", text: "Opens on a specific market opinion, not a tagline." },
      { title: "Layered Services", text: "Each offering collapses into a decision-ready card." },
      { title: "Inline Case Proof", text: "Every claim is anchored to a named engagement." }
    ],
    section3TitleTop: "Signal",
    section3TitleBottom: "Discipline",
    section3Description: "Consistent typographic rhythm, proof density, and CTA weighting across every page template.",
    section3ImageBack: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
    parityChecks: [
      { title: "Editorial Tone", text: "One voice across services, insights, and case studies." },
      { title: "Proof Density", text: "Metrics and client logos surfaced within two scrolls." },
      { title: "CTA Hierarchy", text: "Primary action on every template maps to a single lead path." }
    ],
    matrixTitleTop: "Positioning",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Generic ‘contact us’ repeated across pages.",
        after_desc: "Single ‘Book a Strategy Call’ path.",
        rationale: "Funneling every template into one action compounds pipeline clarity."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Long forms asking fields nobody reads.",
        after_desc: "Three-field qualifier with follow-up routing.",
        rationale: "Lower friction raises reply rate without diluting lead quality."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Services hidden behind generic descriptions.",
        after_desc: "Outcome-led service cards with proof inline.",
        rationale: "Buyers commit to outcomes, not capability lists."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Authority",
    headingBottom: "Realized",
    description: "A positioning rebuild that moved the firm from commodity vendor to considered advisor.",
    results: [
      { metric: "Qualified Lead Volume", legacy: "28 / mo", stable: "67 / mo", icon: TrendingUp, logic: "Clearer Service Ladder" },
      { metric: "Avg Deal Size", legacy: "$8.4k", stable: "$21.2k", icon: Target, logic: "Higher-Intent Inquiries" },
      { metric: "Message Clarity Score", legacy: "54%", stable: "91%", icon: ShieldCheck, logic: "Narrative Realignment" }
    ],
    ctaTitleHighlight: "Clarity."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "03", title: "SaaS Startup", client: "Relayr Cloud", outcome: "Trial Signups +62%", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" },
      { id: "04", title: "AI Platform", client: "Corelane AI", outcome: "Demo Requests +88%", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1200" }
    ]
  }
};
