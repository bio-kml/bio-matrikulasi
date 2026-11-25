<template>
  <DiscoveryLab
    :actions="actions"
    :benches="benches"
    :steps="steps"
    :counters="counters"
    :phases="phases"
    finished-label="Glycolysis complete"
  >
    <template #end>
      <p class="gl__end-title">Your glycolysis balance sheet</p>
      <p>ATP made <b>4</b> − ATP spent <b>2</b> = <b>net 2 ATP</b>, plus <b>2 NADH + 2H⁺</b> and <b>2 pyruvate</b> (3C) from one glucose (6C).</p>
    </template>
  </DiscoveryLab>
</template>

<script setup>
import DiscoveryLab from './DiscoveryLab.vue'

const counters = [
  { key: 'used', label: 'ATP spent', tok: 'ATP', cls: 'spent' },
  { key: 'made', label: 'ATP made', tok: 'ATP', cls: 'atp' },
  { key: 'nadh', label: 'NADH made', tok: 'NADH', cls: 'nadh' }
]

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

const phases = [
  { name: 'Phase 1: Energy investment', note: 'steps 1 to 5: spends 2 ATP to split glucose into two 3C sugars', from: 0, to: 4 },
  { name: 'Phase 2: Energy pay-off', note: 'steps 6 to 10, each happens twice: makes 4 ATP and 2 NADH + 2H⁺', from: 5, to: 9 }
]

const steps = [
  { phase: 'Phase 1: energy investment', answer: 'addP', options: ['split', 'addP', 'giveP'], type: 'Phosphorylation', enzyme: 'hexokinase', q: 'Glucose is quite stable. What does the cell do first?',
    why: 'ATP is <b>spent</b> as activation energy, making glucose more chemically reactive.', hint: 'Glucose has no phosphate to hand out yet, and it is too stable to split. In the investment phase the cell spends ATP first.', ledger: { used: 1 } },
  { phase: 'Phase 1: energy investment', answer: 'rearrange', options: ['addP', 'split', 'rearrange'], type: 'Isomerization', enzyme: 'phosphoglucose isomerase', q: 'Next, the molecule changes, but nothing is added or taken away. What happens?',
    why: 'Glucose 6-phosphate is rearranged into its <b>isomer</b>, fructose 6-phosphate: same atoms, new arrangement.', hint: 'Nothing is added or removed in this step, and the carbon count stays at 6.' },
  { phase: 'Phase 1: energy investment', answer: 'addP', options: ['addP', 'giveP', 'split'], type: 'Phosphorylation', enzyme: 'phosphofructokinase', q: 'The plan is to cut this sugar into two halves that both carry a phosphate. What is needed first?',
    why: 'A <b>second ATP is spent</b>: now there is a phosphate on <b>both ends</b> (carbons 1 and 6).', hint: 'Each half will need its own phosphate, but there is only one on the molecule. Spend another ATP.', ledger: { used: 1 } },
  { phase: 'Phase 1: energy investment', answer: 'split', options: ['oxidise', 'addP', 'split'], type: 'Splitting of sugar', enzyme: 'aldolase', q: 'Six carbons with a phosphate on each end. What now?',
    why: 'The 6C sugar <b>splits</b> into two 3C sugars: DHAP and glyceraldehyde 3-phosphate.', hint: 'The goal of the investment phase is to turn one 6C sugar into two 3C sugars. The molecule is ready.' },
  { phase: 'Phase 1: energy investment', answer: 'rearrange', options: ['giveP', 'rearrange', 'split'], type: 'Isomerization', enzyme: 'triose phosphate isomerase', sub: 'DHAP', prod: 'Glyceraldehyde 3-phosphate', q: 'Only glyceraldehyde 3-phosphate can carry on. What happens to DHAP?',
    why: 'DHAP is isomerized to glyceraldehyde 3-phosphate. Now there are <b>2 molecules</b>, so from here every step happens <b>twice</b>.', hint: 'DHAP and glyceraldehyde 3-phosphate have the same atoms. Change one into the other; nothing is added or removed.' },
  { phase: 'Phase 2: energy pay-off', answer: 'oxidise', options: ['water', 'giveP', 'oxidise'], type: 'Oxidation and phosphorylation', enzyme: 'glyceraldehyde 3-phosphate dehydrogenase', q: 'The pay-off phase begins. How does the cell start collecting energy?',
    why: 'G3P is <b>oxidised</b>: its electrons go to NAD⁺, which is <b>reduced to NADH + H⁺</b>. Energy from this redox reaction attaches an <b>inorganic phosphate</b>, forming 1,3-bisphosphoglycerate.', hint: 'Look for the step where the 3C sugar loses electrons and picks up a phosphate from the cytosol.', ledger: { nadh: 2 } },
  { phase: 'Phase 2: energy pay-off', answer: 'giveP', options: ['moveP', 'addP', 'giveP'], type: 'Substrate-level phosphorylation', enzyme: 'phosphoglycerate kinase', q: '1,3-bisphosphoglycerate carries a high-energy phosphate. Time to get paid. How?',
    why: 'A phosphate is transferred to ADP, making <b>ATP by substrate-level phosphorylation</b>: 2 ATP for one glucose. The investment is paid back.', hint: 'It is pay-back time: the phosphate goes to ADP.', ledger: { made: 2 } },
  { phase: 'Phase 2: energy pay-off', answer: 'moveP', options: ['water', 'moveP', 'giveP'], type: 'Isomerization', enzyme: 'phosphoglycerate mutase', q: 'The phosphate is on carbon 3. What happens next?',
    why: 'The phosphate is <b>relocated from carbon 3 to carbon 2</b>, forming 2-phosphoglycerate.', hint: 'Nothing is added or removed: the phosphate just moves along the chain.' },
  { phase: 'Phase 2: energy pay-off', answer: 'water', options: ['oxidise', 'giveP', 'water'], type: 'Dehydration', enzyme: 'enolase', q: 'Something small leaves the molecule. What is it?',
    why: 'A <b>water molecule is removed</b>, forming phosphoenolpyruvate (PEP).', hint: 'No phosphate moves and no electrons move in this step. A small molecule, H₂O, is taken out.' },
  { phase: 'Phase 2: energy pay-off', answer: 'giveP', options: ['rearrange', 'giveP', 'addP'], type: 'Substrate-level phosphorylation', enzyme: 'pyruvate kinase', q: 'Last step. What does PEP do with its phosphate?',
    why: 'PEP gives its phosphate to ADP: <b>2 more ATP</b> by substrate-level phosphorylation, leaving <b>2 pyruvate</b>.', hint: 'Last pay-off: the phosphate goes to ADP, leaving pyruvate.', ledger: { made: 2 } }
]

</script>
