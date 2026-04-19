// src/data/projects/04-corelane.ts
import { TrendingUp, Target, ShieldCheck, Zap } from 'lucide-react';

export const project04 = {
  id: "04",
  hero: {
    category: "AI Positioning",
    title: "Corelane AI",
    clientType: "Applied AI Platform",
    heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2000",
    description: "Translating a complex model into a product story buyers could evaluate in minutes — not white papers.",
    vLabel: "Demo Requests",
    vValue: "+88",
    vUnit: "%",
    vTag: "Enterprise Pipeline",
    cLabel: "Technical Clarity",
    cValue: "4.7",
    cUnit: "/5",
    cTag: "Buyer Comprehension Score"
  },
  problems: {
    reportDate: "Audit Report 2026.v4",
    sectionTitle: "Complexity Debt",
    subheading: "The platform was powerful. The site was unreadable.",
    stickyTitle: "Comprehension Blockers",
    problems: [
      {
        title: "Research-Paper Tone",
        description: "Copy read like a research preprint, alienating the operators who actually hold budget.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Invisible Use Cases",
        description: "Prospects couldn’t locate themselves in the product — no vertical framing, no day-in-the-life examples.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Abstract Visuals",
        description: "Gradient orbs and neural artwork crowded out real interface, eroding technical credibility.",
        priority: "TRUST RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Applied",
    mainHeadingBottom: "Intelligence",
    mainDescription: "Anchor the story in real workflows, show the interface, and let capability surface through evidence instead of jargon.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "PLAIN_LANGUAGE",
        title: "OPERATOR-FIRST COPY",
        desc: "Translate research into the language of the team that owns the KPI."
      },
      {
        id: "STRAT-02",
        tag: "USE_CASE",
        title: "VERTICAL FRAMING",
        desc: "Dedicated narratives for each high-value industry entry point."
      },
      {
        id: "STRAT-03",
        tag: "VISUAL_TRUTH",
        title: "REAL INTERFACE",
        desc: "Replace abstract art with annotated product walkthroughs."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Model",
    heroHeadingBottom: "To Market",
    heroDescription: "A site architecture that translates model power into operator-ready value.",
    heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2000",
    section2Title: "Story Integrity",
    checkpoints: [
      { title: "Operator Language", text: "Copy passes the non-technical buyer test." },
      { title: "Vertical Paths", text: "Dedicated narratives per target industry." },
      { title: "Annotated Product", text: "Interface imagery explains the ‘how’ without jargon." }
    ],
    section3TitleTop: "Credibility",
    section3TitleBottom: "Stack",
    section3Description: "Model cards, security posture, and benchmark data surfaced where enterprise buyers look first.",
    section3ImageBack: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1676299081847-824916de030a?q=80&w=1200",
    parityChecks: [
      { title: "Model Transparency", text: "Plain-language model cards per capability." },
      { title: "Security Posture", text: "SOC2, data residency, and retention surfaced inline." },
      { title: "Benchmark Proof", text: "Independent evaluations cited with source links." }
    ],
    matrixTitleTop: "Clarity",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "‘Request Access’ behind gated form.",
        after_desc: "‘Book Technical Demo’ with calendar.",
        rationale: "Named outcome beats vague gating for enterprise evaluators."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Generic demo form with no routing.",
        after_desc: "Vertical-aware intake with solutions handoff.",
        rationale: "Contextual routing keeps buyer momentum after submission."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Research blog buried in footer.",
        after_desc: "Benchmark evidence adjacent to pricing.",
        rationale: "Proof next to price neutralizes procurement hesitation."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Signal",
    headingBottom: "Amplified",
    description: "A rebuild that opened the category for non-technical buyers without diluting the research credibility.",
    results: [
      { metric: "Enterprise Demo Requests", legacy: "9 / mo", stable: "34 / mo", icon: TrendingUp, logic: "Vertical Entry Points" },
      { metric: "Time-On-Site", legacy: "42s", stable: "3m 18s", icon: Zap, logic: "Narrative Depth" },
      { metric: "Security Review Pass Rate", legacy: "48%", stable: "92%", icon: ShieldCheck, logic: "Trust Signals Surfaced" }
    ],
    ctaTitleHighlight: "Intelligence."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "05", title: "Apparel Store", client: "North Atelier", outcome: "ATC Rate +41%", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" },
      { id: "06", title: "Laurel Skin", client: "Skincare Brand", outcome: "Conv Rate +36%", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200" }
    ]
  }
};
