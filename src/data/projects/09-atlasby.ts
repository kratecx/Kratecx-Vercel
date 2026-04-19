// src/data/projects/09-atlasby.ts
import { TrendingUp, Target, ShieldCheck, Zap } from 'lucide-react';

export const project09 = {
  id: "09",
  hero: {
    category: "Corporate Redesign",
    title: "Atlasby Group",
    clientType: "Industrial Holdings Company",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
    description: "A full redesign that modernized a legacy industrial brand without compromising institutional trust.",
    vLabel: "Engagement Index",
    vValue: "2.4",
    vUnit: "x",
    vTag: "Session Depth Growth",
    cLabel: "Investor Inquiry",
    cValue: "+71",
    cUnit: "%",
    cTag: "Qualified Relations Pipeline"
  },
  problems: {
    reportDate: "Audit Report 2026.v9",
    sectionTitle: "Legacy Weight",
    subheading: "A 40-year-old brand frozen in a 2011 website.",
    stickyTitle: "Credibility Gaps",
    problems: [
      {
        title: "Outdated Interface Language",
        description: "Dense nav, stock skyline imagery, and serif-only typography made the firm feel static in a modern investor landscape.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Shallow Content Architecture",
        description: "Subsidiaries, investor relations, and ESG content lived in unrelated templates, breaking trust across audiences.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Inaccessible Information",
        description: "Legacy PDFs, no on-page search, and broken mobile layouts excluded both investors and press.",
        priority: "GOVERNANCE RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Institutional",
    mainHeadingBottom: "Modernization",
    mainDescription: "Retain the firm’s gravitas while rebuilding information architecture, accessibility, and editorial discipline across every template.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "UI_SYSTEM",
        title: "MODERN VISUAL LANGUAGE",
        desc: "Contemporary typography, restrained motion, and industrial photography that still reads as institutional."
      },
      {
        id: "STRAT-02",
        tag: "ARCHITECTURE",
        title: "AUDIENCE-LED STRUCTURE",
        desc: "Investors, press, and talent each get a distinct, purpose-built path."
      },
      {
        id: "STRAT-03",
        tag: "ACCESSIBILITY",
        title: "ENTERPRISE STANDARDS",
        desc: "WCAG 2.2 AA compliance with legacy PDFs translated into on-page content."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Legacy",
    heroHeadingBottom: "Rebuilt",
    heroDescription: "A redesign that earned trust with every audience without erasing the firm’s institutional weight.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
    section2Title: "Brand Integrity",
    checkpoints: [
      { title: "Typography System", text: "New serif / sans pairing reinforces heritage with modern clarity." },
      { title: "Motion Restraint", text: "Motion used only where it clarifies content, never to entertain." },
      { title: "Photography Direction", text: "Real facilities, real teams — stock imagery replaced." }
    ],
    section3TitleTop: "Information",
    section3TitleBottom: "Parity",
    section3Description: "Investor relations, ESG, and subsidiary content rebuilt on one coherent template system.",
    section3ImageBack: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    parityChecks: [
      { title: "Investor Relations", text: "Financials, reports, and governance unified under one template." },
      { title: "ESG Content", text: "Sustainability narrative moved from PDFs to on-page, search-indexed content." },
      { title: "Subsidiary Directory", text: "Each holding gets a consistent mini-site with unified structure." }
    ],
    matrixTitleTop: "Redesign",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Legacy ‘Contact Us’ buried in footer.",
        after_desc: "Audience-specific CTAs per template.",
        rationale: "Investors, press, and talent each need different next steps."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Generic contact form, unrouted.",
        after_desc: "Audience-aware routing with SLA commitments.",
        rationale: "Institutional trust requires a response promise, not a form."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "PDF-based investor reports.",
        after_desc: "On-page reports with downloadable extracts.",
        rationale: "Indexed content lifts organic reach and accessibility compliance."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Credibility",
    headingBottom: "Modernized",
    description: "A redesign that matched the firm’s stature to its digital presence.",
    results: [
      { metric: "Session Depth", legacy: "1.8 pages", stable: "4.3 pages", icon: TrendingUp, logic: "Architecture Rework" },
      { metric: "Investor Inquiries", legacy: "24 / qtr", stable: "41 / qtr", icon: Target, logic: "Audience-Led Paths" },
      { metric: "Accessibility Score", legacy: "64 / 100", stable: "97 / 100", icon: ShieldCheck, logic: "WCAG 2.2 AA Compliance" }
    ],
    ctaTitleHighlight: "Stature."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "10", title: "Brand Revamp", client: "Hearth & Oak", outcome: "Inquiries +3.4x", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" },
      { id: "01", title: "Vanguard Group", client: "Corporate Litigation", outcome: "Velocity Index 0.92", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200" }
    ]
  }
};
