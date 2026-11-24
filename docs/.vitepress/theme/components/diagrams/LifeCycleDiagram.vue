<template>
  <DiagramFrame title="Alternation of generations: the whole cycle" :caption="caption">
    <svg viewBox="0 0 480 420" role="img" aria-label="Plant life cycle with haploid and diploid halves">
      <!-- haploid top half, diploid bottom half -->
      <path d="M50 205 A190 190 0 0 1 430 205 Z" fill="#fff1a8" opacity="0.7" />
      <path d="M430 205 A190 190 0 0 1 50 205 Z" fill="#cfe3fa" opacity="0.7" />
      <line x1="36" y1="205" x2="444" y2="205" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="6 5" />
      <text x="16" y="28" font-size="17" font-weight="700">Haploid (n)</text>
      <text x="16" y="408" font-size="17" font-weight="700">Diploid (2n)</text>

      <!-- arrows round the circle -->
      <defs>
        <marker id="lc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" />
        </marker>
      </defs>
      <path v-for="(a, i) in arcs" :key="'a' + i" :d="a" fill="none" stroke="var(--ink)" stroke-width="2" marker-end="url(#lc-arrow)" />

      <!-- processes on the arrows -->
      <text v-for="p in processes" :key="p.t" :x="p.x" :y="p.y" text-anchor="middle" font-size="15" class="lc-process">{{ p.t }}</text>

      <!-- stages -->
      <g
        v-for="(s, i) in stages"
        :key="s.name"
        class="lc-node"
        :class="{ 'is-on': pick === i }"
        tabindex="0"
        role="button"
        :aria-label="s.name"
        @click="pick = pick === i ? null : i"
        @keydown.enter.prevent="pick = pick === i ? null : i"
      >
        <rect :x="pos(s.a)[0] - w(s.name) / 2" :y="pos(s.a)[1] - 16" :width="w(s.name)" height="32" rx="8" />
        <text :x="pos(s.a)[0]" :y="pos(s.a)[1] + 5" text-anchor="middle" font-size="15">{{ s.name }}</text>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const C = [240, 205]
const R = 150
const pos = (deg) => [C[0] + R * Math.cos((deg * Math.PI) / 180), C[1] + R * Math.sin((deg * Math.PI) / 180)]
const w = (t) => t.length * 7.6 + 18

// angles in screen coordinates (clockwise from 3 o'clock)
const stages = [
  { name: 'Sporophyte (2n)', a: 150, note: 'The <b>diploid (2n)</b> generation. It makes spores by <b>meiosis</b>.' },
  { name: 'Spores (n)', a: 210, note: '<b>Meiosis</b> produces <b>haploid (n)</b> spores. Each grows into a gametophyte.' },
  { name: 'Gametophyte (n)', a: 270, note: 'The <b>haploid (n)</b> generation. It makes gametes by <b>mitosis</b>.' },
  { name: 'Gametes (n)', a: 330, note: '<b>Haploid (n)</b> gametes, made by mitosis. Two gametes fuse at <b>fertilisation</b>.' },
  { name: 'Zygote (2n)', a: 30, note: 'Fertilisation forms a <b>diploid (2n) zygote</b>.' },
  { name: 'Embryo (2n)', a: 90, note: 'The zygote develops into an <b>embryo</b>, which grows into a new <b>sporophyte</b>.' }
]
const order = [150, 210, 270, 330, 390, 450, 510]
const gap = 21
const arcs = computed(() =>
  order.slice(0, -1).map((a, i) => {
    const b = order[i + 1]
    const p1 = pos(a + gap)
    const p2 = pos(b - gap)
    return `M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${R} ${R} 0 0 1 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  })
)
const out = (deg, r) => [C[0] + r * Math.cos((deg * Math.PI) / 180), C[1] + r * Math.sin((deg * Math.PI) / 180)]
const processes = [
  { t: 'meiosis', p: out(180, 196) },
  { t: 'mitosis', p: out(300, 186) },
  { t: 'fertilisation', p: out(0, 172) }
].map((x) => ({ t: x.t, x: x.p[0], y: x.p[1] }))

const pick = ref(null)
const caption = computed(() =>
  pick.value === null
    ? 'Tap any stage. Notice that <b>meiosis</b> takes the cycle from 2n to n, and <b>fertilisation</b> takes it back to 2n.'
    : stages[pick.value].note
)
</script>

<style scoped>
.lc-node { cursor: pointer; outline: none; }
.lc-node rect { fill: var(--box); stroke: var(--ink); stroke-width: 2; transition: fill 0.15s ease; }
.lc-node:hover rect, .lc-node:focus-visible rect { fill: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 15%, var(--box)); }
.lc-node.is-on rect { fill: var(--c, var(--vp-c-brand-1)); }
.lc-node.is-on text { fill: #fff; }
.dark .lc-node.is-on text { fill: #172031; }
.lc-process { font-style: italic; fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
</style>
