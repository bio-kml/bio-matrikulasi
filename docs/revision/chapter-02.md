---
description: "Ecosystems, energy flow, biogeochemical cycles, conservation and population ecology."
icon: sprout
color: teal
title: "Chapter 2: Ecology"
outline: [2, 3]
highlighter: true
---

# Chapter 2: Ecology

Revision notes. Tick off each learning outcome once you can answer it without looking.

<Badge type="teal" text="2.1 Ecosystem" /> <Badge type="yellow" text="2.2 Energy flow" /> <Badge type="blue" text="2.3 Biogeochemical cycles" /> <Badge type="green" text="2.4 Conservation" /> <Badge type="purple" text="2.5 Population ecology" />

<Topic color="teal">

## 2.1 Ecosystem Concept

<Checklist title="Learning outcomes">

- (a) Define ecosystem. <Badge text="C1" />
- (b) Describe lake ecosystem based on: (i) light penetration (photic and aphotic/profundal); (ii) distance from shore (littoral, limnetic). <Badge text="C2" />
- (c) Describe terrestrial ecosystem of tropical rainforest stratification (emergent, canopy, understory, shrub, ground layer/forest floor). <Badge text="C2" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Photosynthesis vs respiration', note: '<b>Photosynthesis</b> uses light energy to make glucose from CO₂ and water, releasing O₂. <b>Respiration</b> breaks glucose down to release energy, giving off CO₂. Both happen in plants; only respiration needs no light.' },
  { term: 'Producers, consumers, decomposers', note: '<b>Producers</b> (plants, algae) make their own food. <b>Consumers</b> eat other organisms. <b>Decomposers</b> (bacteria, fungi) break down dead matter.' },
  { term: 'Habitat and community', note: 'A <b>habitat</b> is the place where an organism lives. A <b>community</b> is all the populations of different species living in one area.' }
]" />

### What is an ecosystem?

<Definition term="Ecosystem">all the organisms in a given area as well as the abiotic factors with which they interact.</Definition>

| Component | Meaning | Examples |
|---|---|---|
| Biotic | living things | plants, animals, decomposers |
| Abiotic | non-living things | hydrosphere (water), atmosphere (air), lithosphere (soil and rock) |

- Biotic and abiotic components interact. This affects every community and the environment.
- Abiotic factors limit the types of organisms that can survive in a habitat.
- The interactions can be seen in **energy flow** (2.2) and **nutrient cycling** (2.3).

### Lake ecosystem

A lake is divided into zones using two criteria: **light penetration** and **distance from shore**.

<LakeZonesDiagram />

### Based on light penetration

| | Photic zone | Aphotic / profundal zone |
|---|---|---|
| Position | upper layer (surface waters) | below the photic zone |
| Light | enough light for photosynthesis | not enough light for photosynthesis |
| Rates | rate of photosynthesis **>** rate of respiration | rate of respiration **>** rate of photosynthesis |
| Organisms | producers (plants, phytoplankton) and consumers | detritivores that feed on dead organisms |
| Note | split into littoral and limnetic zones | absent in shallow lakes, because light reaches the bottom |

::: tip Quick reminder: detritivore
A consumer that gets its energy and nutrients from non-living organic material, such as dead bodies, fallen leaves and wastes.
:::

### Compensation point

The boundary between the photic and aphotic zones is the **(light) compensation point**: the light intensity where the **rate of photosynthesis is equal to the rate of respiration**. Here, the CO₂ released by respiration equals the CO₂ used in photosynthesis.

<Flow :steps="['Bright light near the surface: photosynthesis > respiration (photic zone)', 'Light gets weaker with depth', 'Compensation point: photosynthesis = respiration', 'Dim or no light, deeper: respiration > photosynthesis (aphotic zone)']" />

### Based on distance from shore (the photic zone only)

| | Littoral zone | Limnetic zone |
|---|---|---|
| Position | well-lit, shallow water near the shore | well-lit, open surface water far from the shore |
| Main producers | rooted and floating aquatic plants | phytoplankton |
| Other organisms | floating plants (water lilies, duckweed), emergent and submerged plants, insect larvae | zooplankton, fish |

<CardGrid>
  <InfoCard title="Roles of aquatic plants" tag="Littoral zone" icon="sprout" color="teal">

  - produce oxygen
  - food for animals
  - shelter for animals: insects, crustaceans, frogs and fish

  </InfoCard>
  <InfoCard title="Roles of phytoplankton" tag="Limnetic zone" icon="droplets" color="teal">

  - producer: the base of the food chain in the lake
  - produce oxygen

  </InfoCard>
</CardGrid>

### Benthic zone

- The bottom of every aquatic zone, shallow (some light) or deep (no light).
- **Zone of decomposition**: dead plants and animals sink, collect and become sediment.
- Its energy comes from organic matter drifting down from the littoral and limnetic zones.
- Oxygen-consuming organisms dominate. Its organisms are the **benthos**, e.g. decomposing bacteria and fungi.

### Tropical rainforest

The richest and most diverse biome in structure and species. It has high temperature, high humidity and heavy rain all year. It is **stratified into five layers**:

<RainforestLayers />

| Layer (top to bottom) | Features | Plants | Animals |
|---|---|---|---|
| Emergent layer | crowns of the oldest, tallest trees, **40 m or more**; direct sunlight, warmest, lowest humidity, strongest wind | Tualang, Meranti, Cengal | eagles, monkeys |
| Canopy | **30 to 35 m**; receives much sunlight | epiphytes, e.g. orchids | hornbills, insects, bats |
| Understory | receives little light; many plants climb up host trees | lianas (woody vines), palms | bats |
| Shrub layer | smaller plants; receives little light | ferns (pteridophytes) | tapir, deer |
| Ground layer / forest floor | dark and damp; dead matter is decomposed quickly by bacteria, fungi, insects and detritivores, so **nutrients are recycled fast** | mosses (bryophytes), non-woody plants | ants, centipedes |

::: tip Quick reminder: epiphyte
A plant that makes its own food but grows on the surface of another plant, usually on branches or trunks, only for support.
:::

### Quick check

<Quiz question="Which statement defines an ecosystem?" :options="['All the individuals of one species in an area', 'All the organisms in a given area and the abiotic factors they interact with', 'All the non-living factors of a habitat', 'The feeding relationships in a community']" :answer="1" explain="Ecosystem: all the organisms in a given area as well as the abiotic factors with which they interact." />

<Quiz question="In which lake zone is the rate of respiration higher than the rate of photosynthesis?" :options="['Littoral zone', 'Limnetic zone', 'Photic zone', 'Aphotic zone']" :answer="3" explain="Below the compensation point there is not enough light, so respiration > photosynthesis." />

<Quiz question="Which rainforest layer receives direct sunlight and has the strongest winds?" :options="['Emergent layer', 'Canopy', 'Understory', 'Shrub layer']" :answer="0" explain="Emergent layer: direct sunlight, warmest, lowest humidity, strongest wind." />

<StickyNote source="Shenkin, A. et al., Frontiers in Forests and Global Change, 2019; University of Nottingham, 2019.">

The world's tallest known tropical tree is in Sabah. Named Menara (Malay for "tower"), it is a yellow meranti (*Shorea faguetiana*) in the Danum Valley Conservation Area, measured at 100.8 m. It is an emergent tree more than twice the 40 m mark for this layer.

</StickyNote>

</Topic>

<Topic color="yellow">

## 2.2 Energy Flow Through Ecosystem

<Checklist title="Learning outcomes">

- (a) State the type of ecological pyramids in relation to trophic level. <Badge text="C1" />
- (b) Explain the energy transfer in ecological pyramids in relation to trophic level. <Badge text="C3" />
- (c) Calculate energy loss in each trophic level. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Food chains', note: 'A food chain shows who eats whom, starting with a producer. The arrows show the direction energy flows: grass → grasshopper → frog → snake.' },
  { term: 'Energy changes form', note: 'Energy is not made or destroyed, only converted: light → chemical energy (in food) → heat. Heat given off cannot be used again by living things.' },
  { term: 'Working out a percentage', note: 'Percentage = (part ÷ whole) × 100. For example, 2 out of 8 is (2 ÷ 8) × 100 = 25%.' }
]" />

### Trophic level and ecological pyramids

<Definition term="Trophic level">the position (stage) that an organism occupies in a food chain.</Definition>

A food chain usually has four or five trophic levels.

| Type of pyramid | What it shows at each trophic level | Shape |
|---|---|---|
| Pyramid of number | number of individual organisms | usually upright; can be **inverted** (e.g. one tree feeds many insects) |
| Pyramid of biomass | total biomass of all organisms | usually upright |
| Pyramid of energy | energy content of all organisms | **always upright** |

::: tip Quick reminder: biomass
The total mass of organic matter in a group of organisms in a particular habitat, usually given as dry mass.
:::

### Energy transfer between trophic levels

<EnergyPyramid />

- **Sun**: the ultimate source of energy (light).
- Producers convert only about **1%** of the visible light that reaches them into chemical energy.
- **Primary consumers** (herbivores) get about 10% of the energy in the producers; about 90% is lost.
- **Secondary consumers** get about 10% of the energy in the herbivores; about 90% is lost.
- **Tertiary consumers** get about 10% again.

::: tip Remember
Only about **10%** of energy is transferred to the next trophic level. About **90%** is lost at each transfer.
:::

### Why energy is reduced at each trophic level

| Reason (starting from producers) | Example | Passed on to detritivores and decomposers? |
|---|---|---|
| not consumed (inedible) | bones, plant roots | yes, after the organism dies |
| not digested | cellulose (leaves the body in faeces) | yes |
| lost in excretion and egestion | urine, faeces | yes |
| lost in respiration | lost as heat | **no**: heat cannot be used by other organisms |

### Why a food chain has no more than five trophic levels

<Flow :steps="['A large amount of energy is lost at each transfer, mostly as heat from respiration', 'Each trophic level receives less energy than the level below it', 'After the 5th trophic level, only a small amount of energy is left', 'This energy is not enough to support another trophic level']" />

So a **shorter food chain loses less energy**: more of the energy in the producers reaches the top consumer.

### Calculating energy loss

$$
\text{Percentage of energy lost} = \frac{\text{initial energy} - \text{final energy}}{\text{initial energy}} \times 100
$$

::: tip Worked example
8 204 J is passed from 42 424 J in the producers to the next trophic level. Calculate the energy lost.

1. Energy lost = 42 424 J − 8 204 J = **34 220 J**
2. Percentage lost = (34 220 J ÷ 42 424 J) × 100
3. = **80.7%** (so only 19.3% is transferred)
:::

### Quick check

<Quiz question="Which ecological pyramid is always upright?" :options="['Pyramid of number', 'Pyramid of biomass', 'Pyramid of energy', 'All of them']" :answer="2" explain="The pyramid of energy is always upright; a pyramid of number can be inverted." />

<Quiz question="Producers hold 25 000 kJ. Primary consumers receive 2 000 kJ. What percentage of energy is lost?" :options="['8.0%', '12.5%', '80.0%', '92.0%']" :answer="3" explain="Lost = 25 000 − 2 000 = 23 000 kJ; (23 000 ÷ 25 000) × 100 = 92.0%." />

<Quiz question="Which energy loss can NOT be passed on to decomposers?" :options="['Energy in faeces', 'Energy in urine', 'Heat from respiration', 'Energy in dead leaves']" :answer="2" explain="Heat lost in respiration cannot be used by other organisms." />

<StickyNote source="Department of Wildlife and National Parks (PERHILITAN), First National Tiger Survey, 2016–2020; WCS Malaysia.">

A top predator sits on the smallest block of the energy pyramid, so few can live in one area. Malaysia's first National Tiger Survey (2016 to 2020) estimated fewer than 150 Malayan tigers left in the wild in Peninsular Malaysia.

</StickyNote>

</Topic>

<Topic color="blue">

## 2.3 Biogeochemical Cycle

<Checklist title="Learning outcomes">

- (a) State biogeochemical cycle components (cycling pool and reservoir pool). <Badge text="C1" />
- (b) State examples of biogeochemical cycle (nitrogen cycle, carbon cycle, phosphorus cycle and sulphur cycle). <Badge text="C1" />
- (c) Explain nitrogen cycle and carbon cycle. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Organic vs inorganic', note: '<b>Organic</b> compounds are carbon-based molecules made by living things, e.g. glucose, proteins. <b>Inorganic</b> substances include CO₂, water and mineral ions such as nitrate.' },
  { term: 'Mineral ions from the soil', note: 'Plant roots absorb ions dissolved in soil water, e.g. nitrate (NO₃⁻), ammonium (NH₄⁺), phosphate (PO₄³⁻) and sulphate (SO₄²⁻).' },
  { term: 'Oxidation and reduction', note: '<b>Oxidation</b>: gain of oxygen or loss of electrons. <b>Reduction</b>: loss of oxygen or gain of electrons.' },
  { term: 'Aerobic vs anaerobic', note: '<b>Aerobic</b> means with oxygen; <b>anaerobic</b> means without oxygen.' }
]" />

### Biogeochemical cycle

<Definition term="Biogeochemical cycle">the cycling of chemical elements from the environment (abiotic) to organisms (biotic) and back to the environment.</Definition>

| | Reservoir pool | Cycling pool |
|---|---|---|
| Component | abiotic | biotic |
| Meaning | part of the Earth that stores the element (a storehouse) | the element moving through organisms |
| Carbon example | CO₂ gas in the atmosphere | carbon in organic compounds of plants and animals |

### Four examples of biogeochemical cycles

| Cycle | Reservoir pool | How it enters the cycling pool |
|---|---|---|
| Nitrogen cycle | atmosphere, as N₂ gas (about 80% of air) | N₂ is fixed; plants absorb NH₄⁺ and NO₃⁻ from soil; animals eat plants or other animals |
| Carbon cycle | atmosphere (CO₂); oceans (dissolved, as HCO₃⁻ and CO₃²⁻); limestone (CaCO₃); fossil fuels; soil | photosynthetic organisms fix CO₂ into organic compounds; these pass to animals, fungi, heterotrophic protists and prokaryotes |
| Phosphorus cycle | sedimentary rocks of marine origin; phosphate (PO₄³⁻) in soil and dissolved in oceans | plants absorb PO₄³⁻ from soil to make organic compounds; animals eat plants |
| Sulphur cycle | mostly rocks; a small amount in the atmosphere as SO₂ | plants absorb sulphate (SO₄²⁻) from soil to make organic compounds; passed along the food chain |

**Biological importance:**

<CardGrid>
  <InfoCard title="Nitrogen" icon="leaf" color="blue">

  amino acids, proteins, nucleic acids, chlorophyll

  </InfoCard>
  <InfoCard title="Carbon" icon="atom" color="blue">

  framework of carbohydrates, proteins, lipids, nucleic acids

  </InfoCard>
  <InfoCard title="Phosphorus" icon="dna" color="blue">

  nucleic acids, phospholipids, ATP

  </InfoCard>
  <InfoCard title="Sulphur" icon="layers" color="blue">

  certain amino acids (e.g. cysteine) and proteins

  </InfoCard>
</CardGrid>

### Nitrogen cycle

Nitrogen is cycled between abiotic and biotic components. About 80% of the atmosphere is N₂, but **plants cannot use N₂ directly**. The cycle has **five major steps**. Scroll through them:

<ScrollTimeline>
<ScrollStep date="Step 1" title="Nitrogen fixation">

**N₂ → NH₃ or NO₃⁻**, which plants can use.

By atmospheric, industrial or biological fixation (see below).

</ScrollStep>
<ScrollStep date="Step 2" title="Nitrification">

**NH₃ / NH₄⁺ → NO₂⁻ → NO₃⁻** (oxidation).

Two kinds of nitrifying bacteria in soil: *Nitrosomonas* sp. or *Nitrosococcus* sp. (to NO₂⁻); *Nitrobacter* sp. (to NO₃⁻).

</ScrollStep>
<ScrollStep date="Step 3" title="Assimilation">

Roots absorb NO₃⁻ and NH₄⁺; nitrogen is built into **proteins, nucleic acids and chlorophyll**.

Plants; animals assimilate nitrogen by eating plants.

</ScrollStep>
<ScrollStep date="Step 4" title="Ammonification">

Nitrogen in wastes (urea in urine, uric acid in bird waste) and dead organisms **→ NH₃ / NH₄⁺**, returned to soil and then nitrified again.

Decomposers: aerobic and anaerobic bacteria and fungi.

</ScrollStep>
<ScrollStep date="Step 5" title="Denitrification">

**NO₃⁻ → N₂ gas** (reduction), returned to the atmosphere, closing the cycle.

Anaerobic denitrifying bacteria, e.g. *Pseudomonas* sp., *Achromobacter* sp., *Bacillus* sp.; they use NO₃⁻ as the electron acceptor in anaerobic respiration.

</ScrollStep>
</ScrollTimeline>

::: tip The cycle in one line
N₂ in the atmosphere (reservoir pool) → **fixation** → NH₃ / NH₄⁺ in soil → **nitrification** → NO₃⁻ in soil → **assimilation** → organic nitrogen in plants and animals → **ammonification** → NH₃ / NH₄⁺; **denitrification** returns NO₃⁻ to the air as N₂.
:::

::: tip Quick reminder: anaerobic respiration
Respiration that uses an electron transport chain with a final electron acceptor other than oxygen, for example nitrate.
:::

### Three types of nitrogen fixation

<Tabs label="Nitrogen fixation">
<Tab label="Atmospheric">

<Flow :steps="['Lightning: N₂ in the air is oxidised by O₂', 'Nitrogen dioxide (NO₂) forms', 'NO₂ dissolves in rain: 2NO₂ + H₂O → HNO₂ + HNO₃ (nitrous acid + nitric acid: acid rain)', 'The acids react with compounds in soil, forming NO₃⁻']" />

</Tab>
<Tab label="Industrial">

<Flow :steps="['Haber process: N₂ + H₂ → NH₃', 'NH₃ + nitric acid or phosphoric acid', 'Ammonium nitrate or ammonium phosphate fertiliser', 'Used by plants']" />

</Tab>
<Tab label="Biological: symbiotic">

<Flow :steps="['<i>Rhizobium</i> sp. lives in the root nodules of legume plants', 'Converts N₂ into NH₃', 'Plant gets nitrogen; bacteria get carbohydrates']" />

</Tab>
<Tab label="Biological: non-symbiotic">

<Flow :steps="['Free-living soil bacteria, e.g. <i>Azotobacter</i> sp. and <i>Clostridium</i> sp.', 'Convert N₂ into NH₃', 'Most soils are slightly acidic: NH₃ + H⁺ → NH₄⁺', 'Some NH₄⁺ is used by plants; most is used by nitrifying bacteria']" />

</Tab>
</Tabs>

::: tip Quick reminder: symbiosis (mutualism)
Symbiosis is two species living in close contact. In mutualism, both species benefit, like legumes and *Rhizobium*.
:::

### Carbon cycle

Carbon is cycled between abiotic and biotic components. It is essential for proteins, nucleic acids, lipids and carbohydrates.

<Flow :steps="['CO₂ in the atmosphere (reservoir pool)', 'Carbon fixation (photosynthesis): organic compounds (e.g. carbohydrate) in producers such as plants and algae', 'Feeding: organic compounds in consumers and decomposers (cycling pool)', 'Respiration, decomposition, combustion, weathering: CO₂ returned to the atmosphere']" />

$$
\mathrm{6CO_2 + 6H_2O \longrightarrow C_6H_{12}O_6 + 6O_2}
$$

| Process that returns CO₂ | What happens |
|---|---|
| Cellular respiration | plants and animals use carbohydrate as fuel; CO₂ is released |
| Decomposition | bacteria and fungi break down dead plants and animals; CO₂ is released |

<Tabs label="Combustion and weathering">
<Tab label="Combustion">

<Flow :steps="['Plants buried under soil millions of years ago (marine organisms for oil)', 'Form fossil fuels: coal, peat, oil', 'Combustion of fossil fuels and wood', 'CO₂ returned to the atmosphere']" />

</Tab>
<Tab label="Weathering">

<Flow :steps="['Mollusc shells contain calcium carbonate', 'Shells sink when molluscs die and form limestone', 'Chemical and physical weathering slowly erodes limestone', 'Carbon returns to the atmosphere and water']" />

</Tab>
</Tabs>

### Quick check

<Quiz question="What is the reservoir pool of the nitrogen cycle?" :options="['Soil', 'Atmosphere', 'Rocks', 'Living organisms']" :answer="1" explain="The reservoir pool is the atmosphere, as N₂ gas (about 80% of air)." />

<Quiz question="Which bacterium oxidises nitrite ions to nitrate ions?" :options="['Rhizobium sp.', 'Nitrosomonas sp.', 'Nitrobacter sp.', 'Pseudomonas sp.']" :answer="2" explain="Nitrification: Nitrosomonas or Nitrosococcus make NO₂⁻; Nitrobacter makes NO₃⁻." />

<Quiz question="Which processes return CO₂ to the atmosphere? I respiration, II combustion, III photosynthesis, IV weathering" :options="['I and II only', 'I, II and IV only', 'II and III only', 'I, II, III and IV']" :answer="1" explain="Respiration, decomposition, combustion and weathering return CO₂; photosynthesis removes it." />

<StickyNote source="UN Environment Programme (UNEP), 2022; Al Jazeera, Malaysia’s burning swamps and choking haze, 2016.">

Peatlands cover only about 3% of the Earth's land, yet they store more than twice as much carbon as all the world's forests. Malaysia has large peat swamp forests. When peat is drained and burned, this stored carbon returns to the air as CO₂, and much of the haze in our region comes from burning peat.

</StickyNote>

</Topic>

<Topic color="green">

## 2.4 Conservation and Management

<Checklist title="Learning outcomes">

- (a) Describe sustainable development. <Badge text="C2" />
- (b) Explain threats to biodiversity in Malaysia. <Badge text="C3" />
- (c) Describe conservation of diversity in Malaysia. <Badge text="C2" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Biodiversity (Chapter 1)', note: 'The variety of life at three levels: <b>genetic</b>, <b>species</b> and <b>ecosystem</b> diversity.' },
  { term: 'Renewable resources', note: 'Resources that can be replaced naturally, such as forests and fish, but only if we do not use them faster than they recover.' },
  { term: 'Habitat', note: 'The place where an organism lives and finds food, shelter and mates. Losing the habitat means losing the species that depend on it.' }
]" />

### Sustainable development

<Definition term="Sustainable development">development that meets the needs of the present without compromising the ability of future generations to meet their own needs.</Definition>

<CardGrid>
  <InfoCard title="Sustainable forestry" icon="leaf" color="green">

  Retain seed (mother) trees; cutting limits; forest reserves; strip cutting; reforestation.

  </InfoCard>
  <InfoCard title="Sustainable agriculture" icon="sprout" color="green">

  Biological control; crop rotation; row planting; contour farming; strip farming; terracing; control the use of pesticides and fertilisers.

  </InfoCard>
  <InfoCard title="Sustainable fishery" icon="droplets" color="green">

  Open and closed fishing seasons; limit fleet size and days at sea; trawling in deep sea only; weight quota (limit the mass of fish caught); limit fishing areas; limit net size; aquaculture; e.g. the Tagal system in Sabah.

  </InfoCard>
</CardGrid>

### Threats to biodiversity in Malaysia

::: tip Quick reminder: biodiversity
The variety of life on Earth, at three levels: genetic diversity, species diversity and ecosystem diversity.
:::

| Term | Meaning | Malaysian examples |
|---|---|---|
| Extinct | the **end of a species**: the last individual has died | *Plectostoma sciaphilum* (land snail); *Begonia eiromischa* (woolly-stalked begonia); the Sumatran rhino is extinct in Malaysia (last one died in 2019) |
| Extant | still exists (not extinct) | most living species |
| Endangered | extant but facing a **very high risk of extinction** because only a few individuals are left | Malayan tiger, Malayan tapir, orang utan, Asian elephant, black shrew |

### Examples: what threatens them

| Species | Where | Threats |
|---|---|---|
| Leatherback turtle | Terengganu beaches (once a major nesting site; now hardly any nests) | **coastal development**, **marine habitat destruction**, **pollution**, accidental capture in fishing nets |
| Milky stork | mangroves; fewer than 10 recorded in Matang Mangrove Forest (2012) | pollution by hazardous chemicals, **habitat destruction**, **poaching**, high predation and disturbance, lack of mature trees for nesting |
| Slipper orchid | *Paphiopedilum rothschildianum*, Mount Kinabalu; very valuable to collectors | **habitat destruction**, illegal collection and trade |

### Conservation of biodiversity in Malaysia

| | Preservation | Conservation |
|---|---|---|
| Meaning | preventive actions to limit damage to the biosphere | protection, management and renewal of natural resources |

<Tabs label="In situ and ex situ">
<Tab label="In situ">

- **Meaning:** on-site: protecting an endangered species in its **natural habitat**, so it can grow in large numbers.
- **How:** protect the habitat or the species from threats such as predators.
- **Example:** **National park**: land protected by law from pollution and human destruction, e.g. Endau-Rompin National Park (Johor).

</Tab>
<Tab label="Ex situ">

- **Meaning:** off-site: removing part of the population from a threatened habitat and placing it in a **new location**.
- **How:** keep, grow or breed the species away from the wild.
- **Examples:**
  - **Botanical garden**: plants grown and displayed for research and education, e.g. Rimba Ilmu (UM, Kuala Lumpur, 1974), with Malaysian, Indonesian and other tropical flora.
  - **Arboretum**: a botanical garden that specialises in trees, e.g. arboreta in FRIM.
  - **Zoo**: animals kept, displayed and sometimes bred, e.g. Zoo Negara, Zoo Taiping, Zoo Melaka.

</Tab>
</Tabs>

### Quick check

<Quiz question="Which is an example of ex situ conservation?" :options="['Endau-Rompin National Park', 'Rimba Ilmu', 'A forest reserve', 'A Tagal red zone']" :answer="1" explain="Rimba Ilmu is a botanical garden: plants kept away from the wild (off-site)." />

<StickyNote source="Academy of Sciences Malaysia (ASM) Factsheet: Tagal System, 2024; Sabah Fisheries Department, reported in The Borneo Post, 2025.">

"Tagal" means "do not" (to prohibit) in Kadazandusun. A river is split into a red zone (no fishing), a yellow zone (fishing only at community celebrations) and a green zone (open fishing). Sabah had 642 Tagal sites on more than 232 rivers by 2025.

</StickyNote>

</Topic>

<Topic color="purple">

## 2.5 Population Ecology

<Checklist title="Learning outcomes">

- (a) Explain biotic potential and environmental resistance and their effect on population growth. <Badge text="C3" />
- (b) Explain carrying capacity and its importance. <Badge text="C3" />
- (c) Describe natality and mortality and their effects on the rate of population growth. <Badge text="C2" />
- (d) Explain population growth curves: (i) exponential growth curve: lag phase, log phase (human population); (ii) logistic growth curve: lag phase, log phase, decelerating phase, stationary phase (*Paramecium* sp. population). <Badge text="C3" />
- (e) Explain the limiting factors affecting the population size: (i) density-dependent factors; (ii) density-independent factors. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Reading a graph', note: 'The x-axis is usually time; the y-axis is what changes (here, population size). A <b>steeper</b> curve means <b>faster</b> growth; a flat curve means no change.' },
  { term: 'Exponential means multiplying', note: 'In exponential growth the population multiplies by the same factor each time, e.g. doubling: 2 → 4 → 8 → 16 → 32. It starts slowly, then shoots up.' },
  { term: 'Competition, predation, parasitism', note: '<b>Competition</b>: organisms need the same limited resource. <b>Predation</b>: one animal hunts and eats another. <b>Parasitism</b>: one organism lives on or in a host and harms it.' }
]" />

<Definition term="Population ecology">the study of interactions between organisms in a population and their environment.</Definition>

Population growth is the change (increase or decrease) in population size.

::: tip Quick reminder: population
A group of individuals of one species living in the same general area.
:::

### Biotic potential and environmental resistance

<Definition term="Biotic potential (r)">the maximum rate of increase in population size under optimal environmental conditions.</Definition>

It depends on: the age when reproduction starts; the number of offspring each time; how often reproduction happens; and the survival rate of the offspring.

<Definition term="Environmental resistance">all the factors that prevent a population from growing continually to reach its biotic potential.</Definition>

| | Biotic factors | Abiotic factors |
|---|---|---|
| Meaning | relationships between living organisms | factors of the non-living, physical environment |
| Examples | predation, competition, parasitism, disease | limited food, limited water, light, limited space (overcrowding), shelter |

### Carrying capacity (K)

<Definition term="Carrying capacity (K)">the maximum population size that a particular environment can support.</Definition>

It depends on: the resources available (e.g. nutrients, water); the size of the population or community; and how much each individual uses. **K is dynamic**: it changes when the environment changes.

<Tabs label="With and without environmental resistance">
<Tab label="Zero resistance">

<Flow :steps="['Zero environmental resistance', 'Population grows exponentially at its full biotic potential']" />

</Tab>
<Tab label="With resistance">

<Flow :steps="['Population grows; environmental resistance increases', 'Birth rate falls, death rate rises', 'Population growth slows and size is controlled by what the environment can support (K)']" />

</Tab>
</Tabs>

**Importance of carrying capacity:**

- It **keeps population size at equilibrium**.
- **N < K**: plenty of resources, growth increases.
- **N = K**: growth slows to zero.
- **N > K**: environmental resistance rises, growth decreases.
- **K rises**: N can rise.

### Natality and mortality

| Term | Meaning |
|---|---|
| Natality (birth rate) | the rate at which individuals produce offspring |
| Mortality (death rate) | the rate at which individuals die |

| Effect on population | Result |
|---|---|
| natality > mortality | population size **increases** |
| natality < mortality | population size **decreases** |
| natality = mortality | population size is **stable** |

Natality and mortality **balance population growth**, so the population oscillates around K: equilibrium.

### Population growth curves

Two basic forms: the **exponential growth curve** (e.g. human population) and the **logistic growth curve** (e.g. *Paramecium* sp. population). Switch between them and tap each phase:

<PopulationGrowthDiagram />

| | Exponential (J-shaped) | Logistic (sigmoid, S-shaped) |
|---|---|---|
| Example | human population (7.5 billion in 2017) | *Paramecium* sp. in a small culture |
| Phases | lag, log | lag, log, decelerating, stationary |
| Limit | unlimited growth | levels off at carrying capacity (K) |

### Limiting factors

| | Density-dependent factors | Density-independent factors |
|---|---|---|
| Meaning | their effect **changes as population density changes** | their effect **does not depend on population size**; often unexpected events |
| Examples | competition; territorial behaviour; predation; disease and parasitism; accumulation of toxic waste | climate or weather (killing frost, heatwave); natural disasters (flood, forest fire, tsunami); use of pesticides by humans |

::: tip Quick reminder: population density
The number of individuals per unit area or per unit volume.
:::

### Density-dependent factors in action

**Competition** for resources (food, light, space) can be **intraspecific** (within the same species) or **interspecific** (between different species).

<Flow :steps="['Population density increases; resources are limited', 'Competition increases', 'Population growth is limited']" />

Grown alone, *Paramecium aurelia* and *P. caudatum* both show sigmoid growth. Grown together, *P. aurelia* is **the better competitor** and *P. caudatum* dies out.

<Tabs label="Density-dependent factors">
<Tab label="Territorial behaviour">

<Flow :steps="['Each individual defends a territory; neighbouring territories of one species barely overlap', 'Number of territories is limited', 'Individuals without a territory often fail to breed or die', 'Population size is limited']" />

</Tab>
<Tab label="Predation">

<Flow title="e.g. snowshoe hare and lynx" :steps="['Prey population increases', 'More food: predator population increases', 'Prey population drops sharply', 'Less food: predator population falls; prey recovers and the cycle repeats']" />

</Tab>
<Tab label="Disease and parasitism">

<Flow :steps="['Population size increases', 'Transmission of disease or parasites increases', 'Mortality increases']" />

</Tab>
<Tab label="Toxic waste">

<Flow :steps="['Population increases', 'Waste products accumulate (e.g. ethanol made by yeast, <i>Saccharomyces cerevisiae</i>)', 'Waste is toxic to the population', 'Mortality increases']" />

</Tab>
</Tabs>

### Quick check

<Quiz question="In which phase of a logistic growth curve is natality equal to mortality?" :options="['Lag phase', 'Log phase', 'Decelerating phase', 'Stationary phase']" :answer="3" explain="Stationary phase: natality = mortality; size is stable and oscillates around K." />

<Quiz question="Which is a density-independent factor?" :options="['Competition', 'Predation', 'Flood', 'Accumulation of toxic waste']" :answer="2" explain="Natural disasters such as floods act regardless of population size." />

<StickyNote source="Malaysian Palm Oil Board (MPOB), reported by Free Malaysia Today, 2020.">

Malaysian oil palm estates put up nest boxes for barn owls to control rats, a classic predator–prey limiting factor and a form of biological control. The Malaysian Palm Oil Board reports that one barn owl can eat up to two rats a day, while a snake eats only about one a week.

</StickyNote>

</Topic>

<Topic color="teal">

## Quick revision: key terms

Click a card to flip it; use the arrows to move on.

<Flashcards :cards="[
  { front: 'Ecosystem', back: 'All the organisms in a given area as well as the abiotic factors with which they interact.' },
  { front: 'Compensation point', back: 'The light intensity where the rate of photosynthesis is equal to the rate of respiration.' },
  { front: 'Trophic level', back: 'The position (stage) that an organism occupies in a food chain.' },
  { front: 'Biogeochemical cycle', back: 'The cycling of chemical elements from the environment to organisms and back to the environment.' },
  { front: 'Reservoir pool vs cycling pool', back: 'Reservoir: abiotic storehouse of an element. Cycling: the element moving through organisms.' },
  { front: 'Sustainable development', back: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
  { front: 'In situ vs ex situ', back: 'In situ: protecting a species in its natural habitat. Ex situ: moving part of the population to a new location.' },
  { front: 'Biotic potential (r)', back: 'The maximum rate of increase in population size under optimal environmental conditions.' },
  { front: 'Environmental resistance', back: 'All the factors that prevent a population from growing continually to reach its biotic potential.' },
  { front: 'Carrying capacity (K)', back: 'The maximum population size that a particular environment can support.' }
]" />

## Practice questions

Try these without looking at the notes first. (The objective questions are in the **Quick check** at the end of each subtopic.)

### Part B: Short answer questions

1. Define ecosystem. Give one example of a biotic component and one of an abiotic component. <Badge type="gray" text="3 marks" />
2. Describe the photic zone of a lake. <Badge type="gray" text="3 marks" />
3. Describe the canopy and the ground layer of a tropical rainforest. <Badge type="gray" text="4 marks" />
4. Explain why a food chain does not usually have more than five trophic levels. <Badge type="gray" text="4 marks" />
5. A producer level holds 30 000 J. Only 2 700 J passes to the primary consumers. Calculate the percentage of energy lost. Show your working. <Badge type="gray" text="2 marks" />
6. State the difference between a reservoir pool and a cycling pool. Give one example of each for the carbon cycle. <Badge type="gray" text="3 marks" />
7. Explain nitrification in the nitrogen cycle. <Badge type="gray" text="3 marks" />
8. Describe in situ and ex situ conservation. Give one Malaysian example of each. <Badge type="gray" text="4 marks" />
9. Explain the stationary phase of a logistic growth curve. <Badge type="gray" text="3 marks" />
10. Explain how disease acts as a density-dependent factor. <Badge type="gray" text="3 marks" />

### Part C: Higher order thinking questions

1. **Scenario 1.** An oil palm estate in Johor loses fruit to rats. The manager stops using rat poison and puts up barn owl nest boxes. The food chain is: oil palm fruit, then rat, then barn owl.
   - (a) State the trophic level of the barn owl in this food chain. <Badge type="gray" text="1 mark" />
   - (b) Explain why the estate can support far fewer barn owls than rats. <Badge type="gray" text="3 marks" />
   - (c) Explain how predation by barn owls acts as a density-dependent factor on the rat population. <Badge type="gray" text="3 marks" />
   - (d) Suggest why this method is an example of sustainable agriculture. <Badge type="gray" text="2 marks" />
2. **Scenario 2.** Part of a peat swamp forest in Selangor is drained and burned to clear land for farming. Thick haze covers nearby towns for several days.
   - (a) Name the process in the carbon cycle that takes place when peat burns. <Badge type="gray" text="1 mark" />
   - (b) Explain how draining and burning the peat swamp changes the carbon cycle. <Badge type="gray" text="3 marks" />
   - (c) Explain how replanting trees in the damaged area helps to restore the carbon cycle. <Badge type="gray" text="2 marks" />
   - (d) Explain one threat to biodiversity in Malaysia shown in this scenario. <Badge type="gray" text="2 marks" />

</Topic>
