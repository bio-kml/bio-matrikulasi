<template>
  <DiagramFrame title="Germ layers and body cavities (cross-section)" :caption="current.caption">
    <template #controls>
      <button
        v-for="(m, key) in modes"
        :key="key"
        class="dg-btn"
        :class="{ 'is-on': mode === key }"
        :aria-pressed="mode === key"
        @click="mode = key; focus = null"
      >{{ m.label }}</button>
    </template>

    <div class="bp">
      <svg viewBox="0 0 320 320" role="img" :aria-label="`Cross-section: ${current.label}`">
        <Transition name="dg-fade" mode="out-in">
          <g :key="mode">
            <template v-for="(s, i) in current.shapes" :key="i">
              <rect
                v-if="s.rect"
                :x="s.x" :y="s.y" :width="s.w" :height="s.h"
                :fill="fill[s.kind]" stroke="var(--ink)" stroke-width="2"
                :class="{ 'bp-dim': focus && focus !== s.kind }"
                @mouseenter="focus = s.kind" @mouseleave="focus = null"
              />
              <circle
                v-else
                cx="160" cy="160" :r="s.r"
                :fill="fill[s.kind]" stroke="var(--ink)" stroke-width="2"
                :stroke-dasharray="s.kind === 'cavity' ? '5 4' : null"
                :class="{ 'bp-dim': focus && focus !== s.kind }"
                @mouseenter="focus = s.kind" @mouseleave="focus = null"
              />
            </template>
            <text x="160" y="166" text-anchor="middle" font-size="17">gut</text>
          </g>
        </Transition>
      </svg>

      <ul class="bp__legend">
        <li v-for="k in current.legend" :key="k">
          <button
            class="bp__key"
            :class="{ 'is-focus': focus === k }"
            @mouseenter="focus = k" @mouseleave="focus = null" @focus="focus = k" @blur="focus = null"
            @click="focus = focus === k ? null : k"
          >
            <span class="bp__swatch" :class="{ 'bp__swatch--cavity': k === 'cavity' }" :style="{ background: fill[k] }"></span>
            <span>{{ k === 'cavity' ? current.cavityName : names[k] }}</span>
          </button>
        </li>
      </ul>
    </div>
  </DiagramFrame>
</template>

<script setup>
import { ref, computed } from 'vue'
import DiagramFrame from './DiagramFrame.vue'

// Germ layers (diploblastic vs triploblastic) and body cavity types,
// drawn as simple concentric cross-sections.
const fill = {
  ecto: '#8ec5f0',
  meso: '#f4a3a3',
  endo: '#f8d866',
  cavity: 'var(--box)',
  lumen: 'var(--box)'
}
const names = { ecto: 'Ectoderm (outer layer)', meso: 'Mesoderm (middle layer)', endo: 'Endoderm (lines the gut)', lumen: 'Gut' }

const modes = {
  diplo: {
    label: 'Diploblastic',
    caption: '<b>Diploblastic</b> = ectoderm + endoderm only, e.g. Cnidaria. No mesoderm.',
    legend: ['ecto', 'endo', 'lumen'],
    shapes: [{ r: 140, kind: 'ecto' }, { r: 116, kind: 'endo' }, { r: 92, kind: 'lumen' }]
  },
  acoel: {
    label: 'Acoelomate',
    caption: '<b>Triploblastic, acoelomate</b>: mesoderm fills the space between body wall and gut, so there is <b>no body cavity</b> (Platyhelminthes).',
    cavityName: 'No body cavity',
    legend: ['ecto', 'meso', 'endo', 'lumen'],
    shapes: [{ r: 140, kind: 'ecto' }, { r: 122, kind: 'meso' }, { r: 58, kind: 'endo' }, { r: 42, kind: 'lumen' }]
  },
  pseudo: {
    label: 'Pseudocoelomate',
    caption: '<b>Pseudocoelomate</b>: the cavity is <b>only partly lined by mesoderm</b>; mesoderm lines the body wall but not the gut (Nematoda).',
    cavityName: 'Pseudocoelom',
    legend: ['ecto', 'meso', 'cavity', 'endo', 'lumen'],
    shapes: [{ r: 140, kind: 'ecto' }, { r: 122, kind: 'meso' }, { r: 106, kind: 'cavity' }, { r: 58, kind: 'endo' }, { r: 42, kind: 'lumen' }]
  },
  coel: {
    label: 'Coelomate',
    caption: '<b>Coelomate</b>: the cavity is <b>fully lined by mesoderm</b> on both sides, a true coelom (Annelida onward).',
    cavityName: 'Coelom (true)',
    legend: ['ecto', 'meso', 'cavity', 'endo', 'lumen'],
    shapes: [
      { r: 140, kind: 'ecto' },
      { r: 122, kind: 'meso' },
      { r: 106, kind: 'cavity' },
      { rect: true, x: 154, y: 52, w: 12, h: 40, kind: 'meso' },
      { rect: true, x: 154, y: 228, w: 12, h: 40, kind: 'meso' },
      { r: 72, kind: 'meso' },
      { r: 58, kind: 'endo' },
      { r: 42, kind: 'lumen' }
    ]
  }
}

const mode = ref('coel')
const focus = ref(null)
const current = computed(() => modes[mode.value])
</script>

<style scoped>
.bp { display: grid; grid-template-columns: minmax(0, 300px) minmax(0, 1fr); gap: 18px; align-items: center; }
@media (max-width: 560px) { .bp { grid-template-columns: 1fr; } .bp svg { max-width: 280px; margin: 0 auto; } }
.bp circle, .bp rect { transition: opacity 0.2s ease; }
.bp .bp-dim { opacity: 0.18; }
.vp-doc .bp__legend, .bp__legend { margin: 0; padding: 0; list-style: none; }
.vp-doc .bp__legend li { margin: 0; }
.bp__key {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 5px 6px;
  font: inherit;
  font-size: 17px;
  text-align: left;
  color: var(--ink);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.bp__key:hover, .bp__key.is-focus { background: color-mix(in srgb, var(--c, var(--vp-c-brand-1)) 10%, transparent); }
.bp__swatch { width: 22px; height: 22px; flex-shrink: 0; border: 2px solid var(--ink); border-radius: 50%; }
.bp__swatch--cavity { border-style: dashed; }
</style>
