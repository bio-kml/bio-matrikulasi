<template>
  <DiagramFrame title="Three types of natural selection" :caption="caption">
    <template #controls>
      <button
        v-for="(m, key) in modes"
        :key="key"
        class="dg-btn"
        :class="{ 'is-on': mode === key }"
        :aria-pressed="mode === key"
        @click="mode = key; applied = false"
      >{{ m.label }}</button>
      <button class="dg-btn sc-apply" :class="{ 'is-on': applied }" @click="applied = !applied">
        {{ applied ? 'Reset' : 'Apply selection' }}
      </button>
    </template>

    <svg viewBox="0 0 520 330" role="img" :aria-label="`${cur.label} selection graph`">
      <defs>
        <marker id="sc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" />
        </marker>
        <marker id="sc-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" />
        </marker>
      </defs>

      <!-- axes -->
      <line x1="70" y1="250" x2="490" y2="250" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#sc-axis)" />
      <line x1="70" y1="250" x2="70" y2="30" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#sc-axis)" />
      <text x="58" y="256" text-anchor="end" font-size="15">0</text>
      <text x="30" y="150" text-anchor="middle" font-size="16" transform="rotate(-90 30 150)">Number of individuals</text>
      <text x="280" y="318" text-anchor="middle" font-size="17" font-weight="700">Phenotypes</text>
      <g v-for="(t, i) in cur.ticks" :key="i">
        <line :x1="tickX[i]" :x2="tickX[i]" y1="250" y2="257" stroke="var(--ink)" stroke-width="2" />
        <text :x="tickX[i]" y="276" text-anchor="middle" font-size="14">{{ t[0] }}</text>
        <text :x="tickX[i]" y="293" text-anchor="middle" font-size="14">{{ t[1] }}</text>
      </g>

      <!-- before selection -->
      <path :d="beforePath" fill="none" stroke="var(--ink)" stroke-width="2.5" stroke-dasharray="7 6" />
      <text :x="cur.beforeLabel[0]" :y="cur.beforeLabel[1]" text-anchor="middle" font-size="15">Before selection</text>

      <!-- selection pressure + after selection -->
      <Transition name="dg-fade">
        <g v-if="applied" :key="mode">
          <g v-for="x in cur.pressure" :key="x">
            <line :x1="x" :x2="x" y1="46" y2="118" stroke="var(--ink)" stroke-width="3" marker-end="url(#sc-arrow)" />
            <text :x="x" y="26" text-anchor="middle" font-size="14">Selection</text>
            <text :x="x" y="41" text-anchor="middle" font-size="14">pressure</text>
          </g>
          <path :d="afterPath" fill="none" class="sc-after" stroke-width="3.5" />
          <text :x="cur.afterLabel[0]" :y="cur.afterLabel[1]" text-anchor="middle" font-size="15" class="sc-after-label">After selection</text>
        </g>
      </Transition>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// Graph space: x 80..470 (phenotype), baseline y = 250.
const X0 = 80
const X1 = 470
const BASE = 250
const tickX = [125, 275, 425]
const gauss = (x, mu, sd, h) => h * Math.exp(-((x - mu) ** 2) / (2 * sd * sd))

const modes = {
  stabilizing: {
    label: 'Stabilizing',
    ticks: [['Extreme:', 'low weight'], ['Intermediate:', '3–4 kg'], ['Extreme:', 'high weight']],
    before: (x) => gauss(x, 275, 75, 105),
    after: (x) => gauss(x, 275, 38, 175),
    pressure: [125, 425],
    beforeLabel: [150, 200],
    afterLabel: [370, 92],
    caption: '<b>Stabilizing</b> (human birth weight): selection acts against <b>both extremes</b>. Babies of 3–4 kg have the highest survival, so the curve becomes <b>narrower</b> with the <b>same mean</b>; genetic variability is reduced.'
  },
  directional: {
    label: 'Directional',
    ticks: [['Extreme:', 'light moth'], ['Intermediate:', 'medium shade'], ['Extreme:', 'dark moth']],
    before: (x) => gauss(x, 230, 62, 120),
    after: (x) => gauss(x, 345, 50, 135),
    pressure: [125],
    beforeLabel: [235, 116],
    afterLabel: [360, 100],
    caption: '<b>Directional</b> (peppered moth, <i>Biston betularia</i>): pollution darkens tree bark, light moths are easily seen by predators, so dark moths survive and reproduce more. The <b>whole curve shifts</b> toward the dark extreme.'
  },
  disruptive: {
    label: 'Disruptive',
    ticks: [['Extreme:', 'small beak'], ['Intermediate:', 'medium beak'], ['Extreme:', 'large beak']],
    before: (x) => gauss(x, 275, 70, 110),
    after: (x) => gauss(x, 160, 30, 120) + gauss(x, 390, 30, 120),
    pressure: [275],
    beforeLabel: [395, 178],
    afterLabel: [160, 108],
    caption: '<b>Disruptive</b> (black-bellied seedcracker finch): small beaks feed well on soft seeds, large beaks crack hard seeds, medium beaks are poor at both. The curve <b>splits into two peaks</b>; genetic variability increases and it may lead to a new species.'
  }
}

const mode = ref('stabilizing')
const applied = ref(false)
const cur = computed(() => modes[mode.value])

function path(f) {
  let d = `M${X0} ${BASE}`
  for (let x = X0; x <= X1; x += 4) d += ` L${x} ${(BASE - f(x)).toFixed(1)}`
  return d
}
const beforePath = computed(() => path(cur.value.before))
const afterPath = computed(() => path(cur.value.after))
const caption = computed(() =>
  applied.value
    ? cur.value.caption
    : `Predict: which phenotypes will survive best? Then press <b>Apply selection</b>.`
)
</script>

<style scoped>
.sc-after { stroke: var(--c, var(--vp-c-brand-1)); }
.sc-after-label { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.sc-apply { margin-left: auto; }
@media (max-width: 520px) { .sc-apply { margin-left: 0; } }
</style>
