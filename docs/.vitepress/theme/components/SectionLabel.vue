<template>
  <div v-if="meta" class="section-label" :style="{ '--a': `var(--c-${meta.color})` }">
    <span class="section-label__icon"><Icon :name="meta.icon" :size="15" /></span>
    <span class="section-label__text">{{ meta.label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Icon from './ui/Icon.vue'
import { sectionMeta, sectionOf } from '../sections.js'

const route = useRoute()
const meta = computed(() => sectionMeta[sectionOf(route.path)] || null)
</script>

<style scoped>
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  animation: fade-up 0.4s cubic-bezier(0.2, 0, 0, 1) both;
}
.section-label__icon { display: inline-flex; color: var(--a); }
.section-label__text {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--a);
}
</style>
