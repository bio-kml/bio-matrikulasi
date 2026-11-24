import DefaultTheme from 'vitepress/theme'
import { h, onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import { MotionPlugin } from '@vueuse/motion'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import '@fontsource/kalam/400.css'
import '@fontsource/kalam/700.css'
import '@fontsource/patrick-hand/400.css'
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
import ScrollTimeline from './components/ui/ScrollTimeline.vue'
import ScrollStep from './components/ui/ScrollStep.vue'
import Icon from './components/ui/Icon.vue'
import StatGrid from './components/ui/StatGrid.vue'
import StatCard from './components/ui/StatCard.vue'
import InfoCard from './components/ui/InfoCard.vue'
import CourseOverview from './components/CourseOverview.vue'
import SectionLabel from './components/SectionLabel.vue'
import { sectionOf } from './sections.js'
import Topic from './components/ui/Topic.vue'
import StickyNote from './components/ui/StickyNote.vue'
import Definition from './components/ui/Definition.vue'
import Flow from './components/ui/Flow.vue'
import PriorKnowledge from './components/ui/PriorKnowledge.vue'
import BodyPlanDiagram from './components/diagrams/BodyPlanDiagram.vue'
import SymmetryDiagram from './components/diagrams/SymmetryDiagram.vue'
import GramWallDiagram from './components/diagrams/GramWallDiagram.vue'
import BacteriaShapes from './components/diagrams/BacteriaShapes.vue'
import LifeCycleDiagram from './components/diagrams/LifeCycleDiagram.vue'
import SelectionCurvesDiagram from './components/diagrams/SelectionCurvesDiagram.vue'
import LakeZonesDiagram from './components/diagrams/LakeZonesDiagram.vue'
import EnergyPyramid from './components/diagrams/EnergyPyramid.vue'
import PopulationGrowthDiagram from './components/diagrams/PopulationGrowthDiagram.vue'
import RainforestLayers from './components/diagrams/RainforestLayers.vue'
import ActivationEnergyDiagram from './components/diagrams/ActivationEnergyDiagram.vue'
import InducedFitDiagram from './components/diagrams/InducedFitDiagram.vue'
import EnzymeFactorsDiagram from './components/diagrams/EnzymeFactorsDiagram.vue'
import InhibitionDiagram from './components/diagrams/InhibitionDiagram.vue'
import Molecule from './components/ui/Molecule.vue'
import Reaction from './components/ui/Reaction.vue'
import CellRespirationMap from './components/diagrams/CellRespirationMap.vue'
import ATPDiagram from './components/diagrams/ATPDiagram.vue'
import KrebsCycleDiagram from './components/diagrams/KrebsCycleDiagram.vue'
import ETCDiagram from './components/diagrams/ETCDiagram.vue'
import GlycolysisLab from './components/activities/GlycolysisLab.vue'
import OrderChallenge from './components/activities/OrderChallenge.vue'
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
      'doc-before': () => h(SectionLabel),
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
      Quiz, Flashcards, Steps, Figure, LabeledDiagram, ScrollTimeline, ScrollStep,
      Icon, StatGrid, StatCard, InfoCard, CourseOverview,
      Topic, StickyNote, Definition, Flow, PriorKnowledge,
      BodyPlanDiagram, SymmetryDiagram, GramWallDiagram, BacteriaShapes, LifeCycleDiagram,
      SelectionCurvesDiagram, LakeZonesDiagram, EnergyPyramid, PopulationGrowthDiagram, RainforestLayers,
      ActivationEnergyDiagram, InducedFitDiagram, EnzymeFactorsDiagram, InhibitionDiagram,
      Molecule, Reaction, CellRespirationMap, ATPDiagram, KrebsCycleDiagram, ETCDiagram,
      GlycolysisLab, OrderChallenge
    }
    for (const [name, comp] of Object.entries(ui)) app.component(name, comp)
  },
  setup() {
    const route = useRoute()
    // Click-to-zoom for images in page content (useful for diagrams).
    const initZoom = () => mediumZoom('.vp-doc img:not(.ui-ld__img)', { background: 'var(--vp-c-bg)' })
    // Tag <html> with the current section so its colour applies site-wide (see style.css).
    const setSection = () => {
      const s = sectionOf(route.path)
      if (s) document.documentElement.dataset.section = s
      else delete document.documentElement.dataset.section
    }
    onMounted(() => {
      initZoom()
      setSection()
    })
    watch(
      () => route.path,
      () => nextTick(() => {
        setSection()
        initZoom()
        animatePageIn()
      })
    )
  }
}
