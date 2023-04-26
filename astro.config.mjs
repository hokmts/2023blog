import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://hokmts23-blog2023.netlify.app/',
	integrations: [mdx(), sitemap()],
});
