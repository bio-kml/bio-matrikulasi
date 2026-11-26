---
description: "Run the Krebs cycle yourself, then count: how many turns, NADH, FADH₂, ATP and CO₂ for one pyruvate, one glucose, or more?"
icon: refresh-cw
color: purple
title: Discover the Krebs Cycle
outline: [2, 2]
---

# Discover the Krebs Cycle

<Badge type="purple" text="Activity" /> <Badge type="gray" text="Chapter 5: Cellular Respiration" /> <Badge type="gray" text="about 20 minutes" />

An acetyl CoA has just arrived in the **matrix** from pyruvate oxidation. Your job: take its two carbons through the cycle, collect every NADH, FADH₂, ATP and CO₂ it gives, and end up with **oxaloacetate** again. Then the hard part: **counting** for a whole glucose.

<Topic color="purple">

## Before you start

<Checklist title="By the end you should be able to">

- Name the 8 intermediates of the Krebs cycle and their number of carbons.
- Say which steps make NADH, FADH₂, ATP and CO₂.
- Work out the products for **one turn**, **one pyruvate** and **one glucose**, and work backwards from a number of products.

</Checklist>

<PriorKnowledge :items="[
  { term: 'Where acetyl CoA comes from', note: 'Pyruvate oxidation: <b>1 pyruvate → 1 acetyl CoA + 1 CO₂ + 1 NADH</b>. One glucose gives 2 pyruvate.' },
  { term: 'Oxidative decarboxylation', note: 'The molecule is <b>oxidised</b> (NAD⁺ → NADH + H⁺) and <b>loses CO₂</b> in the same step.' },
  { term: 'FAD', note: 'A second hydrogen carrier: FAD is <b>reduced to FADH₂</b>.' }
]" />

::: tip How to read the bench
Green circles are **carbons**. A **CoA** tag means coenzyme A is attached. Count the carbons before and after each step: if one goes missing, it left as **CO₂**.
:::

## Part 1: Run one turn

Choose an action card for each step. A wrong choice is crossed out and you get a clue; after two wrong tries the right card is marked with a dashed outline. Watch the ledger at the top fill up.

<KrebsLab />

## Part 2: Mix and match

Fill in the cycle from memory. The enzymes are shown as extra information only; you do not need to memorise them. Keywords are colour-coded: <Badge type="yellow" text="intermediate" /> <Badge type="purple" text="process" /> <Badge type="green" text="product" />

<MatchDiagram
  title="Label the Krebs cycle"
  subtitle="Tap a keyword, then tap the blank it belongs in. Follow the arrows round the loop."
  :highlight-enzymes="false"
  enzyme-label="enzyme (extra)"
  loop-label="back to oxaloacetate: ready for the next acetyl CoA"
  :chain="[
    { m: 'Acetyl CoA (2C) + Oxaloacetate (4C)' },
    { e: 'citrate synthase', p: 'Acetyl group joins oxaloacetate', n: 'CoA released' },
    { m: '?Citrate (6C)' },
    { e: 'aconitase', p: '?Isomerization' },
    { m: '?Isocitrate (6C)' },
    { e: 'isocitrate dehydrogenase', p: 'Oxidative decarboxylation', n: '?NADH + CO₂' },
    { m: '?α-Ketoglutarate (5C)' },
    { e: 'α-ketoglutarate dehydrogenase', p: '?Oxidative decarboxylation', n: 'NADH + CO₂' },
    { turn: true },
    { m: '?Succinyl CoA (4C)' },
    { e: 'succinyl CoA synthetase', p: 'Substrate-level phosphorylation', n: '?1 ATP (via GTP)' },
    { m: '?Succinate (4C)' },
    { e: 'succinate dehydrogenase', p: '?Oxidation by FAD', n: '?FADH₂' },
    { m: '?Fumarate (4C)' },
    { e: 'fumarase', p: '?Hydration' },
    { m: '?Malate (4C)' },
    { e: 'malate dehydrogenase', p: '?Oxidation by NAD⁺', n: '?NADH' }
  ]"
/>

## Part 3: Spot the pattern

<Accordion>
<AccordionItem title="1. The carbon count went 6 → 6 → 5 → 4 → 4 → 4 → 4 → 4. Where did the two carbons go?">

They left as **2 CO₂**, one at **step 3** (isocitrate dehydrogenase) and one at **step 4** (α-ketoglutarate dehydrogenase). Both are **oxidative decarboxylations**, so each also makes an NADH.

</AccordionItem>
<AccordionItem title="2. Which steps used NAD⁺, and which used FAD?">

**NAD⁺:** steps **3, 4 and 8**, so 3 NADH + 3H⁺ per turn. **FAD:** only step **6** (succinate dehydrogenase), so 1 FADH₂ per turn.

</AccordionItem>
<AccordionItem title="3. How was ATP made, and how much?">

Only at **step 5**: succinyl CoA synthetase swaps CoA for a phosphate, which goes to GDP (→ GTP) and then ADP. That is **1 ATP per turn** by **substrate-level phosphorylation**.

</AccordionItem>
<AccordionItem title="4. Why is it called a cycle?">

The last product, **oxaloacetate**, is the molecule that accepts the next acetyl CoA. It is **regenerated** every turn, not used up, so the cycle keeps going as long as acetyl CoA arrives.

</AccordionItem>
</Accordion>

## Part 4: Count it up (the tricky part)

Type a number and press **Check**. Think in this order: **glucose → pyruvate → acetyl CoA → turns → products**.

::: tip Quick reminder: one turn of the Krebs cycle
**1 acetyl CoA** → **3 NADH**, **1 FADH₂**, **1 ATP**, **2 CO₂**. One glucose → 2 pyruvate → 2 acetyl CoA → **2 turns**.
:::

<NumberChallenge
  tag="Warm-up"
  question="How many turns of the Krebs cycle does <b>one pyruvate</b> give?"
  :answer="1"
  unit="turn(s)"
  hint="One pyruvate becomes how many acetyl CoA? Each acetyl CoA is one turn."
  working="1 pyruvate → 1 acetyl CoA → <b>1 turn</b>."
/>

<NumberChallenge
  tag="Warm-up"
  question="How many turns does <b>one glucose</b> give?"
  :answer="2"
  unit="turns"
  hint="Glycolysis splits one glucose into how many pyruvate?"
  working="1 glucose → 2 pyruvate → 2 acetyl CoA → <b>2 turns</b>."
/>

<NumberChallenge
  question="How many CO₂ does the <b>Krebs cycle</b> release from one glucose?"
  :answer="4"
  unit="CO₂"
  hint="2 CO₂ per turn. How many turns per glucose?"
  working="2 CO₂ per turn × 2 turns = <b>4 CO₂</b>."
/>

<NumberChallenge
  question="Now include pyruvate oxidation. How many CO₂ are released altogether from one glucose (pyruvate oxidation + Krebs cycle)?"
  :answer="6"
  unit="CO₂"
  hint="Pyruvate oxidation also releases CO₂: 1 for every pyruvate."
  working="Pyruvate oxidation 2 × 1 = 2 CO₂; Krebs cycle 2 × 2 = 4 CO₂; total <b>6 CO₂</b>, one for each carbon of glucose (6C)."
/>

<NumberChallenge
  question="How many NADH are made from one glucose in <b>all</b> the stages (glycolysis + pyruvate oxidation + Krebs cycle)?"
  :answer="10"
  unit="NADH"
  hint="Glycolysis gives 2, pyruvate oxidation gives 1 per pyruvate, the Krebs cycle 3 per turn."
  working="Glycolysis 2 + pyruvate oxidation 2 + Krebs cycle 6 = <b>10 NADH + 10H⁺</b>."
/>

<NumberChallenge
  tag="Work backwards"
  question="A cell made <b>12 NADH</b> from the Krebs cycle only. How many turns was that, and so how many <b>glucose</b> molecules?  (Type the number of glucose.)"
  :answer="2"
  unit="glucose"
  hint="Each turn gives 3 NADH. Then remember each glucose gives 2 turns."
  working="12 ÷ 3 = 4 turns; 4 turns ÷ 2 turns per glucose = <b>2 glucose</b>."
/>

<NumberChallenge
  tag="Work backwards"
  question="The Krebs cycle released <b>8 CO₂</b>. How many acetyl CoA entered the cycle?"
  :answer="4"
  unit="acetyl CoA"
  hint="Each acetyl CoA (one turn) releases 2 CO₂."
  working="8 ÷ 2 = <b>4 acetyl CoA</b> (4 turns, from 4 pyruvate, from 2 glucose)."
/>

<NumberChallenge
  tag="Work backwards"
  question="How many glucose molecules are needed for the Krebs cycle to make <b>6 FADH₂</b>?"
  :answer="3"
  unit="glucose"
  hint="1 FADH₂ per turn, 2 turns per glucose."
  working="6 FADH₂ = 6 turns; 6 ÷ 2 = <b>3 glucose</b>."
/>

<NumberChallenge
  tag="Mix it up"
  question="Starting from <b>3 pyruvate</b>, how many NADH come from pyruvate oxidation and the Krebs cycle together?"
  :answer="12"
  unit="NADH"
  hint="Per pyruvate: 1 NADH from pyruvate oxidation + 3 from one turn."
  working="Per pyruvate: 1 + 3 = 4 NADH; 3 pyruvate × 4 = <b>12 NADH</b>."
/>

<NumberChallenge
  tag="Mix it up"
  question="Using 1 NADH → 3 ATP and 1 FADH₂ → 2 ATP, how many ATP does the ETC make from the Krebs cycle products of <b>one glucose</b>?"
  :answer="22"
  unit="ATP"
  hint="Per glucose the Krebs cycle gives 6 NADH and 2 FADH₂."
  working="6 NADH × 3 = 18; 2 FADH₂ × 2 = 4; 18 + 4 = <b>22 ATP</b>. Add the 2 ATP made directly in the cycle and the Krebs cycle accounts for 24 of the 38."
/>

<NumberChallenge
  tag="Trick question"
  question="How many molecules of oxaloacetate are <b>used up</b> by the Krebs cycle for one glucose?"
  :answer="0"
  unit="molecules"
  hint="Look at what the last step makes."
  working="<b>None.</b> Oxaloacetate joins acetyl CoA at step 1 but is <b>regenerated</b> at step 8, so it is reused every turn."
/>

## Part 5: Think harder

<Quiz question="A student says: one glucose = one turn of the Krebs cycle, so 3 NADH per glucose. What is wrong?" :options="['Nothing, that is correct', 'One glucose gives 2 acetyl CoA, so 2 turns and 6 NADH', 'One glucose gives 6 turns, one per carbon', 'The Krebs cycle makes FADH₂, not NADH']" :answer="1" explain="1 glucose → 2 pyruvate → 2 acetyl CoA → 2 turns: 6 NADH + 6H⁺ from the cycle." />

<Quiz question="Which two intermediates have 6 carbons?" :options="['Oxaloacetate and malate', 'Citrate and isocitrate', 'α-Ketoglutarate and succinyl CoA', 'Succinate and fumarate']" :answer="1" explain="Citrate (6C) is formed in step 1 and rearranged into isocitrate (6C) in step 2. The first CO₂ is lost in step 3." />

<Quiz question="Which step makes NADH but does NOT release CO₂?" :options="['Isocitrate → α-ketoglutarate', 'α-Ketoglutarate → succinyl CoA', 'Malate → oxaloacetate', 'Succinate → fumarate']" :answer="2" explain="Malate dehydrogenase oxidises malate to oxaloacetate (4C → 4C) with NAD⁺. Steps 3 and 4 are oxidative decarboxylations and release CO₂; step 6 uses FAD." />

<Quiz question="Per glucose, how many ATP does the Krebs cycle make directly, by substrate-level phosphorylation?" :options="['1', '2', '4', '38']" :answer="1" explain="1 ATP per turn (step 5) × 2 turns = 2 ATP. Most of the energy leaves as NADH and FADH₂ instead." />

## Part 6: Can you remember the order?

<OrderChallenge
  title="The 8 intermediates"
  subtitle="Start with citrate. Tap each molecule in the order it is made."
  :items="['Citrate', 'Isocitrate', 'α-Ketoglutarate', 'Succinyl CoA', 'Succinate', 'Fumarate', 'Malate', 'Oxaloacetate']"
/>


<StickyNote title="Stuck? Use the acronym">

**C**itrate **I**s **K**rebs **S**tarting **S**ubstrate **F**or **M**aking **O**xaloacetate

Carbons: **6 → 6 → 5 → 4 → 4 → 4 → 4 → 4**

</StickyNote>

</Topic>

<CardGrid>
  <LinkCard tag="Revision notes" title="Chapter 5: the Krebs cycle" details="The full table of steps, enzymes and yields." link="/revision/chapter-05#_5-1-3-krebs-cycle" />
  <LinkCard tag="Activity" title="Discover Glycolysis" details="Where the pyruvate came from in the first place." link="/activities/glycolysis" />
</CardGrid>
