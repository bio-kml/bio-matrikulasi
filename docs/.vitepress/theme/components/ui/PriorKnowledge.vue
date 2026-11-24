<template>
  <section class="ui-prior">
    <div class="ui-prior__head">
      <span class="ui-prior__icon"><Icon name="lightbulb" :size="18" /></span>
      <span class="ui-prior__title">{{ title }}</span>
    </div>
    <p class="ui-prior__sub">{{ subtitle }}</p>
    <ul class="ui-prior__list">
      <li v-for="(it, i) in items" :key="i">
        <button class="ui-prior__term" :aria-expanded="open === i" @click="open = open === i ? null : i">
          <span>{{ it.term }}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <div class="ui-prior__note" :class="{ 'is-open': open === i }">
          <p v-html="it.note"></p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Icon from './Icon.vue'

// Prior knowledge a student needs before a topic. Tap a term to reveal a reminder.
defineProps({
  // [{ term: 'Haploid vs diploid', note: 'Short reminder (simple inline HTML allowed)' }]
  items: { type: Array, required: true },
  title: { type: String, default: 'Before you start' },
  subtitle: { type: String, default: 'You need these ideas from earlier. Tap one if you need a reminder.' }
})
const open = ref(null)
</script>

<style scoped>
.ui-prior {
  margin: 20px 0;
  padding: 12px 18px 14px;
  border: 2px dashed var(--ink);
  border-radius: 10px;
  background: var(--box);
}
.ui-prior__head { display: flex; align-items: center; gap: 8px; }
.ui-prior__icon { color: var(--c, var(--vp-c-brand-1)); display: inline-flex; }
.ui-prior__title {
  font-family: var(--font-hand);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--c, var(--vp-c-brand-1));
}
.vp-doc .ui-prior__sub, .ui-prior__sub { margin: 2px 0 8px; font-size: 15px; color: var(--muted); }
.vp-doc .ui-prior__list, .ui-prior__list { margin: 0; padding: 0; list-style: none; }
.vp-doc .ui-prior__list li { margin: 0; }
.ui-prior__list li + li { border-top: 1px dashed var(--rule); }
.ui-prior__term {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 7px 2px;
  font: inherit;
  font-size: 17px;
  text-align: left;
  color: var(--ink);
  background: none;
  border: none;
  cursor: pointer;
}
.ui-prior__term:hover span { color: var(--c, var(--vp-c-brand-1)); }
.ui-prior__term svg { width: 16px; height: 16px; flex-shrink: 0; color: var(--muted); transition: transform 0.22s cubic-bezier(0.2, 0, 0, 1); }
.ui-prior__term[aria-expanded='true'] svg { transform: rotate(180deg); }
.ui-prior__term:focus-visible { outline: 2px solid var(--c, var(--vp-c-brand-1)); outline-offset: 2px; border-radius: 4px; }
.ui-prior__note {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.2, 0, 0, 1);
}
.ui-prior__note.is-open { grid-template-rows: 1fr; }
.vp-doc .ui-prior__note p, .ui-prior__note p {
  overflow: hidden;
  margin: 0;
  padding: 0 4px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink);
}
.ui-prior__note.is-open p { padding-bottom: 10px; }
.ui-prior__note :deep(strong) { background: none; padding: 0; }
</style>
