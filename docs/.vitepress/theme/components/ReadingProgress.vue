<template>
  <div v-if="show" class="reading-progress" aria-hidden="true">
    <div class="reading-progress__bar" :style="{ transform: `scaleX(${progress})` }"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'

// Thin bar under the nav showing how far down the page you are (doc pages only).
const { frontmatter } = useData()
const show = computed(() => frontmatter.value.layout !== 'home')
const progress = ref(0)
let raf = 0

function update() {
  raf = 0
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
}
function onScroll() {
  if (!raf) raf = requestAnimationFrame(update)
}
onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<style scoped>
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 3px;
  pointer-events: none;
}
.reading-progress__bar {
  height: 100%;
  background: var(--vp-c-brand-1);
  transform-origin: 0 50%;
  transition: transform 0.1s linear;
}
</style>
