import { ShieldCheck, Target, TrendingUp } from "lucide-react";
import { portfolioCategories } from "@/data/portfolioIndex";

const flatProjects = portfolioCategories.flatMap((category) =>
  category.projects.map((project) => ({
    ...project,
    categoryId: category.id,
    categoryHeading: category.heading,
    categorySubheading: category.subheading,
    categoryDesc: category.desc,
  })),
);

const getNextPortfolios = (index: number) => {
  const total = flatProjects.length;
  const nextOne = flatProjects[(index + 1) % total];
  const nextTwo = flatProjects[(index + 2) % total];

  return [nextOne, nextTwo].map((item) => ({
    id: item.id,
    title: item.title,
    client: item.categoryHeading,
    outcome: item.tech,
    img: item.img,
  }));
};

/** Cover + uploaded gallery shots for execution / matrix sections */
const projectVisuals = (project: (typeof flatProjects)[number]) => {
  const ordered = [
    project.img,
    ...(project.gallery ?? []),
  ].filter(Boolean);
  const pick = (i: number) =>
    ordered[Math.min(Math.max(i, 0), ordered.length - 1)];

  /** Delivery Matrix — each row gets a unique pair across [cover … gallery]; indices chosen to avoid repeats within rows */
  const matrixRowImages = [
    { draftImage: pick(4), productionImage: pick(5) },
    { draftImage: pick(6), productionImage: pick(1) },
    { draftImage: pick(0), productionImage: pick(2) },
  ] as const;

  return {
    executionHero: pick(1),
    sectionBack: pick(2),
    sectionFront: pick(3),
    matrixDraft: pick(4),
    matrixProduction: pick(5),
    matrixRowImages,
  };
};

export const allProjects = flatProjects.map((project, index) => {
  const v = projectVisuals(project);

  return {
  id: project.id,
  hero: {
    category: project.categorySubheading,
    title: project.title,
    clientType: project.categoryHeading,
    heroImage: project.img,
    description: project.description,
    vLabel: "Category",
    vValue: String(index + 1).padStart(2, "0"),
    vUnit: "ID",
    vTag: project.categoryHeading,
    cLabel: "Stack",
    cValue: "100",
    cUnit: "%",
    cTag: project.tech,
  },
  problems: {
    reportDate: `Case Report 2026.${String(index + 1).padStart(2, "0")}`,
    sectionTitle: "Project Context",
    subheading: project.categoryDesc,
    stickyTitle: "Core Focus",
    problems: [
      {
        title: "Business Objective",
        description: project.description,
        priority: "PRIMARY GOAL",
      },
      {
        title: "Category Alignment",
        description: `This project is part of ${project.categoryHeading}, designed to match brand goals and improve clarity for target users.`,
        priority: "EXECUTION FOCUS",
      },
      {
        title: "Platform Stack",
        description: `Implemented with ${project.tech} and structured for scalable growth.`,
        priority: "TECH CONTEXT",
      },
    ],
  },
  strategy: {
    tagline: "The Strategy",
    mainHeadingTop: "Growth",
    mainHeadingBottom: "Framework",
    mainDescription: `A focused execution strategy for ${project.title}, balancing visual quality, conversion flow, and long-term maintainability.`,
    auditRegistry: [
      {
        id: "STRAT-01",
        tag: "POSITIONING",
        title: "CLEAR VALUE COMMUNICATION",
        desc: "Messaging and structure emphasize what matters to target users.",
      },
      {
        id: "STRAT-02",
        tag: "UX_FLOW",
        title: "FRICTIONLESS NAVIGATION",
        desc: "Layout and interaction paths are optimized for fast decisions.",
      },
      {
        id: "STRAT-03",
        tag: "PERFORMANCE",
        title: "THEME-CONSISTENT DELIVERY",
        desc: "Visual hierarchy follows brand theme while preserving speed and accessibility.",
      },
    ],
  },
  execution: {
    tagline: "The Execution",
    heroHeadingTop: "Build",
    heroHeadingBottom: "System",
    heroDescription: `UI and content for ${project.title} were assembled for clarity, consistency, and conversion-focused experience.`,
    heroImage: v.executionHero,
    section2Title: "Design Execution",
    checkpoints: [
      { title: "Visual Hierarchy", text: "Section order and spacing tuned for fast content scanning." },
      { title: "Content Clarity", text: "Project context and details structured for easy decision making." },
      { title: "Responsive Behavior", text: "Interface remains polished across mobile, tablet, and desktop." },
    ],
    section3TitleTop: "Interface",
    section3TitleBottom: "Consistency",
    section3Description: "All key sections follow one cohesive design language to maintain trust and continuity.",
    section3ImageBack: v.sectionBack,
    section3ImageFront: v.sectionFront,
    parityChecks: [
      { title: "Theme Matching", text: "Color palette and typography align with the site theme." },
      { title: "Content Flow", text: "Logical sequencing from overview to detailed project context." },
      { title: "Card-to-Page Continuity", text: "Portfolio card click-through preserves narrative and identity." },
    ],
    matrixTitleTop: "Delivery",
    matrixTitleBottom: "Matrix",
    matrixDraftImage: v.matrixDraft,
    matrixProductionImage: v.matrixProduction,
    auditMatrix: [
      {
        id: "01",
        label: "Action Trigger",
        before_desc: "Generic project previews caused context loss.",
        after_desc: "Dedicated portfolio detail page with richer context.",
        rationale: "Improves clarity and keeps users focused on project narrative.",
        draftImage: v.matrixRowImages[0].draftImage,
        productionImage: v.matrixRowImages[0].productionImage,
      },
      {
        id: "02",
        label: "Data Intake",
        before_desc: "Scattered content and disconnected references.",
        after_desc: "Unified sectional layout with contextual storytelling.",
        rationale: "Reduces friction and increases comprehension on first visit.",
        draftImage: v.matrixRowImages[1].draftImage,
        productionImage: v.matrixRowImages[1].productionImage,
      },
      {
        id: "03",
        label: "Conversion Node",
        before_desc: "Limited project depth reduced confidence.",
        after_desc: "Structured case-study style page with visual support.",
        rationale: "Builds trust and supports better conversion intent.",
        draftImage: v.matrixRowImages[2].draftImage,
        productionImage: v.matrixRowImages[2].productionImage,
      },
    ],
  },
  results: {
    tagline: "The Impact",
    headingTop: "Project",
    headingBottom: "Outcome",
    description: `A cleaner, context-rich case study experience for ${project.title}, connected directly from portfolio cards.`,
    results: [
      { metric: "Context Depth", legacy: "Low", stable: "High", icon: TrendingUp, logic: "Dedicated case-study page" },
      { metric: "Visual Continuity", legacy: "Partial", stable: "Strong", icon: ShieldCheck, logic: "Shared theme and assets" },
      { metric: "Navigation Clarity", legacy: "Medium", stable: "High", icon: Target, logic: "Card to detail flow alignment" },
    ],
    ctaTitleHighlight: "Growth.",
  },
  thumbnail: {
    tagline: "Case_Archive",
    heading: "Next Projects.",
    portfolios: getNextPortfolios(index),
  },
  };
});
