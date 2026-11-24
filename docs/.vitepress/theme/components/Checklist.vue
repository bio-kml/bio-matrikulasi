<template>
  <div class="checklist" :style="color ? { '--cl-accent': accent } : null">
    <div v-if="title" class="checklist__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { accents } from './ui/accent.js'

const props = defineProps({
  // Accent colour. Leave empty to use the surrounding topic/section colour.
  color: { type: String, default: '' },
  // Optional heading shown at the top of the card.
  title: { type: String, default: '' }
})
const extra = { pink: '#d6336c' }
const accent = computed(() => accents[props.color] || extra[props.color] || props.color)
</script>

<style scoped>
.checklist {
  --cl-accent: var(--c, var(--vp-c-brand-1));
  margin: 20px 0;
  padding: 8px 20px 14px;
  border: var(--line);
  border-radius: 10px;
  background: var(--box);
}
.checklist__title {
  margin: 8px 0 6px;
  font-family: var(--font-hand);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--cl-accent);
}

/* Bullet lists become tick boxes; ordered lists keep their numbers. */
.checklist :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}
.checklist :deep(ul) > li::marker { content: none; }
.checklist :deep(ul) > li {
  position: relative;
  padding-left: 30px;
}
.checklist :deep(ul) > li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.42em;
  width: 15px;
  height: 15px;
  border: var(--line);
  border-radius: 2px;
}
.checklist :deep(ol) {
  margin: 0;
  padding-left: 22px;
}
.checklist :deep(li) {
  margin: 0;
  padding-top: 6px;
  padding-bottom: 6px;
  line-height: 1.6;
}
/* Cognitive-level tags (C1, C2…) sit at the right in handwriting. */
.checklist :deep(.ui-badge) {
  float: right;
  margin: 0 0 0 12px;
  padding: 0;
  border: none;
  background: none;
  font-family: var(--font-hand);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--cl-accent);
}
</style>
