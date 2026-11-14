# Components

Ready-made building blocks you can drop into any page. Each example below shows the result, followed by the markdown that produces it.

## Accordion

Good for tutorial answers, FAQs, or anything students should reveal on demand.

<Accordion>
<AccordionItem title="What is the function of the mitochondria?">

The mitochondria carry out **aerobic respiration**, producing ATP for the cell.

</AccordionItem>
<AccordionItem title="Why do plant cells have a cell wall?">

The cellulose cell wall gives structural support and prevents the cell from bursting in hypotonic solutions.

</AccordionItem>
</Accordion>

```md
<Accordion>
<AccordionItem title="What is the function of the mitochondria?">

The mitochondria carry out **aerobic respiration**, producing ATP for the cell.

</AccordionItem>
</Accordion>
```

Add `:multiple="false"` to `<Accordion>` so only one panel stays open at a time.

## Tabs

Compare related content side by side without a long page.

<Tabs label="Cell types">
<Tab label="Prokaryotic">

- No nucleus; DNA lies in the nucleoid
- 70S ribosomes
- e.g. bacteria

</Tab>
<Tab label="Eukaryotic">

- Membrane-bound nucleus
- 80S ribosomes in the cytoplasm
- e.g. plants, animals, fungi

</Tab>
</Tabs>

```md
<Tabs label="Cell types">
<Tab label="Prokaryotic">

- No nucleus; DNA lies in the nucleoid

</Tab>
<Tab label="Eukaryotic">

- Membrane-bound nucleus

</Tab>
</Tabs>
```

## Term

Hover or focus a word to see its definition: the <Term def="Organelle where aerobic respiration takes place, producing ATP.">mitochondrion</Term> is the site of respiration, and the <Term title="Ribosome" def="Site of protein synthesis; made of rRNA and protein.">ribosome</Term> builds proteins.

```md
the <Term def="Organelle where aerobic respiration takes place.">mitochondrion</Term>
<Term title="Ribosome" def="Site of protein synthesis.">ribosome</Term>
```

## Badge

Small labels for status or category: <Badge text="Chapter 1" /> <Badge type="blue" text="Lab" /> <Badge type="yellow" text="Due soon" /> <Badge type="red" text="Exam" /> <Badge type="gray" text="Optional" />

```md
<Badge text="Chapter 1" /> <Badge type="yellow" text="Due soon" />
```

Types: `green` (default), `blue`, `yellow`, `red`, `gray`.

## Link cards

Navigation cards for section overviews.

<CardGrid>
  <LinkCard tag="Chapter 1" title="Lecture notes" details="Start with the first chapter." link="/lectures/chapter-01" />
  <LinkCard tag="Tutorial 1" title="Practice problems" details="Questions for chapter 1." link="/tutorials/tutorial-01" />
  <LinkCard tag="Lab 1" title="Lab guide" details="Practical session one." link="/labs/lab-01" />
</CardGrid>

```md
<CardGrid>
  <LinkCard tag="Chapter 1" title="Lecture notes" details="Start with the first chapter." link="/lectures/chapter-01" />
</CardGrid>
```

## Timeline

For schedules and deadlines. Items slide in as you scroll; `done` fills the dot.

<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Lecture: Chapter 1

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure">

Tutorial 1 · Lab 1

</TimelineItem>
<TimelineItem date="Week 3" title="Quiz 1">

Covers chapters 1 and 2.

</TimelineItem>
</Timeline>

```md
<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Lecture: Chapter 1

</TimelineItem>
</Timeline>
```

## Checklist

<Checklist title="Before the lab" color="green">

- Read the lab guide
- Bring your lab coat and goggles

</Checklist>

```md
<Checklist title="Before the lab" color="green">

- Read the lab guide

</Checklist>
```

Colors: `green`, `blue`, `yellow`, `pink`.
