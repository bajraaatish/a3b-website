import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content collections — the parts of the site that grow over time.
 * Adding work or a journal note means dropping a Markdown file in
 * src/content/, never touching a page template.
 */

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** human label, e.g. "Brand documentary" */
    category: z.string(),
    /** mono label shown lower-left on the frame, e.g. "founder film" */
    tag: z.string(),
    /** runtime, lower-right on the frame, e.g. "02:14" */
    runtime: z.string(),
    year: z.number(),
    client: z.string().optional(),
    /** frame surface */
    tone: z.enum(["ink", "bone"]).default("ink"),
    /** optional poster image in /public, e.g. "/work/origin.jpg" */
    poster: z.string().optional(),
    /** optional embed URL (Vimeo/YouTube) for the case study hero */
    videoEmbed: z.string().optional(),
    /** lower number sorts first; falls back to year */
    order: z.number().default(0),
    /** hide from the grid while in progress */
    draft: z.boolean().default(false),
    /** honest flag — true until a real, delivered piece replaces it */
    sample: z.boolean().default(true),
    /** case-study facts */
    services: z.array(z.string()).default([]),
    deliverables: z.array(z.string()).default([]),
    approach: z.array(z.string()).default([]),
    outcome: z.string().optional(),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string().default("notes"),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, journal };
