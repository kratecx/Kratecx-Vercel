/**
 * First three portfolio highlights — shared by home `Featured.astro` and service `ServiceCaseStudies.astro`.
 */
import type { ImageMetadata } from "astro";
import { portfolioCategories } from "@/data/portfolioIndex";

export type FeaturedPortfolioProject = {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: ImageMetadata;
};

export const featuredPortfolioProjects: FeaturedPortfolioProject[] =
  portfolioCategories
    .flatMap((category) =>
      category.projects.map((project) => ({
        id: project.id,
        tag: category.subheading,
        title: project.title,
        desc: project.description,
        image: project.img,
      })),
    )
    .slice(0, 3);
