<template>
  <DiagramFrame title="Electron transport chain and chemiosmosis" :caption="steps[step].note">
    <template #controls>
      <button class="dg-btn" :disabled="step === 0" @click="step = Math.max(0, step - 1)">← Back</button>
      <button class="dg-btn is-on" @click="step = step === steps.length - 1 ? 0 : step + 1">{{ step === 0 ? 'Start' : step === steps.length - 1 ? 'Start again' : 'Next →' }}</button>
      <span class="etc-count">step {{ step }} / {{ steps.length - 1 }}</span>
    </template>
    <svg viewBox="0 0 660 340" role="img" aria-label="Electron transport chain in the inner mitochondrial membrane">
      <defs>
        <marker id="etc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
        <marker id="etc-e" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="#c2410c" /></marker>
      </defs>
      <text x="12" y="26" font-size="15" font-weight="700">intermembrane space</text>
      <text x="12" y="336" font-size="15" font-weight="700">matrix</text>
      <!-- inner membrane -->
      <rect x="0" y="140" width="660" height="60" fill="#f3e2c7" />
      <line x1="0" x2="660" y1="140" y2="140" stroke="var(--ink)" stroke-width="2" />
      <line x1="0" x2="660" y1="200" y2="200" stroke="var(--ink)" stroke-width="2" />
      
      <!-- H+ in the intermembrane space -->
      <g class="etc-h">
        <text v-for="(h, i) in hPos.slice(0, hShown)" :key="i" :x="h[0]" :y="h[1]" font-size="15" font-weight="700">H⁺</text>
      </g>

      <!-- complexes -->
      <g v-for="c in complexes" :key="c.id" class="etc-cx" :class="{ 'is-on': steps[step].on.includes(c.id) }">
        <rect v-if="c.shape === 'rect'" :x="c.x - c.w / 2" :y="c.y" :width="c.w" :height="c.h" rx="12" :fill="c.fill" stroke="var(--ink)" stroke-width="2.5" />
        <circle v-else :cx="c.x" :cy="c.y" :r="c.r" :fill="c.fill" stroke="var(--ink)" stroke-width="2.5" />
        <text :x="c.x" :y="c.ly" text-anchor="middle" font-size="14" font-weight="700">{{ c.label }}</text>
      </g>

      <!-- electron path -->
      <path v-for="(seg, i) in ePath" :key="'e' + i" v-show="step >= seg.from" :d="seg.d" fill="none" stroke="#c2410c" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#etc-e)" class="etc-e" />

      <!-- pumping arrows -->
      <g v-for="p in pumps" :key="p.x" v-show="step >= p.from">
        <line :x1="p.x + 26" :x2="p.x + 26" y1="270" y2="70" stroke="var(--ink)" stroke-width="2" marker-end="url(#etc-a)" />
        <text :x="p.x + 32" y="262" font-size="13">H⁺</text>
      </g>

      <!-- matrix-side labels -->
      <text v-show="step >= 1" x="40" y="296" font-size="14">NADH → NAD⁺</text>
      <text v-show="step >= 2" x="140" y="316" font-size="14">FADH₂ → FAD</text>
      <text v-show="step >= 6" x="360" y="296" font-size="14">2H⁺ + 2e⁻ + ½O₂ → H₂O</text>
      <!-- ATP synthase flow -->
      <g v-show="step >= 8">
        <line x1="600" x2="600" y1="70" y2="282" stroke="var(--c, #1f7a4d)" stroke-width="4" marker-end="url(#etc-a)" />
        <text x="650" y="320" text-anchor="end" font-size="14" font-weight="700">ADP + Pi → ATP</text>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const complexes = [
  { id: 'I', label: 'I', shape: 'rect', x: 70, y: 110, w: 70, h: 120, ly: 175, fill: '#8ec5f0' },
  { id: 'II', label: 'II', shape: 'rect', x: 165, y: 165, w: 56, h: 64, ly: 202, fill: '#b9e3c6' },
  { id: 'Q', label: 'Q', shape: 'circle', x: 240, y: 170, r: 20, ly: 175, fill: '#f8d866' },
  { id: 'III', label: 'III', shape: 'rect', x: 320, y: 110, w: 70, h: 120, ly: 175, fill: '#8ec5f0' },
  { id: 'cyt', label: 'cyt c', shape: 'circle', x: 400, y: 120, r: 22, ly: 125, fill: '#f8d866' },
  { id: 'IV', label: 'IV', shape: 'rect', x: 480, y: 110, w: 70, h: 120, ly: 175, fill: '#8ec5f0' },
  { id: 'ATP', label: 'ATP synthase', shape: 'rect', x: 600, y: 100, w: 64, h: 160, ly: 240, fill: '#f4a3a3' }
]
const ePath = [
  { from: 1, d: 'M70 232 Q70 210 75 200' },
  { from: 3, d: 'M100 170 Q170 150 222 168' },
  { from: 3, d: 'M190 190 Q215 195 224 182' },
  { from: 4, d: 'M258 168 Q280 160 290 168' },
  { from: 5, d: 'M340 112 Q360 100 380 112' },
  { from: 6, d: 'M420 112 Q440 100 452 118' },
  { from: 6, d: 'M490 232 Q490 262 470 276' }
]
const pumps = [{ x: 70, from: 1 }, { x: 320, from: 4 }, { x: 480, from: 6 }]
const hPos = [[40, 60], [120, 50], [180, 80], [260, 55], [300, 90], [360, 45], [430, 70], [510, 50], [540, 90], [210, 40], [470, 35], [90, 95]]
const steps = [
  { on: [], note: 'The band is the <b>inner mitochondrial membrane</b>. It holds the chain: <b>NADH dehydrogenase (I)</b>, <b>succinate dehydrogenase (II)</b>, <b>coenzyme Q</b>, <b>cytochrome c reductase (III)</b>, <b>cytochrome c</b>, <b>cytochrome c oxidase (IV)</b>, and <b>ATP synthase</b>. Press Start.' },
  { on: ['I'], note: '<b>NADH</b> (from glycolysis, pyruvate oxidation and the Krebs cycle) gives its electrons to <b>NADH dehydrogenase (complex I)</b>; NADH is oxidised to NAD⁺. Complex I pumps H⁺ into the intermembrane space.' },
  { on: ['II'], note: '<b>FADH₂</b> (from the Krebs cycle) gives its electrons to <b>succinate dehydrogenase (complex II)</b>; FADH₂ is oxidised to FAD. Complex II does <b>not</b> pump H⁺.' },
  { on: ['Q'], note: 'Electrons from complexes I and II are passed to <b>coenzyme Q (ubiquinone)</b>.' },
  { on: ['III'], note: 'From CoQ the electrons go to <b>cytochrome c reductase (complex III)</b>, which pumps more H⁺.' },
  { on: ['cyt'], note: 'Electrons move on to <b>cytochrome c</b>. Each hand-over is a <b>redox reaction</b> that releases a little energy.' },
  { on: ['IV'], note: '<b>Cytochrome c oxidase (complex IV)</b> pumps H⁺ and passes electrons to <b>oxygen, the final electron acceptor</b>: 2H⁺ + 2e⁻ + ½O₂ → H₂O.' },
  { on: [], note: 'H⁺ builds up in the intermembrane space: a <b>proton gradient</b>, the <b>proton-motive force</b>.' },
  { on: ['ATP'], note: '<b>Chemiosmosis</b>: H⁺ diffuses back into the matrix down its concentration gradient through <b>ATP synthase</b>, which phosphorylates ADP to ATP. 1 NADH → 3 ATP; 1 FADH₂ → 2 ATP.' }
]
const step = ref(0)
const hShown = computed(() => [0, 3, 3, 3, 6, 6, 9, 12, 12][step.value])
</script>

<style scoped>
.etc-cx { opacity: 0.55; transition: opacity 0.25s ease; }
.etc-cx.is-on { opacity: 1; }
.etc-cx.is-on rect, .etc-cx.is-on circle { stroke-width: 4; }
.etc-h text { fill: var(--c, var(--vp-c-brand-1)) !important; animation: etc-in 0.35s ease both; }
.etc-e { animation: etc-in 0.35s ease both; }
.etc-count { align-self: center; font-size: 14px; color: var(--muted); margin-left: 6px; }
@keyframes etc-in { from { opacity: 0; } to { opacity: 1; } }
</style>
