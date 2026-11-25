<template>
  <section class="gl">
    <!-- top strip: phase + ledger -->
    <div class="gl__strip">
      <div class="gl__phase">
        <span class="gl__phase-name">{{ done < steps.length ? steps[done].phase : finishedLabel }}</span>
        <span class="gl__phase-steps">step {{ Math.min(done + 1, steps.length) }} of {{ steps.length }}</span>
      </div>
      <div class="gl__ledger" aria-live="polite">
        <span v-for="k in counters" :key="k.key" class="gl__led">
          <b>{{ k.label }}</b>
          <template v-if="counts[k.key] <= 12">
            <i v-for="n in counts[k.key]" :key="k.key + n" class="tok" :class="'tok--' + (k.cls || 'atp')">{{ k.tok }}</i>
          </template>
          <i v-else class="tok" :class="'tok--' + (k.cls || 'atp')">{{ counts[k.key] }} × {{ k.tok }}</i>
          <em v-if="!counts[k.key]">0</em>
        </span>
      </div>
    </div>

    <div class="gl__grid">
      <!-- the bench -->
      <div class="gl__bench">
        <p class="gl__label">On your bench</p>
        <div class="gl__mols">
          <Transition name="gl-swap" mode="out-in">
            <div :key="done" class="gl__mol-row">
              <template v-for="(m, i) in benches[done].mols" :key="i">
                <span v-if="m.plus" class="gl__plus">+</span>
                <Molecule :c="m.c" :p="m.p || []" :coa="m.coa" :name="m.name" />
              </template>
              <span v-if="benches[done].x2" class="gl__x2">× 2</span>
            </div>
          </Transition>
        </div>

        <template v-if="done < steps.length">
          <p class="gl__q">{{ steps[done].q }}</p>
          <div class="gl__actions">
            <button
              v-for="a in steps[done].options"
              :key="a"
              class="gl__card"
              :class="{ 'is-wrong': tried.includes(a), 'is-nudge': tried.length >= 2 && a === steps[done].answer }"
              :disabled="tried.includes(a)"
              @click="choose(a)"
            >
              <span class="gl__card-ico">{{ actions[a].ico }}</span>
              <span v-html="actions[a].text"></span>
            </button>
          </div>
          <Transition name="gl-swap">
            <p v-if="hint" class="gl__hint"><b>Not quite.</b> {{ hint }}</p>
          </Transition>
        </template>

        <Transition name="gl-swap">
          <div v-if="last" :key="'f' + done" class="gl__found">
            <span class="gl__found-tag">You discovered step {{ done }}</span>
            <span class="gl__found-name">{{ last.type }}</span>
            <span class="gl__found-enz">enzyme: <i>{{ last.enzyme }}</i></span>
            <span class="gl__found-why" v-html="last.why"></span>
          </div>
        </Transition>

        <div v-if="done === steps.length" class="gl__end">
          <slot name="end" :mistakes="mistakes" :counts="counts" />
          <p class="gl__end-small">Mistakes along the way: {{ mistakes }}. {{ mistakes === 0 ? 'Perfect run.' : 'Try again and aim for zero.' }}</p>
        </div>
        <button class="gl__reset" @click="reset">{{ done === steps.length ? 'Run it again' : 'Start over' }}</button>
      </div>

      <!-- lab notebook -->
      <aside class="gl__book">
        <p class="gl__label">Lab notebook</p>
        <ol class="gl__list">
          <li v-for="(s, i) in steps" :key="i" :class="{ 'is-done': i < done, 'is-now': i === done }">
            <span class="gl__n">{{ i + 1 }}</span>
            <span v-if="i < done" class="gl__entry">
              <span class="gl__entry-type">{{ s.type }}</span>
              <span class="gl__entry-enz">{{ s.enzyme }}</span>
            </span>
            <span v-else class="gl__blank"></span>
            <span v-if="dividers[i]" class="gl__divider">{{ dividers[i] }}</span>
          </li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Molecule from '../ui/Molecule.vue'

// A worksheet-style "be the cell" bench. The student picks what happens at each
// step; a ledger counts what is made or used, and a lab notebook fills in.
// Each activity passes its own script (actions, benches, steps, counters).
const props = defineProps({
  // { key: { ico, text } } action cards
  actions: { type: Object, required: true },
  // what is on the bench before each step (length = steps + 1)
  benches: { type: Array, required: true },
  // [{ answer, options, type, enzyme, q, why, hint, phase, ledger: { key: n } }]
  steps: { type: Array, required: true },
  // [{ key, label, tok, cls }] ledger rows (cls: atp | spent | nadh | fad | co2)
  counters: { type: Array, required: true },
  // { stepIndex: 'text' } notes shown in the notebook after a step
  dividers: { type: Object, default: () => ({}) },
  finishedLabel: { type: String, default: 'Complete' }
})

const done = ref(0)
const tried = ref([])
const hint = ref('')
const last = ref(null)
const mistakes = ref(0)
const counts = reactive(Object.fromEntries(props.counters.map((k) => [k.key, 0])))

function choose(a) {
  const s = props.steps[done.value]
  if (a !== s.answer) {
    tried.value = [...tried.value, a]
    hint.value = s.hint
    mistakes.value++
    return
  }
  for (const [k, n] of Object.entries(s.ledger || {})) counts[k] += n
  last.value = s
  hint.value = ''
  tried.value = []
  done.value++
}
function reset() {
  done.value = 0
  tried.value = []
  hint.value = ''
  last.value = null
  mistakes.value = 0
  for (const k of Object.keys(counts)) counts[k] = 0
}
// Multiply every count (e.g. "now run it for the second pyruvate").
function scale(f) {
  for (const k of Object.keys(counts)) counts[k] *= f
}
defineExpose({ scale, reset })
</script>

<style scoped>
.gl { margin: 24px 0; }
.gl__strip {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 20px;
  padding: 10px 14px;
  border: var(--line);
  border-radius: 10px 10px 0 0;
  background: color-mix(in srgb, var(--c, #a96a12) 10%, var(--box));
}
.gl__phase { display: flex; flex-direction: column; }
.gl__phase-name { font-family: var(--font-hand); font-size: 1.2rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.gl__phase-steps { font-size: 14px; color: var(--muted); }
.gl__ledger { display: flex; flex-direction: column; gap: 4px; font-size: 14px; }
.gl__led { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
.gl__led b { min-width: 82px; font-weight: 400; background: none; padding: 0; color: var(--muted); }
.gl__led em { font-style: normal; color: var(--muted); }
.tok {
  font-style: normal;
  font-family: var(--font-hand);
  font-size: 12px;
  font-weight: 700;
  padding: 0 6px;
  border: 1.5px solid var(--ink);
  border-radius: 999px;
  animation: tok-in 0.3s cubic-bezier(0.2, 0, 0, 1) both;
}
.tok--atp { background: #f8d866; color: #1d2b44; }
.tok--spent { background: var(--box); text-decoration: line-through; }
.tok--nadh { background: #b9e3c6; color: #1d2b44; }
.tok--fad { background: #cdb7ea; color: #1d2b44; }
.tok--co2 { background: #d9dee6; color: #1d2b44; }
@keyframes tok-in { from { transform: scale(0.4); opacity: 0; } to { transform: none; opacity: 1; } }

.gl__grid {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  border: var(--line);
  border-top: none;
  border-radius: 0 0 10px 10px;
  background: var(--box);
}
@media (max-width: 720px) { .gl__grid { grid-template-columns: 1fr; } }
.gl__bench { padding: 14px 16px 16px; border-right: 2px dashed var(--rule); }
@media (max-width: 720px) { .gl__bench { border-right: none; border-bottom: 2px dashed var(--rule); } }
.vp-doc .gl__label, .gl__label { margin: 0 0 6px; font-family: var(--font-hand); font-size: 1.05rem; font-weight: 700; color: var(--muted); }
.gl__mols { min-height: 120px; display: flex; align-items: center; justify-content: center; }
.gl__mol-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 18px; }
.gl__plus { font-family: var(--font-hand); font-size: 1.6rem; font-weight: 700; color: var(--muted); }
.gl__x2 { font-family: var(--font-hand); font-size: 1.6rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.vp-doc .gl__q, .gl__q { margin: 10px 0 8px; font-family: var(--font-hand); font-size: 1.15rem; font-weight: 700; color: var(--ink); }
.gl__actions { display: grid; gap: 8px; }
.gl__card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  font: inherit;
  font-size: 16px;
  text-align: left;
  color: var(--ink);
  background: var(--box);
  border: 2px solid var(--ink);
  border-radius: 8px;
  box-shadow: 3px 3px 0 var(--rule);
  cursor: pointer;
  transition: transform 0.12s ease, box-shadow 0.12s ease, opacity 0.2s ease;
}
.gl__card:hover:not(:disabled) { transform: translate(-1px, -1px); box-shadow: 4px 4px 0 var(--rule); }
.gl__card:active:not(:disabled) { transform: translate(2px, 2px); box-shadow: 1px 1px 0 var(--rule); }
.gl__card :deep(b) { background: none; padding: 0; }
.gl__card.is-wrong { opacity: 0.4; text-decoration: line-through; cursor: default; box-shadow: none; }
.gl__card.is-nudge { border-style: dashed; border-color: var(--c, var(--vp-c-brand-1)); }
.gl__card-ico {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 40px;
  height: 30px;
  font-family: var(--font-hand);
  font-size: 15px;
  font-weight: 700;
  border: 1.5px solid var(--ink);
  border-radius: 6px;
  background: #fff4c2;
  color: #1d2b44;
}
.vp-doc .gl__hint, .gl__hint { margin: 10px 0 0; padding: 8px 12px; font-size: 15px; border: 2px dashed var(--c-red); border-radius: 8px; }
.gl__hint b { background: none; padding: 0; color: var(--c-red); }
.gl__found {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 12px;
  padding: 10px 14px;
  border: 2px solid var(--ink);
  border-radius: 8px;
  background: color-mix(in srgb, var(--c, #a96a12) 9%, var(--box));
}
.gl__found-tag { font-size: 13px; color: var(--muted); }
.gl__found-name { font-family: var(--font-hand); font-size: 1.2rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.gl__found-enz { font-size: 15px; }
.gl__found-why { font-size: 15px; line-height: 1.55; }
.gl__found-why :deep(b) { background: none; padding: 0; }
.gl__end { margin-top: 12px; padding: 10px 14px; border: 2px solid var(--ink); border-radius: 8px; background: #fff4c2; color: #1d2b44; }
.vp-doc .gl__end p, .gl__end :deep(p) { margin: 4px 0; color: #1d2b44; }
.gl__end :deep(b) { background: none; padding: 0; }
.gl__end :deep(.gl__end-title) { font-family: var(--font-hand); font-size: 1.2rem; font-weight: 700; }
.gl__end-small { font-size: 14px; }
.gl__reset { margin-top: 12px; padding: 4px 12px; font: inherit; font-size: 14px; color: var(--muted); background: none; border: 1.5px solid var(--rule); border-radius: 999px; cursor: pointer; }
.gl__reset:hover { color: var(--ink); border-color: var(--ink); }

.gl__book {
  padding: 14px 16px;
}
.vp-doc .gl__list, .gl__list { margin: 0; padding: 0; list-style: none; }
.vp-doc .gl__list li, .gl__list li { display: flex; flex-wrap: wrap; align-items: center; gap: 4px 8px; min-height: 36px; margin: 0; padding: 3px 0; border-bottom: 1px solid var(--rule); }
.gl__n {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  font-family: var(--font-hand);
  font-size: 13px;
  font-weight: 700;
  border: 1.5px solid var(--ink);
  border-radius: 50%;
  background: var(--box);
}
.gl__list li.is-done .gl__n { color: #fff; background: var(--c, var(--vp-c-brand-1)); border-color: var(--c, var(--vp-c-brand-1)); }
.gl__list li.is-now .gl__n { border-width: 2.5px; border-color: var(--c, var(--vp-c-brand-1)); }
.gl__entry { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.2; animation: tok-in 0.3s ease both; }
.gl__entry-type { font-family: var(--font-hand); font-size: 15px; font-weight: 700; }
.gl__entry-enz { font-size: 13px; font-style: italic; color: var(--muted); }
.gl__blank { flex: 1; height: 1px; border-bottom: 2px dotted var(--rule); }
.gl__divider { flex-basis: 100%; padding: 6px 0 2px 30px; font-family: var(--font-hand); font-size: 13px; color: var(--c, var(--vp-c-brand-1)); }

.gl-swap-enter-active, .gl-swap-leave-active { transition: opacity 0.22s ease, transform 0.22s cubic-bezier(0.2, 0, 0, 1); }
.gl-swap-enter-from { opacity: 0; transform: translateY(6px); }
.gl-swap-leave-to { opacity: 0; }
</style>
