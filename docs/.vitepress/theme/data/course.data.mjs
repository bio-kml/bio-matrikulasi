import { createContentLoader } from 'vitepress'

// Pages listed on the home page: every revision chapter and every activity.
// Title, description, icon and colour come from each page's frontmatter, so new
// pages appear on the home page automatically.
export default createContentLoader(['revision/*.md', 'activities/*.md'], {
  transform(raw) {
    const pages = raw
      .filter((p) => !/\/(index)?$/.test(p.url) && !p.url.endsWith('/index.html'))
      .map((p) => {
        const full = p.frontmatter.title || ''
        const m = full.match(/^Chapter\s+(\d+):\s*(.+)$/)
        return {
          url: p.url,
          section: p.url.split('/')[1],
          tag: m ? `Chapter ${m[1]}` : 'Activity',
          title: m ? m[2] : full,
          desc: p.frontmatter.description || '',
          icon: p.frontmatter.icon || 'file-text',
          color: p.frontmatter.color || 'green'
        }
      })
      .sort((a, b) => a.url.localeCompare(b.url, undefined, { numeric: true }))
    return {
      revision: pages.filter((p) => p.section === 'revision'),
      activities: pages.filter((p) => p.section === 'activities')
    }
  }
})
