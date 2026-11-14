<template>
  <div class="mermaid" :class="{ 'is-ready': svg }" v-html="svg"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Rendered from ```mermaid code blocks (see markdown.config in config.mjs).
const props = defineProps({
  graph: { type: String, required: true }
})

const svg = ref('')
let observer = null
let count = 0

async function render() {
  // Loaded on demand so pages without diagrams don't download Mermaid.
  const { default: mermaid } = await import('mermaid')
  const dark = document.documentElement.classList.contains('dark')
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: dark ? 'dark' : 'neutral',
    fontFamily: 'Plus Jakarta Sans Variable, sans-serif'
  })
  const id = `mmd-${Math.random().toString(36).slice(2, 8)}-${count++}`
  try {
    const out = await mermaid.render(id, decodeURIComponent(props.graph))
    svg.value = out.svg
  } catch (e) {
    svg.value = `<pre class="mermaid-error">Diagram error: ${String(e.message || e).replace(/</g, '&lt;')}</pre>`
  }
}

onMounted(() => {
  render()
  // Re-render when switching light/dark mode.
  let wasDark = document.documentElement.classList.contains('dark')
  observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains('dark')
    if (isDark !== wasDark) {
      wasDark = isDark
      render()
    }
  })
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<style scoped>
.mermaid { min-height: 80px; }
.mermaid :deep(.mermaid-error) { margin: 0; color: #c2410c; font-size: 13px; white-space: pre-wrap; }
</style>
