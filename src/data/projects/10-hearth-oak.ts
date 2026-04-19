// src/data/projects/10-hearth-oak.ts
import { TrendingUp, Target, ShieldCheck } from 'lucide-react';

export const project10 = {
  id: "10",
  hero: {
    category: "Small Business Redesign",
    title: "Hearth & Oak",
    clientType: "Family-Owned Home Services",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    description: "A practical redesign that turned a local operator’s outdated site into a reliable lead engine.",
    vLabel: "Inquiry Volume",
    vValue: "3.4",
    vUnit: "x",
    vTag: "Monthly Form & Call Growth",
    cLabel: "Mobile Conversion",
    cValue: "+112",
    cUnit: "%",
    cTag: "Device-Specific Uplift"
  },
  problems: {
    reportDate: "Audit Report 2026.v10",
    sectionTitle: "Main Street Drift",
    subheading: "A 20-year-old business presented by a 10-year-old website.",
    stickyTitle: "Local Barriers",
    problems: [
      {
        title: "Dated Brand Expression",
        description: "Clip-art logo, low-resolution imagery, and inconsistent color use eroded the trust the business had earned offline.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Invisible On Mobile",
        description: "Over 70% of traffic arrived on mobile, onto a desktop-only site where the phone number was three taps away.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Weak Service Framing",
        description: "Six services on one long page, no structure, no pricing language — visitors left without knowing what to ask for.",
        priority: "LEAD RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Local",
    mainHeadingBottom: "Credibility",
    mainDescription: "Rebrand visuals, restructure services, and rebuild the site mobile-first so local intent converts on first tap.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "REBRAND",
        title: "CLEAN VISUAL IDENTITY",
        desc: "New mark, typographic system, and photography standard that match the quality of the offline work."
      },
      {
        id: "STRAT-02",
        tag: "CONTENT",
        title: "SERVICE CLARITY",
        desc: "Each service gets its own page with scope, price band, and ‘what happens next’."
      },
      {
        id: "STRAT-03",
        tag: "MOBILE_FIRST",
        title: "ONE-TAP INTENT",
        desc: "Click-to-call, WhatsApp, and quote form accessible from every scroll position."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Practical",
    heroHeadingBottom: "Redesign",
    heroDescription: "A site that respects the business offline and converts the traffic it earns online.",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
    section2Title: "Brand Integrity",
    checkpoints: [
      { title: "Identity Refresh", text: "New logo, color palette, and photo direction aligned to real craftsmanship." },
      { title: "Service Pages", text: "Each offering gets scope, price range, and clear next steps." },
      { title: "Local Proof", text: "Named customer reviews, project photos, and service-area map." }
    ],
    section3TitleTop: "Mobile",
    section3TitleBottom: "Intent",
    section3Description: "Every template engineered for one-handed use, with call, message, and quote actions in reach of the thumb.",
    section3ImageBack: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    parityChecks: [
      { title: "Click-to-Call", text: "Phone number anchored in a persistent mobile bar." },
      { title: "WhatsApp Path", text: "Direct chat entry point for fast intent." },
      { title: "Short Quote Form", text: "Three fields plus address — complete in under thirty seconds." }
    ],
    matrixTitleTop: "Rebuild",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Single ‘Contact’ link in dropdown nav.",
        after_desc: "Persistent call / message bar on mobile.",
        rationale: "Local intent is impatient — the action must always be visible."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Long generic contact form.",
        after_desc: "Three-field quote request with address autocomplete.",
        rationale: "Simpler intake wins when the visitor is already bought in."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Reviews hosted on a separate social page.",
        after_desc: "Named reviews embedded by service.",
        rationale: "Social proof next to price closes the final hesitation."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Local",
    headingBottom: "Growth",
    description: "A redesign that matched the site to the standard of work the business delivers offline.",
    results: [
      { metric: "Monthly Inquiries", legacy: "11 / mo", stable: "38 / mo", icon: TrendingUp, logic: "Mobile-First Redesign" },
      { metric: "Click-to-Call Rate", legacy: "1.4%", stable: "6.8%", icon: Target, logic: "Persistent Action Bar" },
      { metric: "Repeat Referral Rate", legacy: "12%", stable: "31%", icon: ShieldCheck, logic: "Review Surface & Branding" }
    ],
    ctaTitleHighlight: "Growth."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "01", title: "Vanguard Group", client: "Corporate Litigation", outcome: "Velocity Index 0.92", img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200" },
      { id: "02", title: "Northbridge Partners", client: "Consulting Firm", outcome: "Leads +2.4x", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200" }
    ]
  }
};
