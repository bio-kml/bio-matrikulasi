# Timeline styles

Four ways to show a timeline. Scroll through each one, then copy the markdown for the style you like. All of them work on phones; the alternating style turns into a single column on small screens.

## 1. Basic

Items slide in once as they appear. The line stays still.

<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Characteristics of living things, levels of organisation.

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure" done>

Prokaryotic vs eukaryotic cells, organelles.

</TimelineItem>
<TimelineItem date="Week 3" title="Biological molecules">

Carbohydrates, lipids, proteins and nucleic acids.

</TimelineItem>
<TimelineItem date="Week 4" title="Enzymes">

Lock-and-key and induced-fit models, factors affecting rate.

</TimelineItem>
<TimelineItem date="Week 5" title="Quiz 1">

Covers weeks 1–4.

</TimelineItem>
</Timeline>

```md
<Timeline>
<TimelineItem date="Week 1" title="Introduction to biology" done>

Characteristics of living things.

</TimelineItem>
<TimelineItem date="Week 2" title="Cell structure">

Prokaryotic vs eukaryotic cells.

</TimelineItem>
</Timeline>
```

## 2. Progress line

The line fills with green as you scroll down, and each dot fills when the line reaches it. Scroll up and it empties again.

<Timeline progress>
<TimelineItem date="1665" title="Robert Hooke">

Observes cork under a microscope and names the tiny compartments "cells".

</TimelineItem>
<TimelineItem date="1674" title="Antonie van Leeuwenhoek">

Sees living single-celled organisms ("animalcules") in pond water.

</TimelineItem>
<TimelineItem date="1838" title="Matthias Schleiden">

Concludes that all plants are made of cells.

</TimelineItem>
<TimelineItem date="1839" title="Theodor Schwann">

Extends the idea to animals: all animals are made of cells.

</TimelineItem>
<TimelineItem date="1855" title="Rudolf Virchow">

"Omnis cellula e cellula": all cells come from pre-existing cells.

</TimelineItem>
<TimelineItem date="1953" title="Watson, Crick and Franklin">

The double-helix structure of DNA is described.

</TimelineItem>
</Timeline>

```md
<Timeline progress>
<TimelineItem date="1665" title="Robert Hooke">

Observes cork under a microscope and names the compartments "cells".

</TimelineItem>
...
</Timeline>
```

## 3. Focus

The item in the middle of your screen is highlighted; the others fade back. Includes the progress line. Good for step-by-step processes.

<Timeline progress focus>
<TimelineItem date="Stage 1" title="Interphase">

The cell grows and DNA replicates. Each chromosome now has two sister chromatids.

</TimelineItem>
<TimelineItem date="Stage 2" title="Prophase">

Chromosomes condense, the nuclear envelope breaks down and spindle fibres form.

</TimelineItem>
<TimelineItem date="Stage 3" title="Metaphase">

Chromosomes line up at the equator of the cell, attached to spindle fibres at the centromere.

</TimelineItem>
<TimelineItem date="Stage 4" title="Anaphase">

Centromeres divide and sister chromatids are pulled to opposite poles.

</TimelineItem>
<TimelineItem date="Stage 5" title="Telophase">

Chromatids reach the poles, decondense, and a nuclear envelope re-forms around each set.

</TimelineItem>
<TimelineItem date="Stage 6" title="Cytokinesis">

The cytoplasm divides, producing two genetically identical daughter cells.

</TimelineItem>
</Timeline>

```md
<Timeline progress focus>
<TimelineItem date="Stage 1" title="Interphase">

The cell grows and DNA replicates.

</TimelineItem>
...
</Timeline>
```

## 4. Alternating

Items sit on both sides of a centre line, each in its own card, and rise in as you scroll. Can be combined with `progress` and `focus`.

<Timeline layout="alternate" progress>
<TimelineItem date="Week 1" title="Lecture: Chapter 1" done>

Introduction to biology.

</TimelineItem>
<TimelineItem date="Week 2" title="Tutorial 1" done>

Practice questions for chapter 1.

</TimelineItem>
<TimelineItem date="Week 3" title="Lab 1">

Using the light microscope.

</TimelineItem>
<TimelineItem date="Week 4" title="Lab report due">

Submit before Friday, 5 pm.

</TimelineItem>
<TimelineItem date="Week 5" title="Quiz 1">

Chapters 1 and 2.

</TimelineItem>
<TimelineItem date="Week 7" title="Mid-semester exam">

Chapters 1–4.

</TimelineItem>
</Timeline>

```md
<Timeline layout="alternate" progress>
<TimelineItem date="Week 1" title="Lecture: Chapter 1" done>

Introduction to biology.

</TimelineItem>
...
</Timeline>
```

## Options

| Option | What it does |
|---|---|
| `progress` | Line fills as you scroll; dots fill when reached |
| `focus` | Highlights the item in the middle of the screen |
| `layout="alternate"` | Items on both sides of a centre line (desktop) |
| `done` (on an item) | Fills that item's dot permanently |
