<template>
  <DiagramFrame title="Enzyme inhibitors" :caption="cur.note">
    <template #controls>
      <button v-for="(m, k) in modes" :key="k" class="dg-btn" :class="{ 'is-on': mode === k }" :aria-pressed="mode === k" @click="mode = k">{{ m.label }}</button>
    </template>
    <div class="inh">
      <!-- the enzyme -->
      <svg viewBox="0 0 300 250" role="img" :aria-label="cur.label">
        <Transition name="dg-fade" mode="out-in">
          <g :key="mode">
            <path :d="mode === 'non' ? bentEnzyme : enzyme" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2.5" />
            <text x="150" y="215" text-anchor="middle" font-size="17" font-weight="700">enzyme</text>
            <text x="150" y="106" text-anchor="middle" font-size="13">active site</text>
            <text x="252" y="128" text-anchor="middle" font-size="13">allosteric</text>
            <text x="252" y="143" text-anchor="middle" font-size="13">site</text>

            <!-- substrate -->
            <rect v-if="mode === 'none'" x="128" y="60" width="44" height="30" rx="4" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
            <rect v-else x="128" y="8" width="44" height="30" rx="4" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
            <text v-if="mode !== 'none'" x="186" y="28" font-size="13">substrate</text>

            <!-- inhibitors -->
            <rect v-if="mode === 'comp'" x="128" y="60" width="44" height="30" rx="4" fill="#f4a3a3" stroke="var(--ink)" stroke-width="2.5" />
            <circle v-if="mode === 'non'" cx="246" cy="168" r="15" fill="#f4a3a3" stroke="var(--ink)" stroke-width="2.5" />
            <text v-if="mode !== 'none'" :x="mode === 'comp' ? 78 : 246" :y="mode === 'comp' ? 80 : 204" text-anchor="middle" font-size="13" font-weight="700">inhibitor</text>
          </g>
        </Transition>
      </svg>

      <!-- rate graph -->
      <svg viewBox="0 0 300 250" role="img" aria-label="Rate of reaction against substrate concentration">
        <defs>
          <marker id="inh-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
        </defs>
        <line x1="40" y1="200" x2="290" y2="200" stroke="var(--ink)" stroke-width="2" marker-end="url(#inh-axis)" />
        <line x1="40" y1="200" x2="40" y2="15" stroke="var(--ink)" stroke-width="2" marker-end="url(#inh-axis)" />
        <text x="16" y="110" text-anchor="middle" font-size="13" transform="rotate(-90 16 110)">Rate of reaction</text>
        <text x="165" y="228" text-anchor="middle" font-size="13">Substrate concentration</text>
        <path :d="curve(1, 0.12)" fill="none" stroke="var(--ink)" stroke-width="2.5" :stroke-dasharray="mode === 'none' ? null : '6 5'" />
        <text x="285" y="44" text-anchor="end" font-size="12">no inhibitor</text>
        <path v-if="mode === 'comp'" :d="curve(1, 0.55)" fill="none" class="inh-curve" stroke-width="3" />
        <path v-if="mode === 'non'" :d="curve(0.5, 0.12)" fill="none" class="inh-curve" stroke-width="3" />
        <text v-if="mode !== 'none'" x="285" :y="mode === 'comp' ? 82 : 110" text-anchor="end" font-size="12" class="inh-label">{{ modes[mode].label.toLowerCase() }}</text>
      </svg>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// Rectangular active site on top, small round allosteric site on the right.
const enzyme = 'M30 110 Q30 90 50 90 L124 90 L124 56 L176 56 L176 90 L230 90 Q260 90 260 120 L260 150 C248 150 231 155 231 168 C231 181 248 186 260 186 L260 190 Q260 200 240 200 L50 200 Q30 200 30 180 Z'
// Non-competitive: inhibitor in the allosteric site changes the active site shape.
const bentEnzyme = 'M30 110 Q30 90 50 90 L124 90 L134 66 L150 78 L166 66 L176 90 L230 90 Q260 90 260 120 L260 150 C248 150 231 155 231 168 C231 181 248 186 260 186 L260 190 Q260 200 240 200 L50 200 Q30 200 30 180 Z'

const modes = {
  none: { label: 'No inhibitor', note: 'The substrate binds to the active site, forming an <b>enzyme-substrate complex</b>, and product is formed.' },
  comp: { label: 'Competitive', note: '<b>Competitive inhibitor</b>: similar shape to the substrate, binds to the <b>active site</b> and competes with the substrate. The same quantity of product forms, but it takes longer. <b>Increasing substrate concentration</b> reduces the effect, so the curve still reaches the same maximum.' },
  non: { label: 'Non-competitive', note: '<b>Non-competitive inhibitor</b>: different shape from the substrate, binds to the <b>allosteric site</b> and changes the conformation of the active site, so the substrate cannot bind. Increasing substrate concentration <b>does not</b> reduce the effect; remove the inhibitor or lower its concentration instead.' }
}
const mode = ref('comp')
const cur = computed(() => ({ ...modes[mode.value] }))
const curve = (vmax, k) => {
  let d = ''
  for (let i = 0; i <= 80; i++) {
    const t = i / 80
    const v = (vmax * t) / (k + t) * (1 + k)
    d += `${i ? ' L' : 'M'}${(40 + t * 240).toFixed(1)} ${(198 - v * 150).toFixed(1)}`
  }
  return d
}
</script>

<style scoped>
.inh { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-items: center; }
@media (max-width: 560px) { .inh { grid-template-columns: 1fr; } }
.inh-curve { stroke: var(--c, var(--vp-c-brand-1)); }
.inh-label { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
</style>
