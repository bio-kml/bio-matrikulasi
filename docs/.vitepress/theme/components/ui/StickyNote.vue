<template>
  <aside class="ui-sticky">
    <span class="ui-sticky__title">{{ title }}</span>
    <div class="ui-sticky__body"><slot /></div>
    <span v-if="source" class="ui-sticky__source">{{ source }}</span>
  </aside>
</template>

<script setup>
// A pink sticky note, for fun facts and asides.
defineProps({
  title: { type: String, default: 'Fun fact' },
  // Optional small source line at the bottom.
  source: { type: String, default: '' }
})
</script>

<style scoped>
.ui-sticky {
  display: block;
  max-width: 560px;
  margin: 28px 6px;
  padding: 16px 20px 14px;
  color: var(--sticky-ink);
  background: var(--sticky);
  border-radius: 2px;
  transform: rotate(-0.8deg);
  box-shadow: 3px 4px 0 var(--rule);
}
.ui-sticky__title {
  display: block;
  margin-bottom: 4px;
  font-family: var(--font-hand);
  font-size: 1.3rem;
  font-weight: 700;
}
.ui-sticky__body { line-height: 1.6; }
.ui-sticky__body :deep(p) { margin: 0 0 6px; color: inherit; }
.ui-sticky__body :deep(strong) { background: none; padding: 0; }
.ui-sticky__source { display: block; margin-top: 4px; font-size: 0.85em; opacity: 0.75; }
@media (prefers-reduced-motion: reduce) { .ui-sticky { transform: none; } }
</style>
