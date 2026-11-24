<template>
  <span class="mol" :class="{ 'mol--small': small }">
    <svg :viewBox="`0 0 ${w} 74`" :width="small ? w * 0.75 : w" :height="small ? 56 : 74" role="img" :aria-label="aria">
      <!-- bonds -->
      <line v-for="i in c - 1" :key="'b' + i" :x1="x(i)" :y1="y(i)" :x2="x(i + 1)" :y2="y(i + 1)" stroke="var(--ink)" stroke-width="2.5" />
      <!-- phosphate tags -->
      <g v-for="n in p" :key="'p' + n">
        <line :x1="x(n)" :y1="y(n)" :x2="x(n)" :y2="py(n)" stroke="var(--ink)" stroke-width="2" />
        <circle :cx="x(n)" :cy="py(n)" r="10" fill="#f6b26b" stroke="var(--ink)" stroke-width="2" />
        <text :x="x(n)" :y="py(n) + 4.5" text-anchor="middle" font-size="12" font-weight="700" class="mol__in">P</text>
      </g>
      <!-- coenzyme A -->
      <g v-if="coa">
        <line :x1="x(c)" :y1="y(c)" :x2="x(c) + 18" :y2="y(c)" stroke="var(--ink)" stroke-width="2" />
        <rect :x="x(c) + 18" :y="y(c) - 10" width="34" height="20" rx="5" fill="#cdb7ea" stroke="var(--ink)" stroke-width="2" />
        <text :x="x(c) + 35" :y="y(c) + 4.5" text-anchor="middle" font-size="11" font-weight="700" class="mol__in">CoA</text>
      </g>
      <!-- carbons -->
      <g v-for="i in c" :key="'c' + i">
        <circle :cx="x(i)" :cy="y(i)" r="11" fill="#9ed7a8" stroke="var(--ink)" stroke-width="2" />
        <text :x="x(i)" :y="y(i) + 4.5" text-anchor="middle" font-size="11" font-weight="700" class="mol__in">C</text>
      </g>
    </svg>
    <span v-if="name" class="mol__name">{{ name }}</span>
    <span v-if="showCount" class="mol__count">{{ c }}C</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

// A hand-drawn carbon skeleton: c carbons in a zigzag, phosphate tags on the
// carbons listed in p (1-based), optional CoA on the end.
const props = defineProps({
  c: { type: [Number, String], required: true },
  p: { type: Array, default: () => [] },
  name: { type: String, default: '' },
  coa: { type: Boolean, default: false },
  small: { type: Boolean, default: false },
  showCount: { type: Boolean, default: true }
})
const c = computed(() => Number(props.c))
const p = computed(() => props.p.map(Number))
const w = computed(() => 22 + (c.value - 1) * 26 + 22 + (props.coa ? 56 : 0))
const x = (i) => 22 + (i - 1) * 26
const y = (i) => (i % 2 ? 44 : 30)
const py = (i) => (i % 2 ? 66 : 9) // tags point away from the chain
const aria = computed(() => `${props.name || 'molecule'}: ${c.value} carbons${p.value.length ? `, phosphate on carbon ${p.value.join(' and ')}` : ''}`)
</script>

<style scoped>
.mol { display: inline-flex; flex-direction: column; align-items: center; gap: 2px; vertical-align: middle; }
.mol svg { overflow: visible; }
.mol svg text { font-family: var(--font-hand); fill: var(--ink); }
.mol svg text.mol__in { fill: #1d2b44; }
.mol__name { font-family: var(--font-hand); font-size: 15px; font-weight: 700; line-height: 1.2; text-align: center; color: var(--ink); }
.mol__count { font-size: 13px; color: var(--muted); }
.mol--small .mol__name { font-size: 13px; }
</style>
