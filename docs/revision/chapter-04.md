---
title: "Chapter 4: Biocatalysis"
outline: [2, 3]
highlighter: true
---

# Chapter 4: Biocatalysis

Revision notes. Tick off each learning outcome once you can answer it without looking.

<Badge type="green" text="4.1 Enzymes and how they work" /> <Badge type="yellow" text="4.2 Cofactors" /> <Badge type="red" text="4.3 Inhibitors" />

<Topic color="green">

## 4.1 Properties of enzyme and mechanism of actions

<Checklist title="Learning outcomes">

- (a) Describe the structure of enzyme as globular protein that can catalyse metabolic reaction.
- (b) Describe the six classes of enzyme with example according to International Union of Biochemistry and Molecular Biology (IUBMB) classification.
- (c) Explain how enzyme lowering activation energy.
- (d) Illustrate to explain the mechanism of enzyme action based on induced fit model.
- (e) Describe the factors that affect the enzymatic reaction: (i) substrate concentration; (ii) pH; (iii) temperature; (iv) enzyme concentration.

</Checklist>

<PriorKnowledge :items="[
  { term: 'Proteins and amino acids', note: 'Proteins are long chains of <b>amino acids</b>. Each chain folds into a specific 3D shape, and the shape decides what the protein can do.' },
  { term: 'Levels of protein structure', note: '<b>Primary</b>: the amino acid sequence. <b>Secondary</b>: α-helix or β-pleated sheet. <b>Tertiary</b>: the whole chain folded into a 3D shape, held by hydrogen bonds, ionic bonds, disulphide bridges and hydrophobic interactions. <b>Quaternary</b>: two or more polypeptide chains together.' },
  { term: 'Metabolism', note: 'All the chemical reactions in a cell. <b>Catabolic</b> reactions break molecules down; <b>anabolic</b> reactions build them up.' },
  { term: 'Hydrolysis and condensation', note: '<b>Hydrolysis</b> breaks a bond by adding water. <b>Condensation</b> joins two molecules and releases water.' }
]" />

### Enzymes

<Definition term="Enzyme">a biological catalyst produced by living cells that speeds up the rate of chemical reaction by lowering the activation energy.</Definition>

**Structure of enzymes:**

- An enzyme is a **globular protein** and has **tertiary or quaternary** structure.
- An enzyme has two sites:
  - **Active site**: the specific site (region) of an enzyme that binds to a specific substrate, in which catalysis occurs.
  - **Allosteric site**: a site on the enzyme other than the active site.

### Six classes of enzyme (IUBMB)

Based on IUBMB, the name of an enzyme must **end with "-ase"**, and enzymes are classified by the **type of reaction they catalyse**.

| Class | What it catalyses | Examples |
|---|---|---|
| Hydrolases | the **hydrolysis** reaction: breakdown of a chemical bond of a complex substrate **by addition of water** | digestive enzymes: maltase, sucrase, amylase |
| Isomerases | the **rearrangement** of functional groups or atoms in a substrate molecule; convert one isomer to another | isomerase, mutase |
| Transferases | the **transfer of a functional group** from one substrate to another | transaminase, hexokinase |
| Lyases | the **addition or removal of a functional group**, or breakdown of a chemical bond of a complex substrate **without addition of water** | decarboxylase |
| Oxidoreductases | the **redox reaction**: transfer of oxygen and hydrogen atoms between substrates | dehydrogenase, catalase |
| Ligases | the **formation of chemical bonds** between two substrate molecules **using ATP** (energy) | synthetase |

::: tip Exam tip
Describe the function of each class starting with the word **"catalyse"**, e.g. "Hydrolases catalyse the hydrolysis reaction…".
:::

<Tabs label="Example reactions">
<Tab label="Hydrolase">

<Flow row :steps="['Maltose + H₂O', 'maltase', 'α-glucose + α-glucose']" />

</Tab>
<Tab label="Isomerase">

<Flow row :steps="['Glucose-6-phosphate', 'isomerase', 'Fructose-6-phosphate']" />

</Tab>
<Tab label="Transferase">

<Flow row :steps="['Glucose + ATP', 'hexokinase', 'Glucose-6-phosphate + ADP']" />

</Tab>
<Tab label="Lyase">

<Flow row :steps="['Pyruvate', 'pyruvate decarboxylase', 'Ethanal + CO₂']" />

</Tab>
<Tab label="Oxidoreductase">

<Flow row :steps="['Succinate + FAD', 'succinate dehydrogenase', 'Fumarate + FADH₂']" />

</Tab>
<Tab label="Ligase">

<Flow row :steps="['Amino acid + tRNA + ATP', 'aminoacyl-tRNA synthetase', 'Aminoacyl-tRNA + AMP + Pi']" />

</Tab>
</Tabs>

### Activation energy

<Definition term="Activation energy">the minimum amount of energy required by a reactant (substrate) to start a chemical reaction.</Definition>

<ActivationEnergyDiagram />

**How an enzyme lowers activation energy:**

<Steps>

1. **Acts as a template for substrate orientation**

   The substrate binds to the active site. The enzyme brings substrate molecules closer to each other so they collide in the correct orientation, forming the **enzyme-substrate complex**.

2. **Stretches the substrate toward its transition state**

   As the substrate binds, the enzyme may stretch the substrate molecules toward their transition state. This helps break existing bonds and form new bonds to make the product.

3. **Provides a favourable microenvironment**

   The active site can create a microenvironment more suited to the reaction than the solution would be without the enzyme.

4. **Amino acids in the active site take part directly**

   Sometimes there is brief covalent bonding between the substrate and the side chain of an amino acid in the active site. Later steps restore the side chains, so the active site is the same after the reaction as before.

</Steps>

### Induced fit model

Proposed by **Koshland (1959)**. The shape of the active site is **flexible**, not exactly complementary to the shape of the substrate. Step through it:

<InducedFitDiagram />

| Step | What happens |
|---|---|
| 1 | The substrate binds to the active site; the binding **induces a slight change** in the conformation of the active site. |
| 2 | The active site becomes **fully complementary** to the substrate, which fits precisely: **enzyme-substrate complex**; catalysis takes place. |
| 3 | **Product is formed**; the active site changes back to its original conformation when the product is released. |

### Factors that affect the enzymatic reaction

Pick a factor and tap the graph:

<EnzymeFactorsDiagram />

<Tabs label="Factors">
<Tab label="Substrate concentration">

- **Low** substrate concentration: rate increases as substrate increases; not all active sites bind with substrate (some remain free).
- **Increasing** substrate: more collisions between substrate and active sites, so more active sites bind with substrate, until there are no more free active sites.
- **Very high** substrate: rate becomes **constant**; all active sites are bound (the active sites are **saturated**), so more substrate does not increase the rate.

</Tab>
<Tab label="pH">

- Enzymes function efficiently within a **narrow pH range**; different enzymes have different **optimum pH** (e.g. pepsin about pH 2, trypsin about pH 8).
- At the **optimum pH** the rate is maximum; above or below it, the rate decreases.

<Flow :steps="['pH moves away from the optimum: excess H⁺ (acidic) or OH⁻ (basic)', 'Alters the acidic / basic / functional groups (side chains) of amino acids in the enzyme', 'Ionic bonds and hydrogen bonds break', 'Conformation of the active site changes: enzyme denatured', 'Substrate cannot bind to the active site', 'Rate of reaction decreases']" />

</Tab>
<Tab label="Temperature">

- **Optimum temperature**: human enzymes mostly 35°C to 40°C (37°C); enzymes of thermophilic bacteria (in hot springs) 70°C or higher.
- **Low** temperature: rate is low; molecules move slowly, so fewer collisions between substrate and active site; the enzyme is also inactive.
- **Rising** temperature: molecules move faster and collide more often. For every **10°C rise**, the rate of reaction roughly **doubles**, up to the optimum.
- **Beyond the optimum**: above 40°C activity decreases; at about 50°C the reaction stops and the enzyme is **denatured**.

<Flow :steps="['Temperature beyond the optimum', 'Ionic bonds, hydrogen bonds, hydrophobic and van der Waals interactions break', 'Conformation of the active site changes: enzyme denatured', 'Substrate can no longer fit into the active site']" />

</Tab>
<Tab label="Enzyme concentration">

- As enzyme concentration increases, the rate increases, **if substrate is present in excess** and no other factor is limiting.
- The rate of reaction is **directly proportional** to enzyme concentration.

</Tab>
</Tabs>

::: warning Common mistake
A denatured enzyme is not "killed" (enzymes are not alive). Say the **active site changes shape**, so the **substrate can no longer fit**.
:::

### Quick check

<Quiz question="Which site of an enzyme binds to a specific substrate, where catalysis occurs?" :options="['Allosteric site', 'Active site', 'Binding site of a cofactor', 'Prosthetic group']" :answer="1" explain="The active site is the specific region that binds to a specific substrate, in which catalysis occurs." />

<Quiz question="Which class of enzyme breaks a bond by adding water?" :options="['Lyases', 'Hydrolases', 'Ligases', 'Isomerases']" :answer="1" explain="Hydrolases catalyse hydrolysis: breakdown of a bond by addition of water. Lyases break bonds without water." />

<Quiz question="Hexokinase moves a phosphate group from ATP to glucose. Which class is it?" :options="['Transferase', 'Oxidoreductase', 'Ligase', 'Lyase']" :answer="0" explain="Transferases catalyse the transfer of a functional group from one substrate to another." />

<Quiz question="In the induced fit model, the active site" :options="['is rigid and exactly complementary to the substrate', 'changes shape slightly when the substrate binds', 'is destroyed after each reaction', 'binds to the allosteric site']" :answer="1" explain="The active site is flexible; substrate binding induces a slight change so it becomes fully complementary." />

<Quiz question="At very high substrate concentration the rate of reaction becomes constant because" :options="['the enzyme is denatured', 'all active sites are saturated with substrate', 'the substrate is used up', 'the pH changes']" :answer="1" explain="All active sites are bound with substrate, so extra substrate cannot increase the rate." />

<Quiz question="Why does the rate fall above the optimum temperature?" :options="['Molecules move more slowly', 'The enzyme is denatured and the active site changes shape', 'More substrate is needed', 'Activation energy increases']" :answer="1" explain="Bonds holding the enzyme shape break, the active site changes conformation and the substrate no longer fits." />

</Topic>

<Topic color="yellow">

## 4.2 Cofactor

<Checklist title="Learning outcomes">

- (a) Define cofactor. <Badge text="C1" />
- (b) Explain the three types of cofactors and functions of: (i) metal ion activators (e.g. Mg²⁺); (ii) coenzyme (e.g. NAD); (iii) prosthetic group (e.g. haem group). <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Organic vs inorganic', note: '<b>Organic</b> molecules are carbon-based, e.g. vitamins. <b>Inorganic</b> ions are not, e.g. Mg²⁺, Zn²⁺, Fe²⁺, Ca²⁺.' },
  { term: 'Vitamins', note: 'Organic substances needed in small amounts in the diet. Many coenzymes are made from vitamins.' },
  { term: 'Oxidation and reduction (hydrogen)', note: 'In biology, a molecule that <b>loses hydrogen</b> is oxidised and one that <b>gains hydrogen</b> is reduced. Dehydrogenases remove hydrogen from their substrate.' },
  { term: 'The active site (4.1)', note: 'The region of the enzyme that binds the substrate. If its shape is not right, the substrate cannot bind.' }
]" />

<Definition term="Cofactor">a nonprotein molecule or ion that is required for proper functioning of an enzyme.</Definition>

It can bind **tightly and permanently** to the enzyme, or bind **loosely and reversibly** with the substrate.

<Flow row :steps="['<b>Apoenzyme</b>: inactive enzyme without its cofactor', '+ cofactor', '<b>Holoenzyme</b>: active enzyme with its cofactor']" />

### Three types of cofactor

<Tabs label="Cofactors">
<Tab label="Metal ion activators">

- **Inorganic ions** such as Ca²⁺, Zn²⁺, Mg²⁺, Fe²⁺.
- Bind **loosely and temporarily** to the enzyme.
- Change its active site to make the shape **more suitable** for a reaction to take place.
- Necessary for the functioning of certain enzymes.

</Tab>
<Tab label="Coenzyme">

- **Organic molecules** needed for enzymes to function.
- Bind **loosely and temporarily** to the enzyme active site.
- Many coenzymes are **derived from vitamins**.
- Example: **NAD⁺** acts as a coenzyme to **dehydrogenases** by acting as an electron transfer agent (a **hydrogen acceptor**).

</Tab>
<Tab label="Prosthetic group">

- An **organic molecule** that binds **tightly and permanently** to an enzyme.
- Becomes **part of the enzyme structure** and is not easily separated.
- Example: the **haem group** is a prosthetic group for **catalase**.

</Tab>
</Tabs>

| | Metal ion activator | Coenzyme | Prosthetic group |
|---|---|---|---|
| Nature | inorganic ion | organic molecule | organic molecule |
| Binding | loose, temporary | loose, temporary | **tight, permanent** |
| Example | Mg²⁺, Zn²⁺, Fe²⁺, Ca²⁺ | NAD⁺ (for dehydrogenases) | haem (for catalase) |

### Quick check

<Quiz question="An inactive enzyme without its cofactor is called" :options="['a holoenzyme', 'an apoenzyme', 'a coenzyme', 'a prosthetic group']" :answer="1" explain="Apoenzyme: inactive, no cofactor. Holoenzyme: active, with cofactor." />

<Quiz question="Which cofactor binds tightly and permanently and becomes part of the enzyme?" :options="['Metal ion activator', 'Coenzyme', 'Prosthetic group', 'Substrate']" :answer="2" explain="A prosthetic group, e.g. haem in catalase, binds tightly and permanently." />

<Quiz question="NAD⁺ helps dehydrogenases by acting as" :options="['a hydrogen acceptor', 'a metal ion activator', 'an inhibitor', 'a substrate']" :answer="0" explain="NAD⁺ is a coenzyme that acts as an electron transfer agent (hydrogen acceptor)." />

</Topic>

<Topic color="red">

## 4.3 Inhibitors

<Checklist title="Learning outcomes">

- (a) Define inhibitor. <Badge text="C1" />
- (b) State the types of inhibitor: (i) competitive inhibitor; (ii) non-competitive inhibitor. <Badge text="C1" />
- (c) Explain reversible and irreversible inhibition. <Badge text="C3" />
- (d) Analyse graph related to competitive and non-competitive inhibition to the rate of enzyme activity. <Badge text="C3" />

</Checklist>

<PriorKnowledge :items="[
  { term: 'Active site and allosteric site (4.1)', note: 'The <b>active site</b> binds the substrate. The <b>allosteric site</b> is another site on the enzyme; something binding there can change the shape of the active site.' },
  { term: 'Bonds that hold the enzyme shape', note: 'Ionic bonds, hydrogen bonds and <b>disulphide bridges</b> hold the 3D shape. Breaking them changes the active site.' },
  { term: 'Metabolic pathways', note: 'A chain of reactions, each with its own enzyme; the product of one reaction is the substrate of the next.' },
  { term: 'Respiration and ATP', note: 'Cells make most of their ATP in respiration, in the <b>electron transport chain</b>, which passes electrons to oxygen at the end.' }
]" />

<Definition term="Inhibitor">a molecule that binds to an enzyme and reduces the rate of enzyme reaction.</Definition>

- It prevents the substrate from binding with the enzyme to form the **enzyme-substrate complex**.
- The rate of reaction decreases.

### Competitive and non-competitive inhibitors

Switch between them and compare the graph:

<InhibitionDiagram />

| | Competitive inhibitor | Non-competitive inhibitor |
|---|---|---|
| Shape | **similar** to the substrate | **different** from the substrate |
| Binds at | the **active site** | the **allosteric site** |
| Competes with substrate? | **yes**, for the same active site | **no**, but it changes the active site conformation |
| Example | malonate (malonic acid) | isoleucine (end-product inhibition) |
| Effect of more substrate | **reduces** the inhibition: substrate has a greater chance to bind | **does not** reduce the inhibition |
| How to lessen the effect | increase substrate concentration | remove the inhibitor or lower its concentration |

**Similarity:** both inhibitors bind **loosely and temporarily** to the enzyme.

<Tabs label="How inhibition occurs">
<Tab label="Competitive">

<Flow :steps="['Inhibitor competes with the substrate for the active site', 'Inhibitor binds to the active site', 'Substrate cannot bind: no enzyme-substrate complex', 'No product forms: rate of reaction is reduced']" />

The substrate keeps using any unaffected enzyme, so the **same quantity of product** forms, but it **takes longer**.

</Tab>
<Tab label="Non-competitive">

<Flow :steps="['Inhibitor binds to the allosteric site', 'Conformation of the active site changes', 'Substrate cannot bind: no enzyme-substrate complex', 'No product forms: rate of reaction is reduced']" />

</Tab>
</Tabs>

### Reversible and irreversible inhibition

<Flow row :steps="['Inhibition', 'Reversible: competitive or non-competitive', 'Irreversible']" />

<Tabs label="Reversible and irreversible">
<Tab label="Reversible">

- Inhibitors are bound **loosely and temporarily**; they form weak chemical bonds with the enzyme.
- **No permanent damage** to the enzyme; the effect is temporary.
- **Removing the inhibitor** restores the enzyme activity to normal.

**Example: isoleucine (end-product inhibition)**

<Flow :steps="['Threonine deaminase (enzyme 1) starts the pathway that makes isoleucine from threonine', 'Isoleucine (the end product) builds up to a high concentration', 'Isoleucine binds to enzyme 1 and inhibits it', 'The pathway stops, so there is no excess production of the end product']" />

</Tab>
<Tab label="Irreversible">

- Inhibitors bind **tightly and permanently** to the enzyme.
- Cause **permanent damage**; the enzyme cannot carry out its catalytic function.

**Example: cyanide**

<Flow :steps="['Cyanide binds to the iron in cytochrome c oxidase in the electron transport chain', 'Electrons cannot be transferred to oxygen', 'ATP synthesis in cellular respiration is permanently inhibited']" />

**Other examples: heavy metal ions** (mercury, silver) break disulphide bridges, changing the conformation of the active site (enzyme denatured).

</Tab>
</Tabs>

::: warning Common mistake
Increasing substrate concentration only helps against a **competitive** inhibitor. A non-competitive inhibitor does not compete for the active site, so more substrate does not reduce its effect.
:::

### Quick check

<Quiz question="A competitive inhibitor binds to the" :options="['allosteric site', 'active site', 'cofactor', 'product']" :answer="1" explain="It has a similar shape to the substrate and binds to the active site." />

<Quiz question="Which change reduces the effect of a competitive inhibitor?" :options="['Increasing substrate concentration', 'Raising the temperature above the optimum', 'Adding more inhibitor', 'Changing the pH']" :answer="0" explain="More substrate gives the substrate a greater chance to bind to the active site." />

<Quiz question="On a graph of rate against substrate concentration, a non-competitive inhibitor" :options="['gives the same maximum rate, reached later', 'lowers the maximum rate, even at high substrate concentration', 'has no effect', 'increases the maximum rate']" :answer="1" explain="More substrate does not reduce non-competitive inhibition, so the maximum rate stays lower." />

<Quiz question="Cyanide is an example of" :options="['reversible competitive inhibition', 'end-product inhibition', 'irreversible inhibition', 'a coenzyme']" :answer="2" explain="Cyanide binds permanently to cytochrome c oxidase, permanently inhibiting ATP synthesis." />

<Quiz question="Isoleucine stopping its own production pathway is an example of" :options="['irreversible inhibition', 'end-product (reversible) inhibition', 'denaturation', 'a prosthetic group']" :answer="1" explain="Isoleucine binds to enzyme 1 (threonine deaminase) when its concentration is too high; removing it restores activity." />

</Topic>

<Topic color="green">

## Quick revision: key terms

Click a card to flip it; use the arrows to move on.

<Flashcards :cards="[
  { front: 'Enzyme', back: 'A biological catalyst produced by living cells that speeds up the rate of chemical reaction by lowering the activation energy.' },
  { front: 'Active site', back: 'The specific region of an enzyme that binds to a specific substrate, in which catalysis occurs.' },
  { front: 'Activation energy', back: 'The minimum amount of energy required by a reactant (substrate) to start a chemical reaction.' },
  { front: 'Six IUBMB enzyme classes', back: 'Hydrolases, isomerases, transferases, lyases, oxidoreductases, ligases.' },
  { front: 'Induced fit model', back: 'The active site is flexible; substrate binding induces a slight change so it becomes fully complementary (Koshland, 1959).' },
  { front: 'Cofactor', back: 'A nonprotein molecule or ion that is required for proper functioning of an enzyme.' },
  { front: 'Apoenzyme vs holoenzyme', back: 'Apoenzyme: inactive, without cofactor. Holoenzyme: active, with cofactor.' },
  { front: 'Inhibitor', back: 'A molecule that binds to an enzyme and reduces the rate of enzyme reaction.' },
  { front: 'Competitive vs non-competitive', back: 'Competitive: similar shape, binds active site. Non-competitive: different shape, binds allosteric site.' },
  { front: 'Reversible vs irreversible', back: 'Reversible: loose, temporary, no permanent damage. Irreversible: tight, permanent damage (e.g. cyanide).' }
]" />

</Topic>
