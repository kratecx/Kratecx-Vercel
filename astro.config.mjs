// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  /** Canonical site URL — powers absolute URLs in sitemap, RSS, and canonical tags. */
  site: 'https://www.kratecx.com',

  /** Clean URLs without trailing slashes — matches canonical tags from BaseHead. */
  trailingSlash: 'never',

  /** Minify HTML + enable selective link prefetching for snappier navigation. */
  compressHTML: true,
  prefetch: {
    prefetchAll: false,     // don't prefetch every link on the page
    defaultStrategy: 'hover', // prefetch when the user hovers a link
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
    },
  },

  integrations: [
    react(),
    sitemap({
      // Exclude low-value / private pages from sitemap.
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/404') &&
        !page.includes('/admin'),
      // Per-page hints to search engines.
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Customize priority + changefreq by route.
      serialize(item) {
        const url = item.url;
        if (url === 'https://www.kratecx.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.includes('/services')) {
          item.priority = 0.9;
          item.changefreq = 'monthly';
        } else if (url.endsWith('/blog/')) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else if (url.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (url.includes('/portfolio/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (url.includes('/about') || url.includes('/contact')) {
          item.priority = 0.6;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
});
