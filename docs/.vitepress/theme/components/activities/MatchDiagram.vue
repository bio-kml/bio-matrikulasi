<template>
  <section class="md">
    <header class="md__head">
      <div>
        <p class="md__title">{{ title }}</p>
        <p class="md__sub">{{ subtitle }}</p>
      </div>
      <span class="md__score">{{ filledCount }} / {{ blanks.length }} matched</span>
    </header>

    <!-- word bank -->
    <div class="md__bank" role="group" aria-label="Keywords">
      <button
        v-for="w in bank"
        :key="w.id"
        class="md__chip"
        :class="['md__chip--' + w.kind, { 'is-picked': picked === w.id }]"
        :aria-pressed="picked === w.id"
        @click="pickWord(w.id)"
      >{{ w.text }}</button>
      <p v-if="!bank.length" class="md__done">All matched{{ mistakes ? ` with ${mistakes} wrong tr${mistakes === 1 ? 'y' : 'ies'}` : ' first time' }}! <button class="md__again" @click="reset">Shuffle and try again</button></p>
    </div>
    <p class="md__help">{{ helpText }}</p>

    <!-- the pathway: one column, or a loop (two columns joined top and bottom) -->
    <div class="md__board" :class="{ 'is-cycle': cols.length > 1 }">
      <span v-if="cols.length > 1" class="md__turn md__turn--top"><span>{{ loopLabel }}</span></span>
      <div class="md__cols">
        <ol v-for="(col, c) in cols" :key="c" class="md__path" :class="{ 'md__path--up': c === 1 }">
          <li v-for="(n, i) in col" :key="i" :class="'md__li-' + n.type">
            <template v-if="n.type === 'phase'">
              <span class="md__phase" :class="'md__phase--' + n.k">{{ n.text }}</span>
            </template>

            <template v-else-if="n.type === 'mol'">
              <Slot :f="n.f" @pick="pickSlot" />
            </template>

            <template v-else>
              <span class="md__arrow" aria-hidden="true"></span>
              <span class="md__info">
                <span v-if="n.e" class="md__row"><em>{{ enzymeLabel }}</em><Slot :f="n.e" :atp="highlightEnzymes && n.atp" @pick="pickSlot" /></span>
                <span v-if="n.p" class="md__row"><em>process</em><Slot :f="n.p" @pick="pickSlot" /></span>
                <span v-if="n.n" class="md__row"><em>gives</em><Slot :f="n.n" @pick="pickSlot" /></span>
              </span>
            </template>
          </li>
        </ol>
      </div>
      <span v-if="cols.length > 1" class="md__turn md__turn--bottom"></span>
      <p v-if="cols.length > 1" class="md__loopnote">↺ {{ loopLabel }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, h } from 'vue'

// Label-the-pathway: a chain of molecules and arrows; some labels are blanks
// (written with a leading "?"). Tap a keyword, then tap the blank it belongs in.
const props = defineProps({
  // [{ m: 'Glucose' } | { e: 'enzyme', p: 'process', n: '+2 ATP' } | { phase: 'text' }]
  chain: { type: Array, required: true },
  title: { type: String, default: 'Mix and match' },
  subtitle: { type: String, default: 'Tap a keyword, then tap the blank it belongs in.' },
  // for a cycle: put { turn: true } in the chain where the loop turns the corner
  loopLabel: { type: String, default: 'back to the start: the cycle repeats' },
  // highlight enzymes of ATP steps (off when enzymes are only extra info)
  highlightEnzymes: { type: Boolean, default: true },
  enzymeLabel: { type: String, default: 'enzyme' }
})

let uid = 0
const blanks = []
function field(raw, kind) {
  if (!raw) return null
  const blank = raw.startsWith('?')
  const f = { text: blank ? raw.slice(1) : raw, blank, kind, id: uid++, filled: ref(false), bad: ref(false) }
  if (blank) blanks.push(f)
  return f
}
let phaseK = 0
const parts = props.chain.map((c) => {
  if (c.turn) return { type: 'turn' }
  if (c.phase) return { type: 'phase', text: c.phase, k: ++phaseK }
  if (c.m) return { type: 'mol', f: field(c.m, 'mol') }
  const n = c.n ? field(c.n, 'num') : null
  return { type: 'step', e: field(c.e, 'enz'), p: field(c.p, 'proc'), n, atp: !!(c.n && /ATP/.test(c.n)) }
})

const turnAt = parts.findIndex((p) => p.type === 'turn')
const cols = turnAt < 0 ? [parts] : [parts.slice(0, turnAt), parts.slice(turnAt + 1)]

const picked = ref(null)
const pickedSlot = ref(null)
const mistakes = ref(0)
const order = ref([])
const filledCount = computed(() => blanks.filter((b) => b.filled.value).length)
const bank = computed(() => order.value.map((id) => blanks.find((b) => b.id === id)).filter((b) => !b.filled.value).map((b) => ({ id: b.id, text: b.text, kind: b.kind })))
const helpText = computed(() => picked.value !== null ? 'Now tap the blank where it belongs.' : pickedSlot.value !== null ? 'Now tap the keyword that fits this blank.' : 'Tap a keyword, then tap the blank it belongs in (or the other way round).')

function shuffle() {
  const ids = blanks.map((b) => b.id)
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
  }
  order.value = ids
}
onMounted(shuffle)

function tryMatch(wordId, slot) {
  const word = blanks.find((b) => b.id === wordId)
  picked.value = null
  pickedSlot.value = null
  // the same keyword can fit any blank with the same text
  if (word.text === slot.text) {
    if (word !== slot) {
      // swap so the chip that disappears is the one for this slot
      const a = order.value.indexOf(word.id), b = order.value.indexOf(slot.id)
      const o = [...order.value]; o[a] = slot.id; o[b] = word.id; order.value = o
    }
    slot.filled.value = true
  } else {
    mistakes.value++
    slot.bad.value = true
    setTimeout(() => (slot.bad.value = false), 700)
  }
}
function pickWord(id) {
  if (pickedSlot.value !== null) return tryMatch(id, blanks.find((b) => b.id === pickedSlot.value))
  picked.value = picked.value === id ? null : id
}
function pickSlot(f) {
  if (!f.blank || f.filled.value) return
  if (picked.value !== null) return tryMatch(picked.value, f)
  pickedSlot.value = pickedSlot.value === f.id ? null : f.id
}
function reset() {
  blanks.forEach((b) => (b.filled.value = false))
  mistakes.value = 0
  picked.value = null
  pickedSlot.value = null
  shuffle()
}

// One label: plain text, or a blank that can be tapped.
const Slot = (p, { emit }) => {
  const f = p.f
  if (!f.blank || f.filled.value) {
    return h('span', { class: ['md__lab', 'md__lab--' + f.kind, { 'is-atp': p.atp, 'is-new': f.blank }] }, f.text)
  }
  return h('button', {
    class: ['md__blank', 'md__blank--' + f.kind, { 'is-bad': f.bad.value, 'is-picked': pickedSlot.value === f.id }],
    'aria-label': 'Blank ' + f.kind,
    onClick: () => emit('pick', f)
  }, '?')
}
Slot.props = ['f', 'atp']
Slot.emits = ['pick']
</script>

<style scoped>
.md { margin: 24px 0; border: var(--line); border-radius: 10px; background: var(--box); }
.md__head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-start; gap: 6px 16px; padding: 12px 16px; border-bottom: var(--line); background: color-mix(in srgb, var(--c, #a96a12) 10%, var(--box)); border-radius: 8px 8px 0 0; }
.vp-doc .md__title, .md__title { margin: 0; font-family: var(--font-hand); font-size: 1.25rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.vp-doc .md__sub, .md__sub { margin: 0; font-size: 14px; color: var(--muted); }
.md__score { font-family: var(--font-hand); font-size: 15px; font-weight: 700; }

.md__bank { position: sticky; top: calc(var(--vp-nav-height, 64px) + 8px); z-index: 2; display: flex; flex-wrap: wrap; gap: 6px; padding: 12px 16px; background: var(--box); border-bottom: 2px dashed var(--rule); }
@media (max-width: 959px) { .md__bank { top: calc(var(--vp-nav-height, 64px) + 40px); } }
@media (max-width: 640px) { .md__bank { max-height: 34vh; overflow-y: auto; } }
.md__chip { padding: 3px 11px; font-family: var(--font-hand); font-size: 15px; font-weight: 700; color: #1d2b44; border: 2px solid var(--ink); border-radius: 999px; cursor: pointer; transition: transform 0.15s ease; }
.md__chip--mol { background: #fff6cf; }
.md__chip--enz { background: #cfe5f7; font-style: italic; }
.md__chip--proc { background: #e3d9f3; }
.md__chip--num { background: #bfe3c9; }
.md__chip.is-picked { transform: translateY(-2px); box-shadow: 0 0 0 3px var(--c, var(--vp-c-brand-1)); }
.vp-doc .md__done, .md__done { margin: 0; font-family: var(--font-hand); font-size: 1.1rem; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.md__again { margin-left: 8px; padding: 2px 12px; font-size: 14px; border: 2px solid var(--ink); border-radius: 999px; background: var(--box); color: var(--ink); cursor: pointer; }
.vp-doc .md__help, .md__help { margin: 8px 16px 0; font-size: 13.5px; color: var(--muted); }

.vp-doc .md__path, .md__path { list-style: none; margin: 0; padding: 10px 16px 18px; }

/* cycle: stacked on narrow screens, a loop when there is room */
.md__board { container-type: inline-size; position: relative; }
.md__turn { display: none; }
.vp-doc .md__loopnote, .md__loopnote { margin: -8px 16px 16px; font-family: var(--font-hand); font-size: 15px; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
.md__board.is-cycle .md__path:first-child { padding-bottom: 0; }
@container (min-width: 600px) {
  .is-cycle .md__cols { display: grid; grid-template-columns: 1fr 1fr; column-gap: 24px; padding: 58px 16px 30px; }
  .vp-doc .is-cycle .md__path, .is-cycle .md__path { padding: 0; }
  .is-cycle .md__path--up { display: flex; flex-direction: column-reverse; justify-content: flex-start; }
  .is-cycle .md__path--up .md__arrow { transform: rotate(180deg); }
  .is-cycle .md__loopnote { display: none; }
  /* the two bends of the loop: line centres sit on the arrow shafts (13.5px into each column) */
  .is-cycle .md__turn { display: block; position: absolute; left: 28px; right: calc(50% - 27px); height: 22px; border: 3px solid var(--ink); }
  .is-cycle .md__turn--top { top: 27px; border-bottom: none; border-radius: 10px 10px 0 0; }
  .is-cycle .md__turn--bottom { bottom: 8px; border-top: none; border-radius: 0 0 10px 10px; }
  .is-cycle .md__turn--top::after { content: ''; position: absolute; left: -9px; bottom: -10px; border: 7.5px solid transparent; border-top: 9px solid var(--ink); border-bottom: none; }
  .is-cycle .md__turn--bottom::after { content: ''; position: absolute; right: -9px; top: -10px; border: 7.5px solid transparent; border-bottom: 9px solid var(--ink); border-top: none; }
  .is-cycle .md__turn--top span { position: absolute; left: 50%; transform: translateX(-50%); top: -26px; white-space: nowrap; font-family: var(--font-hand); font-size: 14px; font-weight: 700; color: var(--c, var(--vp-c-brand-1)); }
}
.vp-doc .md__path li, .md__path li { margin: 0; padding: 0; }
.md__li-mol { display: flex; }
.md__li-step { display: flex; align-items: stretch; gap: 12px; min-height: 64px; }
.md__arrow { position: relative; flex: 0 0 26px; }
.md__arrow::before { content: ''; position: absolute; left: 12px; top: 2px; bottom: 8px; border-left: 3px solid var(--ink); }
.md__arrow::after { content: ''; position: absolute; left: 6px; bottom: 2px; border: 7.5px solid transparent; border-top: 9px solid var(--ink); border-bottom: none; }
.md__info { display: flex; flex-direction: column; justify-content: center; gap: 3px; padding: 6px 0; }
.md__row { display: flex; align-items: center; gap: 8px; font-size: 14.5px; }
.md__row em { flex: 0 0 60px; font-style: normal; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--muted); }
.md__phase { display: inline-block; margin: 12px 0 8px; padding: 3px 12px; font-family: var(--font-hand); font-size: 15px; font-weight: 700; border: 2px solid var(--ink); border-radius: 6px; color: #1d2b44; }
.md__phase--1 { background: #f6c1c1; }
.md__phase--2 { background: #bfe3c9; }

.md__lab--mol { display: inline-block; padding: 6px 14px; font-family: var(--font-hand); font-size: 16px; font-weight: 700; border: 2px solid var(--ink); border-radius: 8px; background: #fff6cf; color: #1d2b44; }
.md__lab--enz { font-style: italic; }
.md__lab--enz.is-atp { font-weight: 700; padding: 0 3px; background: linear-gradient(transparent 22%, var(--hl) 22%, var(--hl) 92%, transparent 92%); }
.md__lab--num { font-family: var(--font-hand); font-weight: 700; padding: 0 8px; border: 1.5px solid var(--ink); border-radius: 999px; background: #bfe3c9; color: #1d2b44; }
.md__lab.is-new { animation: md-in 0.35s ease both; }
.md__blank { min-width: 120px; padding: 3px 12px; font-family: var(--font-hand); font-size: 15px; font-weight: 700; color: var(--muted); background: var(--box); border: 2px dashed var(--ink); border-radius: 8px; cursor: pointer; text-align: center; }
.md__blank--mol { min-width: 170px; padding: 6px 14px; }
.md__blank--num { min-width: 80px; border-radius: 999px; }
.md__blank.is-picked { border-style: solid; box-shadow: 0 0 0 3px var(--c, var(--vp-c-brand-1)); color: var(--ink); }
.md__blank.is-bad { border-color: #dc2626; color: #dc2626; animation: md-shake 0.35s ease; }
@keyframes md-in { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: none; } }
@keyframes md-shake { 0%, 100% { transform: none; } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
@media (prefers-reduced-motion: reduce) { .md__lab.is-new, .md__blank.is-bad { animation: none; } .md__chip { transition: none; } }
</style>
