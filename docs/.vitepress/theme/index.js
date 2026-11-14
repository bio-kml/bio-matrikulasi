import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import '@fontsource-variable/plus-jakarta-sans'
import './style.css'
import StudyHighlighter from './components/StudyHighlighter.vue'
import Checklist from './components/Checklist.vue'

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
    app.component('StudyHighlighter', StudyHighlighter)
    app.component('Checklist', Checklist)
  },
  setup() {
    // Click-to-zoom for images in page content (useful for diagrams).
    const route = useRoute()
    const init = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })
    onMounted(init)
    watch(() => route.path, () => nextTick(init))
  }
}
