<template>
  <DiagramFrame title="Zones of a lake (cross-section)" :caption="caption">
    <svg viewBox="0 0 600 340" role="img" aria-label="Lake zones cross-section">
      <defs>
        <clipPath id="lake-clip"><path :d="basin" /></clipPath>
      </defs>
      <!-- sun and light -->
      <circle cx="575" cy="22" r="14" fill="#f8d866" stroke="var(--ink)" stroke-width="2" />
      <line v-for="i in 5" :key="i" :x1="120 + i * 70" :x2="110 + i * 70" y1="28" y2="52" stroke="#e0b84a" stroke-width="2" stroke-dasharray="4 5" />
      <text x="300" y="20" text-anchor="middle" font-size="15" style="fill: var(--muted)">light gets weaker with depth ↓</text>

      <g clip-path="url(#lake-clip)">
        <rect x="0" y="60" width="600" height="300" fill="#cfe6fb" />
        <!-- aphotic / profundal -->
        <rect x="0" :y="CP" width="600" height="300" :fill="zones.aphotic.fill" :class="cls('aphotic')" @click="pick('aphotic')" />
        <!-- limnetic: open, well-lit water -->
        <rect x="170" y="60" width="260" :height="CP - 60" :fill="zones.limnetic.fill" :class="cls('limnetic')" @click="pick('limnetic')" />
        <!-- littoral: shallow water near the shore -->
        <rect x="0" y="60" width="170" height="300" :fill="zones.littoral.fill" :class="cls('littoral')" @click="pick('littoral')" />
        <rect x="430" y="60" width="170" height="300" :fill="zones.littoral.fill" :class="cls('littoral')" @click="pick('littoral')" />
        <!-- phytoplankton dots in the limnetic zone -->
        <circle v-for="(p, i) in plankton" :key="i" :cx="p[0]" :cy="p[1]" r="3" fill="#2f8f5b" pointer-events="none" />
      </g>
      <!-- benthic zone (lake bottom) -->
      <path :d="basin" fill="none" stroke="#8a6a3a" stroke-width="9" :class="cls('benthic')" @click="pick('benthic')" style="cursor: pointer" />
      <path :d="basin" fill="none" stroke="var(--ink)" stroke-width="2" pointer-events="none" />
      <!-- rooted plants near the shore -->
      <g v-for="x in [128, 146, 454, 472]" :key="x" pointer-events="none">
        <path :d="`M${x} ${shoreY(x)} q -6 -28 0 -52`" stroke="#2f8f5b" stroke-width="3" fill="none" />
        <ellipse :cx="x - 4" :cy="shoreY(x) - 30" rx="7" ry="3" fill="#2f8f5b" />
      </g>
      <!-- compensation point -->
      <line x1="150" x2="450" :y1="CP" :y2="CP" stroke="var(--ink)" stroke-width="2" stroke-dasharray="8 6" pointer-events="none" />
      <text x="456" :y="CP + 5" font-size="14">compensation point</text>
      <!-- surface -->
      <line x1="30" x2="570" y1="60" y2="60" stroke="var(--ink)" stroke-width="2" />

      <text x="72" y="52" text-anchor="middle" font-size="16" font-weight="700" pointer-events="none">littoral</text>
      <text x="528" y="52" text-anchor="middle" font-size="16" font-weight="700" pointer-events="none">littoral</text>
      <text x="300" y="100" text-anchor="middle" font-size="16" font-weight="700" pointer-events="none">limnetic zone</text>
      <text x="300" y="118" text-anchor="middle" font-size="14" pointer-events="none">(photic: well-lit open water)</text>
      <text x="300" y="212" text-anchor="middle" font-size="16" font-weight="700" pointer-events="none">aphotic / profundal zone</text>
      <text x="300" y="330" text-anchor="middle" font-size="15" pointer-events="none">benthic zone (lake bottom)</text>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const CP = 150
const basin = 'M30 60 Q 110 60 170 150 Q 230 300 300 305 Q 370 300 430 150 Q 490 60 570 60'
// approximate depth of the shore line for placing plants
const shoreY = (x) => (x < 300 ? 60 + ((x - 30) / 140) ** 1.6 * 90 : 60 + ((570 - x) / 140) ** 1.6 * 90)
const plankton = [[200, 80], [235, 135], [270, 76], [330, 138], [365, 80], [400, 128], [250, 108], [345, 106]]

const zones = {
  littoral: { fill: '#bfe3c4', note: '<b>Littoral zone</b>: well-lit, shallow water near the shore. Main producers are <b>rooted and floating aquatic plants</b>; also water lilies, duckweed, insect larvae.' },
  limnetic: { fill: '#e2f1fd', note: '<b>Limnetic zone</b>: well-lit, open surface water far from the shore. Main producers are <b>phytoplankton</b>; also zooplankton and fish.' },
  aphotic: { fill: '#7fa8cf', note: '<b>Aphotic / profundal zone</b>: below the photic zone, not enough light for photosynthesis, so <b>respiration > photosynthesis</b>. Detritivores feed on dead organisms. Absent in shallow lakes.' },
  benthic: { note: '<b>Benthic zone</b>: the bottom of every aquatic zone. Dead plants and animals sink and become sediment; decomposing bacteria and fungi (the benthos) live here.' }
}
const active = ref(null)
const pick = (z) => (active.value = active.value === z ? null : z)
const cls = (z) => ({ 'lz-zone': true, 'is-dim': active.value && active.value !== z })
const caption = computed(() =>
  active.value
    ? zones[active.value].note
    : 'Tap a zone. The dashed line is the <b>compensation point</b>: photosynthesis = respiration. Above it is the photic zone, below it the aphotic zone.'
)
</script>

<style scoped>
.lz-zone { cursor: pointer; transition: opacity 0.2s ease; }
.lz-zone.is-dim { opacity: 0.35; }
</style>
