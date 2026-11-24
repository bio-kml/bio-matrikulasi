<template>
  <DiagramFrame title="Factors that affect the rate of an enzyme reaction" :caption="caption">
    <template #controls>
      <button v-for="(f, k) in factors" :key="k" class="dg-btn" :class="{ 'is-on': factor === k }" :aria-pressed="factor === k" @click="factor = k; region = null">{{ f.label }}</button>
    </template>
    <svg viewBox="0 0 520 300" role="img" :aria-label="`Rate of reaction against ${cur.x}`">
      <defs>
        <marker id="ef-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
      </defs>
      <!-- tappable regions -->
      <g v-for="(r, i) in cur.regions" :key="factor + i">
        <rect :x="gx(r.from)" y="30" :width="gx(r.to) - gx(r.from)" height="220" class="ef-band"
          :style="{ fill: region === i ? 'color-mix(in srgb, var(--c, #1f7a4d) 15%, transparent)' : 'transparent' }"
          @click="region = region === i ? null : i" />
        <line v-if="i > 0" :x1="gx(r.from)" :x2="gx(r.from)" y1="40" y2="250" stroke="var(--rule)" stroke-width="2" stroke-dasharray="4 5" pointer-events="none" />
        <text :x="(gx(r.from) + gx(r.to)) / 2" y="46" text-anchor="middle" font-size="13" font-weight="700" pointer-events="none">{{ r.name }}</text>
      </g>
      <line x1="70" y1="250" x2="495" y2="250" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ef-axis)" />
      <line x1="70" y1="250" x2="70" y2="25" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ef-axis)" />
      <text x="32" y="150" text-anchor="middle" font-size="16" transform="rotate(-90 32 150)">Rate of reaction</text>
      <text x="282" y="290" text-anchor="middle" font-size="16">{{ cur.x }}</text>
      <g v-for="t in cur.ticks || []" :key="t[1]">
        <text :x="gx(t[0])" y="268" text-anchor="middle" font-size="13">{{ t[1] }}</text>
      </g>
      <g v-for="(c, i) in cur.curves" :key="factor + 'c' + i" pointer-events="none">
        <path :d="path(c.f)" fill="none" class="ef-curve" stroke-width="3.5" />
        <text v-if="c.label" :x="gx(c.lx)" :y="c.ly" text-anchor="middle" font-size="14" class="ef-label">{{ c.label }}</text>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const gx = (t) => 70 + t * 410
const gy = (v) => 245 - v * 175 // v in 0..1
const bell = (t, mu, sd) => Math.exp(-((t - mu) ** 2) / (2 * sd * sd))

const factors = {
  substrate: {
    label: 'Substrate concentration',
    x: 'Substrate concentration',
    curves: [{ f: (t) => (1.15 * t) / (0.22 + t) }],
    regions: [
      { name: 'low', from: 0, to: 0.22, note: 'At <b>low substrate concentration</b>, the rate increases with substrate concentration. Not all active sites bind with substrates; some active sites remain free.' },
      { name: 'increasing', from: 0.22, to: 0.55, note: 'As substrate concentration increases, <b>collisions</b> between substrates and active sites increase and more active sites bind with substrates, until there are no more free active sites.' },
      { name: 'saturated', from: 0.55, to: 1, note: 'At <b>very high substrate concentration</b> the rate becomes <b>constant</b>: all active sites are bound with substrate (the enzyme is fully <b>saturated</b>). Adding more substrate will not increase the rate.' }
    ],
    intro: 'Tap a part of the graph.'
  },
  ph: {
    label: 'pH',
    x: 'pH',
    ticks: [[0, '0'], [0.2, '2'], [0.4, '4'], [0.6, '6'], [0.8, '8'], [1, '10']],
    curves: [
      { f: (t) => 0.92 * bell(t, 0.2, 0.07), label: 'pepsin', lx: 0.2, ly: 70 },
      { f: (t) => 0.92 * bell(t, 0.8, 0.07), label: 'trypsin', lx: 0.8, ly: 70 }
    ],
    regions: [],
    intro: 'Enzymes work efficiently within a <b>narrow pH range</b>, and different enzymes have different <b>optimum pH</b>: e.g. pepsin about pH 2, trypsin about pH 8. Above or below the optimum, the rate decreases.'
  },
  temp: {
    label: 'Temperature',
    x: 'Temperature (°C)',
    ticks: [[0, '0'], [0.2, '10'], [0.4, '20'], [0.6, '30'], [0.74, '37'], [1, '50']],
    curves: [{ f: (t) => (t <= 0.74 ? 0.95 * Math.pow(t / 0.74, 2.2) : 0.95 * Math.max(0, 1 - ((t - 0.74) / 0.26) ** 1.4)) }],
    regions: [
      { name: 'low', from: 0, to: 0.35, note: 'At <b>low temperature</b> the rate is low: molecules move slowly, so collisions between substrate and active site decrease. The enzyme is also inactive.' },
      { name: 'rising', from: 0.35, to: 0.68, note: 'As temperature increases, molecules move faster and <b>collide more often</b>. For every 10°C rise, the rate of reaction roughly <b>doubles</b>, up to the optimum.' },
      { name: 'optimum', from: 0.68, to: 0.8, note: '<b>Optimum temperature</b>: rate is maximum. Most human enzymes: 35°C to 40°C (37°C). Enzymes of thermophilic bacteria in hot springs: 70°C or higher.' },
      { name: 'denatured', from: 0.8, to: 1, note: 'Beyond the optimum the rate decreases; at about 50°C the reaction stops because the enzyme is <b>denatured</b>: ionic and hydrogen bonds, hydrophobic and van der Waals interactions break, so the active site changes shape and the substrate no longer fits.' }
    ],
    intro: 'Tap a part of the graph (human enzyme).'
  },
  enzyme: {
    label: 'Enzyme concentration',
    x: 'Enzyme concentration',
    curves: [{ f: (t) => 0.92 * t }],
    regions: [],
    intro: 'As enzyme concentration increases, the rate increases, <b>if substrate is in excess</b> and no other factor is limiting. The rate is <b>directly proportional</b> to enzyme concentration.'
  }
}
const factor = ref('substrate')
const region = ref(null)
const cur = computed(() => factors[factor.value])
const path = (f) => {
  let d = ''
  for (let i = 0; i <= 120; i++) {
    const t = i / 120
    d += `${i ? ' L' : 'M'}${gx(t).toFixed(1)} ${gy(f(t)).toFixed(1)}`
  }
  return d
}
const caption = computed(() => (region.value === null ? cur.value.intro : cur.value.regions[region.value].note))
</script>

<style scoped>
.ef-band { cursor: pointer; }
.ef-curve { stroke: var(--c, var(--vp-c-brand-1)); }
.ef-label { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
</style>
