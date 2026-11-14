import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import '@fontsource-variable/plus-jakarta-sans'
import './style.css'
import StudyHighlighter from './components/StudyHighlighter.vue'
import Checklist from './components/Checklist.vue'
import Accordion from './components/ui/Accordion.vue'
import AccordionItem from './components/ui/AccordionItem.vue'
import Tabs from './components/ui/Tabs.vue'
import Tab from './components/ui/Tab.vue'
import Term from './components/ui/Term.vue'
import Badge from './components/ui/Badge.vue'
import CardGrid from './components/ui/CardGrid.vue'
import LinkCard from './components/ui/LinkCard.vue'
import Timeline from './components/ui/Timeline.vue'
import TimelineItem from './components/ui/TimelineItem.vue'
import Quiz from './components/ui/Quiz.vue'
import Flashcards from './components/ui/Flashcards.vue'
import Steps from './components/ui/Steps.vue'
import Figure from './components/ui/Figure.vue'
import LabeledDiagram from './components/ui/LabeledDiagram.vue'
import ReadingProgress from './components/ReadingProgress.vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Soft fade + slide-up of the page content on client-side navigation.
function animatePageIn() {
  if (prefersReducedMotion()) return
  const el = document.querySelector('.VPDoc .content-container, .VPPage')
  el?.animate(
    [
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ],
    { duration: 280, easing: 'cubic-bezier(0.2, 0, 0, 1)' }
  )
}

export default {
  extends: DefaultTheme,
  Layout() {
    // Render the default layout, then mount the highlighter alongside it.
    // The component decides for itself whether to activate (frontmatter opt-in).
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress),
      'layout-bottom': () => h(StudyHighlighter)
    })
  },
  enhanceApp({ app }) {
    // v-motion directives (e.g. v-motion-slide-visible-once-bottom) usable in markdown.
    app.use(MotionPlugin)
    // v-auto-animate: smooth add/remove/reorder of list children.
    app.use(autoAnimatePlugin)
    app.component('StudyHighlighter', StudyHighlighter)
    app.component('Checklist', Checklist)
    // UI components (built on Reka UI), usable directly in markdown.
    const ui = {
      Accordion, AccordionItem, Tabs, Tab, Term, Badge, CardGrid, LinkCard, Timeline, TimelineItem,
      Quiz, Flashcards, Steps, Figure, LabeledDiagram
    }
    for (const [name, comp] of Object.entries(ui)) app.component(name, comp)
  },
  setup() {
    const route = useRoute()
    // Click-to-zoom for images in page content (useful for diagrams).
    const initZoom = () => mediumZoom('.vp-doc img:not(.ui-ld__img)', { background: 'var(--vp-c-bg)' })
    onMounted(initZoom)
    watch(
      () => route.path,
      () => nextTick(() => {
        initZoom()
        animatePageIn()
      })
    )
  }
}
