<template>
  <DiagramFrame title="Where does each stage happen?" :caption="cur.note">
    <template #controls>
      <button v-for="(s, k) in stages" :key="k" class="dg-btn" :class="{ 'is-on': stage === k }" :aria-pressed="stage === k" @click="stage = k">{{ s.label }}</button>
    </template>
    <svg viewBox="0 0 600 380" role="img" :aria-label="`Cell with mitochondrion: ${cur.label}`">
      <!-- cell -->
      <rect x="8" y="8" width="584" height="364" rx="60" :style="{ fill: hl('cyto', '#eef7f0') }" stroke="var(--ink)" stroke-width="3" />
      <text x="40" y="350" font-size="16" font-weight="700">cytoplasm (cytosol)</text>
      <!-- nucleus -->
      <circle cx="105" cy="105" r="48" fill="#e7def5" stroke="var(--ink)" stroke-width="2.5" />
      <text x="105" y="110" text-anchor="middle" font-size="15">nucleus</text>

      <!-- glucose → pyruvate in the cytoplasm -->
      <g class="crm-tag" :class="{ 'is-on': stage === 'gly' || stage === 'ferm' }">
        <text x="60" y="205" font-size="15">glucose</text>
        <line x1="88" y1="214" x2="88" y2="256" stroke="var(--ink)" stroke-width="2" marker-end="url(#crm-a)" />
        <text x="60" y="278" font-size="15">2 pyruvate</text>
        <line x1="138" y1="273" x2="212" y2="240" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#crm-a)" />
      </g>
      <defs>
        <marker id="crm-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
      </defs>

      <!-- mitochondrion -->
      <ellipse cx="385" cy="210" rx="185" ry="125" :style="{ fill: '#f3e2c7' }" stroke="var(--ink)" stroke-width="3" />
      <ellipse cx="385" cy="210" rx="160" ry="100" :style="{ fill: hl('matrix', '#fff6cf') }" :stroke="stage === 'etc' ? 'var(--c, #1f7a4d)' : 'var(--ink)'" :stroke-width="stage === 'etc' ? 5 : 2.5" />
      <path v-for="(d, i) in cristae" :key="i" :d="d" fill="#f3e2c7" :stroke="stage === 'etc' ? 'var(--c, #1f7a4d)' : 'var(--ink)'" :stroke-width="stage === 'etc' ? 4 : 2.5" />

      <text x="385" y="212" text-anchor="middle" font-size="16" font-weight="700">matrix</text>
      <text x="385" y="76" text-anchor="middle" font-size="13">outer membrane</text>
      <text x="560" y="128" font-size="13" text-anchor="end">intermembrane</text>
      <text x="560" y="143" font-size="13" text-anchor="end">space</text>
      <text x="385" y="355" text-anchor="middle" font-size="13">inner membrane (cristae)</text>
      <line x1="385" y1="343" x2="385" y2="312" stroke="var(--ink)" stroke-width="1.5" />
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const CX = 385, CY = 210, RX = 160, RY = 100
const edge = (x, top) => CY + (top ? -1 : 1) * RY * Math.sqrt(Math.max(0, 1 - ((x - CX) / RX) ** 2))
const finger = (x, top) => {
  const e = edge(x, top)
  const tip = top ? CY - 22 : CY + 22
  const s = top ? 1 : -1
  return `M${x - 8} ${e - s * 2} L${x - 8} ${tip} Q${x} ${tip + s * 14} ${x + 8} ${tip} L${x + 8} ${e - s * 2} Z`
}
const cristae = [[290, true], [350, true], [420, true], [480, true], [320, false], [385, false], [450, false]].map(([x, t]) => finger(x, t))

const stages = {
  gly: { label: 'Glycolysis', area: 'cyto', note: '<b>Glycolysis</b> happens in the <b>cytosol / cytoplasm</b>, with or without oxygen. Glucose (6C) → 2 pyruvate (3C).' },
  link: { label: 'Link reaction', area: 'matrix', note: '<b>Pyruvate oxidation</b>: pyruvate enters the <b>matrix</b> of the mitochondrion by active transport and is converted to acetyl CoA.' },
  krebs: { label: 'Krebs cycle', area: 'matrix', note: 'The <b>Krebs cycle</b> takes place in the <b>matrix</b> of the mitochondrion.' },
  etc: { label: 'ETC & chemiosmosis', area: 'inner', note: '<b>Oxidative phosphorylation</b> (electron transport chain and chemiosmosis) takes place on the <b>inner membrane (cristae)</b>; H⁺ is pumped into the <b>intermembrane space</b>.' },
  ferm: { label: 'Fermentation', area: 'cyto', note: '<b>Fermentation</b> happens in the <b>cytosol / cytoplasm only</b>; no mitochondrion is needed.' }
}
const stage = ref('gly')
const cur = computed(() => stages[stage.value])
const hl = (area, base) => (cur.value.area === area ? 'color-mix(in srgb, var(--c, #1f7a4d) 22%, var(--box))' : base)
</script>

<style scoped>
.crm-tag { opacity: 0.25; transition: opacity 0.25s ease; }
.crm-tag.is-on { opacity: 1; }
</style>
