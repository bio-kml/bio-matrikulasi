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
  },
  setup() {
    const route = useRoute()
    // Click-to-zoom for images in page content (useful for diagrams).
    const initZoom = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
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
