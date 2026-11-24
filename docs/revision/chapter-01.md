---
title: "Chapter 1: Biodiversity"
outline: [2, 3]
highlighter: true
---

# Chapter 1: Biodiversity

Revision notes. Tick off each learning outcome once you can answer it without looking.

<Badge type="blue" text="1.1 Classification" /> <Badge type="teal" text="1.2 Bacteria & Archaea" /> <Badge type="olive" text="1.4 Protista" /> <Badge type="yellow" text="1.5 Fungi" /> <Badge type="green" text="1.6 Plantae" /> <Badge type="purple" text="1.7 Animalia" />

<Topic color="blue">

## 1.1 Biodiversity and classification

<Checklist title="Learning outcomes">

- (a) State types of biodiversity: genetic, species and ecosystem. <Badge type="gray" text="C1" />
- (b) State hierarchical classification. <Badge type="gray" text="C1" />
- (c) Explain briefly the three-domain system (Carl Woese, 1977): Bacteria, Archaea and Eukarya, based on rRNA base sequence. <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Prokaryotic vs eukaryotic cells', note: 'Prokaryotic cells have <b>no nucleus</b> and no membrane-bound organelles; their DNA lies free in the cytoplasm. Eukaryotic cells have a <b>nucleus</b> and membrane-bound organelles such as mitochondria.' },
  { term: 'Ribosomes and rRNA', note: 'Ribosomes make proteins. They are built from <b>ribosomal RNA (rRNA)</b> and protein. Every living cell has ribosomes, so comparing rRNA base sequences lets us compare all organisms.' },
  { term: 'What a species is', note: 'A group of organisms that can <b>interbreed</b> in nature and produce <b>fertile offspring</b>.' },
  { term: 'Unicellular vs multicellular', note: 'A unicellular organism is a single cell; a multicellular organism is made of many cells.' }
]" />

<Definition term="Biodiversity">the variety of living things, their genes, and the ecosystems they live in.</Definition>

### Types of biodiversity

<CardGrid>
  <InfoCard title="Genetic diversity" icon="dna" color="green">

  Differences in genes within a population and between populations.

  </InfoCard>
  <InfoCard title="Species diversity" icon="bug" color="green">

  The number of species in an ecosystem or in the whole biosphere.

  </InfoCard>
  <InfoCard title="Ecosystem diversity" icon="leaf" color="green">

  The variety of ecosystems and ecological processes in the biosphere.

  </InfoCard>
</CardGrid>

### Hierarchical classification

::: tip Remember the order
**Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species**
:::

A <Term def="A group at any level, such as a genus or a phylum.">taxon</Term> is a group at any level, such as a genus or a phylum. Related species go into one genus, related genera into one family, and so on upward.

**Binomial nomenclature** (Carolus Linnaeus) gives every species a two-part name: **Genus + specific epithet**. The genus starts with a capital, the epithet is all lowercase, and the whole name is *italic* when typed or underlined when handwritten. Example: *Rana temporaria* (frog), shortened to *R. temporaria*.

| Level | Leopard | Durian | *E. coli* |
|---|---|---|---|
| Domain | Eukarya | Eukarya | Bacteria |
| Kingdom | Animalia | Plantae | Monera |
| Phylum | Chordata | Magnoliophyta | Proteobacteria |
| Class | Mammalia | Magnoliopsida | Gammaproteobacteria |
| Order | Carnivora | Malvales | Enterobacteriales |
| Family | Felidae | Malvaceae | Enterobacteriaceae |
| Genus | *Panthera* | *Durio* | *Escherichia* |
| Species | *P. pardus* | *D. zibethinus* | *E. coli* |

### Three-domain system

Proposed by **Carl Woese in 1977**. Organisms are grouped by their **ribosomal RNA (rRNA) base sequence**.

| Domain | Cell type | Body form |
|---|---|---|
| Bacteria | Prokaryote | Mostly unicellular, microscopic |
| Archaea | Prokaryote | Mostly unicellular, microscopic |
| Eukarya | Eukaryote | Unicellular (mostly Protista) and multicellular (Fungi, Plantae, Animalia) |

### Quick check

<Quiz question="Which level of classification comes directly above Genus?" :options="['Order', 'Family', 'Class', 'Species']" :answer="1" explain="Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species." />

<Quiz question="Carl Woese's three-domain system groups organisms based on their" :options="['cell wall composition', 'mode of nutrition', 'rRNA base sequence', 'number of cells']" :answer="2" explain="Organisms are grouped by their ribosomal RNA (rRNA) base sequence." />

<StickyNote>

Malaysia is one of only 17 countries officially called "megadiverse". Together these countries hold most of the world's species.

</StickyNote>

</Topic>

<Topic color="teal">

## 1.2 Domain Bacteria and Domain Archaea

<Checklist title="Learning outcomes">

- (a) State the two domains of prokaryotes: Bacteria (e.g. *E. coli*) and Archaea (e.g. *Sulfolobus* sp.). <Badge type="gray" text="C1" />
- (b) Differentiate between Bacteria and Archaea based on cell wall structure, association of histone to DNA, and structure of membrane lipids. <Badge type="gray" text="C3" />
- (c) Describe the diversity of bacteria: cell shape (coccus, bacillus, spirillum, vibrio) and Gram stain (Gram-positive, Gram-negative). <Badge type="gray" text="C2" />
- (d) Explain the roles of bacteria: recycling of chemical elements (nitrogen fixation, *Rhizobium* sp.), symbiotic (*E. coli* in human intestine), pathogenic (*Salmonella* sp.), research and technology (bacterial plasmid). <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Cell wall vs plasma membrane', note: 'The <b>plasma membrane</b> controls what enters and leaves the cell. The <b>cell wall</b> lies outside it and gives shape and protection.' },
  { term: 'Phospholipids in membranes', note: 'Membranes are made of <b>phospholipids</b>: a water-loving head with hydrocarbon (fatty-acid) tails. How the tails are joined to the head (<b>ester</b> or <b>ether</b> linkage) is one way Bacteria and Archaea differ.' },
  { term: 'DNA and histones', note: 'In eukaryotes, DNA wraps around proteins called <b>histones</b>, which pack it into chromosomes.' },
  { term: 'Why plants need nitrogen', note: 'Plants need nitrogen to make <b>amino acids</b> (for proteins) and <b>nucleic acids</b> (DNA, RNA), but they cannot use N₂ gas from the air directly.' }
]" />

The two prokaryote domains are **Bacteria (*E. coli*)** and **Archaea (*Sulfolobus* sp.)**. Both are unicellular, with a single circular DNA in the **nucleoid** region. Some also carry extra circular DNA called <Term def="Extra circular DNA carried by some prokaryotes, separate from the main circular DNA in the nucleoid.">plasmids</Term>.

Archaea were first found in extreme places. The three main types are **methanogens**, **halophiles** and **thermoacidophiles**.

### Bacteria vs Archaea

| Feature | Bacteria | Archaea |
|---|---|---|
| Cell wall | Has **peptidoglycan** | **No peptidoglycan**; polysaccharide and protein |
| Histone and DNA | DNA **not associated** with histones | DNA **associated** with histones |
| Membrane lipids | **Unbranched** hydrocarbons, **ester** linkages | **Branched** hydrocarbons, **ether** linkages |

### Diversity of bacteria: cell shape

| Shape | Name | Example |
|---|---|---|
| Spherical | **Coccus** (cocci) | *Streptococcus pneumoniae*, *Staphylococcus* sp. |
| Rod | **Bacillus** (bacilli) | *Bacillus thuringiensis*, *E. coli* |
| Spiral | **Spirillum** (spirilla) | *Rhodospirillum* sp. |
| Comma | **Vibrio** | *Vibrio cholerae* |

Cocci can be single, in pairs, in chains or in clusters.

<BacteriaShapes />

### Diversity of bacteria: Gram stain

Gram staining tells bacteria apart by their cell wall.

<Tabs label="Gram stain">
<Tab label="Gram-positive">

- **Cell wall:** 1 layer, **thick peptidoglycan**
- **Colour:** **purple**, crystal violet trapped
- **Danger:** less pathogenic
- **Examples:** *Lactobacillus*, *Bacillus*, *Clostridium*

</Tab>
<Tab label="Gram-negative">

- **Cell wall:** 2 layers, **thin peptidoglycan + outer membrane** (lipopolysaccharides)
- **Colour:** **pink**, crystal violet washed out, safranin taken up
- **Danger:** more pathogenic, more resistant to antibiotics
- **Examples:** *E. coli*, *Azotobacter*, *Salmonella*

</Tab>
</Tabs>

<GramWallDiagram />

### Roles of bacteria

<CardGrid>
  <InfoCard title="Recycling elements" icon="sprout" color="teal">

  **Nitrogen fixation** by <i>Rhizobium</i>: N₂ → NH₃, so plants can make amino acids and nucleic acids. Also act as decomposers.

  </InfoCard>
  <InfoCard title="Symbiotic" icon="users" color="teal">

  **<i>E. coli</i> in the human intestine** helps digest complex molecules like lactose.

  </InfoCard>
  <InfoCard title="Pathogenic" icon="bug" color="teal">

  Release toxins (exotoxin, endotoxin). **<i>Salmonella</i>** causes food poisoning.

  </InfoCard>
  <InfoCard title="Research & technology" icon="microscope" color="teal">

  **Bacterial plasmids** in <i>E. coli</i> for gene cloning. Make cheese, yoghurt, soy sauce, vitamins, hormones and antibiotics.

  </InfoCard>
</CardGrid>

<Flow title="Nitrogen fixation, step by step" :steps="['N₂ in the air', '<i>Rhizobium</i> fixes N₂ → NH₃', 'Plants use it to make amino acids and nucleic acids']" />

### Quick check

<Quiz question="Which feature is found in Archaea but not in Bacteria?" :options="['Peptidoglycan in the cell wall', 'Ester-linked membrane lipids', 'DNA associated with histones', 'Unbranched hydrocarbon chains']" :answer="2" explain="Archaea DNA is associated with histones; Bacteria DNA is not." />

<Quiz question="A Gram-negative bacterium appears pink after Gram staining because" :options="['its thick peptidoglycan traps crystal violet', 'crystal violet is washed out and safranin is taken up', 'it has no cell wall', 'its cell wall contains chitin']" :answer="1" explain="Gram-negative: crystal violet washed out, safranin taken up, so it stains pink." />

<StickyNote>

*Sulfolobus*, the archaea example in the syllabus, lives in volcanic hot springs at about 80 °C and pH 2 to 3. Most bacteria would die there.

</StickyNote>

</Topic>

<Topic color="olive">

## 1.4 Kingdom Protista

<Checklist title="Learning outcomes">

- (a) State the unique characteristics of Protista. <Badge type="gray" text="C1" />
- (b) State the classification of Protista: two major phyla of algae by photosynthetic pigment (Chlorophyta, *Chlamydomonas* sp.; Phaeophyta, *Fucus* sp.) and four major phyla of protozoa by locomotion (Euglenophyta, Rhizopoda, Ciliophora, Apicomplexa). <Badge type="gray" text="C1" />
- (d) Explain the roles of Protista in the ecological community: CO₂ fixation, food source, eutrophication, red tide, human health, sewage treatment. <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Autotroph vs heterotroph', note: '<b>Autotrophs</b> make their own food, e.g. by photosynthesis. <b>Heterotrophs</b> get food from other organisms.' },
  { term: 'Photosynthetic pigments', note: 'Pigments such as <b>chlorophyll</b> absorb light energy for photosynthesis. Different pigments absorb different colours of light, which is why algae can be grouped by pigment.' },
  { term: 'Binary fission', note: 'Asexual reproduction in which one cell divides into <b>two identical cells</b>.' },
  { term: 'Food chains', note: 'Producers (e.g. algae) are eaten by consumers (e.g. zooplankton), passing energy along the chain.' }
]" />

### Unique characteristics

- **Eukaryotes**, **mostly unicellular**. Some are colonial, some are simple multicellular.
- Nutrition can be **photoautotrophic** (algae), **heterotrophic** (most protozoa) or **mixotrophic** (*Euglena*).

### Algae: grouped by photosynthetic pigment

Plant-like protists. They photosynthesise, have a cell wall and live in wet, low-light places.

| Feature | Chlorophyta (*Chlamydomonas*) | Phaeophyta (*Fucus*) |
|---|---|---|
| Cell type | Unicellular | Simple multicellular |
| Pigments | **Chlorophyll a and b** | **Chlorophyll a, c and fucoxanthin** |
| Food storage | Starch | Laminarin and mannitol |
| Movement | Motile, has flagella | Non-motile, attached to rocks |

### Protozoa: grouped by locomotion

Unicellular. Mostly reproduce by **binary fission**. Many are zooplankton.

| Phylum | Example | Locomotion | Nucleus | Nutrition |
|---|---|---|---|---|
| Euglenophyta | *Euglena* | **Flagella** | 1 | Mixotrophic |
| Rhizopoda | *Amoeba* | **Pseudopodia** (also for feeding) | 1 | Heterotrophic |
| Ciliophora | *Paramecium* | **Cilia** (also for feeding) | 2: macro- and micronucleus | Heterotrophic |
| Apicomplexa | *Plasmodium* | **None**, non-motile | 1 | Heterotrophic (parasite) |

### Roles of Protista

<CardGrid>
  <InfoCard title="CO₂ fixation" icon="sun" color="green">

  **Phytoplankton** are primary producers. They turn CO₂ into organic compounds by photosynthesis.

  </InfoCard>
  <InfoCard title="Food source" icon="droplets" color="green">

  **<i>Chlorella</i>** feeds zooplankton in aquatic ecosystems.

  </InfoCard>
  <InfoCard title="Eutrophication" icon="leaf" color="green">

  Extra nitrate and phosphate cause a **green algae bloom**. Oxygen drops and aquatic life dies.

  </InfoCard>
  <InfoCard title="Red tide" icon="zap" color="red">

  Bloom of **dinoflagellates** (<i>Karenia brevis</i>). Its toxin, brevetoxin, attacks the nervous system of fish.

  </InfoCard>
  <InfoCard title="Human health" icon="heart-pulse" color="red">

  **<i>Plasmodium</i> causes malaria**. Spread by the female <i>Anopheles</i> mosquito.

  </InfoCard>
  <InfoCard title="Sewage treatment" icon="droplets" color="blue">

  **Protozoa** and algae help clean wastewater so it is safe to release.

  </InfoCard>
</CardGrid>

<Flow title="Eutrophication, step by step" :steps="['Extra nitrate and phosphate', 'Green algae bloom', 'Oxygen drops', 'Aquatic life dies']" />

### Quick check

<Quiz question="Which protozoan moves using cilia?" :options="['Euglena', 'Amoeba', 'Paramecium', 'Plasmodium']" :answer="2" explain="Paramecium (Ciliophora) uses cilia, also for feeding." />

<Quiz question="Fucoxanthin is a pigment found in" :options="['Chlorophyta', 'Phaeophyta', 'Rhizopoda', 'Ascomycota']" :answer="1" explain="Phaeophyta pigments: chlorophyll a, c and fucoxanthin." />

<StickyNote>

The slides ask which alga is used for sushi wrap. It is **nori**, made from a red alga (*Pyropia*, formerly *Porphyra*), pressed and dried into sheets.

</StickyNote>

</Topic>

<Topic color="yellow">

## 1.5 Kingdom Fungi

<Checklist title="Learning outcomes">

- (a) State the unique characteristics of Fungi. <Badge type="gray" text="C1" />
- (b) State the classification of Fungi phyla based on the spore-bearing structure: Zygomycota (*Rhizopus* sp.), Ascomycota (*Penicillium* sp.), Basidiomycota (*Agaricus* sp.). <Badge type="gray" text="C1" />
- (c) Explain the roles of fungi: decomposers, symbionts, pathogens, food production (yeast), pharmaceutical (*Penicillium*). <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Storage carbohydrates', note: '<b>Starch</b> is the storage carbohydrate of plants; <b>glycogen</b> is the storage carbohydrate of animals. Both are made of glucose.' },
  { term: 'Sexual vs asexual reproduction', note: '<b>Asexual</b>: one parent, offspring genetically identical. <b>Sexual</b>: gametes from two parents fuse, so offspring vary.' },
  { term: 'Digestive enzymes', note: 'Enzymes break large food molecules into small ones that can be absorbed. Fungi release them <b>outside</b> their body, then absorb the products.' },
  { term: 'Symbiosis', note: 'Two different species living closely together. In <b>mutualism</b> both benefit; in <b>parasitism</b> one benefits and the host is harmed.' }
]" />

### Unique characteristics

- Eukaryotes. Mostly multicellular, but **yeast** is unicellular.
- Cell wall made of **chitin**. Stores energy as **glycogen**. **Non-motile**.
- **Heterotrophic by absorption**: they release enzymes, then absorb the food. They live as **saprotrophs** (on dead matter), **parasites** (on living hosts) or **mutualists** (both sides benefit).
- Reproduce with **spores**, sexually or asexually.
- Body is made of **hyphae**, which branch into a **mycelium**. **Septate** hyphae have cross-walls; **coenocytic** (aseptate) hyphae have none and hold many nuclei.

### Classification by spore-bearing structure

| Phylum | Example | Hyphae | Sexual spore (made in) | Asexual spore |
|---|---|---|---|---|
| Zygomycota | *Rhizopus*, bread mould | Aseptate | **Zygospore** (zygosporangium) | Spores in sporangium |
| Ascomycota | *Penicillium* | Septate | **Ascospore** (ascus) | Conidia on conidiophore |
| Basidiomycota | *Agaricus*, mushroom | Septate | **Basidiospore** (basidium) | Rare |

### Roles of fungi

<CardGrid>
  <InfoCard title="Decomposers" icon="sprout" color="yellow">

  Break down **dead organisms and waste** and absorb the nutrients.

  </InfoCard>
  <InfoCard title="Symbionts" icon="users" color="yellow">

  **Lichen** = fungus + alga. **Mycorrhizae** = fungus + plant roots.

  </InfoCard>
  <InfoCard title="Pathogens" icon="bug" color="red">

  Humans: <i>Candida</i>, ringworm, athlete's foot. Plants: rusts and smuts on cereals (<i>Puccinia graminis</i>), chestnut blight.

  </InfoCard>
  <InfoCard title="Food production" icon="layers" color="yellow">

  **Yeast (<i>Saccharomyces</i>)** for bread, wine, beer and tapai.

  </InfoCard>
  <InfoCard title="Pharmaceutical" icon="flask-conical" color="blue">

  **<i>Penicillium</i> produces penicillin**.

  </InfoCard>
</CardGrid>

### Quick check

<Quiz question="Ascospores are produced in a" :options="['sporangium', 'basidium', 'ascus', 'zygosporangium']" :answer="2" explain="Ascomycota: ascospore, made in the ascus." />

<StickyNote>

Fungi are more closely related to animals than to plants. That is why both store glycogen, and why chitin turns up again in the exoskeleton of insects in 1.7.

</StickyNote>

</Topic>

<Topic color="green">

## 1.6 Kingdom Plantae

<Checklist title="Learning outcomes">

- 1.6 (a) Describe alternation of generation as the unique characteristic of Plantae. <Badge type="gray" text="C2" />
- 1.6 (b) State the classification of Plantae into four groups: bryophytes, pteridophytes, gymnosperms, angiosperms. <Badge type="gray" text="C1" />
- 1.6.1 Bryophytes: (a) describe unique characteristics <Badge type="gray" text="C2" />; (b) state the three phyla, Hepatophyta (*Marchantia*), Bryophyta (*Polytrichum*), Anthocerophyta (*Anthoceros*) <Badge type="gray" text="C1" />; (c) state the terrestrial adaptations <Badge type="gray" text="C1" />.
- 1.6.2 Pteridophytes: (a) describe unique characteristics <Badge type="gray" text="C2" />; (b) state the two phyla, Lycophyta (*Lycopodium*, *Selaginella*) and Pterophyta (*Dryopteris*) <Badge type="gray" text="C1" />.
- 1.6.4 Gymnosperms: (a) describe unique characteristics <Badge type="gray" text="C2" />; (b) state the four phyla, Cycadophyta (*Cycas*), Coniferophyta (*Pinus*), Ginkgophyta (*Ginkgo biloba*), Gnetophyta (*Gnetum*) <Badge type="gray" text="C1" />.
- 1.6.5 Angiosperms: (a) describe unique characteristics of Phylum Anthophyta. <Badge type="gray" text="C2" />
- 1.6.6 Explain the evolutionary relationships from bryophytes to angiosperms based on size, dominance, dependence, water for fertilisation, vascular tissue and embryo protection. <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Haploid (n) vs diploid (2n)', note: 'A <b>haploid</b> cell has one set of chromosomes (n); a <b>diploid</b> cell has two sets (2n).' },
  { term: 'Mitosis vs meiosis', note: '<b>Mitosis</b> keeps the chromosome number the same (n → n, 2n → 2n). <b>Meiosis</b> halves it (2n → n).' },
  { term: 'Fertilisation', note: 'A male and a female gamete fuse (n + n) to form a <b>diploid zygote</b> (2n).' },
  { term: 'Xylem and phloem', note: 'Vascular tissue. <b>Xylem</b> carries water and minerals; <b>phloem</b> carries sugars made in photosynthesis.' }
]" />

### Unique characteristics

Multicellular eukaryotes that photosynthesise with chlorophyll, store **starch**, and have a **cellulose** cell wall. Their life cycle shows **alternation of generations**.

### Alternation of generations

The life cycle switches between two multicellular stages that look different from each other:

- **Gametophyte (n, haploid)** makes gametes by **mitosis**.
- **Sporophyte (2n, diploid)** makes spores by **meiosis**.

<LifeCycleDiagram />

Now scroll through the cycle one stage at a time:

<ScrollTimeline>
<ScrollStep date="Stage 1 · 2n" title="Sporophyte">

The **diploid (2n)** generation. It makes spores by **meiosis**.

</ScrollStep>
<ScrollStep date="Stage 2 · n" title="Spores">

**Meiosis** produces **haploid (n)** spores.

</ScrollStep>
<ScrollStep date="Stage 3 · n" title="Gametophyte">

Each spore grows into the **haploid (n) gametophyte**. It makes gametes by **mitosis**.

</ScrollStep>
<ScrollStep date="Stage 4 · n" title="Gametes">

**Mitosis** produces **haploid (n)** gametes.

</ScrollStep>
<ScrollStep date="Stage 5 · 2n" title="Fertilisation → zygote">

Two gametes fuse at **fertilisation**, forming a **diploid (2n) zygote**.

</ScrollStep>
<ScrollStep date="Stage 6 · 2n" title="Embryo → sporophyte">

The zygote develops into an **embryo**, which grows into a new **sporophyte**. The cycle starts again.

</ScrollStep>
</ScrollTimeline>

::: tip The cycle in one line
Sporophyte (2n) → meiosis → spores (n) → gametophyte (n) → mitosis → gametes (n) → fertilisation → zygote (2n) → embryo → sporophyte
:::

### The four groups

| Group | Vascular? | Seeds? | Phyla (examples) |
|---|---|---|---|
| Bryophytes | No | No | Hepatophyta (*Marchantia*), Bryophyta (*Polytrichum*), Anthocerophyta (*Anthoceros*) |
| Pteridophytes | Yes | No | Lycophyta (*Lycopodium*, *Selaginella*), Pterophyta (*Dryopteris*) |
| Gymnosperms | Yes | **Naked seed**, not in an ovary | Cycadophyta (*Cycas*), Coniferophyta (*Pinus*), Ginkgophyta (*Ginkgo biloba*), Gnetophyta (*Gnetum*) |
| Angiosperms | Yes | **Seed inside an ovary** | Anthophyta: Monocotyledonae and Dicotyledonae |

### What makes each group stand out

<Tabs label="Plant groups">
<Tab label="Bryophytes">

The most primitive land plants; they grow in damp, shady places. No true roots, stems or leaves; the body is a **thallus** held down by **rhizoids**. Gametes form in the **antheridium** (male, antherozoids) and the **archegonium** (female, oosphere).

Their **terrestrial adaptations**:

- **Waxy cuticle** cuts water loss.
- **Multicellular gametangia**: a jacket of sterile cells protects the gametes.
- **Multicellular, dependent embryo** stays inside the female parent, which shields and feeds it.
- **Walled spores in a sporangium**: **sporopollenin** makes the wall tough, so spores survive drying out in the air.

</Tab>
<Tab label="Pteridophytes">

Ferns have true roots, stems (**rhizome**) and leaves (**fronds**), and are larger than bryophytes. Most are **homosporous** (one spore type); some are **heterosporous** (microspores and megaspores).

</Tab>
<Tab label="Gymnosperms">

Reproduce with **cones** made of spirally arranged sporophylls, have waxy leaves to save water, and are **pollinated by wind**.

</Tab>
<Tab label="Angiosperms">

Reproduce with **flowers**. **Double fertilisation** forms a triploid **endosperm** that feeds the embryo, and **fruits** protect and spread the seeds.

</Tab>
</Tabs>

### Evolution from bryophytes to angiosperms

| Feature | Bryophytes | Pteridophytes | Gymnosperms | Angiosperms |
|---|---|---|---|---|
| Size (sporophyte) | Smallest, 2–3 cm | Bigger, 25–40 cm | Biggest, 3–5 m | Small to big |
| Dominant generation | **Gametophyte** | Sporophyte | Sporophyte | Sporophyte |
| Dependence | Sporophyte depends on gametophyte | Both independent (young sporophyte depends briefly) | Gametophyte depends on sporophyte | Gametophyte depends on sporophyte |
| Water for fertilisation | Yes, motile sperm | Yes, motile sperm | **No** | **No** |
| Vascular tissue | None | Simple: tracheids, sieve tubes | Complex: tracheids and sieve tubes only* | Most complex: **tracheids + vessels, sieve tubes + companion cells** |
| Embryo protection | In archegonium, no seed | In archegonium, no seed | **Naked seed**, hard coat | **Seed in ovary**, hard coat |

<small>*Gnetophyta is the exception.</small>

::: tip The trend in one line
The sporophyte grows bigger and takes over, the gametophyte shrinks, water stops being needed for fertilisation, vascular tissue gets more complex, and the embryo gets better protected.
:::

### Quick check

<Quiz question="In which plant group is the gametophyte the dominant generation?" :options="['Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms']" :answer="0" explain="In bryophytes the gametophyte is dominant; in the other groups the sporophyte is." />

<Quiz question="Which of the following is a terrestrial adaptation of bryophytes?" :options="['Xylem vessels', 'Double fertilisation', 'Spores with a sporopollenin wall', 'Seeds enclosed in an ovary']" :answer="2" explain="Walled spores in a sporangium: sporopollenin makes the wall tough so spores survive drying out." />

<StickyNote>

*Rafflesia*, the genus with the world's largest single flower, grows wild in Sabah. It is an angiosperm with no leaves, stem or roots of its own; it lives as a parasite on a vine.

</StickyNote>

</Topic>

<Topic color="purple">

## 1.7 Kingdom Animalia

<Checklist title="Learning outcomes">

- (a) Describe the unique characteristics of Kingdom Animalia. <Badge type="gray" text="C2" />
- (b) State the classification of Animalia into nine phyla: Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata, Chordata. <Badge type="gray" text="C1" />
- (c) Discover the unique characteristics of each phylum: *Leucosolenia*, *Obelia*, *Taenia*, *Ascaris*, *Pheretima*, *Valanga*, *Achatina*, *Asterias*, *Amphioxus*. <Badge type="gray" text="C3" />
- (d) Explain the evolutionary relationships of animals based on level of organisation, germ layers, body symmetry, body coelom and segmentation. <Badge type="gray" text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Cells, tissues and organs', note: 'A <b>tissue</b> is a group of similar cells doing one job; tissues work together as <b>organs</b>.' },
  { term: 'The early embryo', note: 'A fertilised egg divides into a ball of cells. These cells form <b>germ layers</b>, which later become all the body tissues. The first opening that forms in the embryo becomes either the mouth or the anus.' },
  { term: 'Open vs closed circulation', note: '<b>Closed</b>: blood stays inside vessels. <b>Open</b>: blood leaves the vessels and bathes the organs directly.' },
  { term: 'Hydrostatic skeleton', note: 'A fluid-filled cavity that muscles squeeze against, giving the body support and shape, like a water balloon.' }
]" />

### Unique characteristics

- Multicellular eukaryotes with **no cell wall**; collagen gives support instead.
- **Heterotrophic (holozoic)**: they eat other organisms. Store energy as glycogen.
- Cells form tissues (except the simplest animals). Most have **nerves and muscles** and are **motile** at some stage.
- Mostly sexual: large non-motile eggs, small flagellated sperm. Adults are mostly diploid and go through embryonic development.

### The nine phyla

| Phylum | Example | Key features |
|---|---|---|
| Porifera | *Leucosolenia*, sponge | Body full of pores. Water in through **ostia**, out through the **osculum**. **Collar cells (choanocytes)** trap food. **Spicules** form the skeleton. Adults sessile. |
| Cnidaria | *Obelia* | **Dimorphism**: **polyp** (sessile) and **medusa** (motile). **Cnidocytes with nematocysts** sting prey. Gut with one opening. Nerve net. |
| Platyhelminthes | *Taenia*, tapeworm | Flat body. **Flame cells (protonephridia)**. Ladder-like nerves. Tapeworm has a **scolex** with hooks and suckers, **proglottids**, a protective tegument, and no gut. |
| Nematoda | *Ascaris*, roundworm | Round, tapered ends. Cuticle shed by **ecdysis**. **Longitudinal muscles only**, so it whips. Separate sexes. |
| Annelida | *Pheretima*, earthworm | **Metameric segmentation**. **Setae**. **Clitellum** makes the cocoon. Metanephridia. Closed circulation. Aerates and mixes soil. |
| Arthropoda | *Valanga*, grasshopper | **Tagmata**, **chitin exoskeleton**, **jointed appendages**. Open circulation. Malpighian tubules. Metamorphosis. |
| Mollusca | *Achatina*, snail | Body = **muscular foot + visceral mass + mantle**. Mostly a CaCO₃ shell. **Radula** scrapes food. Mostly open circulation. |
| Echinodermata | *Asterias*, starfish | Spiny skin. **Water vascular system** with **tube feet**. Calcareous endoskeleton. Radial as adults, no brain. |
| Chordata | *Amphioxus*, lancelet | **Notochord, pharyngeal slits, dorsal hollow nerve cord, post-anal tail, myotomes**. Endoskeleton. Closed circulation. |

### Arthropoda vs Chordata: key features

<Tabs label="Key features">
<Tab label="Arthropoda (7)">

- **Tagmata** (head, thorax, abdomen), so body regions can specialise.
- **Chitinous exoskeleton** protects from water loss and injury and anchors muscles.
- **Paired jointed appendages** for flexible movement.
- **Well-developed sense organs** that pick up small changes fast.
- **Many respiratory organs**: gills, trachea, book lungs.
- **Metamorphosis**: larva and adult eat different food, so they compete less.
- **Many mouthpart types**, so many diets.

</Tab>
<Tab label="Chordata (5)">

- **Notochord**: flexible rod that supports the body. Becomes the backbone in vertebrates.
- **Pharyngeal slits**: for filter feeding or gills. In humans, the first pair becomes the auditory tube.
- **Dorsal hollow nerve cord**: becomes the brain and spinal cord.
- **Post-anal tail**: extends past the anus, used for swimming.
- **Myotomes**: paired muscle blocks for movement.

</Tab>
</Tabs>

### Flatworm vs roundworm vs earthworm

| Feature | Platyhelminthes | Nematoda | Annelida |
|---|---|---|---|
| Gut | Incomplete, 1 opening | Complete | Complete |
| Muscles | Body wall cannot contract | Longitudinal only | **Longitudinal + circular** |
| Circulation | None | None | **Closed** |
| Excretion | Flame cells | Excretory tubes | Metanephridia |
| Sexes | Mostly hermaphrodite | **Separate** | Mostly hermaphrodite |

### Evolutionary relationships

Switch between the body plans below, then tap a layer to pick it out:

<BodyPlanDiagram />

<Tabs label="Evolutionary relationships">
<Tab label="Organisation">

**Parazoa** have no true tissues (Porifera). **Eumetazoa** have true tissues (everyone else).

</Tab>
<Tab label="Germ layers">

**Diploblastic** = ectoderm + endoderm (Cnidaria). **Triploblastic** adds mesoderm (Platyhelminthes onward).

</Tab>
<Tab label="Symmetry">

**Radial**: many planes cut the body into equal halves. **Bilateral**: only one plane, with a top and bottom, front and back, and usually **cephalisation** (a head with sense organs).

<SymmetryDiagram />

</Tab>
<Tab label="Coelom">

The <Term def="The fluid-filled space between the gut and the body wall.">coelom</Term> is the fluid-filled space between the gut and the body wall.

- **Acoelomate**: no cavity (Platyhelminthes).
- **Pseudocoelomate**: cavity only partly lined by mesoderm (Nematoda).
- **Coelomate**: cavity fully lined by mesoderm, a true coelom (Annelida onward).

The coelom cushions organs, lets them grow and move freely, works as a **hydrostatic skeleton**, separates body-wall muscle from gut muscle, and makes room for a circulatory system.

Coelomates also split by which opening forms first: **protostomes** (mouth first: Mollusca, Annelida, Arthropoda) and **deuterostomes** (anus first: Echinodermata, Chordata).

</Tab>
<Tab label="Segmentation">

Repeated body units let each segment move on its own, so movement is more precise. Seen in **Annelida, Arthropoda and Chordata**. In arthropods and chordates, segments group into **tagmata**.

</Tab>
</Tabs>

| Phylum | Tissue | Germ layers | Symmetry | Coelom | Segments |
|---|---|---|---|---|---|
| Porifera | Parazoa | None | Mostly none | None | No |
| Cnidaria | Eumetazoa | Diplo | Radial | None | No |
| Platyhelminthes | Eumetazoa | Triplo | Bilateral | Acoelomate | No |
| Nematoda | Eumetazoa | Triplo | Bilateral | Pseudocoelomate | No |
| Mollusca | Eumetazoa | Triplo | Bilateral | Coelomate, protostome | No |
| Annelida | Eumetazoa | Triplo | Bilateral | Coelomate, protostome | Yes |
| Arthropoda | Eumetazoa | Triplo | Bilateral | Coelomate, protostome | Yes, with tagmata |
| Echinodermata | Eumetazoa | Triplo | Radial (adult) | Coelomate, deuterostome | No |
| Chordata | Eumetazoa | Triplo | Bilateral | Coelomate, deuterostome | Yes, with tagmata |

### Quick check

<Quiz question="An animal has a pseudocoelom and only longitudinal muscles. It belongs to phylum" :options="['Platyhelminthes', 'Nematoda', 'Annelida', 'Mollusca']" :answer="1" explain="Nematoda: pseudocoelomate, longitudinal muscles only." />

<Quiz question="Stinging cells called cnidocytes are found in" :options="['Leucosolenia', 'Obelia', 'Taenia', 'Asterias']" :answer="1" explain="Obelia (Cnidaria) has cnidocytes with nematocysts." />

<Quiz question="Which is not a unique characteristic of Chordata?" :options="['Notochord', 'Pharyngeal slits', 'Ventral solid nerve cord', 'Post-anal tail']" :answer="2" explain="Chordates have a dorsal hollow nerve cord, not a ventral solid one." />

<StickyNote>

Arthropods make up more than three out of every four known animal species. Insects alone outnumber every other animal group combined.

</StickyNote>

</Topic>

<Topic color="blue">

## Quick revision: key terms

Click a card to flip it; use the arrows to move on.

<Flashcards :cards="[
  { front: 'Genetic diversity', back: 'Differences in genes within a population and between populations.' },
  { front: 'Species diversity', back: 'The number of species in an ecosystem or in the whole biosphere.' },
  { front: 'Ecosystem diversity', back: 'The variety of ecosystems and ecological processes in the biosphere.' },
  { front: 'Taxon', back: 'A group at any level, such as a genus or a phylum.' },
  { front: 'Binomial nomenclature', back: 'Two-part name: Genus + specific epithet (Carolus Linnaeus).' },
  { front: 'Gametophyte', back: 'Haploid (n) generation; makes gametes by mitosis.' },
  { front: 'Sporophyte', back: 'Diploid (2n) generation; makes spores by meiosis.' },
  { front: 'Coelom', back: 'The fluid-filled space between the gut and the body wall.' },
  { front: 'Protostome vs deuterostome', back: 'Protostome: mouth forms first. Deuterostome: anus forms first.' }
]" />

## Practice questions

Try these without looking at the notes first. (The objective questions are in the **Quick check** at the end of each subtopic.)

### Part B: Short answer questions

1. Differentiate between genetic diversity and species diversity. <Badge type="gray" text="2 marks" />
2. Write the scientific name of durian correctly, then state two rules of binomial nomenclature. <Badge type="gray" text="3 marks" />
3. State three differences between Domain Bacteria and Domain Archaea. <Badge type="gray" text="3 marks" />
4. Explain how *Rhizobium* sp. helps recycle nitrogen in the ecosystem. <Badge type="gray" text="3 marks" />
5. Explain how eutrophication can lead to the death of aquatic organisms. <Badge type="gray" text="4 marks" />
6. Describe alternation of generations in plants. You may use a labelled diagram. <Badge type="gray" text="4 marks" />
7. Name the sexual spore and the structure that produces it for Zygomycota, Ascomycota and Basidiomycota. <Badge type="gray" text="3 marks" />
8. State four unique characteristics of Arthropoda that help them survive in many habitats. <Badge type="gray" text="4 marks" />
9. State three functions of the coelom. <Badge type="gray" text="3 marks" />

### Part C: Higher order thinking

1. A student finds a small green plant growing in a damp, shaded drain. It has no true roots and dries up quickly when moved to a sunny spot. <Badge type="gray" text="7 marks" />
   - (a) Identify the plant group.
   - (b) Explain, using two features, why this plant can only live in damp places.
   - (c) Suggest two features of angiosperms that allow them to live in much drier places.
2. Penicillin kills bacteria by stopping them from building peptidoglycan in their cell wall. <Badge type="gray" text="7 marks" />
   - (a) Predict whether penicillin would work against Archaea such as *Sulfolobus*. Explain.
   - (b) Suggest why penicillin is usually more effective against Gram-positive than Gram-negative bacteria.
   - (c) *Penicillium* is a fungus. Explain why penicillin does not harm the fungus that produces it.

</Topic>
