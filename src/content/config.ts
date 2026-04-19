import { defineCollection, z } from "astro:content";

/**
 * Blog posts — drop Markdown/MDX files into src/content/blog/.
 * The Zod schema enforces SEO-critical frontmatter.
 */
const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1).max(90),
      description: z.string().min(50).max(200),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      /** Hero image (relative path inside src/content/blog or URL). */
      image: z.union([image(), z.string().url()]).optional(),
      imageAlt: z.string().optional(),
      author: z.string().default("Kratecx"),
      tags: z.array(z.string()).default([]),
      category: z.string().default("General"),
      /** Per-post SEO overrides (optional). */
      seoTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      /** Draft posts are excluded from sitemap + index. */
      draft: z.boolean().default(false),
      /** Optional explicit no-index flag for legal/private notes. */
      noIndex: z.boolean().default(false),
    }),
});

export const collections = { blog };
