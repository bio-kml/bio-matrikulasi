<template>
  <div class="ui-topic" :style="{ '--c': accent }"><slot /></div>
</template>

<script setup>
import { computed } from 'vue'
import { accents } from './accent.js'

// Wraps one subtopic (e.g. "3.1 Selection") and gives everything inside it one
// colour: the heading bar, sub-headings, table headers, callouts, checklists.
const props = defineProps({
  color: { type: String, default: 'green' }
})
const accent = computed(() => accents[props.color] || props.color)
</script>
