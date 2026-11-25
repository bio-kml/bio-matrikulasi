<template>
  <section class="home">
    <h2 class="home__h">Revision notes</h2>
    <p class="home__sub">One page per chapter: learning outcomes you can tick off, diagrams, quick checks and flashcards.</p>
    <div class="home__grid">
      <InfoCard
        v-for="p in data.revision"
        :key="p.url"
        :title="p.title"
        :tag="p.tag"
        :icon="p.icon"
        :color="p.color"
        :link="p.url"
      >
        <p>{{ p.desc }}</p>
      </InfoCard>
    </div>

    <h2 class="home__h">Activities</h2>
    <p class="home__sub">Explore and discover it yourself before you read the notes.</p>
    <div class="home__grid">
      <InfoCard
        v-for="p in data.activities"
        :key="p.url"
        :title="p.title"
        :tag="p.tag"
        :icon="p.icon"
        :color="p.color"
        :link="p.url"
      >
        <p>{{ p.desc }}</p>
      </InfoCard>
    </div>

    <StickyNote title="How to revise with this site">
      <p>Read a chapter, tick off each learning outcome once you can answer it without looking, then try the quick checks. Stuck on a step? Do the activity first.</p>
    </StickyNote>
  </section>
</template>

<script setup>
import { data } from '../data/course.data.mjs'
import InfoCard from './ui/InfoCard.vue'
import StickyNote from './ui/StickyNote.vue'
</script>

<style scoped>
.home { margin-top: 8px; }
.vp-doc .home__h,
.home__h {
  position: relative;
  margin: 40px 0 0;
  padding: 2px 0 2px 22px;
  border: none;
  font-family: var(--font-hand);
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
}
.vp-doc .home__h::before,
.home__h::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 8px;
  background: var(--vp-c-brand-1);
}
.vp-doc .home__sub, .home__sub { margin: 6px 0 16px; color: var(--muted); font-size: 17px; }
.home__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 14px;
}
</style>
