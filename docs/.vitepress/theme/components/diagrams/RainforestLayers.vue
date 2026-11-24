<template>
  <DiagramFrame title="Tropical rainforest stratification" :caption="caption">
    <svg viewBox="0 0 600 330" role="img" aria-label="Rainforest layers">
      <!-- layer bands -->
      <g v-for="(l, i) in layers" :key="l.name">
        <rect x="0" :y="l.y" width="600" :height="l.h" :style="{ fill: pick === i ? 'color-mix(in srgb, var(--c, #1f7a4d) 16%, transparent)' : 'transparent' }" class="rf-band" @click="pick = pick === i ? null : i" />
        <line x1="0" x2="600" :y1="l.y + l.h" :y2="l.y + l.h" stroke="var(--rule)" stroke-width="2" stroke-dasharray="5 5" pointer-events="none" />
        <text x="592" :y="l.y + l.h / 2 + 5" text-anchor="end" font-size="16" font-weight="700" pointer-events="none">{{ l.name }}</text>
      </g>
      <g pointer-events="none">
        <!-- emergent tree -->
        <line x1="120" y1="320" x2="120" y2="40" stroke="#7a5230" stroke-width="7" />
        <ellipse cx="120" cy="40" rx="46" ry="22" fill="#2f8f5b" stroke="var(--ink)" stroke-width="2" />
        <!-- canopy trees -->
        <g v-for="x in [210, 280, 350]" :key="'c' + x">
          <line :x1="x" y1="320" :x2="x" y2="105" stroke="#7a5230" stroke-width="5" />
          <ellipse :cx="x" cy="105" rx="42" ry="24" fill="#4aa876" stroke="var(--ink)" stroke-width="2" />
        </g>
        <!-- understory -->
        <g v-for="x in [170, 430]" :key="'u' + x">
          <line :x1="x" y1="320" :x2="x" y2="180" stroke="#7a5230" stroke-width="4" />
          <ellipse :cx="x" cy="180" rx="28" ry="16" fill="#7cc495" stroke="var(--ink)" stroke-width="2" />
        </g>
        <!-- shrubs / ferns -->
        <ellipse v-for="x in [60, 250, 330, 470]" :key="'s' + x" :cx="x" cy="262" rx="24" ry="15" fill="#a6d8b2" stroke="var(--ink)" stroke-width="2" />
        <!-- ground -->
        <rect x="0" y="300" width="600" height="30" fill="#b48a5a" opacity="0.55" />
      </g>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const layers = [
  { name: 'Emergent', y: 0, h: 70, note: '<b>Emergent layer</b>: crowns of the oldest, tallest trees, 40 m or more; direct sunlight, warmest, lowest humidity, strongest wind. Plants: Tualang, Meranti, Cengal. Animals: eagles, monkeys.' },
  { name: 'Canopy', y: 70, h: 80, note: '<b>Canopy</b>: 30 to 35 m; receives much sunlight. Plants: epiphytes, e.g. orchids. Animals: hornbills, insects, bats.' },
  { name: 'Understory', y: 150, h: 75, note: '<b>Understory</b>: receives little light; many plants climb up host trees. Plants: lianas (woody vines), palms. Animals: bats.' },
  { name: 'Shrub layer', y: 225, h: 75, note: '<b>Shrub layer</b>: smaller plants; receives little light. Plants: ferns (pteridophytes). Animals: tapir, deer.' },
  { name: 'Forest floor', y: 300, h: 30, note: '<b>Ground layer / forest floor</b>: dark and damp; dead matter is decomposed quickly by bacteria, fungi, insects and detritivores, so nutrients are recycled fast. Plants: mosses (bryophytes). Animals: ants, centipedes.' }
]
const pick = ref(null)
const caption = computed(() => (pick.value === null ? 'Tap a layer, from the emergent layer at the top down to the forest floor.' : layers[pick.value].note))
</script>

<style scoped>
.rf-band { cursor: pointer; }
</style>
