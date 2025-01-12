// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import remarkToc from 'remark-toc'
import rehypeToc from 'rehype-toc'
import rehypeSlug from 'rehype-slug'

// https://astro.build/config
export default defineConfig({
  site: 'https://thetrees.studio',
  integrations: [
    mdx({
      remarkPlugins: [[remarkToc, { tight: true, ordered: false }]],
      rehypePlugins: [rehypeSlug]
    }),
    react(),
    tailwind({ applyBaseStyles: false })
  ],
  experimental: {
    svg: true
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
