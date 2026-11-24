<template>
  <DiagramFrame title="Induced fit model (Koshland, 1959)" :caption="steps[step].note">
    <template #controls>
      <button v-for="(s, i) in steps" :key="i" class="dg-btn" :class="{ 'is-on': step === i }" :aria-pressed="step === i" @click="step = i">Step {{ i + 1 }}</button>
      <button class="dg-btn if-next" @click="step = (step + 1) % 3">{{ step === 2 ? 'Start again' : 'Next →' }}</button>
    </template>
    <svg viewBox="0 0 600 340" role="img" :aria-label="`Induced fit, step ${step + 1}`">
      <!-- enzyme -->
      <Transition name="dg-fade" mode="out-in">
        <path :key="step === 1 ? 'fit' : 'open'" :d="step === 1 ? fitted : open" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2.5" />
      </Transition>
      <text x="300" y="285" text-anchor="middle" font-size="20" font-weight="700">enzyme</text>
      <text x="420" y="160" font-size="15">active site</text>
      <line x1="416" y1="156" x2="346" y2="176" stroke="var(--ink)" stroke-width="1.5" />

      <!-- substrate / products -->
      <g class="if-move" :style="{ transform: step === 0 ? 'translate(0px, -95px)' : 'translate(0px, 0px)' }" v-if="step < 2">
        <polygon points="270,170 330,170 330,195 300,215 270,195" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
      </g>
      <template v-else>
        <polygon class="if-move" style="transform: translate(-90px, -95px)" points="270,170 300,170 300,215 270,195" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
        <polygon class="if-move" style="transform: translate(90px, -95px)" points="300,170 330,170 330,195 300,215" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
      </template>
      <text x="300" y="40" text-anchor="middle" font-size="16" font-weight="700">{{ steps[step].label }}</text>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// Enzyme outline with a round (not complementary) active site, and with an active
// site moulded around the substrate.
const open = 'M150 200 Q150 170 180 170 L258 170 C258 236 342 236 342 170 L420 170 Q450 170 450 200 L450 300 Q450 330 420 330 L180 330 Q150 330 150 300 Z'
const fitted = 'M150 200 Q150 170 180 170 L267 170 L267 197 L300 219 L333 197 L333 170 L420 170 Q450 170 450 200 L450 300 Q450 330 420 330 L180 330 Q150 330 150 300 Z'

const steps = [
  { label: 'substrate', note: '<b>Step 1</b>: the active site is flexible and <b>not exactly complementary</b> to the shape of the substrate. The substrate binds to the active site, and the binding <b>induces a slight change</b> in the conformation of the active site.' },
  { label: 'enzyme-substrate complex', note: '<b>Step 2</b>: the active site now becomes <b>fully complementary</b> with the shape of the substrate, so the substrate fits precisely. An <b>enzyme-substrate complex</b> forms and the enzyme carries out its catalytic reaction.' },
  { label: 'products', note: '<b>Step 3</b>: <b>product is formed</b>. The active site changes back to its <b>original conformation</b> when the product is released.' }
]
const step = ref(0)
</script>

<style scoped>
.if-move { transition: transform 0.45s cubic-bezier(0.2, 0, 0, 1); }
.if-next { margin-left: auto; }
@media (max-width: 520px) { .if-next { margin-left: 0; } }
</style>
