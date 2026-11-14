# Biology Matrikulasi site

VitePress site (`docs/`). Pushing to `main` deploys to GitHub Pages: https://bio-kml.github.io/bio-matrikulasi/

## Workflow

- Work on `main` and push to `main` directly; do not create branches.
- Run `npm run docs:build` before pushing, and check new pages in a browser (Playwright) in light, dark and at 390px width with no horizontal scroll.

## Turning source material (PDF, notes, slides) into pages

When the user gives material to put on the site, choose and add components automatically; do not ask first. Use a component when it helps a student study, not to decorate. Plain prose and lists are still the default.

| Content in the source | Use |
|---|---|
| Process / sequence of stages (mitosis, glycolysis, protein synthesis) | `<ScrollTimeline>` + `<ScrollStep>` (one per page at most); otherwise `<Timeline progress focus>` |
| Dated schedule, deadlines, history | `<Timeline>` / `<TimelineItem date done>` (`layout="alternate"` for schedules) |
| Lab method / numbered procedure | `<Steps>` wrapping a markdown `1.` list |
| Comparison of 2–4 things (prokaryote vs eukaryote, mitosis vs meiosis) | markdown table, or `<Tabs>` + `<Tab label>` when each side has lists/paragraphs |
| Key fact, definition to remember | `::: tip` |
| Common mistake / misconception | `::: warning` |
| Lab safety | `::: danger` |
| Extra / background info | `::: info` |
| Worked answer, solution, marking scheme | `::: details` or `<Accordion>` + `<AccordionItem title>` (tutorials, past-year answers) |
| Technical term used in running text | `<Term def="...">word</Term>` (first use only) |
| Chemical / maths equation | `$...$` inline, `$$...$$` block (MathJax) |
| Labelled diagram in the source | `<LabeledDiagram src :labels="[{x,y,label,text}]">` if parts are named; otherwise `<Figure src num caption>` |
| Any image | `<Figure>`; save images under `docs/public/images/` |
| End-of-section check / MCQs in source | `<Quiz question :options :answer explain>` |
| Definitions / terms list for revision | `<Flashcards :cards="[{front, back}]">` at the end of a chapter |
| Pre-lab or revision checklist | `<Checklist title color>` |
| Overview / index of sub-pages | `<CardGrid>` + `<InfoCard title icon color link>` or `<LinkCard>` |
| Key numbers (marks breakdown, counts) | `<StatGrid>` + `<StatCard value label icon color>` |
| Status tags (due date, topic, optional) | `<Badge type text>` |

Live examples and exact syntax for every component: `docs/guide/components.md`, `docs/guide/visuals.md`, `docs/guide/timeline.md`. Read those before writing.

Content rules:
- Keep the source's meaning; do not invent facts, marks, dates or answers. If the source has no answer, do not write one.
- Section colours are automatic: lectures green, tutorials blue, labs teal, assessments yellow, exams purple, course red. Use the matching `color` on cards for that section.
- New pages: add them to both `nav` and `sidebar` in `docs/.vitepress/config.mjs`; file names like `chapter-02.md`, `lab-02.md`, `tutorial-02.md`.
- Add `highlighter: true` to the frontmatter of lecture and tutorial pages (enables the study highlighter).

## Design rules (user preferences — do not break)

- Flat only: no gradients, glow, shine, pulsing/beating animations.
- Boxes are neutral: plain background + thin grey border. No tinted/pastel box fills, no full-colour cards, no one-sided coloured borders. Colour only on small details (icons, numbers, labels, text).
- Motion is calm (fade/slide/scale), and must respect `prefers-reduced-motion`.
- No Mermaid.
- Components live in `docs/.vitepress/theme/components/` (UI kit in `ui/`, built on Reka UI) and are registered globally in `docs/.vitepress/theme/index.js`.
