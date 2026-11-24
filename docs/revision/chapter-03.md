---
title: "Chapter 3: Selection and Speciation"
outline: [2, 3]
highlighter: true
---

# Chapter 3: Selection and Speciation

Revision notes. Tick off each learning outcome once you can answer it without looking.

<Badge type="green" text="3.1 Selection" /> <Badge type="blue" text="3.2 Speciation" />

<Figure src="/images/ch3/blue-footed-boobies.jpg" caption="Blue-footed boobies, Galápagos: their courtship ritual keeps them from mating with other species (see 3.2)." />

<Topic color="green">

## 3.1 Selection

<Checklist title="Learning outcomes">

- (a) State the types of selection: (i) natural selection; and (ii) artificial selection. <Badge text="C1" />
- (b) Define natural selection. <Badge text="C1" />
- (c) State three types of natural selection: (i) stabilizing selection; (ii) disruptive selection; and (iii) directional selection. <Badge text="C1" />
- (d) Analyze stabilizing selection, disruptive selection and directional selection with examples. <Badge text="C4" />
- (e) Define artificial selection. <Badge text="C1" />
- (f) Describe inbreeding and outbreeding. <Badge text="C2" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Genes and alleles', note: 'A <b>gene</b> is a section of DNA that codes for a characteristic. <b>Alleles</b> are different forms of the same gene, e.g. A and a.' },
  { term: 'Genotype vs phenotype', note: '<b>Genotype</b>: the alleles an organism has (e.g. Aa). <b>Phenotype</b>: the characteristic you can observe (e.g. beak size).' },
  { term: 'Dominant and recessive alleles', note: 'A <b>dominant</b> allele shows its effect with just one copy (AA or Aa). A <b>recessive</b> allele only shows when there are two copies (aa).' },
  { term: 'Variation', note: 'Individuals of the same species differ from each other. Much of this variation is inherited, so it can be passed on to offspring.' }
]" />

### Two types of selection

<Definition term="Natural selection">a process in which individuals that have certain heritable traits survive and reproduce at a higher rate than other individuals because of those traits.</Definition>

<Definition term="Artificial selection">the selective breeding of domesticated plants and animals to encourage the occurrence of desirable traits.</Definition>

| | Natural selection | Artificial selection |
|---|---|---|
| Selecting agent | **Environment** | **Humans** |
| Types | **Stabilizing**, **directional**, **disruptive** | **Inbreeding**, **outbreeding** |
| Result | Individuals better suited to the environment | New varieties useful to humans |

Both change the **allele and genotype frequencies** of a population.

::: tip Quick reminder: key terms
**Heritable trait:** passed from parents to offspring through genes. **Phenotype:** an observable characteristic, e.g. beak size. **Allele frequency:** how common one allele is in a population.
:::

### Three types of natural selection

| | Stabilizing | Directional | Disruptive |
|---|---|---|---|
| Favours | **Intermediate phenotypes** | **One extreme** | **Both extremes** |
| Acts against | Both extremes | The other extreme | Intermediate |
| Environment | Stable | Changing toward one extreme | Varied (patchy) |
| Effect on curve | Narrower; same mean; **genetic variability reduced** | **Whole curve shifts** toward favoured phenotype | **Splits into two peaks**; **genetic variability increased**; may lead to a new species |
| Example | Human birth weight | Peppered moth | Black-bellied seedcracker finch |

Pick a type, predict, then apply selection:

<SelectionCurvesDiagram />

### Labelling natural selection graphs

::: tip What is accepted
- Y-axis: **Number of individuals**
- X-axis: **Phenotypes**
- Mark the **intermediate** and the **two extreme** phenotypes
- The original population curve starts from the origin (0)
- Curves: **Before selection** (or **Original population**) and **After selection**
- Arrow: **Selection pressure**
:::

::: warning Not accepted
"before evolution", "after evolution", "new population", "old population"
:::

### Stabilizing selection: human birth weight

<Flow :steps="['Babies of 3–4 kg have the highest survival', 'Low-weight babies: much higher death rate', 'High-weight babies: slightly higher death rate', 'Selection acts against both extremes', 'Intermediate weight is kept; curve becomes narrower']" />

### Directional selection: the peppered moth

<div class="fig-row">
  <Figure src="/images/ch3/peppered-moth-forms.jpg" caption="Light speckled and dark forms of the peppered moth." />
  <Figure src="/images/ch3/peppered-moth-bark.jpg" caption="Against tree bark, one form is much easier for predators to see." />
</div>

<Flow title="Industrial melanism in Biston betularia" :steps="['Pollution darkens tree bark', 'Light speckled moths are easily seen by predators', 'Dark moths survive and reproduce more', 'Dark form increases; curve shifts toward the dark extreme']" />

### Disruptive selection: seedcracker finch

<Figure src="/images/ch3/seedcracker-finch.jpg" caption="Black-bellied seedcracker finch, Cameroon." />

<Flow :steps="['Small beaks feed well on soft seeds', 'Large beaks crack hard seeds', 'Medium beaks are poor at both', 'Medium-beaked birds have lower survival', 'Curve splits into two peaks']" />

### Artificial selection: inbreeding and outbreeding

Humans choose which organisms breed: **selective breeding**.

| | Inbreeding | Outbreeding |
|---|---|---|
| Definition | Mating between **closely related organisms** in the same population | Mating between **unrelated or distantly related** individuals, or different populations or subspecies, to produce **hybrids** |
| Genotype | **Homozygosity increases** | **Heterozygosity increases** |
| Variation | Reduced | Increased |
| Example | Pedigree dog breeding | Hereford × Angus cattle; oil palm |

::: tip Quick reminder: homozygous, heterozygous, hybrid
**Homozygous:** AA or aa. **Heterozygous:** Aa. **Hybrid:** offspring of parents from different varieties, populations or species.
:::

### Inbreeding: benefits and problems

<Tabs label="Inbreeding">
<Tab label="Benefits">

- Keeps **advantageous traits** in the line
- **Uniform** offspring
- **Predictable traits** in offspring

</Tab>
<Tab label="Problem with prolonged inbreeding">

<Flow :steps="['Many generations of inbreeding', 'More homozygous recessive alleles expressed', 'More genetic disorders and reduced fertility', 'Less genetic diversity and adaptability']" />

<Figure src="/images/ch3/inbred-pug.jpg" caption="Pedigree dog breeding: the pug." />

</Tab>
</Tabs>

### Benefits of outbreeding

<CardGrid>
  <InfoCard title="Hybrid vigour (heterosis)" icon="zap" color="green" />
  <InfoCard title="Larger fruit, more fruit" icon="sprout" color="green" />
  <InfoCard title="Disease resistance" icon="heart-pulse" color="green" />
  <InfoCard title="Earlier maturity" icon="clock" color="green" />
  <InfoCard title="Better adaptation to environmental change" icon="leaf" color="green" />
  <InfoCard title="Better quality products, e.g. meat" icon="trophy" color="green" />
</CardGrid>

### Outbreeding in oil palm (*Elaeis guineensis*)

<Flow :steps="['Dura (parent) × Pisifera (parent)', 'Tenera (hybrid)']" />

| | Dura | Pisifera | Tenera |
|---|---|---|---|
| Mesocarp | Thin | Thick | **Thick** |
| Shell | Thick | None | **Thin** |
| Oil | Low | Female often sterile; unproductive | **High** |

<div class="fig-row">
  <Figure src="/images/ch3/oil-palm-shells.jpg" caption="Dura (thick shell), tenera (thin shell) and pisifera (no shell)." />
  <Figure src="/images/ch3/oil-palm-fruit.jpg" caption="Tenera and dura fruit in cross-section: mesocarp (source of crude palm oil), shell and kernel." />
</div>

### Quick check

<Quiz question="Which type of natural selection favours intermediate phenotypes?" :options="['Directional', 'Disruptive', 'Stabilizing', 'Artificial']" :answer="2" explain="Stabilizing selection favours intermediate phenotypes and acts against both extremes." />

<Quiz question="The change in the peppered moth population is an example of" :options="['stabilizing selection', 'directional selection', 'disruptive selection', 'inbreeding']" :answer="1" explain="The whole curve shifts toward one extreme (the dark form): directional selection." />

<Quiz question="Which type of selection increases genetic variability and may lead to a new species?" :options="['Stabilizing', 'Directional', 'Disruptive', 'Inbreeding']" :answer="2" explain="Disruptive selection splits the curve into two peaks; genetic variability increases." />

<Quiz question="Which label is NOT accepted on a natural selection graph?" :options="['Before selection', 'Original population', 'After selection', 'New population']" :answer="3" explain="Not accepted: before evolution, after evolution, new population, old population." />

<Quiz question="Prolonged inbreeding leads to" :options="['hybrid vigour', 'more homozygous recessive alleles being expressed', 'increased heterozygosity', 'more variation']" :answer="1" explain="Many generations of inbreeding express more homozygous recessive alleles, so more genetic disorders." />

<Quiz question="Crossing dura and pisifera oil palms produces" :options="['dura', 'pisifera', 'tenera', 'a sterile mule']" :answer="2" explain="Dura (parent) × Pisifera (parent) gives Tenera (hybrid), with high oil." />

<StickyNote source="Singh et al., Nature (2013); MPOB">

The tenera palm has one normal and one mutant copy of a single gene called *SHELL*. Scientists at the Malaysian Palm Oil Board (MPOB) helped find this gene in 2013. Tenera gives about 30% more oil per area of land than dura.

</StickyNote>

</Topic>

<Topic color="blue">

## 3.2 Speciation

<Checklist title="Learning outcomes">

- (a) Define biological species concept. <Badge text="C1" />
- (b) Describe modes of speciation: sympatric and allopatric. <Badge text="C2" />
- (c) State the processes that lead to speciation. <Badge text="C1" />
- (d) Explain the processes that lead to speciation: (i) reproductive isolation; (ii) genetic drift; (iii) hybridization; and (iv) adaptive radiation. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Natural selection (3.1)', note: 'Individuals with useful heritable traits survive and reproduce more, so allele frequencies in the population change.' },
  { term: 'Chromosome number: n and 2n', note: 'Body cells are <b>diploid (2n)</b>, with two sets of chromosomes. Gametes are <b>haploid (n)</b>, with one set. Fertilisation restores 2n.' },
  { term: 'Gametes, fertilisation and zygote', note: 'A male and a female gamete fuse at <b>fertilisation</b> to form a <b>zygote</b>, which develops into the offspring.' },
  { term: 'Mutation', note: 'A change in the DNA. It can create new alleles, which is one source of the variation that selection acts on.' }
]" />

### Biological species concept

<Definition term="Species">a population or group of populations whose members have the potential to interbreed in nature and produce viable, fertile offspring, but not with members of other such groups.</Definition>

Based on the **ability to interbreed**, not on looks.

| Case | Example | Why |
|---|---|---|
| Look alike, different species | Meadowlarks *Sturnella magna* and *S. neglecta* | Behaviour differs enough to stop interbreeding |
| Look different, same species | All humans (*Homo sapiens*) | They can interbreed successfully |

<Figure src="/images/ch3/meadowlarks.jpg" caption="Two meadowlark species that look alike: Sturnella magna and S. neglecta." />

::: tip Quick reminder: viable and fertile
**Viable:** able to survive and develop. **Fertile:** able to reproduce.
:::

### Speciation

<Definition term="Speciation">the process of forming new species from pre-existing species through evolution.</Definition>

<Flow :steps="['One population linked by gene flow', 'Barrier stops gene flow', 'Allele frequencies change; groups diverge', 'Reproductive isolation', 'New species']" />

**If the two groups meet again:**

- They interbreed and have fertile offspring: **no speciation**
- They cannot interbreed: **speciation has occurred**

::: tip Quick reminder: gene flow
The transfer of alleles from one population to another, by movement of fertile individuals or their gametes (e.g. pollen).
:::

### Modes of speciation

| | Sympatric | Allopatric |
|---|---|---|
| Meaning | New species form in the **same geographical area** | New species form from **geographically isolated** populations |
| Barrier | No geographical barrier | Geographical barrier present |
| Gene flow reduced by | **Polyploidy**, **habitat differentiation**, **sexual selection** | Rivers, mountains, land bridges, shrinking lakes, colonising new areas |
| Examples | *Tragopogon*; apple maggot fly; Lake Victoria cichlids | Squirrels on the two rims of the Grand Canyon |

<Figure src="/images/ch3/allopatric-sympatric.jpg" caption="(a) Allopatric speciation: a new species forms while geographically isolated. (b) Sympatric speciation: a subset forms a new species without geographic separation." />

::: tip Quick reminder: ecological niche
The role of a species in its environment, including the resources it uses and the conditions it needs.
:::

### Sympatric speciation

<Tabs label="Sympatric speciation">
<Tab label="Polyploidy">

**Polyploidy:** extra sets of chromosomes (*Tragopogon*).

<Flow row :steps="['<i>T. dubius</i> (2n = 12) × <i>T. pratensis</i> (2n = 12)', '<i>T. miscellus</i> (2n = 24), new species']" />

<Flow row :steps="['<i>T. dubius</i> (2n = 12) × <i>T. porrifolius</i> (2n = 12)', '<i>T. mirus</i> (2n = 24), new species']" />

<Figure src="/images/ch3/tragopogon.jpg" caption="The Tragopogon triangle." />

</Tab>
<Tab label="Sexual selection">

**Sexual selection:** Lake Victoria cichlids.

<Flow :steps="['Females choose males by colour', 'Blue-tinged back (<i>Pundamilia pundamilia</i>) or red-tinged back (<i>P. nyererei</i>)', 'Each group mates only within itself', 'Gene flow is reduced']" />

<Figure src="/images/ch3/cichlids.jpg" caption="Pundamilia pundamilia and P. nyererei (males above, females below)." />

</Tab>
<Tab label="Habitat differentiation">

**Habitat differentiation:** apple maggot fly (*Rhagoletis pomonella*).

<Flow :steps="['About 200 years ago, flies laid eggs only on hawthorns', 'Apples brought to America; some flies shift to apples', 'Flies mate on the fruit they grew up on', 'Gene flow between hawthorn and apple flies is reduced', 'Two groups diverging toward separate species']" />

The flies live in the **same area**, but mating on different fruits **reduces gene flow**. No geographical barrier is involved, so this is **sympatric speciation**.

<Figure src="/images/ch3/apple-maggot-fly.jpg" caption="Rhagoletis host shift: hawthorn-raised and apple-raised flies." />

</Tab>
</Tabs>

### Allopatric speciation

<Flow :steps="['Geographical barrier splits population', 'No gene flow', 'Different selection pressures; allele and genotype frequencies change', 'Genetic divergence', 'Reproductive isolation', 'New species']" />

A barrier depends on **how well the organism disperses**. A canyon may stop small rodents, but not birds, coyotes or pollen.

**Example: the Grand Canyon**

- North rim: white tail, dark belly (**Kaibab squirrel**)
- South rim: grey tail, white belly (**Abert squirrel**)

<Figure src="/images/ch3/grand-canyon-squirrels.jpg" caption="Kaibab squirrel (north rim) and Abert squirrel (south rim) of the Grand Canyon." />

### Processes that lead to speciation

Four processes: **reproductive isolation**, **genetic drift**, **hybridization** and **adaptive radiation**.

### (i) Reproductive isolation

Biological barriers that stop closely related species from **interbreeding and producing viable, fertile offspring**. They block gene flow between species.

<Flow :steps="['Gametes', 'Prezygotic barriers', 'Zygote', 'Postzygotic barriers', 'Viable, fertile offspring']" />

<Tabs label="Barriers">
<Tab label="Prezygotic (before fertilisation)">

| Barrier | How it works | Example |
|---|---|---|
| Habitat | Different habitats in the same area; rarely meet | Apple maggot fly vs blueberry maggot fly |
| Temporal | Breed at different times of day, season or year | Eastern (late winter) vs western (late summer) spotted skunk |
| Behavioural | Different courtship rituals | Blue-footed boobies, Galápagos |
| Mechanical | Reproductive organs do not fit | *Bradybaena* snails with opposite shell spirals |
| Gametic | Sperm cannot fertilise the egg | Purple and red sea urchins |

<div class="fig-row">
  <Figure src="/images/ch3/snail-spirals.jpg" caption="Mechanical: left- and right-spiralling snails." />
  <Figure src="/images/ch3/sea-urchins.jpg" caption="Gametic: purple and red sea urchins." />
</div>

</Tab>
<Tab label="Postzygotic (after a hybrid zygote forms)">

| Barrier | How it works | Example |
|---|---|---|
| Reduced hybrid viability | Hybrid does not finish development or reach maturity | *Ensatina* salamander subspecies |
| Reduced hybrid fertility | Hybrid is sterile; meiosis fails | Horse (64) × donkey (62) gives a sterile mule (63) |
| Hybrid breakdown | F1 viable and fertile; F2 weak or sterile | Strains of cultivated rice |

<div class="fig-row">
  <Figure src="/images/ch3/ensatina-salamander.jpg" caption="Ensatina salamander." />
  <Figure src="/images/ch3/horse-donkey-mule.jpg" caption="Female horse × male donkey = sterile mule." />
</div>

::: tip Quick reminder: homologous chromosomes and meiosis
Homologous chromosomes carry the same genes at the same positions. They must pair in meiosis to make normal gametes. If they cannot pair, the hybrid is sterile.
:::

</Tab>
</Tabs>

### (ii) Genetic drift

A change in allele frequencies in a population **due to chance**, not natural selection.

- Strongest in **small populations**
- **Reduces genetic variation**
- Shifts the population away from Hardy-Weinberg equilibrium

**Example: 10 wildflower plants**

<Flow :steps="['Generation 1: by chance, only 5 plants leave offspring', 'Generation 2: by chance, only 2 plants (both C<sup>R</sup>C<sup>R</sup>) leave offspring', 'Generation 3: all C<sup>R</sup>C<sup>R</sup>; C<sup>W</sup> allele lost']" />

<Figure src="/images/ch3/genetic-drift.jpg" caption="Genetic drift in a small wildflower population over three generations." />

::: tip Quick reminder: gene pool and Hardy-Weinberg equilibrium
**Gene pool:** all the alleles in a population. **Hardy-Weinberg equilibrium:** allele and genotype frequencies stay the same over generations when no evolution happens.
:::

#### Founder effect and bottleneck effect

| | Founder effect | Bottleneck effect |
|---|---|---|
| Definition | Genetic drift that happens when **a few individuals** become isolated from the **original large population** and form a **new population** | Genetic drift that happens when the **original large population** is **suddenly reduced** to a **small population** by a natural disaster or human action |
| Who is left | The **small group (founders)** that moved away | The **random survivors** |
| What happens to the gene pool | **By chance**, the founders carry only some of the alleles, so the new gene pool **does not reflect** the original large population | **By chance**, the survivors carry only some of the alleles, so the gene pool **does not reflect** the original large population |
| Result | some alleles become **more common**, **less common** or are **lost**; genetic variation is reduced | some alleles become **more common**, **less common** or are **lost**; genetic variation is reduced |

<Tabs label="Founder and bottleneck in steps">
<Tab label="Founder effect">

<Flow :steps="['Original large population', 'A few individuals become isolated and start a new population', 'By chance, the founders carry only some of the alleles of the original population', 'Allele frequencies in the new population differ from the original large population']" />

</Tab>
<Tab label="Bottleneck effect">

<Flow :steps="['Original large population', 'Natural disaster or human action suddenly reduces it to a small population', 'By chance, the survivors carry only some of the alleles of the original population', 'Allele frequencies differ from the original large population; genetic variation is reduced']" />

</Tab>
</Tabs>

**Examples:**

<Tabs label="Founder and bottleneck examples">
<Tab label="Founder: Tristan da Cunha">

<Flow :steps="['1814: 15 British colonists settle; one carries a recessive allele for retinitis pigmentosa', 'Small, isolated gene pool', 'Late 1960s: 4 of 240 descendants are blind', 'Allele is 10 times more common than in the source population']" />

<Figure src="/images/ch3/retinitis-pigmentosa.jpg" caption="Retinitis pigmentosa: an inherited disorder of the retina." />

</Tab>
<Tab label="Bottleneck: cheetahs">

<Flow :steps="['Bottleneck 1: last ice age, about 10 000 years ago', 'Bottleneck 2: poaching and habitat loss, about 100 years ago', 'Very little genetic variation today']" />

<Figure src="/images/ch3/cheetah.jpg" caption="The cheetah." />

</Tab>
</Tabs>

### (iii) Hybridization

A cross between two species usually gives a **sterile F1 hybrid**: its chromosomes are **not homologous**. Sometimes **nondisjunction** doubles the chromosomes. This **allopolyploidy** overcomes hybrid sterility and forms a new species.

<Flow :steps="['<i>Raphanus</i> (2n = 18) × <i>Brassica</i> (2n = 18)', 'Gametes n = 9 + n = 9', 'Sterile F1 hybrid (18 non-homologous chromosomes)', 'Nondisjunction doubles chromosomes', 'Fertile <i>Raphanobrassica</i> (4n = 36): new species']" />

<Figure src="/images/ch3/raphanobrassica.jpg" caption="Raphanus × Brassica gives a sterile F1 hybrid; chromosome doubling gives fertile Raphanobrassica." />

::: tip Quick reminder: nondisjunction and allopolyploid
**Nondisjunction:** chromosomes fail to separate properly. **Allopolyploid:** has full chromosome sets from two different species.
:::

### (iv) Adaptive radiation

<Definition term="Adaptive radiation">a period of evolutionary change in which groups of organisms form many new species whose adaptations allow them to fill different ecological roles.</Definition>

<Flow :steps="['One ancestral species', 'Spreads into many ecological niches', 'Many new species, each adapted to one niche']" />

They share **homologous structures**, modified for different functions.

**Galápagos finches: beak suits the diet**

| Finch | Diet |
|---|---|
| Green warbler | Insects |
| Vegetarian | Fruit |
| Woodpecker | Insects |
| Small tree | Insects |
| Common cactus | Cactus |
| Large ground | Seeds |

### Quick check

<Quiz question="The biological species concept is based on" :options="['how alike the organisms look', 'the ability to interbreed and produce viable, fertile offspring', 'where the organisms live', 'what the organisms eat']" :answer="1" explain="Based on the ability to interbreed, not on looks." />

<Quiz question="Speciation in which no geographical barrier is involved is called" :options="['allopatric speciation', 'sympatric speciation', 'the founder effect', 'the bottleneck effect']" :answer="1" explain="Sympatric: new species form in the same geographical area, with no geographical barrier." />

<Quiz question="Blue-footed boobies with different courtship rituals show which prezygotic barrier?" :options="['Temporal', 'Behavioural', 'Mechanical', 'Gametic']" :answer="1" explain="Behavioural isolation: different courtship rituals." />

<Quiz question="A horse crossed with a donkey gives a sterile mule. This is" :options="['habitat isolation', 'gametic isolation', 'reduced hybrid fertility', 'hybrid breakdown']" :answer="2" explain="Reduced hybrid fertility: the hybrid is sterile because meiosis fails." />

<Quiz question="Genetic drift is a change in allele frequencies due to" :options="['natural selection', 'chance', 'artificial selection', 'gene flow']" :answer="1" explain="Genetic drift: a change in allele frequencies due to chance, not natural selection." />

<Quiz question="Cheetahs today have very little genetic variation because of" :options="['the founder effect', 'the bottleneck effect', 'hybridization', 'adaptive radiation']" :answer="1" explain="Two bottlenecks (last ice age; poaching and habitat loss) left very little variation." />

<Quiz question="Raphanobrassica (4n = 36) formed from Raphanus and Brassica by" :options="['genetic drift', 'hybridization and chromosome doubling (allopolyploidy)', 'adaptive radiation', 'the bottleneck effect']" :answer="1" explain="Nondisjunction doubled the chromosomes of a sterile F1 hybrid, forming a fertile allopolyploid." />

<StickyNote source="Nater et al., Current Biology (2017)">

The orangutans of Sabah and Sarawak are Bornean orangutans (*Pongo pygmaeus*). Those on Sumatra were named a separate species (*Pongo abelii*) in 2001. In 2017, scientists named a third species from Sumatra, the Tapanuli orangutan, after comparing skulls, behaviour and 37 genomes. It was the first new great ape species described since 1929. Fewer than 800 are left.

</StickyNote>

</Topic>

<Topic color="green">

## Quick revision: key terms

Click a card to flip it; use the arrows to move on.

<Flashcards :cards="[
  { front: 'Natural selection', back: 'A process in which individuals that have certain heritable traits survive and reproduce at a higher rate than other individuals because of those traits.' },
  { front: 'Artificial selection', back: 'The selective breeding of domesticated plants and animals to encourage the occurrence of desirable traits.' },
  { front: 'Stabilizing selection', back: 'Favours intermediate phenotypes and acts against both extremes; the curve becomes narrower, e.g. human birth weight.' },
  { front: 'Directional selection', back: 'Favours one extreme phenotype; the whole curve shifts toward it, e.g. the peppered moth.' },
  { front: 'Disruptive selection', back: 'Favours both extremes and acts against the intermediate; the curve splits into two peaks, e.g. the seedcracker finch.' },
  { front: 'Inbreeding vs outbreeding', back: 'Inbreeding: closely related organisms (homozygosity increases). Outbreeding: unrelated individuals, producing hybrids (heterozygosity increases).' },
  { front: 'Species (biological species concept)', back: 'A population or group of populations whose members can interbreed in nature and produce viable, fertile offspring.' },
  { front: 'Speciation', back: 'The process of forming new species from pre-existing species through evolution.' },
  { front: 'Sympatric vs allopatric', back: 'Sympatric: same geographical area, no barrier. Allopatric: populations split by a geographical barrier.' },
  { front: 'Genetic drift', back: 'A change in allele frequencies in a population due to chance, not natural selection.' },
  { front: 'Founder effect', back: 'A few individuals isolated from the original large population start a new population; by chance its gene pool does not reflect the original.' },
  { front: 'Bottleneck effect', back: 'The original large population is suddenly reduced to a small population; by chance the gene pool of the survivors does not reflect the original.' },
  { front: 'Adaptive radiation', back: 'Many new species form from one ancestor, each adapted to a different ecological role.' }
]" />

</Topic>
