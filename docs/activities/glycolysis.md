---
description: "Be the cell: work out the 10 steps of glycolysis yourself, keeping track of ATP and NADH."
icon: flask-conical
color: yellow
title: Discover Glycolysis
outline: [2, 2]
---

# Discover Glycolysis

<Badge type="yellow" text="Activity" /> <Badge type="gray" text="Chapter 5: Cellular Respiration" /> <Badge type="gray" text="about 15 minutes" />

You are a cell with one glucose molecule and a little ATP to spend. Your job: turn the glucose into **pyruvate** and come out with **more energy than you started with**. Nobody tells you the steps. At each one, look at the molecule on your bench and decide what should happen next.

<Topic color="yellow">

## Before you start

<Checklist title="By the end you should be able to">

- Say what happens to the molecule at each of the 10 steps of glycolysis.
- Name the enzyme for each step.
- Explain why glycolysis **spends** 2 ATP before it **makes** 4.
- Work out the net yield: ATP, NADH and pyruvate.

</Checklist>

::: tip How to read the bench
Green circles are **carbons**. Orange tags are **phosphates (P)** stuck to a carbon. Keep an eye on how many carbons there are and where the phosphates sit; they are your clues.
:::

## Two phases, ten steps

Glycolysis has **two phases**. Watch which one you are in: the track above the bench lights up.

<CardGrid>
  <InfoCard title="Phase 1: Energy investment" tag="Steps 1 to 5" icon="arrow-down" color="red">

  The cell **spends 2 ATP** to make glucose reactive, then splits it into two 3C sugars.

  </InfoCard>
  <InfoCard title="Phase 2: Energy pay-off" tag="Steps 6 to 10, each × 2" icon="arrow-up" color="green">

  Each 3C sugar goes through every step, so everything happens **twice**: **4 ATP** and **2 NADH + 2H⁺** are made.

  </InfoCard>
</CardGrid>

## Part 1: Be the cell

Choose an action card. A wrong choice is crossed out and you get a clue; after two wrong tries the right card is marked with a dashed outline. Your lab notebook fills in as you go: **substrate → product**, the **process**, then the **enzyme**. Enzymes of steps that **use or make ATP** are highlighted.

<GlycolysisLab />

## Part 2: Mix and match

Fill in the pathway from memory: intermediates, enzymes, processes and numbers. Keywords are colour-coded: <Badge type="yellow" text="intermediate" /> <Badge type="blue" text="enzyme" /> <Badge type="purple" text="process" /> <Badge type="green" text="number" />

<MatchDiagram
  title="Label the glycolysis pathway"
  subtitle="Tap a keyword, then tap the blank it belongs in. Phase 2 happens twice per glucose."
  :chain="[
    { phase: 'Phase 1: Energy investment' },
    { m: 'Glucose' },
    { e: 'hexokinase', p: 'Phosphorylation', n: '?uses 1 ATP' },
    { m: '?Glucose 6-phosphate' },
    { e: '?phosphoglucose isomerase', p: 'Isomerization' },
    { m: 'Fructose 6-phosphate' },
    { e: 'phosphofructokinase', p: '?Phosphorylation', n: 'uses 1 ATP' },
    { m: '?Fructose 1,6-bisphosphate' },
    { e: 'aldolase', p: '?Splitting of sugar' },
    { m: 'DHAP + Glyceraldehyde 3-phosphate' },
    { e: '?triose phosphate isomerase', p: 'Isomerization' },
    { m: '2 Glyceraldehyde 3-phosphate' },
    { phase: 'Phase 2: Energy pay-off (each step × 2)' },
    { e: 'glyceraldehyde 3-phosphate dehydrogenase', p: '?Oxidation and phosphorylation', n: '?makes 2 NADH + 2H⁺' },
    { m: '?1,3-Bisphosphoglycerate' },
    { e: '?phosphoglycerate kinase', p: 'Substrate-level phosphorylation', n: 'makes 2 ATP' },
    { m: '3-Phosphoglycerate' },
    { e: 'phosphoglycerate mutase', p: '?Isomerization' },
    { m: '?2-Phosphoglycerate' },
    { e: '?enolase', p: 'Dehydration' },
    { m: 'Phosphoenolpyruvate (PEP)' },
    { e: 'pyruvate kinase', p: 'Substrate-level phosphorylation', n: '?makes 2 ATP' },
    { m: '?2 Pyruvate' }
  ]"
/>

## Part 3: Spot the pattern

Answer these from what you just saw. Tap to check.

<Accordion>
<AccordionItem title="1. Why does the cell spend ATP in steps 1 and 3 if the goal is to make ATP?">

To make glucose **more chemically reactive** (the ATP acts as activation energy) and to put a phosphate on **both ends**, so that when the 6C sugar splits, **each 3C half carries a phosphate**.

</AccordionItem>
<AccordionItem title="2. After step 5, why does everything count twice?">

One glucose (6C) became **two** glyceraldehyde 3-phosphate (3C). Steps 6 to 10 happen to **each** of them, so every product of the payoff phase is doubled.

</AccordionItem>
<AccordionItem title="3. Which steps made ATP, and how?">

**Step 7** (phosphoglycerate kinase) and **step 10** (pyruvate kinase), each twice: **4 ATP**, all by **substrate-level phosphorylation**: an enzyme moves a phosphate from the substrate straight onto ADP.

</AccordionItem>
<AccordionItem title="4. Which step is a redox reaction?">

**Step 6**: glyceraldehyde 3-phosphate is **oxidised**, and NAD⁺ is **reduced** to NADH + H⁺ (OIL RIG). The energy released attaches an inorganic phosphate.

</AccordionItem>
<AccordionItem title="5. Three steps did not add or remove anything. Which, and what did they do?">

Steps **2, 5 and 8**: they only **rearranged** the molecule (isomerization). Step 8 moves the phosphate from carbon 3 to carbon 2.

</AccordionItem>
</Accordion>

## Part 4: Can you remember the order?

<OrderChallenge
  title="The 11 molecules of glycolysis"
  subtitle="Start with glucose. Tap each molecule in the order it appears."
  :items="['Glucose', 'Glucose 6-phosphate', 'Fructose 6-phosphate', 'Fructose 1,6-bisphosphate', 'DHAP', 'Glyceraldehyde 3-phosphate', '1,3-Bisphosphoglycerate', '3-Phosphoglycerate', '2-Phosphoglycerate', 'Phosphoenolpyruvate', 'Pyruvate']"
/>

<OrderChallenge
  title="The 10 enzymes"
  subtitle="Tap the enzymes in the order of the steps they catalyse."
  :items="['Hexokinase', 'Phosphoglucose isomerase', 'Phosphofructokinase', 'Aldolase', 'Triose phosphate isomerase', 'G3P dehydrogenase', 'Phosphoglycerate kinase', 'Phosphoglycerate mutase', 'Enolase', 'Pyruvate kinase']"
/>

<StickyNote title="Stuck? Use the acronyms">

**Molecules:** **G**oodness **G**racious, **F**ather **F**ranklin **D**id **G**o **B**y **P**icking **P**umpkins **P**reparing **P**ies

**Enzymes:** **H**ungry **P**eter **P**an **A**nd **T**he **G**rowling **P**ink **P**anther **E**at **P**ies

</StickyNote>

## Part 5: Check yourself

<Quiz question="Which step splits the 6C sugar into two 3C sugars?" :options="['Step 2', 'Step 4', 'Step 6', 'Step 9']" :answer="1" explain="Step 4: aldolase splits fructose 1,6-bisphosphate into DHAP and glyceraldehyde 3-phosphate." />

<Quiz question="A student says glycolysis makes 4 ATP. What is missing from the answer?" :options="['Nothing, 4 is the net yield', 'The 2 ATP spent in steps 1 and 3, so the net yield is 2', 'The 34 ATP from the ETC', 'The ATP from the Krebs cycle']" :answer="1" explain="4 ATP are made, but 2 were spent in the investment phase: net 2 ATP." />

<Quiz question="Where in the cell did all of this happen?" :options="['Matrix of the mitochondrion', 'Inner mitochondrial membrane', 'Cytoplasm (cytosol)', 'Nucleus']" :answer="2" explain="Glycolysis happens in the cytosol, with or without oxygen." />

### Medium: steps and enzymes

<Quiz question="Which pair of enzymes both USE ATP?" :options="['Hexokinase and pyruvate kinase', 'Hexokinase and phosphofructokinase', 'Phosphofructokinase and phosphoglycerate kinase', 'Aldolase and enolase']" :answer="1" explain="Hexokinase (step 1) and phosphofructokinase (step 3) each spend 1 ATP in the investment phase." />

<Quiz question="Which pair of enzymes both MAKE ATP?" :options="['Phosphoglycerate kinase and pyruvate kinase', 'Hexokinase and pyruvate kinase', 'Glyceraldehyde 3-phosphate dehydrogenase and enolase', 'Phosphoglycerate mutase and phosphoglycerate kinase']" :answer="0" explain="Phosphoglycerate kinase (step 7) and pyruvate kinase (step 10) make ATP by substrate-level phosphorylation, each twice per glucose." />

<Quiz question="Which step is the only redox reaction of glycolysis?" :options="['Step 1: glucose → glucose 6-phosphate', 'Step 4: fructose 1,6-bisphosphate → DHAP + G3P', 'Step 6: glyceraldehyde 3-phosphate → 1,3-bisphosphoglycerate', 'Step 9: 2-phosphoglycerate → PEP']" :answer="2" explain="In step 6 G3P is oxidised and NAD⁺ is reduced to NADH + H⁺; the energy released attaches an inorganic phosphate." />

<Quiz question="Which list gives the processes of Phase 1 in the correct order?" :options="['Phosphorylation, isomerization, phosphorylation, splitting, isomerization', 'Isomerization, phosphorylation, splitting, phosphorylation, isomerization', 'Phosphorylation, phosphorylation, isomerization, isomerization, splitting', 'Phosphorylation, isomerization, splitting, phosphorylation, isomerization']" :answer="0" explain="Step 1 phosphorylation (hexokinase), 2 isomerization, 3 phosphorylation (phosphofructokinase), 4 splitting (aldolase), 5 isomerization (DHAP → G3P)." />

<Quiz question="What does phosphoglycerate mutase do in step 8?" :options="['Adds a phosphate from ATP', 'Removes a water molecule', 'Moves the phosphate from carbon 3 to carbon 2', 'Gives a phosphate to ADP']" :answer="2" explain="3-phosphoglycerate is isomerized to 2-phosphoglycerate: the phosphate is relocated from carbon 3 to carbon 2." />

<Quiz question="Which molecule carries TWO phosphate groups?" :options="['Glucose 6-phosphate', '1,3-Bisphosphoglycerate', 'Phosphoenolpyruvate', '3-Phosphoglycerate']" :answer="1" explain="Bis- means two: 1,3-bisphosphoglycerate has phosphates on carbons 1 and 3 (so does fructose 1,6-bisphosphate)." />

### Harder: count it up

Type a number and press **Check**. All answers are for glycolysis only.

<NumberChallenge
  tag="Medium"
  question="How many ATP are <b>made</b> (not net) in glycolysis from one glucose?"
  :answer="4"
  unit="ATP"
  hint="Steps 7 and 10 each make ATP, and Phase 2 happens twice."
  working="Step 7: 2 ATP + step 10: 2 ATP = <b>4 ATP made</b> (net 2 after spending 2)."
/>

<NumberChallenge
  tag="Medium"
  question="Glycolysis runs on <b>3 glucose</b>. What is the <b>net</b> ATP?"
  :answer="6"
  unit="ATP"
  hint="Net ATP per glucose × number of glucose."
  working="Net 2 ATP per glucose × 3 = <b>6 ATP</b> (12 made − 6 spent)."
/>

<NumberChallenge
  tag="Medium"
  question="How many NADH + H⁺ come from glycolysis of <b>4 glucose</b>?"
  :answer="8"
  unit="NADH"
  hint="Step 6 happens twice per glucose."
  working="2 NADH per glucose × 4 = <b>8 NADH + 8H⁺</b>."
/>

<NumberChallenge
  tag="Medium"
  question="How many ATP are <b>spent</b> in Phase 1 to process <b>5 glucose</b>?"
  :answer="10"
  unit="ATP"
  hint="Steps 1 and 3 each spend 1 ATP per glucose."
  working="2 ATP per glucose × 5 = <b>10 ATP spent</b>."
/>

<NumberChallenge
  tag="Work backwards"
  question="A cell made a <b>net 12 ATP</b> by glycolysis alone. How many glucose molecules were used?"
  :answer="6"
  unit="glucose"
  hint="Each glucose gives a net 2 ATP."
  working="12 ÷ 2 = <b>6 glucose</b>."
/>

<NumberChallenge
  tag="Work backwards"
  question="Glycolysis produced <b>10 pyruvate</b>. How much ATP was <b>made</b> in total (not net)?"
  :answer="20"
  unit="ATP"
  hint="First find the number of glucose (2 pyruvate each), then use 4 ATP made per glucose."
  working="10 pyruvate ÷ 2 = 5 glucose; 5 × 4 = <b>20 ATP made</b> (net 10)."
/>

<NumberChallenge
  tag="Hard"
  question="How many molecules of <b>water</b> are removed by enolase when one glucose goes through glycolysis?"
  :answer="2"
  unit="H₂O"
  hint="Enolase removes one water from each 2-phosphoglycerate. How many 2-phosphoglycerate are there per glucose?"
  working="Step 9 happens twice per glucose: <b>2 H₂O</b> removed."
/>

<NumberChallenge
  tag="Hard"
  question="How many <b>carbon atoms</b> are there in all the pyruvate made from one glucose?"
  :answer="6"
  unit="C atoms"
  hint="Pyruvate is 3C. How many pyruvate per glucose?"
  working="2 pyruvate × 3C = <b>6 carbons</b>: every carbon of glucose (6C) ends up in pyruvate. No CO₂ is lost in glycolysis."
/>

<NumberChallenge
  tag="Hard: think it through"
  question="Imagine triose phosphate isomerase (step 5) did not work, so DHAP could not be used and only <b>one</b> G3P went through Phase 2. What would the <b>net</b> ATP per glucose be?"
  :answer="0"
  unit="ATP"
  hint="Phase 1 still spends 2 ATP. Phase 2 now runs only once: how many ATP does one run make?"
  working="Spent 2 ATP; one G3P makes 2 ATP (steps 7 and 10 once each). Net = 2 − 2 = <b>0 ATP</b>. That is why converting DHAP into G3P matters."
/>

</Topic>

<CardGrid>
  <LinkCard tag="Revision notes" title="Chapter 5: Cellular Respiration and Fermentation" details="See every step again with its enzyme and molecule drawings." link="/revision/chapter-05#_5-1-1-glycolysis" />
</CardGrid>
