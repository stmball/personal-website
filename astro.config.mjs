// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Custom production domain served by Cloudflare Pages.
	site: 'https://stmball.uk',
	integrations: [mdx(), sitemap()],
});
