// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: false, // Reduced to save resources
    defaultStrategy: 'viewport'
  },
  site: 'https://thetrees.studio',
  integrations: [
    react(),
    mdx({
      remarkPlugins: [[remarkToc, { tight: true, ordered: false }]],
      rehypePlugins: [rehypeSlug]
    }),
    tailwind({ applyBaseStyles: false })
  ],
  experimental: {
    svg: true
  },
  build: {
    // Serialize build steps to reduce concurrent operations
    inlineStylesheets: 'never'
  },
  vite: {
    // Optimize Vite build for resource-constrained environments
    build: {
      // Use a single chunk where possible
      cssCodeSplit: false,
      // Reduce Rollup's concurrency
      rollupOptions: {
        maxParallelFileOps: 1,
        // Bundle common deps to reduce file operations
        output: {
          manualChunks: undefined
        }
      }
    },
    optimizeDeps: {
      // Disable scanning to reduce file operations
      entries: []
    }
  },
  markdown: {
    shikiConfig: {
      transformers: [
        {
          pre: (node) => {
            node.properties.style =
              'background-color:hsl(var(--muted));color:#e1e4e8;overflow-x:auto'
            node.properties.tabindex = undefined
          }
        }
      ]
    }
  }
})
