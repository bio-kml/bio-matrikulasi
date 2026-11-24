---
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

## Part 1: Be the cell

Choose an action card. A wrong choice is crossed out and you get a clue; after two wrong tries the right card is marked with a dashed outline. Your lab notebook on the right fills in as you discover each step.

<GlycolysisLab />

## Part 2: Spot the pattern

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

## Part 3: Can you remember the order?

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

## Part 4: Check yourself

<Quiz question="Which step splits the 6C sugar into two 3C sugars?" :options="['Step 2', 'Step 4', 'Step 6', 'Step 9']" :answer="1" explain="Step 4: aldolase splits fructose 1,6-bisphosphate into DHAP and glyceraldehyde 3-phosphate." />

<Quiz question="A student says glycolysis makes 4 ATP. What is missing from the answer?" :options="['Nothing, 4 is the net yield', 'The 2 ATP spent in steps 1 and 3, so the net yield is 2', 'The 34 ATP from the ETC', 'The ATP from the Krebs cycle']" :answer="1" explain="4 ATP are made, but 2 were spent in the investment phase: net 2 ATP." />

<Quiz question="Where in the cell did all of this happen?" :options="['Matrix of the mitochondrion', 'Inner mitochondrial membrane', 'Cytoplasm (cytosol)', 'Nucleus']" :answer="2" explain="Glycolysis happens in the cytosol, with or without oxygen." />

</Topic>

<CardGrid>
  <LinkCard tag="Revision notes" title="Chapter 5: Cellular Respiration and Fermentation" details="See every step again with its enzyme and molecule drawings." link="/revision/chapter-05#_5-1-1-glycolysis" />
</CardGrid>
