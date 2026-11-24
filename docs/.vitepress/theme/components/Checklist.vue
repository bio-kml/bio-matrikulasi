<template>
  <div ref="root" class="checklist" :style="color ? { '--cl-accent': accent } : null">
    <div v-if="title" class="checklist__head">
      <span class="checklist__title">{{ title }}</span>
      <span v-if="total" class="checklist__count" :class="{ 'is-full': done === total }">{{ done }} / {{ total }}</span>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vitepress'
import { accents } from './ui/accent.js'

const props = defineProps({
  // Accent colour. Leave empty to use the surrounding topic/section colour.
  color: { type: String, default: '' },
  // Optional heading shown at the top of the card.
  title: { type: String, default: '' }
})
const extra = { pink: '#d6336c' }
const accent = computed(() => accents[props.color] || extra[props.color] || props.color)

// Bullet items are tick boxes. Ticks are saved in this browser (per page + item).
const root = ref(null)
const route = useRoute()
const total = ref(0)
const done = ref(0)
let items = []
let keyBase = ''

function read(k) {
  try { return localStorage.getItem(k) === '1' } catch { return false }
}
function write(k, on) {
  try { on ? localStorage.setItem(k, '1') : localStorage.removeItem(k) } catch { /* storage blocked */ }
}
function setItem(li, i, on) {
  li.classList.toggle('is-done', on)
  li.setAttribute('aria-checked', String(on))
  write(`${keyBase}:${i}`, on)
}
function recount() {
  done.value = items.filter((li) => li.classList.contains('is-done')).length
}
function toggle(li, i) {
  setItem(li, i, !li.classList.contains('is-done'))
  recount()
}
const handlers = []

onMounted(() => {
  const all = [...document.querySelectorAll('.checklist')]
  keyBase = `checklist:${route.path}:${all.indexOf(root.value)}`
  items = [...root.value.querySelectorAll(':scope > ul > li')]
  total.value = items.length
  items.forEach((li, i) => {
    li.setAttribute('role', 'checkbox')
    li.setAttribute('tabindex', '0')
    li.classList.add('is-tickable')
    li.classList.toggle('is-done', read(`${keyBase}:${i}`))
    li.setAttribute('aria-checked', String(li.classList.contains('is-done')))
    const onClick = (e) => { if (!e.target.closest('a')) toggle(li, i) }
    const onKey = (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggle(li, i) } }
    li.addEventListener('click', onClick)
    li.addEventListener('keydown', onKey)
    handlers.push([li, onClick, onKey])
  })
  recount()
})
onBeforeUnmount(() => {
  handlers.forEach(([li, c, k]) => { li.removeEventListener('click', c); li.removeEventListener('keydown', k) })
})
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
.checklist__head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
.checklist__title {
  margin: 8px 0 6px;
  font-family: var(--font-hand);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--cl-accent);
}
.checklist__count {
  font-family: var(--font-hand);
  font-size: 1.05rem;
  color: var(--muted);
  transition: color 0.2s ease;
}
.checklist__count.is-full { color: var(--cl-accent); font-weight: 700; }

/* Bullet lists become tick boxes; ordered lists keep their numbers. */
.checklist :deep(ul) {
  list-style: none;
  margin: 0;
  padding: 0;
}
.checklist :deep(ul) > li::marker { content: none; }
.checklist :deep(ul) > li {
  position: relative;
  padding-left: 32px;
  border-radius: 6px;
  transition: color 0.2s ease, background-color 0.15s ease;
}
.checklist :deep(ul) > li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.5em;
  width: 17px;
  height: 17px;
  border: var(--line);
  border-radius: 3px;
  background: var(--box);
  transition: background-color 0.15s ease;
}
/* the tick */
.checklist :deep(ul) > li::after {
  content: '';
  position: absolute;
  left: 8px;
  top: calc(0.5em + 2px);
  width: 6px;
  height: 11px;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  transform: rotate(45deg) scale(0);
  transition: transform 0.18s cubic-bezier(0.2, 0, 0, 1);
}
.checklist :deep(li.is-tickable) { cursor: pointer; }
.checklist :deep(li.is-tickable:hover) { background: color-mix(in srgb, var(--cl-accent) 7%, transparent); }
.checklist :deep(li.is-tickable:focus-visible) { outline: 2px solid var(--cl-accent); outline-offset: 2px; }
.checklist :deep(li.is-done)::before { background: var(--cl-accent); border-color: var(--cl-accent); }
.checklist :deep(li.is-done)::after { transform: rotate(45deg) scale(1); }
.checklist :deep(li.is-done) { color: var(--muted); text-decoration: line-through; text-decoration-thickness: 1.5px; }
.checklist :deep(li.is-done .ui-badge) { text-decoration: none; opacity: 0.6; }

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
