<template>
  <DiagramFrame title="Body symmetry" :caption="shown ? after : before">
    <template #controls>
      <button class="dg-btn" :class="{ 'is-on': shown }" :aria-pressed="shown" @click="shown = !shown">
        {{ shown ? 'Hide cutting planes' : 'Show cutting planes' }}
      </button>
    </template>
    <svg viewBox="0 0 520 270" role="img" aria-label="Radial and bilateral symmetry">
      <!-- radial: top view of a jellyfish-like body -->
      <g>
        <circle v-for="a in 8" :key="'t' + a" :cx="130 + 70 * Math.cos((a * Math.PI) / 4)" :cy="125 + 70 * Math.sin((a * Math.PI) / 4)" r="14" fill="#f8d866" stroke="var(--ink)" stroke-width="2" />
        <circle cx="130" cy="125" r="62" fill="#f8d866" stroke="var(--ink)" stroke-width="2" />
        <circle cx="130" cy="125" r="18" fill="var(--box)" stroke="var(--ink)" stroke-width="2" />
        <g v-if="shown" class="sym-planes">
          <line v-for="(deg, i) in [0, 45, 90, 135]" :key="deg" :style="{ animationDelay: i * 0.12 + 's' }"
            :x1="130 - 100 * Math.cos((deg * Math.PI) / 180)" :y1="125 - 100 * Math.sin((deg * Math.PI) / 180)"
            :x2="130 + 100 * Math.cos((deg * Math.PI) / 180)" :y2="125 + 100 * Math.sin((deg * Math.PI) / 180)" />
        </g>
        <text x="130" y="258" text-anchor="middle" font-size="19" font-weight="700">Radial</text>
      </g>

      <!-- bilateral: simple animal seen from above -->
      <g>
        <ellipse cx="390" cy="145" rx="40" ry="72" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2" />
        <circle cx="390" cy="62" r="24" fill="#8ec5f0" stroke="var(--ink)" stroke-width="2" />
        <circle cx="381" cy="56" r="4" fill="var(--ink)" />
        <circle cx="399" cy="56" r="4" fill="var(--ink)" />
        <g v-if="shown" class="sym-planes">
          <line x1="390" y1="22" x2="390" y2="232" />
        </g>
        <text x="390" y="24" text-anchor="middle" font-size="14">anterior (head)</text>
        <text x="390" y="234" text-anchor="middle" font-size="14">posterior</text>
        <text x="335" y="150" text-anchor="end" font-size="14">left</text>
        <text x="445" y="150" font-size="14">right</text>
        <text x="390" y="258" text-anchor="middle" font-size="19" font-weight="700">Bilateral</text>
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const shown = ref(false)
const before = 'Predict first: in how many ways can each body be cut into two matching halves? Then show the planes.'
const after = '<b>Radial</b>: many planes through the centre give equal halves. <b>Bilateral</b>: only one plane, with a head end (<b>cephalisation</b>), a tail end, a left and a right.'
</script>

<style scoped>
.sym-planes line {
  stroke: var(--c, var(--vp-c-brand-1));
  stroke-width: 3;
  stroke-dasharray: 8 6;
  animation: sym-draw 0.5s cubic-bezier(0.2, 0, 0, 1) both;
}
@keyframes sym-draw { from { opacity: 0; } to { opacity: 1; } }
</style>
