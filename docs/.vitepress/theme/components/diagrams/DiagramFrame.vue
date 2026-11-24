<template>
  <figure class="dg">
    <figcaption v-if="title" class="dg__title">{{ title }}</figcaption>
    <div v-if="$slots.controls" class="dg__controls"><slot name="controls" /></div>
    <div class="dg__body"><slot /></div>
    <p v-if="caption" class="dg__caption" v-html="caption"></p>
  </figure>
</template>

<script setup>
// Notebook-style frame shared by the interactive diagrams.
defineProps({
  title: { type: String, default: '' },
  caption: { type: String, default: '' }
})
</script>

<style>
.dg {
  margin: 24px 0;
  padding: 14px 16px 12px;
  border: var(--line);
  border-radius: 10px;
  background: var(--box);
}
.dg__title {
  margin: 0 0 8px;
  font-family: var(--font-hand);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c, var(--vp-c-brand-1));
}
.dg__controls { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.dg__body svg { display: block; width: 100%; height: auto; }
.dg__body text { font-family: var(--font-hand); fill: var(--ink); }
.vp-doc .dg__caption, .dg__caption {
  min-height: 1.6em;
  margin: 8px 0 0;
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink);
}
.dg__caption strong { background: none; padding: 0; }
/* pill buttons used for diagram controls */
.dg-btn {
  padding: 4px 12px;
  font-family: var(--font-hand);
  font-size: 15px;
  font-weight: 700;
  color: var(--ink);
  background: var(--box);
  border: 2px solid var(--ink);
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.dg-btn:hover { background: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 12%, var(--box)); }
.dg-btn:active { transform: scale(0.96); }
.dg-btn.is-on { color: #fff; background: var(--c, var(--vp-c-brand-1)); border-color: var(--c, var(--vp-c-brand-1)); }
.dark .dg-btn.is-on { color: #172031; }
.dg-btn:focus-visible { outline: 2px solid var(--c, var(--vp-c-brand-1)); outline-offset: 2px; }
.dg-fade-enter-active, .dg-fade-leave-active { transition: opacity 0.22s ease; }
.dg-fade-enter-from, .dg-fade-leave-to { opacity: 0; }
</style>
