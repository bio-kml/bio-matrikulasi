<template>
  <section class="gl">
    <!-- top strip: phase + ledger -->
    <div class="gl__strip">
      <div class="gl__phase">
        <span class="gl__phase-name">{{ done < 5 ? 'Phase 1: energy investment' : done < 10 ? 'Phase 2: energy pay-off' : 'Glycolysis complete' }}</span>
        <span class="gl__phase-steps">step {{ Math.min(done + 1, 10) }} of 10</span>
      </div>
      <div class="gl__ledger" aria-live="polite">
        <span class="gl__led"><b>ATP spent</b> <i v-for="n in atpUsed" :key="'u' + n" class="tok tok--spent">ATP</i><em v-if="!atpUsed">0</em></span>
        <span class="gl__led"><b>ATP made</b> <i v-for="n in atpMade" :key="'m' + n" class="tok tok--atp">ATP</i><em v-if="!atpMade">0</em></span>
        <span class="gl__led"><b>NADH made</b> <i v-for="n in nadh" :key="'n' + n" class="tok tok--nadh">NADH</i><em v-if="!nadh">0</em></span>
      </div>
    </div>

    <div class="gl__grid">
      <!-- the bench -->
      <div class="gl__bench">
        <p class="gl__label">On your bench</p>
        <div class="gl__mols">
          <Transition name="gl-swap" mode="out-in">
            <div :key="done" class="gl__mol-row">
              <Molecule v-for="(m, i) in state.mols" :key="i" :c="m.c" :p="m.p" :name="m.name" />
              <span v-if="state.x2" class="gl__x2">× 2</span>
            </div>
          </Transition>
        </div>

        <template v-if="done < 10">
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

        <div v-if="done === 10" class="gl__end">
          <p class="gl__end-title">Your glycolysis balance sheet</p>
          <p>ATP made <b>4</b> − ATP spent <b>2</b> = <b>net 2 ATP</b>, plus <b>2 NADH + H⁺</b> and <b>2 pyruvate</b> (3C) from one glucose (6C).</p>
          <p class="gl__end-small">Mistakes along the way: {{ mistakes }}. {{ mistakes === 0 ? 'Perfect run.' : 'Try again and aim for zero.' }}</p>
        </div>
        <button class="gl__reset" @click="reset">{{ done === 10 ? 'Run it again' : 'Start over' }}</button>
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
            <span v-if="i === 4" class="gl__divider">↓ pay-off phase (everything × 2)</span>
          </li>
        </ol>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import Molecule from '../ui/Molecule.vue'

const actions = {
  addP: { ico: '＋P', text: 'Stick on a phosphate <b>from ATP</b>' },
  rearrange: { ico: '⟲', text: '<b>Rearrange</b> it into an isomer' },
  split: { ico: '✂', text: '<b>Split</b> it in two' },
  oxidise: { ico: 'e⁻', text: '<b>Oxidise</b> it: electrons to NAD⁺, add a Pi' },
  giveP: { ico: 'P→', text: 'Hand a phosphate <b>to ADP</b>' },
  moveP: { ico: '↔P', text: '<b>Move</b> the phosphate to another carbon' },
  water: { ico: 'H₂O', text: 'Pull out a <b>water</b> molecule' }
}

// Bench contents before each step (index = steps done).
const benches = [
  { mols: [{ c: 6, p: [], name: 'Glucose' }] },
  { mols: [{ c: 6, p: [6], name: 'Glucose 6-phosphate' }] },
  { mols: [{ c: 6, p: [6], name: 'Fructose 6-phosphate' }] },
  { mols: [{ c: 6, p: [1, 6], name: 'Fructose 1,6-bisphosphate' }] },
  { mols: [{ c: 3, p: [1], name: 'DHAP' }, { c: 3, p: [3], name: 'Glyceraldehyde 3-phosphate' }] },
  { mols: [{ c: 3, p: [3], name: 'Glyceraldehyde 3-phosphate' }], x2: true },
  { mols: [{ c: 3, p: [1, 3], name: '1,3-Bisphosphoglycerate' }], x2: true },
  { mols: [{ c: 3, p: [3], name: '3-Phosphoglycerate' }], x2: true },
  { mols: [{ c: 3, p: [2], name: '2-Phosphoglycerate' }], x2: true },
  { mols: [{ c: 3, p: [2], name: 'Phosphoenolpyruvate (PEP)' }], x2: true },
  { mols: [{ c: 3, p: [], name: 'Pyruvate' }], x2: true }
]

const steps = [
  { answer: 'addP', options: ['split', 'addP', 'giveP'], type: 'Phosphorylation', enzyme: 'hexokinase', q: 'Glucose is quite stable. What does the cell do first?',
    why: 'ATP is <b>spent</b> as activation energy, making glucose more chemically reactive.', hint: 'Glucose has no phosphate to hand out yet, and it is too stable to split. In the investment phase the cell spends ATP first.', ledger: { used: 1 } },
  { answer: 'rearrange', options: ['addP', 'split', 'rearrange'], type: 'Isomerization', enzyme: 'phosphoglucose isomerase', q: 'Next, the molecule changes, but nothing is added or taken away. What happens?',
    why: 'Glucose 6-phosphate is rearranged into its <b>isomer</b>, fructose 6-phosphate: same atoms, new arrangement.', hint: 'Nothing is added or removed in this step, and the carbon count stays at 6.' },
  { answer: 'addP', options: ['addP', 'giveP', 'split'], type: 'Phosphorylation', enzyme: 'phosphofructokinase', q: 'The plan is to cut this sugar into two halves that both carry a phosphate. What is needed first?',
    why: 'A <b>second ATP is spent</b>: now there is a phosphate on <b>both ends</b> (carbons 1 and 6).', hint: 'Each half will need its own phosphate, but there is only one on the molecule. Spend another ATP.', ledger: { used: 1 } },
  { answer: 'split', options: ['oxidise', 'addP', 'split'], type: 'Splitting of sugar', enzyme: 'aldolase', q: 'Six carbons with a phosphate on each end. What now?',
    why: 'The 6C sugar <b>splits</b> into two 3C sugars: DHAP and glyceraldehyde 3-phosphate.', hint: 'The goal of the investment phase is to turn one 6C sugar into two 3C sugars. The molecule is ready.' },
  { answer: 'rearrange', options: ['giveP', 'rearrange', 'split'], type: 'Isomerization', enzyme: 'triose phosphate isomerase', q: 'Only glyceraldehyde 3-phosphate can carry on. What happens to DHAP?',
    why: 'DHAP is isomerized to glyceraldehyde 3-phosphate. Now there are <b>2 molecules</b>, so from here every step happens <b>twice</b>.', hint: 'DHAP and glyceraldehyde 3-phosphate have the same atoms. Change one into the other; nothing is added or removed.' },
  { answer: 'oxidise', options: ['water', 'giveP', 'oxidise'], type: 'Oxidation and phosphorylation', enzyme: 'glyceraldehyde 3-phosphate dehydrogenase', q: 'The pay-off phase begins. How does the cell start collecting energy?',
    why: 'G3P is <b>oxidised</b>: its electrons go to NAD⁺, which is <b>reduced to NADH + H⁺</b>. Energy from this redox reaction attaches an <b>inorganic phosphate</b>, forming 1,3-bisphosphoglycerate.', hint: 'Look for the step where the 3C sugar loses electrons and picks up a phosphate from the cytosol.', ledger: { nadh: 2 } },
  { answer: 'giveP', options: ['moveP', 'addP', 'giveP'], type: 'Substrate-level phosphorylation', enzyme: 'phosphoglycerate kinase', q: '1,3-bisphosphoglycerate carries a high-energy phosphate. Time to get paid. How?',
    why: 'A phosphate is transferred to ADP, making <b>ATP by substrate-level phosphorylation</b>: 2 ATP for one glucose. The investment is paid back.', hint: 'It is pay-back time: the phosphate goes to ADP.', ledger: { made: 2 } },
  { answer: 'moveP', options: ['water', 'moveP', 'giveP'], type: 'Isomerization', enzyme: 'phosphoglycerate mutase', q: 'The phosphate is on carbon 3. What happens next?',
    why: 'The phosphate is <b>relocated from carbon 3 to carbon 2</b>, forming 2-phosphoglycerate.', hint: 'Nothing is added or removed: the phosphate just moves along the chain.' },
  { answer: 'water', options: ['oxidise', 'giveP', 'water'], type: 'Dehydration', enzyme: 'enolase', q: 'Something small leaves the molecule. What is it?',
    why: 'A <b>water molecule is removed</b>, forming phosphoenolpyruvate (PEP).', hint: 'No phosphate moves and no electrons move in this step. A small molecule, H₂O, is taken out.' },
  { answer: 'giveP', options: ['rearrange', 'giveP', 'addP'], type: 'Substrate-level phosphorylation', enzyme: 'pyruvate kinase', q: 'Last step. What does PEP do with its phosphate?',
    why: 'PEP gives its phosphate to ADP: <b>2 more ATP</b> by substrate-level phosphorylation, leaving <b>2 pyruvate</b>.', hint: 'Last pay-off: the phosphate goes to ADP, leaving pyruvate.', ledger: { made: 2 } }
]

const done = ref(0)
const tried = ref([])
const hint = ref('')
const last = ref(null)
const mistakes = ref(0)
const atpUsed = ref(0)
const atpMade = ref(0)
const nadh = ref(0)
const state = computed(() => benches[done.value])

function choose(a) {
  const s = steps[done.value]
  if (a !== s.answer) {
    tried.value = [...tried.value, a]
    hint.value = s.hint
    mistakes.value++
    return
  }
  atpUsed.value += s.ledger?.used || 0
  atpMade.value += s.ledger?.made || 0
  nadh.value += s.ledger?.nadh || 0
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
  atpUsed.value = 0
  atpMade.value = 0
  nadh.value = 0
}
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
.vp-doc .gl__end p { margin: 4px 0; color: #1d2b44; }
.gl__end b { background: none; padding: 0; }
.gl__end-title { font-family: var(--font-hand); font-size: 1.2rem; font-weight: 700; }
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
