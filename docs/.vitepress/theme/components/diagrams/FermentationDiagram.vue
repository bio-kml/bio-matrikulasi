<template>
  <DiagramFrame title="Fermentation: recycling NAD⁺" :caption="cur.note">
    <template #controls>
      <button v-for="(m, k) in modes" :key="k" class="dg-btn" :class="{ 'is-on': mode === k }" :aria-pressed="mode === k" @click="mode = k">{{ m.label }}</button>
    </template>
    <div class="fer-scroll">
      <svg viewBox="0 0 840 400" role="img" :aria-label="cur.aria">
        <defs>
          <marker id="fer-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
          <marker id="fer-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 Z" class="fer-cfill" /></marker>
        </defs>

        <Transition name="dg-fade" mode="out-in">
          <g :key="mode">
            <!-- 1. NAD⁺ is regenerated and goes back to glycolysis -->
            <path :d="`M${g.nadR} 166 C${g.nadR - 40} 40 ${g.nadL + 40} 40 ${g.nadL} 166`" fill="none" class="fer-cstroke fer-return" stroke-width="3" marker-end="url(#fer-c)" />
            <text :x="(g.nadL + g.nadR) / 2" y="62" text-anchor="middle" font-size="18" font-weight="700" class="fer-c">NAD⁺ regenerated: goes back to glycolysis</text>

            <!-- 2. the hydrogen carriers, each half-arrow touching its own step -->
            <text :x="g.nadL" y="192" text-anchor="middle" font-size="20" font-weight="700" class="fer-c">2 NAD⁺</text>
            <text :x="g.nadh1" y="192" text-anchor="middle" font-size="20" font-weight="700" class="fer-c">2 NADH + 2H⁺</text>
            <text v-if="g.nadh2 !== g.nadh1" :x="g.nadh2" y="192" text-anchor="middle" font-size="20" font-weight="700" class="fer-c">2 NADH + 2H⁺</text>
            <text :x="g.nadR" y="192" text-anchor="middle" font-size="20" font-weight="700" class="fer-c">2 NAD⁺</text>

            <!-- glycolysis: NAD⁺ is reduced to NADH -->
            <path :d="arc(g.gA, g.gB)" fill="none" class="fer-cstroke" stroke-width="3.5" marker-end="url(#fer-c)" />
            <text :x="(g.gA + g.gB) / 2" y="244" text-anchor="middle" font-size="15" font-weight="700">NAD⁺ reduced</text>
            <!-- NADH carried from glycolysis to the reduction step -->
            <g v-if="g.nadh2 !== g.nadh1">
              <line :x1="g.nadh1 + 62" y1="185" :x2="g.nadh2 - 66" y2="185" class="fer-cstroke fer-return" stroke-width="3" marker-end="url(#fer-c)" />
              <text :x="(g.nadh1 + g.nadh2) / 2" y="172" text-anchor="middle" font-size="15">NADH carried over</text>
            </g>
            <!-- reduction step: NADH is oxidised back to NAD⁺ -->
            <path :d="arc(g.rA, g.rB)" fill="none" class="fer-cstroke" stroke-width="3.5" marker-end="url(#fer-c)" />
            <text :x="(g.rA + g.rB) / 2" y="244" text-anchor="middle" font-size="15" font-weight="700">NADH oxidised</text>

            <!-- 3. the carbon chain -->
            <g v-for="b in g.boxes" :key="b.t">
              <rect :x="b.x" y="278" :width="b.w" height="44" rx="6" class="fer-box" :class="{ 'fer-end': b.end }" />
              <text :x="b.x + b.w / 2" y="306" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">{{ b.t }}</text>
            </g>
            <g v-for="a in g.arrows" :key="a.t">
              <line :x1="a.x1" y1="300" :x2="a.x2 - 4" y2="300" stroke="var(--ink)" stroke-width="3" marker-end="url(#fer-a)" />
              <text :x="(a.x1 + a.x2) / 2" y="348" text-anchor="middle" font-size="17" font-weight="700">{{ a.t }}</text>
              <text v-if="a.s" :x="(a.x1 + a.x2) / 2" y="370" text-anchor="middle" font-size="15" :class="a.cls">{{ a.s }}</text>
            </g>
            <!-- CO₂ lost by decarboxylation (alcohol only) -->
            <g v-if="g.co2">
              <line :x1="g.co2" y1="300" :x2="g.co2" y2="258" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#fer-a)" />
              <text :x="g.co2" y="248" text-anchor="middle" font-size="17" font-weight="700">2 CO₂</text>
            </g>
          </g>
        </Transition>
      </svg>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// A small curved arrow that dips down to touch the main arrow (y = 300),
// like the side-arrows in textbook diagrams.
const arc = (x1, x2) => `M${x1} 204 Q${(x1 + x2) / 2} 386 ${x2} 204`

const layouts = {
  lac: {
    boxes: [
      { t: 'Glucose', x: 20, w: 120 },
      { t: '2 Pyruvate', x: 370, w: 130 },
      { t: '2 Lactate', x: 700, w: 130, end: true }
    ],
    arrows: [
      { x1: 142, x2: 370, t: 'Glycolysis', s: 'net 2 ATP', cls: 'fer-atp' },
      { x1: 502, x2: 700, t: 'Reduction', s: 'lactate dehydrogenase', cls: 'fer-enz' }
    ],
    // arcs dip to touch the middle of their own arrow
    gA: 160, gB: 392, rA: 480, rB: 700,
    nadL: 160, nadh1: 436, nadh2: 436, nadR: 700
  },
  alc: {
    boxes: [
      { t: 'Glucose', x: 8, w: 104 },
      { t: '2 Pyruvate', x: 262, w: 112 },
      { t: '2 Ethanal', x: 472, w: 108 },
      { t: '2 Ethanol', x: 724, w: 110, end: true }
    ],
    arrows: [
      { x1: 114, x2: 262, t: 'Glycolysis', s: 'net 2 ATP', cls: 'fer-atp' },
      { x1: 376, x2: 472, t: 'Decarboxylation', s: 'pyruvate decarboxylase', cls: 'fer-enz' },
      { x1: 582, x2: 724, t: 'Reduction', s: 'alcohol dehydrogenase', cls: 'fer-enz' }
    ],
    co2: 424,
    gA: 104, gB: 266, rA: 574, rB: 730,
    nadL: 96, nadh1: 270, nadh2: 574, nadR: 748
  }
}

const modes = {
  lac: {
    label: 'Lactate fermentation',
    aria: 'Glucose to 2 pyruvate by glycolysis, reducing 2 NAD+ to 2 NADH; pyruvate reduced to 2 lactate, oxidising NADH back to NAD+',
    note: 'In glycolysis, <b>NAD⁺ is reduced to NADH</b>. Pyruvate is then <b>reduced to lactate</b> by NADH, so <b>NADH is oxidised back to NAD⁺</b>. The regenerated NAD⁺ returns to glycolysis, so glycolysis (and its 2 ATP) can keep going without oxygen. No CO₂ is lost.'
  },
  alc: {
    label: 'Alcohol fermentation',
    aria: 'Glucose to 2 pyruvate by glycolysis; decarboxylation of pyruvate to ethanal releasing CO2; ethanal reduced to ethanol, oxidising NADH back to NAD+',
    note: 'Pyruvate first loses CO₂: this is <b>decarboxylation</b>, giving ethanal. Ethanal is then <b>reduced to ethanol</b> by NADH, so <b>NADH is oxidised back to NAD⁺</b>, which returns to glycolysis.'
  }
}
const mode = ref('lac')
const cur = computed(() => modes[mode.value])
const g = computed(() => layouts[mode.value])
</script>

<style scoped>
.fer-scroll { overflow-x: auto; }
.fer-scroll svg { display: block; width: 100%; min-width: 600px; }
.fer-box { fill: #fff6cf; stroke: var(--ink); stroke-width: 2.5; }
.fer-end { fill: #d7ecdf; }
.fer-in { fill: #1d2b44 !important; }
.fer-c { fill: var(--c, var(--vp-c-brand-1)) !important; }
.fer-cstroke { stroke: var(--c, var(--vp-c-brand-1)); }
.fer-return { stroke-dasharray: 8 6; }
.fer-cfill { fill: var(--c, var(--vp-c-brand-1)); }
.fer-atp { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.fer-enz { font-style: italic; }
</style>
