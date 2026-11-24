<template>
  <DiagramFrame title="Pyramid of energy" :caption="caption">
    <div class="ep">
      <div class="ep__stack">
        <button
          v-for="(l, i) in levels"
          :key="l.n"
          class="ep__bar"
          :class="{ 'is-on': pick === i }"
          :style="{ width: 28 + i * 18 + '%', '--d': (4 - i) * 0.08 + 's' }"
          @click="pick = pick === i ? null : i"
        >
          <span class="ep__j">{{ l.j }}</span>
        </button>
      </div>
      <ol class="ep__labels">
        <li v-for="l in levels" :key="l.n"><b>{{ l.n }}</b> {{ l.who }}</li>
      </ol>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// top to bottom
const levels = [
  { n: '5th', who: 'carnivores', j: '1 J' },
  { n: '4th', who: 'carnivores', j: '10 J' },
  { n: '3rd', who: 'carnivores', j: '100 J' },
  { n: '2nd', who: 'herbivores', j: '1 000 J' },
  { n: '1st', who: 'producers', j: '10 000 J' }
]
const pick = ref(null)
const caption = computed(() => {
  if (pick.value === null) return 'Tap a level. Only about <b>10%</b> of the energy passes to the next level; about <b>90%</b> is lost at each transfer.'
  const l = levels[pick.value]
  if (pick.value === 4) return '<b>1st trophic level: producers</b>, 10 000 J. They convert only about 1% of the visible light that reaches them into chemical energy.'
  return `<b>${l.n} trophic level: ${l.who}</b>, ${l.j}. That is about 10% of the ${levels[pick.value + 1].j} in the level below; the rest (about 90%) was lost.`
})
</script>

<style scoped>
.ep { display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); gap: 16px; align-items: center; }
@media (max-width: 560px) { .ep { grid-template-columns: 1fr; } }
.ep__stack { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.ep__bar {
  height: 40px;
  font: inherit;
  color: var(--ink);
  background: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 22%, var(--box));
  border: var(--line);
  border-radius: 4px;
  cursor: pointer;
  animation: ep-grow 0.5s cubic-bezier(0.2, 0, 0, 1) var(--d) both;
  transition: background-color 0.15s ease;
}
.ep__bar:hover { background: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 40%, var(--box)); }
.ep__bar.is-on { color: #fff; background: var(--c, var(--vp-c-brand-1)); }
.dark .ep__bar.is-on { color: #172031; }
.ep__j { font-family: var(--font-hand); font-size: 16px; font-weight: 700; white-space: nowrap; }
.vp-doc .ep__labels, .ep__labels { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 4px; }
.vp-doc .ep__labels li, .ep__labels li { margin: 0; height: 40px; display: flex; align-items: center; gap: 6px; font-size: 16px; }
.ep__labels b { background: none; padding: 0; font-family: var(--font-hand); }
@media (max-width: 560px) { .ep__labels { display: none; } }
@keyframes ep-grow { from { transform: scaleX(0.2); opacity: 0; } to { transform: none; opacity: 1; } }
</style>
