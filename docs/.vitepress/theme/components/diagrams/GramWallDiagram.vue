<template>
  <DiagramFrame title="Gram stain: what the cell wall looks like" :caption="cur.caption">
    <template #controls>
      <button class="dg-btn" :class="{ 'is-on': type === 'pos' }" :aria-pressed="type === 'pos'" @click="type = 'pos'">Gram-positive</button>
      <button class="dg-btn" :class="{ 'is-on': type === 'neg' }" :aria-pressed="type === 'neg'" @click="type = 'neg'">Gram-negative</button>
    </template>
    <svg :viewBox="`0 0 540 ${bottom + 10}`" role="img" :aria-label="`${cur.label} cell wall layers`">
      <text x="30" y="24" font-size="15" style="fill: var(--muted)">outside the cell</text>
      <text x="30" :y="bottom" font-size="15" style="fill: var(--muted)">cytoplasm (inside)</text>
      <Transition name="dg-fade" mode="out-in">
        <g :key="type">
          <template v-for="(L, i) in cur.layers" :key="i">
            <!-- peptidoglycan: a mesh -->
            <g v-if="L.kind === 'pg'">
              <rect x="30" :y="L.y" width="300" :height="L.h" fill="#d9c8f0" stroke="var(--ink)" stroke-width="2" />
              <line v-for="n in Math.floor(L.h / 12)" :key="'h' + n" x1="30" x2="330" :y1="L.y + n * 12" :y2="L.y + n * 12" stroke="#8a6fbf" stroke-width="1.5" />
              <line v-for="n in 24" :key="'v' + n" :x1="30 + n * 12" :x2="30 + n * 12" :y1="L.y" :y2="L.y + L.h" stroke="#8a6fbf" stroke-width="1.5" />
            </g>
            <!-- membrane: phospholipid bilayer -->
            <g v-else>
              <rect x="30" :y="L.y" width="300" height="30" :fill="L.kind === 'outer' ? '#fde2b8' : '#d6ecd2'" stroke="none" />
              <g v-for="n in 21" :key="'p' + n">
                <line :x1="16 + n * 14" :x2="16 + n * 14" :y1="L.y + 6" :y2="L.y + 13" stroke="var(--ink)" stroke-width="1.5" />
                <line :x1="16 + n * 14" :x2="16 + n * 14" :y1="L.y + 17" :y2="L.y + 24" stroke="var(--ink)" stroke-width="1.5" />
                <circle :cx="16 + n * 14" :cy="L.y + 4" r="4" fill="var(--box)" stroke="var(--ink)" stroke-width="1.5" />
                <circle :cx="16 + n * 14" :cy="L.y + 26" r="4" fill="var(--box)" stroke="var(--ink)" stroke-width="1.5" />
              </g>
            </g>
            <line x1="336" :x2="352" :y1="L.y + (L.h || 30) / 2" :y2="L.y + (L.h || 30) / 2" stroke="var(--ink)" stroke-width="1.5" />
            <text x="358" :y="L.y + (L.h || 30) / 2 + 5" font-size="16">{{ L.name }}</text>
          </template>
        </g>
      </Transition>
    </svg>
    <div class="gw__result">
      <span class="gw__dot" :style="{ background: cur.colour }"></span>
      <span>Stains <b>{{ cur.colourName }}</b></span>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

const types = {
  pos: {
    label: 'Gram-positive',
    colour: '#7b3fb0',
    colourName: 'purple',
    caption: '<b>1 layer: thick peptidoglycan.</b> The thick mesh traps crystal violet, so the cell stays purple.',
    layers: [
      { kind: 'pg', y: 40, h: 120, name: 'thick peptidoglycan' },
      { kind: 'pm', y: 180, name: 'plasma membrane' }
    ]
  },
  neg: {
    label: 'Gram-negative',
    colour: '#e0679a',
    colourName: 'pink',
    caption: '<b>2 layers: thin peptidoglycan + outer membrane</b> (lipopolysaccharides). Crystal violet washes out and safranin is taken up, so the cell turns pink.',
    layers: [
      { kind: 'outer', y: 40, name: 'outer membrane' },
      { kind: 'pg', y: 86, h: 24, name: 'thin peptidoglycan' },
      { kind: 'pm', y: 132, name: 'plasma membrane' }
    ]
  }
}
const type = ref('pos')
const cur = computed(() => types[type.value])
const bottom = computed(() => { const l = cur.value.layers.at(-1); return l.y + (l.h || 30) + 28 })
</script>

<style scoped>
.gw__result { display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 17px; }
.gw__result b { background: none; padding: 0; }
.gw__dot { width: 22px; height: 22px; border: 2px solid var(--ink); border-radius: 50%; transition: background-color 0.3s ease; }
</style>
