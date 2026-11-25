# Biology Matrikulasi site

VitePress site (`docs/`). Pushing to `main` deploys to GitHub Pages: https://bio-kml.github.io/bio-matrikulasi/

## Workflow

- Work on `main` and push to `main` directly; do not create branches.
- Run `npm run docs:build` before pushing, and check new pages in a browser (Playwright) in light, dark and at 390px width with no horizontal scroll.

## Always build with the site's components

For **any** content request (add a PDF, a quiz, a page, a schedule, notes, answers, anything), build it with the existing components below, and on your own judgement add the ones that fit around it: buttons, callouts, cards, badges, timelines, checklists, etc. Do not ask first and do not fall back to plain markdown when a component fits. Use a component when it helps a student, not as decoration.

Example: "add the Chapter 2 slides PDF" → the PDF iframe + Open Fullscreen button (below), plus what suits the page around it, e.g. `<Badge>` tags, a `::: tip` on what to focus on, a `<Checklist>` of learning outcomes, `<LinkCard>`s to the matching tutorial/lab, a `<Quiz>` if the source has questions.

| Content | Component |
|---|---|
| A PDF file (slides, notes, past papers, lab sheet) | `<iframe src="/bio-matrikulasi/<section>/<file>.pdf" width="100%" height="400" allowfullscreen></iframe>` then `<a href="…same path…" target="_blank" rel="noopener"><button class="open-pdf-btn">Open Fullscreen</button></a>`; files in `docs/public/<section>/` (same pattern as the user's other course sites, e.g. JSK-KML/Python-Programming-2) |
| Process / sequence of stages | `<ScrollTimeline>` + `<ScrollStep>` (max one per page); else `<Timeline progress focus>` |
| Dates, schedule, deadlines, history | `<Timeline>` / `<TimelineItem date done>` (`layout="alternate"` for schedules) |
| Lab method / numbered procedure | `<Steps>` wrapping a markdown `1.` list |
| Comparison of 2–4 things | markdown table, or `<Tabs>` + `<Tab label>` |
| Definition of a term | `<Definition term>` |
| Key fact / quick reminder | `::: tip Quick reminder: …` |
| Fun fact / aside | `<StickyNote>` |
| Cause → effect chain | `<Flow :steps>` |
| A subtopic (3.1, 3.2 …) | wrap in `<Topic color>` |
| Prior knowledge a subtopic builds on | `<PriorKnowledge :items>` right after its learning outcomes (always include one per subtopic in revision notes) |
| Hard-to-picture concept | an interactive diagram: existing ones are `<BodyPlanDiagram>`, `<SymmetryDiagram>`, `<GramWallDiagram>`, `<BacteriaShapes>`, `<LifeCycleDiagram>`, `<SelectionCurvesDiagram>`, `<LakeZonesDiagram>`, `<EnergyPyramid>`, `<PopulationGrowthDiagram>`, `<RainforestLayers>`, `<ActivationEnergyDiagram>`, `<InducedFitDiagram>`, `<EnzymeFactorsDiagram>`, `<InhibitionDiagram>`, `<CellRespirationMap>`, `<ATPDiagram>`, `<KrebsCycleDiagram>`, `<ETCDiagram>` (in `components/diagrams/`, using `DiagramFrame`); build a new one in the same style when a topic needs it |
| Common mistake | `::: warning` |
| Lab safety | `::: danger` |
| Background / extra info | `::: info` |
| Answers, solutions, marking schemes | `::: details` or `<Accordion>` + `<AccordionItem title>` |
| Technical term in running text | `<Term def="...">word</Term>` |
| Equations | `$...$` inline, `$$...$$` block |
| Photos from the user's slides | extract with `pdfimages`, compress to JPEG (≤900 px) in `docs/public/images/ch<N>/`, show with `<Figure>` (pairs in `<div class="fig-row">`) next to the text they illustrate |
| Chemical intermediates / a reaction step | `<Molecule c :p name>` (carbon skeleton with phosphate tags; `coa` for CoA) inside `<Reaction enzyme :ins :outs>` with `#from`/`#to` slots; always name the enzyme |
| Memory aids | acronyms / mnemonics in a `::: tip Remember the order (acronym)` |
| Hands-on activity | a page in `docs/activities/` (nav + sidebar + `docs/activities/index.md` card); existing: `<GlycolysisLab>`, `<KrebsLab>` (explore-and-discover, both built on `<DiscoveryLab>`), `<NumberChallenge question :answer unit hint working>` (type-a-number counting question), `<OrderChallenge :items>` (tap in order). Keep the worksheet / lab-notebook feel |
| Diagram with named parts | `<LabeledDiagram src :labels>`; other images `<Figure src num caption>` (images in `docs/public/images/`) |
| Questions / MCQs / self-check | `<Quiz question :options :answer explain>` |
| Terms to revise | `<Flashcards :cards>` |
| Checklist (pre-lab, revision, outcomes) | `<Checklist title color>` |
| Links to other pages / overview | `<CardGrid>` + `<InfoCard>` or `<LinkCard>` |
| Key numbers (marks, counts) | `<StatGrid>` + `<StatCard>` |
| Status / category tags | `<Badge type text>` |
| Inline icon | `<Icon name>` |

Live examples and exact syntax for every component: `docs/guide/components.md`, `docs/guide/visuals.md`, `docs/guide/timeline.md`. Read those before writing.

Content rules:
- Do not invent facts, marks, dates or answers. Only use what the user or their material provides.
- Section colours are automatic: lectures green, tutorials blue, labs teal, assessments yellow, exams purple, course red. Use the matching `color` on cards for that section.
- The top bar has only **Home, Revision Notes, Activities** (no GitHub button). Do not add other sections back unless asked.
- New revision chapters and activities need frontmatter `description`, `icon` and `color`: the home page lists them automatically from that (`docs/.vitepress/theme/data/course.data.mjs`).
- New pages: add them to both `nav` and `sidebar` in `docs/.vitepress/config.mjs`; file names like `chapter-02.md`, `lab-02.md`, `tutorial-02.md`. New revision chapters also go on `docs/revision/index.md` (an `<InfoCard>`).
- Add `highlighter: true` to the frontmatter of lecture and tutorial pages (enables the study highlighter).

## Design rules (user preferences — do not break)

The site uses a **notebook / note-tablet look**, matching the user's own slides (e.g. the SB025 Chapter 3 Selection and Speciation slides): grid-paper background, Kalam handwriting for headings, Patrick Hand for body text, dark ink-outlined boxes, yellow marker highlights, one colour per subtopic. It must not look generic or "AI-made".

- **Subtopic colour:** wrap each subtopic (e.g. `## 3.1 …`) in `<Topic color="…">`. Its h2 gets a thick coloured bar; h3s, table headers, `::: tip` bubbles and learning-outcome boxes take that colour. Colours: green, blue, teal, olive, yellow, red, purple.
- **Learning outcomes:** `<Checklist title="Learning outcomes">` with each outcome as a `-` item ending in `<Badge text="C1" />` (clickable tick boxes saved per student, with a progress count and the C-level on the right).
- **Revision notes should be interactive:** per subtopic include learning outcomes, a `<PriorKnowledge>` box, diagrams for hard concepts, `<Flow>` chains for cause → effect, and a `### Quick check` of `<Quiz>` MCQs at the end of the subtopic (only questions/answers supported by the source).
- **Definitions:** `<Definition term="…">…</Definition>` (highlighted). **Bold** text renders as a yellow marker highlight, so bold only key words.
- **Quick reminders / key terms:** `::: tip Quick reminder: …` (speech bubble). **Fun facts:** `<StickyNote>` (pink note), never `::: info`.
- **Cause → effect chains / short sequences:** `<Flow :steps="[…]">`.
- **Tables:** plain markdown tables (ink grid, tinted header, handwritten first column are automatic).
- Boxes: 2px ink outline, white "paper box" background, small radius. No gradients-as-decoration, glow, shine or pulsing animations.
- Motion is calm (fade/slide/scale) and respects `prefers-reduced-motion`.
- No Mermaid.
- Components live in `docs/.vitepress/theme/components/` (UI kit in `ui/`, built on Reka UI) and are registered globally in `docs/.vitepress/theme/index.js`. Theme styles are in `docs/.vitepress/theme/style.css`.
