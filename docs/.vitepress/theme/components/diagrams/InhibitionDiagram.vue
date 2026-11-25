<template>
  <DiagramFrame title="Enzyme inhibitors" :caption="cur.note">
    <template #controls>
      <button v-for="(m, k) in modes" :key="k" class="dg-btn" :class="{ 'is-on': mode === k }" :aria-pressed="mode === k" @click="mode = k">{{ m.label }}</button>
    </template>
    <div class="inh">
      <!-- the enzyme: a V-shaped pocket (active site) that fits the triangular substrate,
           and a round notch (allosteric site) on the right -->
      <svg viewBox="10 34 388 262" role="img" :aria-label="cur.label">
        <Transition name="dg-fade" mode="out-in">
          <g :key="mode">
            <path :d="mode === 'non' ? bentEnzyme : enzyme" fill="#8ec5f0" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" />
            <text x="180" y="232" text-anchor="middle" font-size="20" class="inh-in">enzyme</text>

            <!-- substrate: a triangle that matches the pocket -->
            <g :transform="mode === 'none' ? '' : 'translate(0 -86)'">
              <path d="M150 130 L210 130 L180 180 Z" fill="#f8d866" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" />
              <text x="180" y="151" text-anchor="middle" font-size="17" class="inh-in">S</text>
            </g>

            <!-- competitive inhibitor: similar shape, sits in the active site -->
            <g v-if="mode === 'comp'">
              <path d="M150 116 L210 116 L210 130 L180 180 L150 130 Z" fill="#f4a3a3" stroke="var(--ink)" stroke-width="3" stroke-linejoin="round" />
              <text x="180" y="143" text-anchor="middle" font-size="17" class="inh-in">I</text>
            </g>
            <!-- non-competitive inhibitor: different shape, sits in the allosteric site -->
            <g v-if="mode === 'non'">
              <circle cx="300" cy="200" r="15" fill="#f4a3a3" stroke="var(--ink)" stroke-width="3" />
              <text x="300" y="206" text-anchor="middle" font-size="17" class="inh-in">I</text>
            </g>

            <!-- labels with pointer lines -->
            <g class="inh-lab" font-size="18">
              <line x1="84" y1="112" x2="159" y2="147" class="inh-lead" />
              <text x="16" y="104">active site</text>
              <text v-if="mode === 'non'" x="16" y="84" font-size="16" class="inh-warn">changed shape!</text>

              <line x1="318" y1="266" x2="292" y2="214" class="inh-lead" />
              <text x="390" y="284" text-anchor="end">allosteric site</text>

              <template v-if="mode === 'none'">
                <line x1="262" y1="96" x2="200" y2="140" class="inh-lead" />
                <text x="266" y="96">substrate</text>
                <text x="266" y="118" font-size="16" class="inh-ok">fits: ES complex</text>
              </template>
              <template v-else>
                <text x="226" y="58">substrate</text>
                <text x="226" y="80" font-size="16" class="inh-warn">✕ cannot bind</text>
              </template>

              <template v-if="mode === 'comp'">
                <line x1="246" y1="114" x2="208" y2="122" class="inh-lead" />
                <text x="250" y="108">competitive</text>
                <text x="250" y="126">inhibitor</text>
              </template>
              <template v-if="mode === 'non'">
                <line x1="340" y1="176" x2="312" y2="192" class="inh-lead" />
                <text x="390" y="150" text-anchor="end">non-competitive</text>
                <text x="390" y="168" text-anchor="end">inhibitor</text>
              </template>
            </g>
          </g>
        </Transition>
      </svg>

      <!-- rate graph -->
      <svg viewBox="0 0 300 290" role="img" aria-label="Rate of reaction against substrate concentration">
        <defs>
          <marker id="inh-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
        </defs>
        <line x1="40" y1="200" x2="290" y2="200" stroke="var(--ink)" stroke-width="2" marker-end="url(#inh-axis)" />
        <line x1="40" y1="200" x2="40" y2="15" stroke="var(--ink)" stroke-width="2" marker-end="url(#inh-axis)" />
        <text x="18" y="110" text-anchor="middle" font-size="17" transform="rotate(-90 18 110)">Rate of reaction</text>
        <text x="165" y="224" text-anchor="middle" font-size="17">Substrate concentration</text>
        <path :d="curve(1, 0.12)" fill="none" stroke="var(--ink)" stroke-width="2.5" :stroke-dasharray="mode === 'none' ? null : '6 5'" />
        <path v-if="mode === 'comp'" :d="curve(1, 0.55)" fill="none" class="inh-curve" stroke-width="3.5" />
        <path v-if="mode === 'non'" :d="curve(0.5, 0.12)" fill="none" class="inh-curve" stroke-width="3.5" />

        <!-- legend -->
        <line x1="44" y1="250" x2="80" y2="250" stroke="var(--ink)" stroke-width="2.5" :stroke-dasharray="mode === 'none' ? null : '6 5'" />
        <text x="88" y="255" font-size="17">no inhibitor</text>
        <template v-if="mode !== 'none'">
          <line x1="44" y1="276" x2="80" y2="276" class="inh-curve" stroke-width="3.5" />
          <text x="88" y="281" font-size="17" class="inh-label">with {{ modes[mode].label.toLowerCase() }} inhibitor</text>
        </template>
      </svg>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// V-shaped active site on top (matches the triangular substrate),
// round allosteric site on the right side.
const enzyme = 'M60 150 Q60 130 80 130 L150 130 L180 180 L210 130 L280 130 Q300 130 300 150 L300 185 A15 15 0 0 0 300 215 L300 230 Q300 250 280 250 L80 250 Q60 250 60 230 Z'
// Non-competitive: inhibitor in the allosteric site changes the active site into a narrow, rounded slot.
const bentEnzyme = 'M60 150 Q60 130 80 130 L164 130 L172 166 Q180 176 188 166 L196 130 L280 130 Q300 130 300 150 L300 185 A15 15 0 0 0 300 215 L300 230 Q300 250 280 250 L80 250 Q60 250 60 230 Z'

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
.inh { display: grid; grid-template-columns: 3fr 2fr; gap: 16px; align-items: center; }
@media (max-width: 640px) { .inh { grid-template-columns: 1fr; } }
.inh svg { width: 100%; height: auto; }
.inh-curve { stroke: var(--c, var(--vp-c-brand-1)); }
.inh-label { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.inh-lab text { font-weight: 700; }
.inh-lead { stroke: var(--ink); stroke-width: 1.5; }
/* text drawn on the light-coloured shapes stays dark in both themes */
.inh text.inh-in { fill: #1d2b44 !important; font-weight: 700; }
.inh text.inh-warn { fill: #dc2626 !important; }
.dark .inh text.inh-warn { fill: #f87171 !important; }
.inh text.inh-ok { fill: var(--c, var(--vp-c-brand-1)) !important; }
</style>
