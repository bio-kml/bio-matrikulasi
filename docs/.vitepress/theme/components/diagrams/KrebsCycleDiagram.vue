<template>
  <DiagramFrame title="Krebs cycle: tap a step" :caption="caption">
    <template #controls>
      <button class="dg-btn" @click="prev">← Back</button>
      <button class="dg-btn is-on" @click="next">{{ step === null ? 'Start at step 1' : step === 7 ? 'Start again' : 'Next step →' }}</button>
    </template>
    <svg viewBox="0 0 600 500" role="img" aria-label="Krebs cycle">
      <defs>
        <marker id="kc-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="14" markerHeight="14" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
      </defs>
      <!-- acetyl CoA coming in -->
      <text x="300" y="22" text-anchor="middle" font-size="15" font-weight="700">acetyl CoA (2C)</text>
      <path d="M300 30 Q300 60 370 90" fill="none" stroke="var(--ink)" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#kc-a)" />
      <!-- arrows between intermediates -->
      <path v-for="(a, i) in arcs" :key="'a' + i" :d="a" fill="none" :stroke="step === i ? 'var(--c, #1f7a4d)' : 'var(--ink)'" :stroke-width="step === i ? 4.5 : 2.5" marker-end="url(#kc-a)" class="kc-arc" @click="step = i" />
      <!-- products at each step -->
      <g v-for="(s, i) in steps" :key="'o' + i" class="kc-out" :class="{ 'is-on': step === i }" @click="step = i">
        <text v-for="(o, j) in s.out" :key="o" :x="outPos(i)[0]" :y="outPos(i)[1] + j * 17" text-anchor="middle" font-size="14" font-weight="700">{{ o }}</text>
      </g>
      <!-- intermediates -->
      <g v-for="(n, i) in nodes" :key="n.name" class="kc-node" :class="{ 'is-on': step === i || step === (i + 7) % 8 }" @click="step = i">
        <rect :x="pos(i)[0] - wid(n.name) / 2" :y="pos(i)[1] - 20" :width="wid(n.name)" height="40" rx="8" />
        <text :x="pos(i)[0]" :y="pos(i)[1] - 2" text-anchor="middle" font-size="14" font-weight="700">{{ n.name }}</text>
        <text :x="pos(i)[0]" :y="pos(i)[1] + 14" text-anchor="middle" font-size="12">{{ n.c }}C</text>
      </g>
      <text x="300" y="248" text-anchor="middle" font-size="20" font-weight="700">Krebs cycle</text>
      <text x="300" y="268" text-anchor="middle" font-size="14">(matrix)</text>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const C = [300, 255], R = 170
const ang = (i) => -90 + i * 45
const pos = (i) => [C[0] + R * Math.cos((ang(i) * Math.PI) / 180), C[1] + R * Math.sin((ang(i) * Math.PI) / 180)]
const outPos = (i) => {
  const a = ((ang(i) + 22.5) * Math.PI) / 180
  return [C[0] + (R + 62) * Math.cos(a), C[1] + (R + 62) * Math.sin(a) - 4]
}
const wid = (t) => Math.max(76, t.length * 8 + 18)
const nodes = [
  { name: 'Oxaloacetate', c: 4 }, { name: 'Citrate', c: 6 }, { name: 'Isocitrate', c: 6 }, { name: 'α-Ketoglutarate', c: 5 },
  { name: 'Succinyl CoA', c: 4 }, { name: 'Succinate', c: 4 }, { name: 'Fumarate', c: 4 }, { name: 'Malate', c: 4 }
]
// step i goes from node i to node i+1
const steps = [
  { out: ['+ acetyl CoA', '− CoA'], enzyme: 'citrate synthase', note: 'Acetyl CoA adds its <b>two-carbon acetyl group</b> to oxaloacetate (4C), producing <b>citrate</b> (6C).' },
  { out: ['− H₂O', '+ H₂O'], enzyme: 'aconitase', note: 'Citrate is rearranged to its isomer, <b>isocitrate</b>, by removal of one water molecule and addition of another.' },
  { out: ['NADH', 'CO₂'], enzyme: 'isocitrate dehydrogenase', note: '<b>Oxidative decarboxylation</b>: isocitrate is oxidised by NAD⁺ (NAD⁺ → NADH + H⁺), then loses CO₂, forming <b>α-ketoglutarate</b> (5C).' },
  { out: ['NADH', 'CO₂'], enzyme: 'α-ketoglutarate dehydrogenase', note: '<b>Oxidative decarboxylation</b> again: α-ketoglutarate loses CO₂, is oxidised by NAD⁺, and coenzyme A is attached, forming <b>succinyl CoA</b> (4C).' },
  { out: ['ATP', '(via GTP)'], enzyme: 'succinyl CoA synthetase', note: 'CoA is displaced by a phosphate group, which goes to GDP (forming GTP), then to ADP: <b>ATP by substrate-level phosphorylation</b>. Succinyl CoA → <b>succinate</b>.' },
  { out: ['FADH₂'], enzyme: 'succinate dehydrogenase', note: 'Succinate is <b>oxidised by FAD</b> to <b>fumarate</b>; FAD receives two hydrogens and is reduced to FADH₂.' },
  { out: ['+ H₂O'], enzyme: 'fumarase', note: 'Fumarate is converted to <b>malate</b> by <b>addition of a water molecule</b>.' },
  { out: ['NADH'], enzyme: 'malate dehydrogenase', note: 'Malate is <b>oxidised by NAD⁺</b> to <b>regenerate oxaloacetate</b>, ready for the next acetyl CoA. NAD⁺ → NADH + H⁺.' }
]
const arcs = computed(() =>
  nodes.map((_, i) => {
    const a1 = ((ang(i) + 12) * Math.PI) / 180
    const a2 = ((ang(i + 1) - 12) * Math.PI) / 180
    const p1 = [C[0] + R * Math.cos(a1), C[1] + R * Math.sin(a1)]
    const p2 = [C[0] + R * Math.cos(a2), C[1] + R * Math.sin(a2)]
    return `M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${R} ${R} 0 0 1 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`
  })
)
const step = ref(null)
const next = () => (step.value = step.value === null ? 0 : (step.value + 1) % 8)
const prev = () => (step.value = step.value === null || step.value === 0 ? 7 : step.value - 1)
const caption = computed(() => {
  if (step.value === null) return 'One acetyl CoA per turn. Tap any arrow or press <b>Start</b>. Per turn: <b>3 NADH, 1 FADH₂, 1 ATP, 2 CO₂</b>.'
  const s = steps[step.value]
  return `<b>Step ${step.value + 1}</b> · enzyme: <i>${s.enzyme}</i>. ${s.note}`
})
</script>

<style scoped>
.kc-arc { cursor: pointer; transition: stroke 0.2s ease; }
.kc-node { cursor: pointer; }
.kc-node rect { fill: var(--box); stroke: var(--ink); stroke-width: 2.5; transition: fill 0.2s ease; }
.kc-node.is-on rect { fill: color-mix(in srgb, var(--c, #1f7a4d) 18%, var(--box)); }
.kc-out { cursor: pointer; opacity: 0.55; transition: opacity 0.2s ease; }
.kc-out text { fill: var(--c, var(--vp-c-brand-1)) !important; }
.kc-out.is-on { opacity: 1; }
</style>
