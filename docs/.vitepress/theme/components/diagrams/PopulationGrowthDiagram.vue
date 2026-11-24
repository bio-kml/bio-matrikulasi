<template>
  <DiagramFrame title="Population growth curves" :caption="caption">
    <template #controls>
      <button class="dg-btn" :class="{ 'is-on': type === 'J' }" :aria-pressed="type === 'J'" @click="type = 'J'; phase = null">Exponential (J-shaped)</button>
      <button class="dg-btn" :class="{ 'is-on': type === 'S' }" :aria-pressed="type === 'S'" @click="type = 'S'; phase = null">Logistic (S-shaped)</button>
    </template>
    <svg viewBox="0 0 520 300" role="img" :aria-label="`${type === 'J' ? 'Exponential' : 'Logistic'} growth curve`">
      <defs>
        <marker id="pg-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" />
        </marker>
      </defs>
      <!-- phase bands -->
      <g v-for="(p, i) in cur.phases" :key="type + i">
        <rect
          :x="gx(p.from)" y="30" :width="gx(p.to) - gx(p.from)" height="220"
          :style="{ fill: phase === i ? 'color-mix(in srgb, var(--c, #1f7a4d) 16%, transparent)' : 'transparent' }"
          class="pg-band" @click="phase = phase === i ? null : i"
        />
        <line v-if="i > 0" :x1="gx(p.from)" :x2="gx(p.from)" y1="40" y2="250" stroke="var(--rule)" stroke-width="2" stroke-dasharray="4 5" pointer-events="none" />
        <text :x="(gx(p.from) + gx(p.to)) / 2" y="46" text-anchor="middle" font-size="14" font-weight="700" pointer-events="none">{{ p.name }}</text>
      </g>
      <!-- axes -->
      <line x1="70" y1="250" x2="495" y2="250" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#pg-axis)" />
      <line x1="70" y1="250" x2="70" y2="25" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#pg-axis)" />
      <text x="32" y="150" text-anchor="middle" font-size="16" transform="rotate(-90 32 150)">Population size (N)</text>
      <text x="285" y="285" text-anchor="middle" font-size="16">Time</text>
      <!-- carrying capacity -->
      <g v-if="type === 'S'">
        <line x1="70" x2="480" :y1="KY" :y2="KY" stroke="var(--ink)" stroke-width="2" stroke-dasharray="8 6" />
        <text x="480" :y="KY - 8" text-anchor="end" font-size="15">carrying capacity (K)</text>
      </g>
      <path :key="type" :d="curve" fill="none" class="pg-curve" stroke-width="3.5" />
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const KY = 80
const gx = (t) => 70 + t * 410
const types = {
  J: {
    intro: 'Exponential (J-shaped) growth, e.g. the <b>human population</b>: unlimited growth. Tap a phase.',
    f: (t) => 245 - 205 * (Math.exp(4.2 * t) - 1) / (Math.exp(4.2) - 1),
    phases: [
      { name: 'lag', from: 0, to: 0.55, note: '<b>Lag phase</b>: growth is slow because the population size is small.' },
      { name: 'log', from: 0.55, to: 1, note: '<b>Log phase</b>: growth increases rapidly; natality > mortality. (Human numbers rose fast with more food and better healthcare.)' }
    ]
  },
  S: {
    intro: 'Logistic (S-shaped) growth, e.g. <i>Paramecium</i> sp. in a small culture. Tap a phase.',
    f: (t) => 245 - (245 - KY) / (1 + Math.exp(-11 * (t - 0.42))),
    phases: [
      { name: 'lag', from: 0, to: 0.24, note: '<b>Lag phase</b>: growth is slow: population small, adapting to the new environment, few mature reproducing individuals.' },
      { name: 'log', from: 0.24, to: 0.5, note: '<b>Log phase</b>: rapid growth near the biotic potential; natality > mortality; resources plentiful; maximum growth rate.' },
      { name: 'decelerating', from: 0.5, to: 0.72, note: '<b>Decelerating phase</b>: growth slows; environmental resistance acts; competition for resources rises; mortality rises but natality is still higher.' },
      { name: 'stationary', from: 0.72, to: 1, note: '<b>Stationary phase</b>: natality = mortality; size is stable and oscillates around K.' }
    ]
  }
}
const type = ref('S')
const phase = ref(null)
const cur = computed(() => types[type.value])
const curve = computed(() => {
  let d = ''
  for (let i = 0; i <= 100; i++) {
    const t = i / 100
    d += `${i ? ' L' : 'M'}${gx(t).toFixed(1)} ${cur.value.f(t).toFixed(1)}`
  }
  return d
})
const caption = computed(() => (phase.value === null ? cur.value.intro : cur.value.phases[phase.value].note))
</script>

<style scoped>
.pg-band { cursor: pointer; }
.pg-curve { stroke: var(--c, var(--vp-c-brand-1)); stroke-dasharray: 900; animation: pg-draw 0.9s cubic-bezier(0.2, 0, 0, 1) both; }
@keyframes pg-draw { from { stroke-dashoffset: 900; } to { stroke-dashoffset: 0; } }
@media (prefers-reduced-motion: reduce) { .pg-curve { animation: none; stroke-dasharray: none; } }
</style>
