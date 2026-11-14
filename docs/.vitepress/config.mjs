import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Biology",
  description: "Course and Labs Informations",
  base: '/bio-matrikulasi/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/bio-matrikulasi/favicon.png' }]
  ],

  // Equations: $inline$ and $$block$$ (rendered with MathJax at build time).
  markdown: {
    math: true,
    config(md) {
      // ```mermaid blocks become a <MermaidDiagram>, which loads Mermaid only on
      // pages that actually contain a diagram. Colours come from style.css.
      const fence = md.renderer.rules.fence
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info.trim() === 'mermaid') {
          return `<MermaidDiagram graph="${encodeURIComponent(token.content)}" />`
        }
        return fence(tokens, idx, options, env, self)
      }
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Course Informations',
        items: [
          { text: 'Schedule', link: '/course/schedule' },
        ],
        activeMatch: '^/course/'
      },
      {
        text: 'Assessments',
        items: [
          { text: 'Assessments', link: '/assessments/course' },
        ],
        activeMatch: '^/assessments/'
      },
      {
        text: 'Tutorials',
        items: [
          { text: 'Tutorial 1', link: '/tutorials/tutorial-01' },
        ],
        activeMatch: '^/tutorials/'
      },
      {
        text: 'Labs',
        items: [
          { text: 'Lab 1', link: '/labs/lab-01' },
        ],
        activeMatch: '^/labs/'
      },
      {
        text: 'Lectures',
        items: [
          { text: 'Chapter 1', link: '/lectures/chapter-01' },
        ],
        activeMatch: '^/lectures/'
      },
      {
        text: 'Exams',
        items: [
          { text: 'Past Year Exams', link: '/exams/' },
        ],
        activeMatch: '^/exams/'
      },
      {
        text: 'Guide',
        items: [
          { text: 'Components', link: '/guide/components' },
          { text: 'Diagrams & equations', link: '/guide/visuals' },
        ],
        activeMatch: '^/guide/'
      },
    ],

    sidebar: {
      '/assessments/': [
        { text: 'Assessments', link: '/assessments/course' },
      ],

      '/labs/': [
        { text: 'Lab 1', link: '/labs/lab-01' },
      ],

      '/course/': [
        { text: 'Schedule', link: '/course/schedule' },
      ],

      '/lectures/': [
        { text: 'Chapter 1', link: '/lectures/chapter-01' },
      ],

      '/tutorials/': [
        { text: 'Tutorial 1', link: '/tutorials/tutorial-01' },
      ],

      '/exams/': [
        { text: 'Past Year Exams', link: '/exams/' },
      ],

      '/guide/': [
        { text: 'Components', link: '/guide/components' },
        { text: 'Diagrams & equations', link: '/guide/visuals' },
      ]
    },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/bio-kml/bio-matrikulasi'
      }
    ],

    search: {
      provider: 'local'
    }
  }
})
