import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Biology Matrics",
  description: "Biology Matrics SB025",
  base: '/bio-matrikulasi/',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/bio-matrikulasi/favicon.png' }]
  ],

  // Equations: $inline$ and $$block$$ (rendered with MathJax at build time).
  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Revision Notes',
        items: [
          { text: 'SB025 Biology Revision Notes', link: '/revision/' },
          { text: 'Chapter 1: Biodiversity', link: '/revision/chapter-01' },
          { text: 'Chapter 2: Ecology', link: '/revision/chapter-02' },
          { text: 'Chapter 3: Selection and Speciation', link: '/revision/chapter-03' },
          { text: 'Chapter 4: Biocatalysis', link: '/revision/chapter-04' },
          { text: 'Chapter 5: Cellular Respiration', link: '/revision/chapter-05' },
        ],
        activeMatch: '^/revision/'
      },
      {
        text: 'Activities',
        items: [
          { text: 'All activities', link: '/activities/' },
          { text: 'Discover Glycolysis', link: '/activities/glycolysis' },
          { text: 'Discover the Krebs Cycle', link: '/activities/krebs' },
        ],
        activeMatch: '^/activities/'
      },
    ],

    sidebar: {
      '/revision/': [
        {
          text: 'SB025 Biology Revision Notes',
          link: '/revision/',
          items: [
            { text: 'Chapter 1: Biodiversity', link: '/revision/chapter-01' },
            { text: 'Chapter 2: Ecology', link: '/revision/chapter-02' },
            { text: 'Chapter 3: Selection and Speciation', link: '/revision/chapter-03' },
            { text: 'Chapter 4: Biocatalysis', link: '/revision/chapter-04' },
            { text: 'Chapter 5: Cellular Respiration', link: '/revision/chapter-05' },
          ]
        }
      ],

      '/activities/': [
        {
          text: 'Activities',
          link: '/activities/',
          items: [
            { text: 'Discover Glycolysis', link: '/activities/glycolysis' },
            { text: 'Discover the Krebs Cycle', link: '/activities/krebs' },
          ]
        }
      ],

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
        { text: 'Equations & formatting', link: '/guide/visuals' },
        { text: 'Timeline styles', link: '/guide/timeline' },
      ]
    },


    search: {
      provider: 'local'
    }
  }
})
