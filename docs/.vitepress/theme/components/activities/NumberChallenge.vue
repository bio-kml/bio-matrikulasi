<template>
  <div class="nc" :class="{ 'is-right': state === 'right' }">
    <div class="nc__head">
      <span class="nc__tag">{{ tag }}</span>
      <span v-if="state === 'right'" class="nc__ok">✓</span>
    </div>
    <p class="nc__q" v-html="question"></p>
    <form class="nc__row" @submit.prevent="check">
      <input
        v-model="guess"
        class="nc__in"
        type="text"
        inputmode="decimal"
        :aria-label="`Answer${unit ? ' in ' + unit : ''}`"
        :disabled="state === 'right'"
        placeholder="?"
      />
      <span v-if="unit" class="nc__unit">{{ unit }}</span>
      <button class="nc__btn" type="submit" :disabled="state === 'right' || guess === ''">Check</button>
      <button v-if="tries >= 2 && state !== 'right'" class="nc__show" type="button" @click="reveal">Show working</button>
    </form>
    <p v-if="state === 'wrong'" class="nc__hint"><b>Not quite.</b> <span v-html="hint"></span></p>
    <div v-if="state === 'right' || shown" class="nc__work">
      <span class="nc__work-title">{{ state === 'right' ? 'Yes!' : 'Answer: ' + answer + (unit ? ' ' + unit : '') }}</span>
      <span v-html="working"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// A "how many…?" question: type a number, get a clue, then the working.
const props = defineProps({
  question: { type: String, required: true },
  answer: { type: Number, required: true },
  unit: { type: String, default: '' },
  hint: { type: String, default: 'Check your working and try again.' },
  working: { type: String, default: '' },
  tag: { type: String, default: 'Think it through' }
})
const guess = ref('')
const state = ref('')
const tries = ref(0)
const shown = ref(false)
function check() {
  const v = parseFloat(String(guess.value).replace(',', '.'))
  if (Number.isFinite(v) && Math.abs(v - props.answer) < 1e-9) {
    state.value = 'right'
  } else {
    state.value = 'wrong'
    tries.value++
  }
}
function reveal() { shown.value = true }
</script>

<style scoped>
.nc { margin: 16px 0; padding: 12px 16px 14px; border: var(--line); border-radius: 10px; background: var(--box); transition: border-color 0.2s ease; }
.nc.is-right { border-color: var(--c, var(--vp-c-brand-1)); }
.nc__head { display: flex; justify-content: space-between; align-items: center; }
.nc__tag { font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--c, var(--vp-c-brand-1)); }
.nc__ok { font-family: var(--font-hand); font-size: 1.4rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.vp-doc .nc__q, .nc__q { margin: 4px 0 10px; font-family: var(--font-hand); font-size: 1.12rem; font-weight: 700; line-height: 1.45; color: var(--ink); }
.nc__q :deep(b) { background: none; padding: 0; color: var(--c, var(--vp-c-brand-1)); }
.nc__row { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
.nc__in {
  width: 90px;
  padding: 6px 10px;
  font-family: var(--font-hand);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: var(--ink);
  background: var(--box);
  border: 2px solid var(--ink);
  border-radius: 8px;
}
.nc__in:focus { outline: 2px solid var(--c, var(--vp-c-brand-1)); outline-offset: 2px; }
.nc__unit { font-size: 16px; color: var(--muted); }
.nc__btn, .nc__show {
  padding: 6px 14px;
  font-family: var(--font-hand);
  font-size: 15px;
  font-weight: 700;
  border: 2px solid var(--ink);
  border-radius: 999px;
  cursor: pointer;
}
.nc__btn { color: #fff; background: var(--c, var(--vp-c-brand-1)); border-color: var(--c, var(--vp-c-brand-1)); }
.dark .nc__btn { color: #172031; }
.nc__btn:disabled { opacity: 0.45; cursor: default; }
.nc__show { color: var(--ink); background: var(--box); }
.vp-doc .nc__hint, .nc__hint { margin: 10px 0 0; padding: 6px 12px; font-size: 15px; border: 2px dashed var(--c-red); border-radius: 8px; }
.nc__hint b { background: none; padding: 0; color: var(--c-red); }
.nc__hint :deep(b) { background: none; padding: 0; }
.nc__work {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 15px;
  line-height: 1.6;
  border: 2px solid var(--ink);
  border-radius: 8px;
  background: color-mix(in srgb, var(--c, #a96a12) 9%, var(--box));
  animation: nc-in 0.25s ease both;
}
.nc__work :deep(b) { background: none; padding: 0; }
.nc__work-title { font-family: var(--font-hand); font-size: 1.1rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
@keyframes nc-in { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
</style>
