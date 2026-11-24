<template>
  <div class="ui-flow" :class="{ 'ui-flow--row': row }">
    <span v-if="title" class="ui-flow__title">{{ title }}</span>
    <template v-for="(s, i) in steps" :key="i">
      <span class="ui-flow__box" v-html="s"></span>
      <span v-if="i < steps.length - 1" class="ui-flow__arrow" aria-hidden="true">{{ row ? '→' : '↓' }}</span>
    </template>
  </div>
</template>

<script setup>
// Boxes joined by arrows: a cause → effect chain or a short sequence.
// Steps may contain simple inline HTML such as <i> for species names.
defineProps({
  steps: { type: Array, required: true },
  title: { type: String, default: '' },
  // Left-to-right instead of top-to-bottom (wraps on small screens).
  row: { type: Boolean, default: false }
})
</script>

<style scoped>
.ui-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  margin: 20px 0;
}
.ui-flow__title {
  align-self: stretch;
  margin-bottom: 8px;
  font-family: var(--font-hand);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c, var(--vp-c-brand-1));
}
.ui-flow__box {
  max-width: 100%;
  padding: 8px 16px;
  text-align: center;
  line-height: 1.45;
  background: var(--box);
  border: var(--line);
  border-radius: 8px;
}
.ui-flow__arrow { font-size: 1.2rem; line-height: 1.2; color: var(--ink); }
.ui-flow--row { flex-direction: row; flex-wrap: wrap; justify-content: center; gap: 6px; }
.ui-flow--row .ui-flow__title { flex-basis: 100%; }
</style>
