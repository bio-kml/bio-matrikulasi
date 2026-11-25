<template>
  <DiagramFrame title="Fermentation: recycling NAD⁺" :caption="cur.note">
    <template #controls>
      <button v-for="(m, k) in modes" :key="k" class="dg-btn" :class="{ 'is-on': mode === k }" :aria-pressed="mode === k" @click="mode = k">{{ m.label }}</button>
    </template>
    <div class="fer-scroll">
    <svg viewBox="0 0 640 330" role="img" :aria-label="cur.aria">
      <defs>
        <marker id="fer-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
        <marker id="fer-c" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" class="fer-cfill" /></marker>
      </defs>

      <!-- glycolysis: glucose → 2 pyruvate -->
      <g>
        <rect x="40" y="20" width="130" height="44" rx="6" class="fer-box" />
        <text x="105" y="48" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">Glucose</text>
        <line x1="105" y1="66" x2="105" y2="232" stroke="var(--ink)" stroke-width="3" marker-end="url(#fer-a)" />
        <text x="96" y="140" text-anchor="end" font-size="17" font-weight="700">Glycolysis</text>
        <text x="96" y="162" text-anchor="end" font-size="15" class="fer-atp">net 2 ATP</text>
        <rect x="40" y="236" width="130" height="44" rx="6" class="fer-box" />
        <text x="105" y="264" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">2 Pyruvate</text>
      </g>

      <!-- lactate: pyruvate → lactate -->
      <g v-if="mode === 'lac'">
        <line x1="172" y1="258" x2="452" y2="258" stroke="var(--ink)" stroke-width="3" marker-end="url(#fer-a)" />
        <rect x="456" y="236" width="140" height="44" rx="6" class="fer-box fer-end" />
        <text x="526" y="264" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">2 Lactate</text>
        <text x="312" y="304" text-anchor="middle" font-size="15">pyruvate is <tspan font-weight="700">reduced</tspan> (no CO₂)</text>
      </g>

      <!-- alcohol: pyruvate → ethanal (+CO₂) → ethanol -->
      <g v-else>
        <line x1="172" y1="258" x2="262" y2="258" stroke="var(--ink)" stroke-width="3" marker-end="url(#fer-a)" />
        <line x1="217" y1="258" x2="217" y2="300" stroke="var(--ink)" stroke-width="2" marker-end="url(#fer-a)" />
        <text x="226" y="318" font-size="16" font-weight="700">2 CO₂</text>
        <rect x="266" y="236" width="130" height="44" rx="6" class="fer-box" />
        <text x="331" y="264" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">2 Ethanal</text>
        <line x1="398" y1="258" x2="472" y2="258" stroke="var(--ink)" stroke-width="3" marker-end="url(#fer-a)" />
        <rect x="476" y="236" width="130" height="44" rx="6" class="fer-box fer-end" />
        <text x="541" y="264" text-anchor="middle" font-size="18" font-weight="700" class="fer-in">2 Ethanol</text>
        <text x="435" y="304" text-anchor="middle" font-size="15">ethanal is <tspan font-weight="700">reduced</tspan></text>
      </g>

      <!-- connectors: the loop meets glycolysis and the reduction step -->
      <g class="fer-link">
        <line x1="109" y1="182" :x2="mode === 'lac' ? 146 : 246" y2="140" />
        <circle cx="105" cy="182" r="5" class="fer-cfill" />
        <line :x1="mode === 'lac' ? 268 : 368" y1="222" :x2="mode === 'lac' ? 312 : 435" y2="253" />
        <circle :cx="mode === 'lac' ? 312 : 435" cy="258" r="5" class="fer-cfill" />
      </g>

      <!-- the NAD⁺ / NADH cycle -->
      <g :transform="mode === 'lac' ? 'translate(0 0)' : 'translate(100 0)'" class="fer-loop">
        <!-- top arc: glycolysis turns NAD⁺ into NADH -->
        <path d="M150 112 C190 40 330 40 370 112" fill="none" class="fer-cstroke" stroke-width="3.5" marker-end="url(#fer-c)" />
        <!-- bottom arc: the reduction step turns NADH back into NAD⁺ -->
        <path d="M380 140 C350 220 200 220 156 140" fill="none" class="fer-cstroke" stroke-width="3.5" marker-end="url(#fer-c)" />
        <text x="140" y="132" text-anchor="start" font-size="18" font-weight="700" class="fer-c">2 NAD⁺</text>
        <text x="360" y="132" text-anchor="start" font-size="18" font-weight="700" class="fer-c">2 NADH + 2H⁺</text>
        <text x="262" y="56" text-anchor="middle" font-size="14">used in glycolysis</text>
        <text x="268" y="122" text-anchor="middle" font-size="19" font-weight="700" class="fer-c fer-hand">NAD⁺ recycled</text>
        <text x="268" y="144" text-anchor="middle" font-size="14">so glycolysis keeps going</text>
        <text x="268" y="214" text-anchor="middle" font-size="14">{{ mode === 'lac' ? 'reduces pyruvate' : 'reduces ethanal' }}</text>
      </g>
    </svg>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const modes = {
  lac: {
    label: 'Lactate fermentation',
    aria: 'Glucose to 2 pyruvate to 2 lactate, with NAD+ recycled',
    note: 'Glycolysis makes <b>2 ATP</b> and turns NAD⁺ into NADH. <b>NADH reduces pyruvate to lactate</b> and becomes <b>NAD⁺ again</b>. That recycled NAD⁺ goes back to glycolysis, so ATP can keep being made without oxygen. No CO₂ is released.'
  },
  alc: {
    label: 'Alcohol fermentation',
    aria: 'Glucose to 2 pyruvate to 2 ethanal plus 2 CO2 to 2 ethanol, with NAD+ recycled',
    note: 'Glycolysis makes <b>2 ATP</b> and turns NAD⁺ into NADH. Pyruvate loses <b>CO₂</b> to form ethanal; <b>NADH reduces ethanal to ethanol</b> and becomes <b>NAD⁺ again</b>, which goes back to glycolysis.'
  }
}
const mode = ref('lac')
const cur = computed(() => modes[mode.value])
</script>

<style scoped>
.fer-scroll { overflow-x: auto; }
.fer-scroll svg { display: block; width: 100%; min-width: 540px; }
.fer-box { fill: #fff6cf; stroke: var(--ink); stroke-width: 2.5; }
.fer-end { fill: #d7ecdf; }
.fer-in { fill: #1d2b44 !important; }
.fer-c { fill: var(--c, var(--vp-c-brand-1)) !important; }
.fer-cstroke { stroke: var(--c, var(--vp-c-brand-1)); }
.fer-cfill { fill: var(--c, var(--vp-c-brand-1)); }
.fer-atp { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.fer-link line { stroke: var(--c, var(--vp-c-brand-1)); stroke-width: 2.5; stroke-dasharray: 5 4; }
.fer-loop { transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1); }
@media (prefers-reduced-motion: reduce) { .fer-loop { transition: none; } }
</style>
