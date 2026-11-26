---
description: "Glycolysis, pyruvate oxidation, the Krebs cycle, oxidative phosphorylation and fermentation."
icon: zap
color: purple
title: "Chapter 5: Cellular Respiration and Fermentation"
outline: [2, 3]
highlighter: true
---

# Chapter 5: Cellular Respiration and Fermentation

Revision notes. Tick off each learning outcome once you can answer it without looking.

<Badge type="teal" text="5.1 Aerobic respiration" /> <Badge type="green" text="5.1.1 Glycolysis" /> <Badge type="blue" text="5.1.2 Pyruvate oxidation" /> <Badge type="purple" text="5.1.3 Krebs cycle" /> <Badge type="red" text="5.1.4 Oxidative phosphorylation" /> <Badge type="olive" text="5.2 Fermentation" />

<CardGrid>
  <InfoCard title="Discover Glycolysis" tag="Activity" icon="target" color="yellow" link="/activities/glycolysis">

  Be the cell: work out each of the 10 steps yourself, then come back to these notes.

  </InfoCard>
  <InfoCard title="Discover the Krebs Cycle" tag="Activity" icon="refresh-cw" color="purple" link="/activities/krebs">

  Run one turn, then count products per pyruvate and per glucose with tricky questions.

  </InfoCard>
</CardGrid>

<Topic color="teal">

## 5.1 Aerobic Respiration

<Checklist title="Learning outcomes">

- (a) State the needs for energy and the role of respiration in living organisms. <Badge text="C1" />
- (b) Outline the complete oxidation of glucose which involves glycolysis, Krebs cycle and oxidative phosphorylation. <Badge text="C1" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Redox: OIL RIG', note: '<b>O</b>xidation <b>I</b>s <b>L</b>oss (of electrons, often with hydrogen); <b>R</b>eduction <b>I</b>s <b>G</b>ain. The two always happen together: one molecule is oxidised while another is reduced.' },
  { term: 'Hydrogen carriers NAD⁺ and FAD', note: 'NAD⁺ and FAD pick up hydrogen (electrons) from food molecules: NAD⁺ is <b>reduced</b> to NADH + H⁺, FAD is reduced to FADH₂. They carry the electrons to the electron transport chain.' },
  { term: 'Catabolic vs anabolic', note: '<b>Catabolic</b> pathways break molecules down and release energy (respiration). <b>Anabolic</b> pathways build molecules and use energy.' },
  { term: 'Mitochondrion structure', note: 'Outer membrane, inner membrane folded into <b>cristae</b>, the <b>intermembrane space</b> between them, and the fluid <b>matrix</b> inside.' }
]" />

::: tip Big concept: redox in respiration
Respiration is one long chain of **redox reactions**. Glucose is **oxidised** (loses hydrogen and electrons) to CO₂; oxygen is **reduced** (gains them) to water. NAD⁺ and FAD carry the electrons in between.

$$
\mathrm{\underbrace{C_6H_{12}O_6}_{\text{oxidised} \to\ 6CO_2} + \underbrace{6O_2}_{\text{reduced} \to\ 6H_2O} \longrightarrow 6CO_2 + 6H_2O + energy\ (ATP + heat)}
$$
:::

<Definition term="Cellular respiration">the catabolic pathways of aerobic and anaerobic respiration, which break down organic molecules and use an electron transport chain for the production of ATP.</Definition>

<Definition term="Aerobic respiration">a type of respiration in which the organic compound (e.g. carbohydrate) is completely oxidised into carbon dioxide and water, with the release of energy (ATP), in a process requiring oxygen.</Definition>

### Where it all happens

<Figure src="/images/ch5/cell-mitochondrion.jpg" caption="A cell and its mitochondrion: the cytosol, and the outer membrane, intermembrane space, inner membrane and matrix of the mitochondrion." />

| Stage | Where it happens |
|---|---|
| Glycolysis | **cytosol** |
| Pyruvate oxidation | **matrix** of the mitochondrion (pyruvate enters by active transport) |
| Krebs cycle | **matrix** of the mitochondrion |
| Electron transport chain and chemiosmosis | **inner membrane** (cristae); H⁺ is pumped into the **intermembrane space** |
| Fermentation | **cytosol only** (no mitochondrion needed) |

<StickyNote>

Mitochondria have their **own DNA**, separate from the DNA in the nucleus. You inherit your mitochondria (and their DNA) from your **mother** only.

</StickyNote>


### ATP: what it is

<ATPDiagram />

- ATP (**adenosine triphosphate**) is a universal form of energy: the **common energy currency** of the cell.
- It consists of the sugar **ribose**, the nitrogenous base **adenine** and a chain of **3 phosphate groups**.
- The 3 phosphate groups are negatively charged and joined by **2 high-energy bonds**; these unstable bonds can be broken by **hydrolysis** to drive endergonic reactions.
- Hydrolysis of the end phosphate forms **ADP + Pi** and releases **31 kJ** of energy per mole of ATP.

<StickyNote>

You make and use roughly your **own body weight in ATP every day**, yet your body only holds a small amount at any moment. Each ATP is used and then rebuilt from ADP + Pi over and over again.

</StickyNote>

### Why cells need energy

Cells harvest the chemical energy stored in organic molecules and use it to make ATP, which drives most cellular work:

<CardGrid>
  <InfoCard title="Active transport" icon="zap" color="teal">of ions and molecules across membranes</InfoCard>
  <InfoCard title="Synthesis of macromolecules" icon="layers" color="teal">from their monomers; protein synthesis; urea synthesis</InfoCard>
  <InfoCard title="Transmission of impulses" icon="brain" color="teal">in nerve cells</InfoCard>
  <InfoCard title="Contraction of muscle" icon="heart-pulse" color="teal">movement</InfoCard>
  <InfoCard title="Growth and cell division" icon="sprout" color="teal">making new cells</InfoCard>
  <InfoCard title="Calvin cycle" icon="sun" color="teal">light-independent stage of photosynthesis</InfoCard>
</CardGrid>

### Two ways to make ATP

<Tabs label="Phosphorylation">
<Tab label="Substrate-level phosphorylation">

An **enzyme transfers a phosphate group from a substrate to ADP**, forming ATP.

$$
\mathrm{substrate{-}P + ADP \longrightarrow substrate + ATP}
$$

Happens in **glycolysis** (steps 7 and 10) and the **Krebs cycle** (step 5).

</Tab>
<Tab label="Oxidative phosphorylation">

ATP is formed as a result of the **transfer of electrons from NADH or FADH₂ to O₂** by a series of electron carriers through redox reactions.

- Takes place on the **inner membrane of mitochondria (cristae)**.
- Produces **almost 90%** of the ATP, driven by the proton gradient across the inner membrane.

</Tab>
</Tabs>

::: tip Quick reminder: phosphorylation
**Phosphorylation**: the addition of a phosphate group to an organic molecule.
:::

### The big picture

<Flow :steps="['Glycolysis (cytoplasm): glucose → 2 pyruvate', 'Pyruvate oxidation (matrix): 2 pyruvate → 2 acetyl CoA', 'Krebs cycle (matrix): 2 acetyl CoA → 4 CO₂', 'Oxidative phosphorylation (inner membrane): NADH and FADH₂ → most of the ATP']" />

### Quick check

<Quiz question="Which carrier is reduced when it picks up hydrogen in respiration?" :options="['ATP', 'NAD⁺', 'CO₂', 'Glucose']" :answer="1" explain="NAD⁺ gains hydrogen (electrons) and is reduced to NADH + H⁺: Reduction Is Gain." />

<Quiz question="In substrate-level phosphorylation, ATP is made by" :options="['the flow of H⁺ through ATP synthase', 'an enzyme transferring a phosphate group from a substrate to ADP', 'oxygen accepting electrons', 'hydrolysis of ATP']" :answer="1" explain="An enzyme transfers a phosphate group from a substrate to ADP, forming ATP." />

<Quiz question="Hydrolysis of ATP gives" :options="['AMP + glucose', 'ADP + Pi + energy', 'NADH + H⁺', 'ATP + water']" :answer="1" explain="Hydrolysis of the end phosphate forms ADP and Pi and releases about 31 kJ per mole." />

</Topic>

<Topic color="green">

## 5.1.1 Glycolysis

<Checklist title="Learning outcomes">

- Illustrate to explain glycolysis pathway: from glucose to pyruvate. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Isomers', note: 'Molecules with the <b>same atoms</b> (same formula) but a <b>different arrangement</b>, e.g. glucose and fructose.' },
  { term: 'Activation energy', note: 'The energy needed to start a reaction (Chapter 4). Glycolysis spends ATP first to make glucose reactive enough.' },
  { term: 'Kinase, isomerase, dehydrogenase, mutase', note: 'Enzyme names tell you the job: a <b>kinase</b> moves a phosphate to or from ATP; an <b>isomerase</b> makes an isomer; a <b>dehydrogenase</b> removes hydrogen (oxidises); a <b>mutase</b> moves a group within a molecule.' }
]" />

<Definition term="Glycolysis">a series of reactions that splits a glucose molecule (6C) into 2 molecules of pyruvate (3C).</Definition>

- Occurs in the **cytosol / cytoplasm**.
- Can occur **with or without O₂**.
- **10 steps**, each needing a specific enzyme, in **2 phases**: the **energy investment phase** (steps 1–5) and the **energy payoff phase** (steps 6–10).
- ATP is made by **substrate-level phosphorylation**.

::: tip How to read the drawings
Each green circle is a **carbon**; each orange tag is a **phosphate (P)** on that carbon. Watch the carbons go from 6 to 3, and watch the phosphates go on and come off.
:::

<StickyNote>

Glycolysis happens in almost **every living organism**, from bacteria to humans, and needs no oxygen. That is why biologists think it evolved very early, before Earth's atmosphere had much oxygen.

</StickyNote>

### The 10 steps, one at a time

<ScrollTimeline>
<ScrollStep date="Step 1 · investment" title="Phosphorylation">

<Reaction enzyme="hexokinase" :ins="['ATP']" :outs="['ADP']">
<template #from><Molecule c="6" name="Glucose" small /></template>
<template #to><Molecule c="6" :p="[6]" name="Glucose 6-phosphate" small /></template>
</Reaction>

Glucose is phosphorylated by ATP. The **ATP is used as activation energy**, making glucose more chemically reactive.

</ScrollStep>
<ScrollStep date="Step 2 · investment" title="Isomerization">

<Reaction enzyme="phosphoglucose isomerase">
<template #from><Molecule c="6" :p="[6]" name="Glucose 6-phosphate" small /></template>
<template #to><Molecule c="6" :p="[6]" name="Fructose 6-phosphate" small /></template>
</Reaction>

Glucose 6-phosphate is **rearranged to its isomer**, fructose 6-phosphate.

</ScrollStep>
<ScrollStep date="Step 3 · investment" title="Phosphorylation">

<Reaction enzyme="phosphofructokinase" :ins="['ATP']" :outs="['ADP']">
<template #from><Molecule c="6" :p="[6]" name="Fructose 6-phosphate" small /></template>
<template #to><Molecule c="6" :p="[1, 6]" name="Fructose 1,6-bisphosphate" small /></template>
</Reaction>

A **second ATP** is spent: now there is a phosphate on both ends.

</ScrollStep>
<ScrollStep date="Step 4 · investment" title="Splitting of sugar">

<Reaction enzyme="aldolase">
<template #from><Molecule c="6" :p="[1, 6]" name="Fructose 1,6-bisphosphate" small /></template>
<template #to><Molecule c="3" :p="[1]" name="DHAP" small /><Molecule c="3" :p="[3]" name="Glyceraldehyde 3-phosphate" small /></template>
</Reaction>

The 6C sugar **splits** into dihydroxyacetone phosphate (DHAP) and glyceraldehyde 3-phosphate (G3P), each 3C.

</ScrollStep>
<ScrollStep date="Step 5 · investment" title="Isomerization">

<Reaction enzyme="triose phosphate isomerase">
<template #from><Molecule c="3" :p="[1]" name="DHAP" small /></template>
<template #to><Molecule c="3" :p="[3]" name="Glyceraldehyde 3-phosphate" small /></template>
</Reaction>

DHAP is isomerized to G3P, so **2 molecules of G3P** are made. From here, **every step happens twice** per glucose.

</ScrollStep>
<ScrollStep date="Step 6 · payoff (×2)" title="Oxidation and phosphorylation">

<Reaction enzyme="glyceraldehyde 3-phosphate dehydrogenase" :ins="['NAD⁺', 'Pi']" :outs="['NADH + H⁺']">
<template #from><Molecule c="3" :p="[3]" name="Glyceraldehyde 3-phosphate" small /></template>
<template #to><Molecule c="3" :p="[1, 3]" name="1,3-Bisphosphoglycerate" small /></template>
</Reaction>

G3P is **oxidised** by transferring its electrons to NAD⁺ (**NAD⁺ is reduced** to NADH + H⁺). Energy from this exergonic redox reaction attaches an **inorganic phosphate** from the cytosol.

</ScrollStep>
<ScrollStep date="Step 7 · payoff (×2)" title="Substrate-level phosphorylation">

<Reaction enzyme="phosphoglycerate kinase" :ins="['ADP']" :outs="['ATP']">
<template #from><Molecule c="3" :p="[1, 3]" name="1,3-Bisphosphoglycerate" small /></template>
<template #to><Molecule c="3" :p="[3]" name="3-Phosphoglycerate" small /></template>
</Reaction>

A phosphate goes from 1,3-bisphosphoglycerate **to ADP**, forming ATP. Per glucose, step 7 makes **2 ATP**.

</ScrollStep>
<ScrollStep date="Step 8 · payoff (×2)" title="Isomerization">

<Reaction enzyme="phosphoglycerate mutase">
<template #from><Molecule c="3" :p="[3]" name="3-Phosphoglycerate" small /></template>
<template #to><Molecule c="3" :p="[2]" name="2-Phosphoglycerate" small /></template>
</Reaction>

The phosphate is **relocated from the 3rd carbon to the 2nd carbon**.

</ScrollStep>
<ScrollStep date="Step 9 · payoff (×2)" title="Dehydration">

<Reaction enzyme="enolase" :outs="['H₂O']">
<template #from><Molecule c="3" :p="[2]" name="2-Phosphoglycerate" small /></template>
<template #to><Molecule c="3" :p="[2]" name="Phosphoenolpyruvate (PEP)" small /></template>
</Reaction>

2-phosphoglycerate is rearranged to phosphoenolpyruvate by **removal of a water molecule**.

</ScrollStep>
<ScrollStep date="Step 10 · payoff (×2)" title="Substrate-level phosphorylation">

<Reaction enzyme="pyruvate kinase" :ins="['ADP']" :outs="['ATP']">
<template #from><Molecule c="3" :p="[2]" name="Phosphoenolpyruvate" small /></template>
<template #to><Molecule c="3" name="Pyruvate" small /></template>
</Reaction>

PEP gives its phosphate **to ADP**, forming ATP and **pyruvate**. Twice per glucose: **2 ATP and 2 pyruvate**.

</ScrollStep>
</ScrollTimeline>

### All 10 steps at a glance

| Step | What happens | Product | Enzyme | Energy |
|---|---|---|---|---|
| 1 | Phosphorylation | glucose 6-phosphate | hexokinase | −1 ATP |
| 2 | Isomerization | fructose 6-phosphate | phosphoglucose isomerase | |
| 3 | Phosphorylation | fructose 1,6-bisphosphate | phosphofructokinase | −1 ATP |
| 4 | Splitting of sugar | DHAP + glyceraldehyde 3-phosphate | aldolase | |
| 5 | Isomerization | 2 × glyceraldehyde 3-phosphate | triose phosphate isomerase | |
| 6 | Oxidation and phosphorylation | 2 × 1,3-bisphosphoglycerate | glyceraldehyde 3-phosphate dehydrogenase | +2 NADH |
| 7 | Substrate-level phosphorylation | 2 × 3-phosphoglycerate | phosphoglycerate kinase | +2 ATP |
| 8 | Isomerization | 2 × 2-phosphoglycerate | phosphoglycerate mutase | |
| 9 | Dehydration | 2 × phosphoenolpyruvate | enolase | (−2 H₂O) |
| 10 | Substrate-level phosphorylation | 2 × pyruvate | pyruvate kinase | +2 ATP |

::: tip Remember the order (acronyms)
**Intermediates**: *"**G**oodness **G**racious, **F**ather **F**ranklin **D**id **G**o **B**y **P**icking **P**umpkins **P**reparing **P**ies"*
Glucose · G6P · F6P · F1,6BP · DHAP · G3P · 1,3-BPG · 3-PG · 2-PG · PEP · Pyruvate

**Enzymes**: *"**H**ungry **P**eter **P**an **A**nd **T**he **G**rowling **P**ink **P**anther **E**at **P**ies"*
Hexokinase · Phosphoglucose isomerase · Phosphofructokinase · Aldolase · Triose phosphate isomerase · G3P dehydrogenase · Phosphoglycerate kinase · Phosphoglycerate mutase · Enolase · Pyruvate kinase
:::

### Yield of glycolysis (from 1 glucose)

<StatGrid>
  <StatCard value="2" label="ATP (net)" icon="zap" color="green" note="4 made − 2 spent" />
  <StatCard value="2" label="NADH" icon="droplets" color="green" note="2 NADH + 2H⁺, from step 6" />
  <StatCard value="2" label="Pyruvate (3C)" icon="atom" color="green" note="from 1 glucose (6C)" />
</StatGrid>

::: tip Glycolysis is "2-2-2"
**2 ATP** (net) · **2 NADH** · **2 pyruvate**. The 4 ATP made in the payoff phase minus the 2 ATP spent in the investment phase gives net 2.
:::

### Quick check

<Quiz question="Which enzyme catalyses step 3, the second phosphorylation in glycolysis?" :options="['Hexokinase', 'Phosphofructokinase', 'Aldolase', 'Pyruvate kinase']" :answer="1" explain="Phosphofructokinase phosphorylates fructose 6-phosphate to fructose 1,6-bisphosphate using ATP." />

<Quiz question="In which step is NAD⁺ reduced to NADH + H⁺?" :options="['Step 1', 'Step 4', 'Step 6', 'Step 9']" :answer="2" explain="Step 6: glyceraldehyde 3-phosphate is oxidised and NAD⁺ is reduced." />

<Quiz question="The net yield of ATP from glycolysis per glucose is" :options="['1', '2', '4', '38']" :answer="1" explain="4 ATP made in the payoff phase − 2 ATP spent in the investment phase = 2 ATP net." />

<Quiz question="Step 9 (2-phosphoglycerate → phosphoenolpyruvate) is a" :options="['phosphorylation', 'dehydration', 'oxidation', 'decarboxylation']" :answer="1" explain="A water molecule is removed: dehydration, catalysed by enolase." />

</Topic>

<Topic color="blue">

## 5.1.2 Pyruvate Oxidation

<Checklist title="Learning outcomes">

- Describe the conversion of pyruvate to acetyl CoA. <Badge text="C2" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Decarboxylation', note: 'Removing a carboxyl group as <b>CO₂</b>. The molecule loses one carbon.' },
  { term: 'Coenzyme A', note: 'A <b>coenzyme</b> (Chapter 4) that carries 2-carbon acetyl groups into the Krebs cycle.' },
  { term: 'Active transport', note: 'Moving substances across a membrane against a concentration gradient, using ATP.' }
]" />

The **link** between glycolysis and the Krebs cycle. On entering the **matrix** of the mitochondrion by **active transport**, pyruvate is converted to **acetyl coenzyme A (acetyl CoA)** by **oxidative decarboxylation**.

<Reaction enzyme="pyruvate dehydrogenase complex" :ins="['NAD⁺', 'CoA']" :outs="['CO₂', 'NADH + H⁺']">
<template #from><Molecule c="3" name="Pyruvate" /></template>
<template #to><Molecule c="2" coa name="Acetyl CoA" /></template>
</Reaction>

<Steps>

1. **Decarboxylation**

   A carboxyl group is removed from pyruvate as **CO₂**, leaving a two-carbon fragment.

2. **Oxidation**

   The two-carbon fragment is **oxidised by NAD⁺** to form an acetyl group; NAD⁺ is reduced to **NADH + H⁺**.

3. **Attachment of coenzyme A**

   **Coenzyme A** is attached to the acetyl group, forming **acetyl CoA**.

</Steps>

::: tip Per glucose
This happens **twice** (2 pyruvate): **2 CO₂**, **2 NADH + 2H⁺**, **2 acetyl CoA**, and **no ATP**.
:::

### Quick check

<Quiz question="Where does pyruvate oxidation take place?" :options="['Cytoplasm', 'Matrix of the mitochondrion', 'Intermembrane space', 'Outer membrane']" :answer="1" explain="Pyruvate enters the matrix by active transport and is converted to acetyl CoA there." />

<Quiz question="Which is NOT a product of converting one pyruvate to acetyl CoA?" :options="['CO₂', 'NADH + H⁺', 'Acetyl CoA', 'ATP']" :answer="3" explain="Pyruvate oxidation gives CO₂, NADH + H⁺ and acetyl CoA, but no ATP." />

</Topic>

<Topic color="purple">

## 5.1.3 Krebs Cycle

<Checklist title="Learning outcomes">

- Illustrate to explain Krebs cycle. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Oxidative decarboxylation', note: 'Two things in one step: the molecule is <b>oxidised</b> (NAD⁺ → NADH) and <b>loses CO₂</b>.' },
  { term: 'FAD', note: 'Another hydrogen carrier. FAD gains two hydrogens and is <b>reduced to FADH₂</b>.' },
  { term: 'A cycle', note: 'The last product, <b>oxaloacetate</b>, is the starting molecule of the next turn, so the cycle keeps going as long as acetyl CoA arrives.' }
]" />

- Also called the **citric acid cycle**; takes place in the **matrix**.
- Makes **1 ATP per turn** by substrate-level phosphorylation.
- Most of the energy goes to **NAD⁺ → NADH** and **FAD → FADH₂**, which carry high-energy electrons to the electron transport chain.
- **8 steps**, each catalysed by a specific enzyme.

::: info Enzymes are extra information
The Krebs cycle enzymes (in the diagram and table below) are given for **extra information only**. You do not need to memorise them.
:::

<KrebsCycleDiagram />

| Step | What happens | Product | Enzyme | Gives |
|---|---|---|---|---|
| 1 | Acetyl CoA (2C) adds its acetyl group to oxaloacetate (4C) | citrate (6C) | citrate synthase | CoA released |
| 2 | Isomer: one H₂O removed, one H₂O added | isocitrate (6C) | aconitase | |
| 3 | Oxidative decarboxylation | α-ketoglutarate (5C) | isocitrate dehydrogenase | NADH, CO₂ |
| 4 | Oxidative decarboxylation; CoA attached | succinyl CoA (4C) | α-ketoglutarate dehydrogenase | NADH, CO₂ |
| 5 | CoA swapped for phosphate → GDP → GTP → ATP | succinate (4C) | succinyl CoA synthetase | ATP |
| 6 | Oxidised by FAD | fumarate (4C) | succinate dehydrogenase | FADH₂ |
| 7 | Water added | malate (4C) | fumarase | |
| 8 | Oxidised by NAD⁺ | oxaloacetate (4C) | malate dehydrogenase | NADH |

::: tip Remember the order (acronym)
*"**C**itrate **I**s **K**rebs **S**tarting **S**ubstrate **F**or **M**aking **O**xaloacetate"*
Citrate · Isocitrate · α-**K**etoglutarate · **S**uccinyl CoA · **S**uccinate · **F**umarate · **M**alate · **O**xaloacetate
Carbons: **6 → 6 → 5 → 4 → 4 → 4 → 4 → 4** (one CO₂ lost at step 3, one at step 4).
:::

<StickyNote>

The cycle is named after **Hans Krebs**, who worked it out in 1937. He won the Nobel Prize for it in 1953.

</StickyNote>

### Yield of the Krebs cycle

<Tabs label="Krebs yield">
<Tab label="Per acetyl CoA (1 turn)">

<StatGrid>
  <StatCard value="3" label="NADH" color="purple" note="3 NADH + 3H⁺" />
  <StatCard value="1" label="FADH₂" color="purple" />
  <StatCard value="1" label="ATP" color="purple" />
  <StatCard value="2" label="CO₂" color="purple" />
</StatGrid>

</Tab>
<Tab label="Per glucose (2 turns)">

<StatGrid>
  <StatCard value="6" label="NADH" color="purple" note="6 NADH + 6H⁺" />
  <StatCard value="2" label="FADH₂" color="purple" />
  <StatCard value="2" label="ATP" color="purple" />
  <StatCard value="4" label="CO₂" color="purple" />
</StatGrid>

</Tab>
</Tabs>

### Summary of glucose oxidation so far

| Stage | Where | Per glucose |
|---|---|---|
| Glycolysis | cytoplasm | uses 2 ATP, makes 4 ATP, 2 NADH, 2 pyruvate |
| Pyruvate oxidation | mitochondrial matrix | 2 NADH, 2 CO₂ |
| Krebs cycle | mitochondrial matrix | 6 NADH, 2 FADH₂, 2 ATP, 4 CO₂ |
| Electron transport chain | inner membrane | oxygen → water; **34 ATP** |

### Quick check

<Quiz question="Which molecule combines with acetyl CoA at the start of the Krebs cycle?" :options="['Citrate', 'Oxaloacetate', 'Malate', 'Pyruvate']" :answer="1" explain="Acetyl CoA adds its acetyl group to oxaloacetate (4C), forming citrate (6C)." />

<Quiz question="In which step of the Krebs cycle is FADH₂ formed?" :options="['Isocitrate → α-ketoglutarate', 'Succinyl CoA → succinate', 'Succinate → fumarate', 'Malate → oxaloacetate']" :answer="2" explain="Succinate dehydrogenase oxidises succinate to fumarate, reducing FAD to FADH₂." />

<Quiz question="How many CO₂ are released per glucose in the Krebs cycle?" :options="['2', '4', '6', '1']" :answer="1" explain="2 CO₂ per turn × 2 turns (2 acetyl CoA) = 4 CO₂." />

</Topic>

<Topic color="red">

## 5.1.4 Oxidative Phosphorylation

<Checklist title="Learning outcomes">

- (a) Illustrate to explain electron transport chain: the pathway of electron transport is NADH dehydrogenase, ubiquinone / CoQ, cytochrome c reductase, cytochrome c, cytochrome c oxidase. Include succinate dehydrogenase for FADH₂. <Badge text="C3" />
- (b) Explain chemiosmosis: proton-motive force. <Badge text="C3" />
- (c) Explain complete oxidation of one molecule of glucose in active cells to produce 38 ATP. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Diffusion down a gradient', note: 'Particles move from where they are more concentrated to where they are less concentrated. H⁺ does this through ATP synthase.' },
  { term: 'Final electron acceptor', note: 'The last molecule in a chain to take the electrons. In aerobic respiration it is <b>oxygen</b>, which becomes water.' },
  { term: 'Redox (again)', note: 'Each carrier in the chain is reduced when it takes electrons and oxidised when it passes them on. Every hand-over releases a little energy.' }
]" />

**Oxidative phosphorylation**: ATP is made as a result of the **transfer of electrons from NADH or FADH₂ to O₂** by a series of electron carriers through redox reactions. It takes place on the **inner membrane (cristae)** and makes **almost 90%** of the ATP. Two parts: **(i) the electron transport chain** and **(ii) chemiosmosis**.

<ETCDiagram />

### (i) Electron transport chain

<Definition term="Electron transport chain">a sequence of electron carrier molecules (membrane proteins) that shuttle electrons down a series of redox reactions that release energy used to make ATP.</Definition>

**Components:** NADH dehydrogenase (complex I) · succinate dehydrogenase (complex II) · coenzyme Q / ubiquinone · cytochrome c reductase (complex III) · cytochrome c · cytochrome c oxidase (complex IV).

::: tip Remember the order (acronym)
*"**N**ew **Q**ueens **R**ead **C**ards **O**penly"*
**N**ADH dehydrogenase → **Q** (ubiquinone) → cytochrome c **R**eductase → **C**ytochrome c → cytochrome c **O**xidase → O₂
(FADH₂ joins at succinate dehydrogenase and goes straight to Q.)
:::

<Steps>

1. **NADH gives up its electrons**

   NADH (from glycolysis, pyruvate oxidation and the Krebs cycle) transfers its electrons to **NADH dehydrogenase (complex I)**; NADH is oxidised to NAD⁺.

2. **FADH₂ gives up its electrons**

   FADH₂ (from the Krebs cycle) transfers its electrons to **succinate dehydrogenase (complex II)**; FADH₂ is oxidised to FAD.

3. **Electrons go to coenzyme Q**

   Electrons from both are transferred to **coenzyme Q**.

4. **Down the chain by redox reactions**

   From CoQ, electrons pass through **cytochrome c reductase**, **cytochrome c** and **cytochrome c oxidase**.

5. **Oxygen is the final electron acceptor**

   O₂ combines with 2 electrons and 2 H⁺ to form water: $\mathrm{2H^+ + 2e^- + \tfrac{1}{2}O_2 \rightarrow H_2O}$

</Steps>

### (ii) Chemiosmosis

<Definition term="Chemiosmosis">an energy-coupling mechanism that uses energy stored in the form of a hydrogen ion gradient across a membrane to drive cellular work.</Definition>

It refers to the flow of **H⁺ from the intermembrane space to the matrix through ATP synthase**.

<Flow :steps="['Electrons moving along the ETC release free energy', 'The energy pumps H⁺ from the matrix into the intermembrane space via 3 proton pumps: NADH dehydrogenase, cytochrome c reductase, cytochrome c oxidase', 'H⁺ accumulates in the intermembrane space: a proton gradient, the proton-motive force', 'H⁺ diffuses back into the matrix through ATP synthase, down its concentration gradient', 'ATP synthase catalyses the phosphorylation of ADP to ATP']" />

::: warning Common mistake
**Complex II (succinate dehydrogenase) does not pump H⁺.** Only complexes **I, III and IV** pump. That is why FADH₂ (which enters at complex II) gives fewer ATP than NADH.
:::

<StickyNote>

**ATP synthase** is a real rotating motor: H⁺ flowing through it makes part of the protein spin, a bit like water turning a water wheel, and each turn helps make ATP.

</StickyNote>

### ATP from one glucose (active cells, e.g. liver and heart)

- 1 NADH → **3 ATP**; 1 FADH₂ → **2 ATP**.
- 10 NADH × 3 = **30 ATP**; 2 FADH₂ × 2 = **4 ATP**; oxidative phosphorylation total = **34 ATP**.

| Process | | No. of ATP |
|---|---|---|
| Substrate-level phosphorylation | Glycolysis (net) | 2 |
| | Pyruvate oxidation | 0 |
| | Krebs cycle | 2 |
| Oxidative phosphorylation | Glycolysis: 2 NADH × 3 | 6 |
| | Pyruvate oxidation: 2 NADH × 3 | 6 |
| | Krebs cycle: 6 NADH × 3 | 18 |
| | Krebs cycle: 2 FADH₂ × 2 | 4 |
| **Total** | | **38** |

<StatGrid>
  <StatCard value="4" label="by substrate-level phosphorylation" icon="zap" color="red" />
  <StatCard value="34" label="by oxidative phosphorylation" icon="zap" color="red" />
  <StatCard value="38" label="ATP per glucose" icon="trophy" color="red" note="in active cells" />
</StatGrid>

### Quick check

<Quiz question="Which is the final electron acceptor in aerobic respiration?" :options="['NAD⁺', 'Pyruvate', 'Oxygen', 'Cytochrome c']" :answer="2" explain="O₂ accepts the electrons and 2H⁺, forming water." />

<Quiz question="Which complex does NOT pump H⁺ into the intermembrane space?" :options="['NADH dehydrogenase', 'Succinate dehydrogenase', 'Cytochrome c reductase', 'Cytochrome c oxidase']" :answer="1" explain="The 3 proton pumps are NADH dehydrogenase, cytochrome c reductase and cytochrome c oxidase." />

<Quiz question="During chemiosmosis, H⁺ flows from" :options="['the matrix to the intermembrane space through ATP synthase', 'the intermembrane space to the matrix through ATP synthase', 'the cytoplasm to the matrix', 'the matrix to the cytoplasm']" :answer="1" explain="H⁺ diffuses back into the matrix down its concentration gradient through ATP synthase." />

<Quiz question="How many ATP are made from the 2 FADH₂ of one glucose?" :options="['2', '4', '6', '34']" :answer="1" explain="1 FADH₂ → 2 ATP, so 2 FADH₂ → 4 ATP." />

</Topic>

<Topic color="olive">

## 5.2 Fermentation and Its Application

<Checklist title="Learning outcomes">

- (a) Explain the process of lactate and alcohol fermentation. <Badge text="C3" />
- (b) Describe the importance of fermentation in industry. <Badge text="C2" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Why NAD⁺ matters', note: 'Glycolysis step 6 needs NAD⁺. Without oxygen, NADH cannot be oxidised by the ETC, so NAD⁺ runs out unless it is <b>regenerated</b> another way.' },
  { term: 'Reduction by NADH', note: 'When NADH gives its hydrogen to a molecule, NADH is oxidised back to NAD⁺ and the molecule is reduced.' }
]" />

<Definition term="Fermentation">a catabolic process that makes 2 ATP from glucose without an electron transport chain and produces ethanol or lactate.</Definition>

- In the **absence of oxygen**, many cells use fermentation to make ATP by **substrate-level phosphorylation** (glycolysis only).
- **Pyruvate (or its product) acts as the electron acceptor** to oxidise NADH to NAD⁺.
- The regenerated **NAD⁺ is reused in glycolysis**, so glycolysis can keep going.

<FermentationDiagram />

<Flow :steps="['No oxygen, so NADH cannot pass its electrons to the ETC', 'NAD⁺ would run out and glycolysis would stop', 'Fermentation: NADH reduces pyruvate (or ethanal) and becomes NAD⁺ again', 'NAD⁺ goes back to glycolysis, so 2 ATP per glucose keep being made']" />

::: tip Quick reminder: lactate, not lactic acid
For the **process**, both **lactate fermentation** and **lactic acid fermentation** are accepted. For the **molecule / product**, write **lactate** only.
:::

<Tabs label="Types of fermentation">
<Tab label="Alcohol fermentation">

Occurs in **yeast** and some **bacteria**, producing **ethanol**.

1. Glucose is oxidised into 2 pyruvate in glycolysis; **2 ATP** by substrate-level phosphorylation.
2. **Decarboxylation**: pyruvate (3C) loses **CO₂** to form ethanal (2C) (enzyme: *pyruvate decarboxylase*).
3. Ethanal is **reduced by NADH** to ethanol (enzyme: *alcohol dehydrogenase*); NADH is oxidised to **NAD⁺, which goes back to glycolysis**.

</Tab>
<Tab label="Lactate fermentation">

Occurs in certain **bacteria**, **fungi** and **muscle cells**, producing **lactate**.

1. Glucose is oxidised into 2 pyruvate in glycolysis; **2 ATP** by substrate-level phosphorylation.
2. Pyruvate is **reduced by NADH** to form lactate (enzyme: *lactate dehydrogenase*); NADH is oxidised to **NAD⁺, which goes back to glycolysis**. **No CO₂** is released.

</Tab>
</Tabs>

### Importance of fermentation in industry

<CardGrid>
  <InfoCard title="Vinegar, beverages, alcohol" tag="Alcohol fermentation" icon="droplets" color="olive">

  Yeast feeds on the sugar or starch of a plant liquid (fruits, whole grains, potatoes, rice), which ferments into alcohol.

  </InfoCard>
  <InfoCard title="Bakery" tag="Alcohol fermentation" icon="sun" color="olive">

  The CO₂ bubbles made by baker's yeast let bread rise.

  </InfoCard>
  <InfoCard title="Tapai" tag="Alcohol fermentation" icon="leaf" color="olive">

  Made from white or glutinous rice, fermented by moulds, yeasts and bacteria.

  </InfoCard>
  <InfoCard title="Cheese and yogurt" tag="Lactate fermentation" icon="layers" color="olive">

  Lactate fermentation by certain fungi and bacteria in the dairy industry.

  </InfoCard>
  <InfoCard title="Tempoyak" tag="Lactate fermentation" icon="sprout" color="olive">

  Durian flesh with salt or sugar. Lactic acid bacteria inhibit harmful decomposing bacteria such as <i>E. coli</i>, preserving it.

  </InfoCard>
  <InfoCard title="Kimchi" tag="Lactate fermentation" icon="leaf" color="olive">

  Vegetables fermented by lactic acid bacteria; the lactate gives a sour flavour and raises acidity, making it safe to eat.

  </InfoCard>
</CardGrid>

<StickyNote>

The holes in bread are bubbles of **CO₂** from yeast fermentation. The ethanol is made too, but it mostly **evaporates** in the hot oven.

</StickyNote>

<StickyNote>

Lactate from your muscles is not wasted: much of it is carried in the blood to the **liver**, which turns it back into glucose.

</StickyNote>

### Aerobic respiration vs fermentation

**Similarities:** both involve **glycolysis** (glucose as the main respiratory substrate); both use **NAD⁺ as an electron acceptor**; both make ATP by **substrate-level phosphorylation**.

| | Aerobic respiration | Fermentation |
|---|---|---|
| Oxygen | required | not required |
| Where | cytosol and mitochondria | cytosol only |
| Stages | glycolysis, Krebs cycle, oxidative phosphorylation | glycolysis only |
| How ATP is made | substrate-level and oxidative phosphorylation | substrate-level phosphorylation |
| ATP per glucose | **38** (more) | **2** (less) |
| Reducing agent | NADH and FADH₂ | NADH |

| | Aerobic | Lactate fermentation | Alcohol fermentation |
|---|---|---|---|
| Final electron acceptor | **oxygen** | **pyruvate** | **ethanal (acetaldehyde)** |
| End products | ATP, CO₂, water | ATP, lactate | ATP, CO₂, ethanol |

### Quick check

<Quiz question="What is the main purpose of fermentation reactions after glycolysis?" :options="['To make more ATP', 'To regenerate NAD⁺ so glycolysis can continue', 'To produce oxygen', 'To make acetyl CoA']" :answer="1" explain="Pyruvate (or ethanal) oxidises NADH to NAD⁺, which is reused in glycolysis." />

<Quiz question="What is the final electron acceptor in alcohol fermentation?" :options="['Oxygen', 'Pyruvate', 'Ethanal (acetaldehyde)', 'Ethanol']" :answer="2" explain="Ethanal is reduced by NADH to ethanol." />

<Quiz question="Which product is made in alcohol fermentation but NOT in lactate fermentation?" :options="['ATP', 'NAD⁺', 'CO₂', 'Pyruvate']" :answer="2" explain="Pyruvate is decarboxylated to ethanal, releasing CO₂; lactate fermentation releases no CO₂." />

</Topic>

<Topic color="teal">

## Quick revision: key terms

Click a card to flip it; use the arrows to move on.

<Flashcards :cards="[
  { front: 'Glycolysis: where and yield', back: 'Cytoplasm; net 2 ATP, 2 NADH + 2H⁺, 2 pyruvate per glucose.' },
  { front: 'Substrate-level phosphorylation', back: 'An enzyme transfers a phosphate group from a substrate to ADP, forming ATP.' },
  { front: 'Oxidative phosphorylation', back: 'ATP made when electrons from NADH or FADH₂ pass to O₂ through carriers; on the inner membrane; about 90% of ATP.' },
  { front: 'Pyruvate → acetyl CoA', back: 'In the matrix: decarboxylation (CO₂ out), oxidation (NAD⁺ → NADH), CoA attached. Enzyme: pyruvate dehydrogenase complex.' },
  { front: 'Krebs cycle yield per turn', back: '3 NADH + 3H⁺, 1 FADH₂, 1 ATP, 2 CO₂.' },
  { front: 'ETC order', back: 'NADH dehydrogenase → CoQ → cytochrome c reductase → cytochrome c → cytochrome c oxidase → O₂.' },
  { front: 'Proton pumps', back: 'NADH dehydrogenase, cytochrome c reductase, cytochrome c oxidase (not succinate dehydrogenase).' },
  { front: 'Chemiosmosis', back: 'H⁺ flows from the intermembrane space back into the matrix through ATP synthase, which makes ATP.' },
  { front: 'ATP per NADH and FADH₂', back: '1 NADH → 3 ATP; 1 FADH₂ → 2 ATP. Total per glucose: 38 ATP.' },
  { front: 'Alcohol vs lactate fermentation', back: 'Alcohol: pyruvate → ethanal + CO₂ → ethanol. Lactate: pyruvate → lactate. Both regenerate NAD⁺.' }
]" />

</Topic>
