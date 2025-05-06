import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	wolf: defineCollection({
		loader: glob({ pattern: "**/*.md", base: "./src/content/news/wolf"}),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
		})
	}),
	redline: defineCollection({
		loader: glob({ pattern: "**/*.md", base: "./src/content/news/redline"}),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
		})
	})
};
