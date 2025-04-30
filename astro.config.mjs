// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
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
    fonts: [
      {
        provider: 'local',
        name: 'MapleMono',
        cssVariable: '--font-maple-mono',
        variants: [
          {
            style: 'normal',
            weight: '100 900',
            src: ['./src/assets/fonts/MapleMono[wght].ttf']
          },
          {
            style: 'italic',
            weight: '100 900',
            src: ['./src/assets/fonts/MapleMono-Italic[wght].ttf']
          }
        ],
        fallbacks: [
          'PingFang SC',
          'Microsoft YaHei',
          'Noto Sans CJK SC',
          'WenQuanYi Micro Hei',
          'sans-serif'
        ]
      }
    ]
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
