<template>
  <section class="oc">
    <p class="oc__title">{{ title }}</p>
    <p class="oc__sub">{{ subtitle }}</p>
    <ol class="oc__slots">
      <li v-for="(t, i) in items" :key="i" :class="{ 'is-filled': i < placed.length }">
        <span class="oc__n">{{ i + 1 }}</span>
        <span v-if="i < placed.length" class="oc__placed">{{ placed[i] }}</span>
        <span v-else class="oc__blank"></span>
      </li>
    </ol>
    <div v-if="placed.length < items.length" class="oc__pool">
      <button v-for="t in pool" :key="t" class="oc__chip" :class="{ 'is-bad': bad === t }" @click="pick(t)">{{ t }}</button>
    </div>
    <p v-else class="oc__done">All in order{{ misses === 0 ? ', with no mistakes!' : ` (${misses} wrong ${misses === 1 ? 'tap' : 'taps'}).` }}</p>
    <div class="oc__foot">
      <span class="oc__misses">wrong taps: {{ misses }}</span>
      <button class="oc__reset" @click="reset">Shuffle and restart</button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Tap the items in the right order. Wrong taps flash and are counted.
const props = defineProps({
  items: { type: Array, required: true },
  title: { type: String, default: 'Put them in order' },
  subtitle: { type: String, default: 'Tap the next one in the sequence.' }
})
const pool = ref([...props.items])
const placed = ref([])
const misses = ref(0)
const bad = ref(null)
const shuffle = (a) => {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  return b
}
function pick(t) {
  if (t === props.items[placed.value.length]) {
    placed.value = [...placed.value, t]
    pool.value = pool.value.filter((x) => x !== t)
  } else {
    misses.value++
    bad.value = t
    setTimeout(() => { if (bad.value === t) bad.value = null }, 500)
  }
}
function reset() {
  placed.value = []
  misses.value = 0
  pool.value = shuffle(props.items)
}
onMounted(() => { pool.value = shuffle(props.items) })
</script>

<style scoped>
.oc { margin: 24px 0; padding: 14px 16px; border: var(--line); border-radius: 10px; background: var(--box); }
.vp-doc .oc__title, .oc__title { margin: 0; font-family: var(--font-hand); font-size: 1.3rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.vp-doc .oc__sub, .oc__sub { margin: 2px 0 10px; font-size: 15px; color: var(--muted); }
.vp-doc .oc__slots, .oc__slots { margin: 0 0 12px; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 4px 16px; }
.vp-doc .oc__slots li, .oc__slots li { display: flex; align-items: center; gap: 8px; min-height: 30px; margin: 0; }
.oc__n { flex-shrink: 0; width: 22px; height: 22px; display: grid; place-items: center; font-family: var(--font-hand); font-size: 13px; font-weight: 700; border: 1.5px solid var(--ink); border-radius: 50%; }
.oc__slots li.is-filled .oc__n { color: #fff; background: var(--c, var(--vp-c-brand-1)); border-color: var(--c, var(--vp-c-brand-1)); }
.oc__placed { font-size: 15px; animation: oc-in 0.25s ease both; }
.oc__blank { flex: 1; border-bottom: 2px dotted var(--rule); height: 1px; }
.oc__pool { display: flex; flex-wrap: wrap; gap: 8px; }
.oc__chip {
  padding: 5px 12px;
  font: inherit;
  font-size: 15px;
  color: var(--ink);
  background: #fff4c2;
  border: 2px solid var(--ink);
  border-radius: 6px;
  box-shadow: 2px 2px 0 var(--rule);
  cursor: pointer;
  transition: transform 0.1s ease, background-color 0.2s ease;
}
.dark .oc__chip { background: #3a3420; }
.oc__chip:active { transform: translate(1px, 1px); box-shadow: 1px 1px 0 var(--rule); }
.oc__chip.is-bad { background: #f4a3a3; color: #1d2b44; }
.vp-doc .oc__done, .oc__done { margin: 0; font-family: var(--font-hand); font-size: 1.15rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.oc__foot { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; }
.oc__misses { font-size: 14px; color: var(--muted); }
.oc__reset { padding: 3px 12px; font: inherit; font-size: 14px; color: var(--muted); background: none; border: 1.5px solid var(--rule); border-radius: 999px; cursor: pointer; }
.oc__reset:hover { color: var(--ink); border-color: var(--ink); }
@keyframes oc-in { from { opacity: 0; transform: translateX(-4px); } to { opacity: 1; transform: none; } }
</style>
