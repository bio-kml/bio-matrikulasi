<template>
  <section class="co">
    <h2 class="co__heading">At a glance</h2>
    <StatGrid>
      <StatCard
        v-for="s in stats"
        :key="s.key"
        :value="s.pages.length"
        :label="s.title"
        :icon="s.icon"
        :color="s.color"
        :progress="s.pages.length ? Math.round((s.ready / s.pages.length) * 100) : 0"
        :note="`${s.ready} of ${s.pages.length} ready`"
      />
    </StatGrid>

    <h2 class="co__heading">Explore the course</h2>
    <div class="co__grid">
      <InfoCard
        v-for="s in sections"
        :key="s.key"
        :title="s.title"
        :icon="s.icon"
        :color="s.color"
        :tag="`${s.pages.length} ${s.pages.length === 1 ? 'page' : 'pages'}`"
        :link="s.pages[0]?.url"
      >
        <p>{{ s.desc }}</p>
        <ul class="co__pages">
          <li v-for="p in s.pages.slice(0, 3)" :key="p.url">
            <span>{{ p.title }}</span>
            <span v-if="!p.ready" class="co__soon">Soon</span>
          </li>
        </ul>
      </InfoCard>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { data as sections } from '../data/course.data.mjs'
import StatGrid from './ui/StatGrid.vue'
import StatCard from './ui/StatCard.vue'
import InfoCard from './ui/InfoCard.vue'

// Headline numbers: the four main study sections.
const stats = computed(() => sections.filter((s) => ['lectures', 'tutorials', 'labs', 'exams'].includes(s.key)))
</script>

<style scoped>
.co { margin-top: 8px; }
.vp-doc .co__heading,
.co__heading {
  margin: 40px 0 0;
  padding: 0;
  border: none;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.vp-doc .co__heading::before { display: none; }
.co__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
  margin: 24px 0;
}
.vp-doc .co__pages,
.co__pages {
  list-style: none;
  margin: 10px 0 0;
  padding: 10px 0 0;
  border-top: 1px solid var(--vp-c-divider);
}
.vp-doc .co__pages li,
.co__pages li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin: 0;
  padding: 3px 0;
  font-size: 13px;
  color: var(--vp-c-text-1);
}
.co__soon {
  padding: 0 7px;
  font-size: 11px;
  font-weight: 600;
  line-height: 18px;
  color: var(--vp-c-text-3);
  border: 1px solid var(--vp-c-divider);
  border-radius: 999px;
}
</style>
