<template>
  <DiscoveryLab
    ref="lab"
    :actions="actions"
    :benches="benches"
    :steps="steps"
    :counters="counters"
    :dividers="{ 7: '↺ back to oxaloacetate' }"
    finished-label="One turn complete"
    :highlight-enzymes="false"
    enzyme-label="enzyme (extra)"
  >
    <template #end>
      <template v-if="!turns2">
        <p class="gl__end-title">One turn done. But wait…</p>
        <p>That turn used <b>one acetyl CoA</b>, which came from <b>one pyruvate</b>. One glucose gives <b>two</b> pyruvate. How many turns of the cycle does <b>one glucose</b> need?</p>
        <div class="kl__pick">
          <button v-for="n in [1, 2, 3, 6]" :key="n" class="kl__btn" :class="{ 'is-wrong': wrong.includes(n) }" :disabled="wrong.includes(n)" @click="pick(n)">{{ n }}</button>
        </div>
        <p v-if="wrong.length" class="kl__nope">Not quite: count the pyruvate, then the acetyl CoA.</p>
      </template>
      <template v-else>
        <p class="gl__end-title">Per glucose: 2 turns</p>
        <p>Your ledger has been doubled for the second acetyl CoA: <b>6 NADH + 6H⁺</b>, <b>2 FADH₂</b>, <b>2 ATP</b> and <b>4 CO₂</b> from the Krebs cycle for one glucose.</p>
        <p>Carbon check: 2 acetyl CoA bring in <b>4 C</b>; 4 CO₂ take out <b>4 C</b>. Oxaloacetate is <b>regenerated</b>, not used up.</p>
      </template>
    </template>
  </DiscoveryLab>
</template>

<script setup>
import { ref } from 'vue'
import DiscoveryLab from './DiscoveryLab.vue'

const lab = ref(null)
const turns2 = ref(false)
const wrong = ref([])
function pick(n) {
  if (n !== 2) { wrong.value = [...wrong.value, n]; return }
  turns2.value = true
  lab.value.scale(2)
}

const counters = [
  { key: 'nadh', label: 'NADH made', tok: 'NADH', cls: 'nadh' },
  { key: 'fad', label: 'FADH₂ made', tok: 'FADH₂', cls: 'fad' },
  { key: 'atp', label: 'ATP made', tok: 'ATP', cls: 'atp' },
  { key: 'co2', label: 'CO₂ released', tok: 'CO₂', cls: 'co2' }
]

const actions = {
  join: { ico: '+2C', text: '<b>Join</b> the acetyl group (2C) onto it' },
  rearrange: { ico: '⟲', text: '<b>Rearrange</b> into an isomer (one H₂O out, one in)' },
  oxdecarb: { ico: 'CO₂', text: '<b>Oxidative decarboxylation</b>: NAD⁺ takes H, CO₂ leaves' },
  swap: { ico: 'P→', text: 'Swap CoA for a phosphate, pass it on: <b>GTP → ATP</b>' },
  fad: { ico: 'FAD', text: '<b>Oxidise</b> it with <b>FAD</b>' },
  water: { ico: 'H₂O', text: '<b>Add</b> a water molecule' },
  nad: { ico: 'NAD', text: '<b>Oxidise</b> it with <b>NAD⁺</b> (no CO₂ lost)' }
}

const benches = [
  { mols: [{ c: 4, name: 'Oxaloacetate' }, { c: 2, coa: true, name: 'Acetyl CoA', plus: true }] },
  { mols: [{ c: 6, name: 'Citrate' }] },
  { mols: [{ c: 6, name: 'Isocitrate' }] },
  { mols: [{ c: 5, name: 'α-Ketoglutarate' }] },
  { mols: [{ c: 4, coa: true, name: 'Succinyl CoA' }] },
  { mols: [{ c: 4, name: 'Succinate' }] },
  { mols: [{ c: 4, name: 'Fumarate' }] },
  { mols: [{ c: 4, name: 'Malate' }] },
  { mols: [{ c: 4, name: 'Oxaloacetate' }] }
]

const steps = [
  { phase: 'Turn 1: carbon in', answer: 'join', options: ['oxdecarb', 'join', 'rearrange'], type: 'Citrate formed', enzyme: 'citrate synthase',
    q: 'Acetyl CoA (2C) has arrived with oxaloacetate (4C). What happens first?',
    why: 'The <b>acetyl group (2C)</b> joins oxaloacetate (4C) to make <b>citrate (6C)</b>; CoA is released to be reused.',
    hint: 'Nothing can be oxidised yet: first the two carbons from acetyl CoA have to get into the cycle.' },
  { phase: 'Turn 1: carbon in', answer: 'rearrange', options: ['rearrange', 'oxdecarb', 'water'], type: 'Isomerization', enzyme: 'aconitase',
    q: 'Citrate needs to change shape before it can be oxidised. How?',
    why: 'Citrate becomes its <b>isomer, isocitrate</b>, by removal of one water molecule and addition of another. Still 6C.',
    hint: 'The carbon count stays at 6 and nothing is gained overall: one water leaves, one water comes back.' },
  { phase: 'Turn 1: carbon out', answer: 'oxdecarb', options: ['fad', 'swap', 'oxdecarb'], type: 'Oxidative decarboxylation', enzyme: 'isocitrate dehydrogenase',
    q: 'Isocitrate has 6 carbons; the next molecule has 5. What happened?',
    why: 'Isocitrate is <b>oxidised by NAD⁺</b> (→ NADH + H⁺) and <b>loses CO₂</b>, forming <b>α-ketoglutarate (5C)</b>.',
    hint: 'A carbon is lost, so CO₂ must leave. Which card also releases CO₂?', ledger: { nadh: 1, co2: 1 } },
  { phase: 'Turn 1: carbon out', answer: 'oxdecarb', options: ['oxdecarb', 'nad', 'water'], type: 'Oxidative decarboxylation (CoA added)', enzyme: 'α-ketoglutarate dehydrogenase',
    q: '5 carbons now. The next molecule has 4 carbons and carries CoA. What happened?',
    why: 'Same trick again: α-ketoglutarate <b>loses CO₂</b>, is <b>oxidised by NAD⁺</b>, and CoA is attached: <b>succinyl CoA (4C)</b>. Two CO₂ have now left, as many carbons as acetyl CoA brought in.',
    hint: 'Another carbon disappears, so CO₂ leaves again.', ledger: { nadh: 1, co2: 1 } },
  { phase: 'Turn 1: energy out', answer: 'swap', options: ['fad', 'swap', 'join'], type: 'Substrate-level phosphorylation', enzyme: 'succinyl CoA synthetase',
    q: 'Succinyl CoA holds energy in its CoA bond. How does the cell cash it in?',
    why: 'CoA is swapped for a phosphate, which goes to GDP (→ GTP) and then to ADP: <b>1 ATP by substrate-level phosphorylation</b>. Succinyl CoA → <b>succinate</b>.',
    hint: 'This is the only step in the cycle that makes ATP directly.', ledger: { atp: 1 } },
  { phase: 'Turn 1: regenerate oxaloacetate', answer: 'fad', options: ['nad', 'fad', 'oxdecarb'], type: 'Oxidation by FAD', enzyme: 'succinate dehydrogenase',
    q: 'Succinate must be oxidised, but NAD⁺ is not the acceptor this time. Which carrier is?',
    why: 'Succinate is <b>oxidised by FAD</b> (→ FADH₂) to <b>fumarate</b>.',
    hint: 'Only one step of the cycle makes FADH₂ instead of NADH.', ledger: { fad: 1 } },
  { phase: 'Turn 1: regenerate oxaloacetate', answer: 'water', options: ['water', 'rearrange', 'nad'], type: 'Hydration', enzyme: 'fumarase',
    q: 'Fumarate to malate: no oxidation, no carbon lost. What is added?',
    why: '<b>A water molecule is added</b>, turning fumarate into <b>malate</b>.',
    hint: 'Something small is added, not removed and not swapped.' },
  { phase: 'Turn 1: regenerate oxaloacetate', answer: 'nad', options: ['oxdecarb', 'nad', 'fad'], type: 'Oxidation by NAD⁺', enzyme: 'malate dehydrogenase',
    q: 'Last step: malate becomes oxaloacetate, still 4C. How?',
    why: 'Malate is <b>oxidised by NAD⁺</b> (→ NADH + H⁺), <b>regenerating oxaloacetate</b>, ready for the next acetyl CoA.',
    hint: 'No carbon is lost here, so it cannot be a decarboxylation.', ledger: { nadh: 1 } }
]
</script>

<style scoped>
.kl__pick { display: flex; gap: 8px; margin: 8px 0 4px; }
.kl__btn {
  width: 44px;
  height: 40px;
  font-family: var(--font-hand);
  font-size: 20px;
  font-weight: 700;
  color: #1d2b44;
  background: #fff;
  border: 2px solid #1d2b44;
  border-radius: 8px;
  box-shadow: 2px 2px 0 #c9d6e6;
  cursor: pointer;
}
.kl__btn.is-wrong { opacity: 0.35; text-decoration: line-through; box-shadow: none; cursor: default; }
.kl__nope { font-size: 15px; color: #c2410c !important; }
</style>
