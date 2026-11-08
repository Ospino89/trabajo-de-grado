import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Cambia "site" por la URL que te dé Render cuando lo despliegues.
export default defineConfig({
  site: 'https://trabajo-de-grado.onrender.com',
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: { remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] },
});
