// src/data/projects/08-haldren-cyber.ts
import { TrendingUp, Target, ShieldCheck, Zap } from 'lucide-react';

export const project08 = {
  id: "08",
  hero: {
    category: "Campaign Landing",
    title: "Haldren Cyber",
    clientType: "Security Webinar Campaign",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
    description: "A focused registration page engineered for a single webinar cohort and a single date.",
    vLabel: "Registration Rate",
    vValue: "3.1",
    vUnit: "x",
    vTag: "vs. Previous Campaign",
    cLabel: "Cost Per Lead",
    cValue: "-62",
    cUnit: "%",
    cTag: "Paid Acquisition Efficiency"
  },
  problems: {
    reportDate: "Audit Report 2026.v8",
    sectionTitle: "Campaign Drift",
    subheading: "The webinar was timely. The landing page was not.",
    stickyTitle: "Registration Barriers",
    problems: [
      {
        title: "Missing Urgency",
        description: "No date prominence, no countdown, no scarcity — the page read like evergreen content, not a live event.",
        priority: "CRITICAL PRIORITY",
      },
      {
        title: "Distraction Surface",
        description: "Full header nav, related blog posts, and footer links pulled paid clicks away from the single intended action.",
        priority: "HIGH PRIORITY",
      },
      {
        title: "Weak Registration Form",
        description: "A 10-field form, no submit feedback, and no confirmation path collapsed conversion at the last step.",
        priority: "CONVERSION RISK",
      }
    ]
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Campaign",
    mainHeadingBottom: "Discipline",
    mainDescription: "A focused page with one date, one action, and no escape paths — engineered for paid acquisition only.",
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "URGENCY",
        title: "DATE-FIRST HERO",
        desc: "The webinar date dominates the hero, with a live countdown to session start."
      },
      {
        id: "STRAT-02",
        tag: "DISTRACTION",
        title: "NAVIGATION REMOVAL",
        desc: "Full site chrome stripped; only the campaign action remains."
      },
      {
        id: "STRAT-03",
        tag: "FORM",
        title: "FRICTIONLESS REGISTRATION",
        desc: "Three fields, inline validation, immediate calendar confirmation."
      }
    ]
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Focused",
    heroHeadingBottom: "Registration",
    heroDescription: "A page built to do one job — convert paid clicks into seat registrations.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000",
    section2Title: "Campaign Integrity",
    checkpoints: [
      { title: "Countdown Anchor", text: "Live timer locks urgency above the fold." },
      { title: "Stripped Chrome", text: "No navigation, no footer escape paths." },
      { title: "Instant Confirmation", text: "Calendar invite delivered before the thank-you animation ends." }
    ],
    section3TitleTop: "Speaker",
    section3TitleBottom: "Credibility",
    section3Description: "Speaker authority, agenda clarity, and sponsor logos surfaced to justify the commitment.",
    section3ImageBack: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
    section3ImageFront: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    parityChecks: [
      { title: "Named Speaker", text: "Role, company, and past-speaker credibility listed inline." },
      { title: "Agenda Block", text: "Minute-by-minute agenda removes ‘what will I learn’ hesitation." },
      { title: "Replay Guarantee", text: "On-demand replay promise captures the can’t-make-it cohort." }
    ],
    matrixTitleTop: "Campaign",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
    matrixProductionImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600",
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Secondary ‘Read More’ dominant in layout.",
        after_desc: "Single ‘Save My Seat’ action repeated.",
        rationale: "Campaign pages perform only when intent is concentrated."
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Ten fields, no progress indicator.",
        after_desc: "Three fields with inline validation.",
        rationale: "Short forms are the highest-ROI lever in paid campaigns."
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Generic thank-you page.",
        after_desc: "Calendar invite + LinkedIn share unit.",
        rationale: "Confirmation steps can double organic reach per paid registration."
      }
    ]
  },
  results: {
    tagline: "The Impact",
    headingTop: "Campaign",
    headingBottom: "Yield",
    description: "A campaign page that out-converted the previous one at a fraction of the spend.",
    results: [
      { metric: "Registration Rate", legacy: "6.1%", stable: "18.9%", icon: TrendingUp, logic: "Urgency + Form Rework" },
      { metric: "Cost Per Lead", legacy: "$42", stable: "$16", icon: Target, logic: "Conversion Rate Lift" },
      { metric: "Attendance Rate", legacy: "31%", stable: "54%", icon: ShieldCheck, logic: "Calendar Confirmation Flow" }
    ],
    ctaTitleHighlight: "Pipeline."
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: [
      { id: "09", title: "Corporate Redesign", client: "Atlasby Group", outcome: "Engagement +2.4x", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" },
      { id: "10", title: "Brand Revamp", client: "Hearth & Oak", outcome: "Inquiries +3.4x", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200" }
    ]
  }
};
