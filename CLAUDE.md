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
| Key fact to remember | `::: tip` |
| Common mistake | `::: warning` |
| Lab safety | `::: danger` |
| Background / extra info | `::: info` |
| Answers, solutions, marking schemes | `::: details` or `<Accordion>` + `<AccordionItem title>` |
| Technical term in running text | `<Term def="...">word</Term>` |
| Equations | `$...$` inline, `$$...$$` block |
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
- New pages: add them to both `nav` and `sidebar` in `docs/.vitepress/config.mjs`; file names like `chapter-02.md`, `lab-02.md`, `tutorial-02.md`.
- Add `highlighter: true` to the frontmatter of lecture and tutorial pages (enables the study highlighter).

## Design rules (user preferences — do not break)

- Flat only: no gradients, glow, shine, pulsing/beating animations.
- Boxes are neutral: plain background + thin grey border. No tinted/pastel box fills, no full-colour cards, no one-sided coloured borders. Colour only on small details (icons, numbers, labels, text).
- Motion is calm (fade/slide/scale), and must respect `prefers-reduced-motion`.
- No Mermaid.
- Components live in `docs/.vitepress/theme/components/` (UI kit in `ui/`, built on Reka UI) and are registered globally in `docs/.vitepress/theme/index.js`.
