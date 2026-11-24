<template>
  <DiagramFrame title="Activation energy: with and without an enzyme" :caption="caption">
    <template #controls>
      <button v-for="(m, k) in modes" :key="k" class="dg-btn" :class="{ 'is-on': mode === k }" :aria-pressed="mode === k" @click="mode = k">{{ m }}</button>
    </template>
    <svg viewBox="0 0 520 320" role="img" aria-label="Energy profile of a reaction">
      <defs>
        <marker id="ae-axis" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
        <marker id="ae-dbl" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="var(--ink)" /></marker>
      </defs>
      <line x1="60" y1="280" x2="495" y2="280" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ae-axis)" />
      <line x1="60" y1="280" x2="60" y2="25" stroke="var(--ink)" stroke-width="2.5" marker-end="url(#ae-axis)" />
      <text x="26" y="160" text-anchor="middle" font-size="16" transform="rotate(-90 26 160)">Energy</text>
      <text x="280" y="306" text-anchor="middle" font-size="16">Progress of the reaction</text>

      <line x1="70" x2="470" y1="190" y2="190" stroke="var(--rule)" stroke-width="1.5" stroke-dasharray="4 5" />
      <text x="72" y="210" font-size="14">reactant (substrate)</text>
      <text x="470" y="244" text-anchor="end" font-size="14">product</text>

      <g v-if="mode !== 'with'" class="ae-curve ae-curve--without">
        <path :d="curve(60)" fill="none" stroke="var(--ink)" stroke-width="3" :stroke-dasharray="mode === 'both' ? '8 6' : null" />
        <g style="color: var(--ink)">
          <line x1="240" x2="240" y1="186" y2="66" stroke="currentColor" stroke-width="2" marker-start="url(#ae-dbl)" marker-end="url(#ae-dbl)" />
          <text x="200" y="104" text-anchor="end" font-size="14">activation energy</text>
          <text x="200" y="120" text-anchor="end" font-size="14">without enzyme</text>
        </g>
      </g>
      <g v-if="mode !== 'without'" class="ae-curve">
        <path :d="curve(130)" fill="none" class="ae-with" stroke-width="3.5" />
        <g class="ae-with-text">
          <line x1="262" x2="262" y1="186" y2="136" stroke="currentColor" stroke-width="2" marker-start="url(#ae-dbl)" marker-end="url(#ae-dbl)" />
          <text x="300" y="112" font-size="14">activation energy</text>
          <text x="300" y="128" font-size="14">with enzyme</text>
        </g>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const modes = { without: 'Without enzyme', with: 'With enzyme', both: 'Compare' }
const mode = ref('both')
const curve = (peak) => `M70 190 L140 190 C200 190 210 ${peak} 250 ${peak} C290 ${peak} 320 250 380 250 L470 250`
const caption = computed(() => ({
  without: '<b>Activation energy</b>: the minimum amount of energy required by a reactant (substrate) to start a chemical reaction.',
  with: 'An enzyme <b>lowers the activation energy</b>, so the reaction starts more easily and goes faster.',
  both: 'Same reactant, same product, but the enzyme gives a <b>lower energy hill</b> to climb. The energy of the product does not change.'
})[mode.value])
</script>

<style scoped>
.ae-with { stroke: var(--c, var(--vp-c-brand-1)); }
.ae-with-text { color: var(--c, var(--vp-c-brand-1)); }
.ae-with-text text { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.ae-curve { animation: ae-in 0.3s ease both; }
@keyframes ae-in { from { opacity: 0; } to { opacity: 1; } }
</style>
