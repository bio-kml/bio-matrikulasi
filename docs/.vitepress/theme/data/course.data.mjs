import { createContentLoader } from 'vitepress'

// Sections shown on the home page. Counts and page lists are read from the
// markdown files at build time, so they update automatically as pages are added.
const sections = [
  { key: 'revision', title: 'SB025 Revision Notes', icon: 'layers', color: 'green', desc: 'Revision notes and practice questions for each chapter.' },
  { key: 'lectures', title: 'Lectures', icon: 'book-open', color: 'green', desc: 'Notes for each chapter of the course.' },
  { key: 'tutorials', title: 'Tutorials', icon: 'graduation-cap', color: 'blue', desc: 'Practice problems aligned to each chapter.' },
  { key: 'labs', title: 'Labs', icon: 'flask-conical', color: 'teal', desc: 'Practical sessions and lab guides.' },
  { key: 'assessments', title: 'Assessments', icon: 'clipboard-list', color: 'yellow', desc: 'Quizzes, assignments and marks breakdown.' },
  { key: 'exams', title: 'Past Year Exams', icon: 'file-check', color: 'purple', desc: 'Previous papers to revise with.' },
  { key: 'course', title: 'Course Info', icon: 'calendar', color: 'red', desc: 'Schedule and important dates.' }
]

export default createContentLoader(
  sections.map((s) => `${s.key}/*.md`),
  {
    includeSrc: true,
    transform(raw) {
      const pages = raw.map((p) => {
        const src = p.src || ''
        const h1 = src.match(/^#\s+(.+)$/m)
        const body = src.replace(/^---[\s\S]*?---/, '').replace(/^#.*$/gm, '').trim()
        return {
          url: p.url,
          title: p.frontmatter.title || (h1 ? h1[1].trim() : p.url),
          // A page counts as "coming soon" while its body is only a placeholder.
          ready: body.length > 0 && !/^coming soon\.?$/i.test(body)
        }
      })
      return sections.map((s) => {
        const list = pages
          .filter((p) => p.url.startsWith(`/${s.key}/`))
          .sort((a, b) => a.url.localeCompare(b.url, undefined, { numeric: true }))
        return { ...s, pages: list, ready: list.filter((p) => p.ready).length }
      })
    }
  }
)
