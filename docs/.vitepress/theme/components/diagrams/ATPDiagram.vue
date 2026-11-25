<template>
  <DiagramFrame title="ATP: the energy currency of the cell" :caption="split ? after : before">
    <template #controls>
      <button class="dg-btn" :class="{ 'is-on': split }" @click="split = !split">{{ split ? 'Join back (phosphorylation)' : 'Hydrolyse ATP' }}</button>
    </template>
    <svg viewBox="0 0 650 210" role="img" :aria-label="split ? 'ADP plus Pi plus energy' : 'ATP'">
      <!-- adenine: a purine, so a double ring (6-membered ring fused to a 5-membered ring) -->
      <polygon points="30,70 70,50 110,70 110,110 70,130 30,110" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round" />
      <polygon points="110,70 148,58 170,90 148,122 110,110" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2.5" stroke-linejoin="round" />
      <text x="100" y="152" text-anchor="middle" font-size="15" font-weight="700">adenine</text>
      <text x="100" y="168" text-anchor="middle" font-size="12">(purine: double ring)</text>
      <line x1="170" y1="90" x2="196" y2="110" stroke="var(--ink)" stroke-width="2.5" />
      <g transform="translate(45 0)">
      <!-- ribose -->
      <polygon points="150,100 190,88 215,118 195,150 155,148" fill="#f8d866" stroke="var(--ink)" stroke-width="2.5" />
      <text x="183" y="126" text-anchor="middle" font-size="14" font-weight="700">ribose</text>
      <!-- phosphates -->
      <g v-for="i in 3" :key="i" class="atp-p" :style="{ transform: i === 3 && split ? 'translate(120px, 18px)' : 'none' }">
        <line v-if="!(i === 3 && split)" :x1="215 + (i - 1) * 62" y1="118" :x2="240 + (i - 1) * 62" y2="118" stroke="var(--ink)" stroke-width="2.5" />
        <circle :cx="262 + (i - 1) * 62" cy="118" r="22" fill="#f6b26b" stroke="var(--ink)" stroke-width="2.5" />
        <text :x="262 + (i - 1) * 62" y="124" text-anchor="middle" font-size="17" font-weight="700">P</text>
      </g>
      <!-- high-energy bonds -->
      <g v-if="!split">
        <text x="293" y="96" text-anchor="middle" font-size="18" class="atp-hi">~</text>
        <text x="355" y="96" text-anchor="middle" font-size="18" class="atp-hi">~</text>
      </g>
      </g>
      <text x="345" y="195" text-anchor="middle" font-size="16" font-weight="700">{{ split ? 'ADP' : 'ATP (adenosine triphosphate)' }}</text>
      <g v-if="split" class="atp-energy">
        <text x="555" y="112" text-anchor="middle" font-size="16" font-weight="700">Pi</text>
        <text x="565" y="60" text-anchor="middle" font-size="16" class="atp-hi">+ energy</text>
        <text x="565" y="78" text-anchor="middle" font-size="13">(31 kJ per mole)</text>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const split = ref(false)
const before = 'ATP = <b>adenine</b> (a purine: double ring) + <b>ribose</b> + a chain of <b>3 phosphate groups</b>. The phosphates are negatively charged and joined by 2 <b>high-energy bonds</b> (~). Press the button to hydrolyse it.'
const after = '<b>Hydrolysis</b>: ATP + H₂O → <b>ADP + Pi</b>, releasing about <b>31 kJ per mole</b> of ATP to drive cellular work. Respiration does the reverse: it adds the phosphate back to ADP (<b>phosphorylation</b>).'
</script>

<style scoped>
.atp-p { transition: transform 0.5s cubic-bezier(0.2, 0, 0, 1); }
.atp-hi { fill: var(--c, var(--vp-c-brand-1)) !important; font-weight: 700; }
.atp-energy { animation: atp-in 0.4s ease 0.25s both; }
@keyframes atp-in { from { opacity: 0; } to { opacity: 1; } }
</style>
