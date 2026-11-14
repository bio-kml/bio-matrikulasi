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

## Quiz

A self-check multiple-choice question. `answer` is the index of the correct option, starting from 0.

<Quiz
  question="Which organelle is the main site of aerobic respiration?"
  :options="['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome']"
  :answer="1"
  explain="The Krebs cycle and oxidative phosphorylation take place in the mitochondrion."
/>

```md
<Quiz
  question="Which organelle is the main site of aerobic respiration?"
  :options="['Ribosome', 'Mitochondrion', 'Golgi apparatus', 'Lysosome']"
  :answer="1"
  explain="The Krebs cycle and oxidative phosphorylation take place in the mitochondrion."
/>
```

## Flashcards

Click a card (or press Space) to flip it. Use the arrows or ← → keys to move between cards.

<Flashcards :cards="[
  { front: 'What is osmosis?', back: 'Net movement of water molecules across a partially permeable membrane, from a region of higher water potential to lower water potential.' },
  { front: 'Name the monomer of proteins.', back: 'Amino acids' },
  { front: 'Where does the light-dependent reaction occur?', back: 'Thylakoid membranes of the chloroplast' }
]" />

```md
<Flashcards :cards="[
  { front: 'What is osmosis?', back: 'Net movement of water ...' },
  { front: 'Name the monomer of proteins.', back: 'Amino acids' }
]" />
```

## Steps

Turns a numbered list into a procedure. Good for lab methods.

<Steps>

1. **Prepare the slide**

   Place a drop of water in the centre of a clean slide.

2. **Add the specimen**

   Peel a thin layer of onion epidermis and lay it flat in the water.

3. **Stain and cover**

   Add a drop of iodine, then lower a cover slip at an angle to avoid air bubbles.

4. **Observe**

   Start with the low-power objective, then switch to high power.

</Steps>

```md
<Steps>

1. **Prepare the slide**

   Place a drop of water in the centre of a clean slide.

2. **Add the specimen**

   Peel a thin layer of onion epidermis ...

</Steps>
```

## Figure

An image with a caption and number. Click the image to zoom in.

<Figure src="/images/animal-cell.svg" num="1.1" caption="A simplified animal cell." />

```md
<Figure src="/images/animal-cell.svg" num="1.1" caption="A simplified animal cell." />
```

Put images in `docs/public/images/`.

## Labeled diagram

Numbered markers on an image. Hover over a marker to see its name, or click a marker or list item to show its description. `x` and `y` are percentages of the image width and height.

<LabeledDiagram
  src="/images/animal-cell.svg"
  alt="Animal cell"
  :labels="[
    { x: 43.5, y: 59, label: 'Nucleus', text: 'Contains the genetic material (DNA) and controls cell activities.' },
    { x: 52, y: 49.5, label: 'Nucleolus', text: 'Site of ribosomal RNA synthesis and ribosome assembly.' },
    { x: 75.8, y: 35, label: 'Mitochondrion', text: 'Site of aerobic respiration; produces ATP.' },
    { x: 41.7, y: 30, label: 'Rough ER', text: 'Studded with ribosomes; synthesises and transports proteins.' },
    { x: 72.5, y: 62, label: 'Golgi apparatus', text: 'Modifies, packages and secretes proteins in vesicles.' },
    { x: 66.7, y: 80, label: 'Lysosome', text: 'Contains hydrolytic enzymes that digest worn-out organelles.' },
    { x: 64, y: 27.5, label: 'Centrioles', text: 'Organise spindle fibres during cell division.' },
    { x: 5, y: 50, label: 'Plasma membrane', text: 'Partially permeable; controls what enters and leaves the cell.' }
  ]"
/>

```md
<LabeledDiagram
  src="/images/animal-cell.svg"
  :labels="[
    { x: 43.5, y: 59, label: 'Nucleus', text: 'Contains the genetic material.' },
    { x: 75.8, y: 35, label: 'Mitochondrion', text: 'Site of aerobic respiration.' }
  ]"
/>
```
