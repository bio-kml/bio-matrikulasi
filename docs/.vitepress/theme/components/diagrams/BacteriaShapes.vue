<template>
  <DiagramFrame title="Bacterial shapes" :caption="caption">
    <div class="bs">
      <button
        v-for="(s, i) in shapes"
        :key="s.name"
        class="bs__cell"
        :class="{ 'is-on': pick === i }"
        :aria-pressed="pick === i"
        @click="pick = pick === i ? null : i"
      >
        <svg viewBox="0 0 120 80" aria-hidden="true">
          <circle v-if="s.name === 'Coccus'" cx="60" cy="40" r="22" class="bs__body" />
          <rect v-else-if="s.name === 'Bacillus'" x="22" y="27" width="76" height="26" rx="13" class="bs__body" />
          <g v-else-if="s.name === 'Spirillum'">
            <path d="M14 44 C 26 18, 38 18, 48 40 S 70 62, 82 40 S 102 18, 108 36" class="bs__tube-out" />
            <path d="M14 44 C 26 18, 38 18, 48 40 S 70 62, 82 40 S 102 18, 108 36" class="bs__tube-in" />
          </g>
          <g v-else>
            <path d="M40 22 C 72 16, 88 36, 80 58" class="bs__tube-out" />
            <path d="M40 22 C 72 16, 88 36, 80 58" class="bs__tube-in" />
          </g>
        </svg>
        <span class="bs__name">{{ s.name }}</span>
        <span class="bs__shape">{{ s.shape }}</span>
      </button>
    </div>

    <p class="bs__sub">Cocci can be arranged as:</p>
    <svg class="bs__arr" viewBox="0 0 520 70" role="img" aria-label="Cocci arrangements: single, pairs, chains, clusters">
      <circle cx="65" cy="28" r="12" class="bs__body" />
      <circle cx="182" cy="28" r="12" class="bs__body" /><circle cx="206" cy="28" r="12" class="bs__body" />
      <circle v-for="n in 5" :key="'c' + n" :cx="270 + n * 22" cy="28" r="11" class="bs__body" />
      <circle v-for="(p, n) in cluster" :key="'k' + n" :cx="p[0]" :cy="p[1]" r="10" class="bs__body" />
      <text x="65" y="64" text-anchor="middle" font-size="15">single</text>
      <text x="194" y="64" text-anchor="middle" font-size="15">pairs</text>
      <text x="336" y="64" text-anchor="middle" font-size="15">chains</text>
      <text x="460" y="64" text-anchor="middle" font-size="15">clusters</text>
    </svg>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const shapes = [
  { name: 'Coccus', shape: 'spherical', eg: '<i>Streptococcus pneumoniae</i>, <i>Staphylococcus</i> sp.' },
  { name: 'Bacillus', shape: 'rod', eg: '<i>Bacillus thuringiensis</i>, <i>E. coli</i>' },
  { name: 'Spirillum', shape: 'spiral', eg: '<i>Rhodospirillum</i> sp.' },
  { name: 'Vibrio', shape: 'comma', eg: '<i>Vibrio cholerae</i>' }
]
const cluster = [[446, 20], [466, 18], [456, 36], [476, 34], [436, 36]]
const pick = ref(null)
const caption = computed(() =>
  pick.value === null ? 'Tap a shape to see an example.' : `<b>${shapes[pick.value].name}</b> (${shapes[pick.value].shape}), e.g. ${shapes[pick.value].eg}`
)
</script>

<style scoped>
.bs { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; }
@media (max-width: 520px) { .bs { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.bs__cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 4px 8px;
  font: inherit;
  color: var(--ink);
  background: var(--box);
  border: 2px solid var(--rule);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.15s ease, transform 0.15s cubic-bezier(0.2, 0, 0, 1);
}
.bs__cell:hover { border-color: var(--ink); transform: translateY(-2px); }
.bs__cell.is-on { border-color: var(--c, var(--vp-c-brand-1)); }
.bs__cell svg { width: 100%; max-width: 120px; }
.bs__name { font-family: var(--font-hand); font-size: 17px; font-weight: 700; }
.bs__shape { font-size: 14px; color: var(--muted); }
.bs__body { fill: #b9e3c6; stroke: var(--ink); stroke-width: 2; }
.bs__tube-out { fill: none; stroke: var(--ink); stroke-width: 15; stroke-linecap: round; }
.bs__tube-in { fill: none; stroke: #b9e3c6; stroke-width: 10; stroke-linecap: round; }
.vp-doc .bs__sub, .bs__sub { margin: 12px 0 2px; font-size: 16px; }
.bs__arr { max-width: 520px; }
</style>
