# Ralph task ledger

Read `RALPH_PROTOCOL.md` first. One task per tick. Edit only the leading checkbox.

Knowledge base areas (use these `area` slugs verbatim): `foundations`, `workflows`, `evidence-quality`, `rdi-economics`, `learning-paths`, `planning-tools`.

Course slugs already in `src/lib/content/courses.ts`: `rdi-foundations`.

---

## Glossary terms (target: 60+ terms)

Each: append a `GlossaryTerm` to `glossaryTerms` in `src/lib/content/glossary.ts`. Always set `category` (one of: Foundations, Evidence, Workflows, Economics, Operations, Roles, Risk, Capture, Compliance). Set `relatedSlugs` to two or three other terms in the file when sensible. Definition: 1 short sentence (under 30 words). Optional `longDefinition`: 2–3 sentences expanding on the term, only when the concept needs more.

- [x] Glossary: `evidence-window` — the time period in which captured site reality must be preserved before it stops being useful for a claim, incident, or audit. Include `longDefinition`. Category: Evidence.  ✓ 2026-04-28
- [x] Glossary: `decision-loop` — the closed loop trigger → evidence → interpretation → action → outcome. Category: Workflows.  ✓ 2026-04-28
- [x] Glossary: `capture-plan` — the per-project plan that names what will be recorded, where, how often, and for how long. Category: Capture.  ✓ 2026-04-28
- [x] Glossary: `coverage-gap` — a part of the project programme that has no evidence layer, intentionally or not. Category: Capture.  ✓ 2026-04-28
- [x] Glossary: `time-aligned-record` — a record whose timestamps can be cross-checked against schedule, weather, and gate data. Category: Evidence.  ✓ 2026-04-28
- [x] Glossary: `evidence-grade` — internal grading of a record by completeness, integrity, and chain of custody. Category: Evidence.  ✓ 2026-04-28
- [x] Glossary: `chain-of-custody` — the documented hand-off path of a piece of evidence from capture to use. Category: Evidence.  ✓ 2026-04-28
- [x] Glossary: `closeout-record` — the documented end-state of a workflow loop, kept for future reference. Category: Workflows.  ✓ 2026-04-28
- [x] Glossary: `observation` — a tagged finding routed to an owner with an expected response time. Category: Workflows.  ✓ 2026-04-28
- [x] Glossary: `escalation-path` — the named chain of people who get an observation when no one closes it in time. Category: Workflows.  ✓ 2026-04-28
- [x] Glossary: `programme-baseline` — the agreed reference programme against which actual progress is compared. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `progress-evidence` — evidence assembled to demonstrate or dispute the state of physical work at a date. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `delay-event` — a recorded event whose impact on the programme may be claimed for time, cost, or both. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `weather-record` — the time-aligned weather data attached to a delay event for substantiation. Category: Evidence.  ✓ 2026-04-27
- [x] Glossary: `gate-record` — captured movement of vehicles, people, and deliveries through a controlled access point. Category: Operations.  ✓ 2026-04-27
- [x] Glossary: `material-trace` — the link between a delivery, its location on site, and its installation record. Category: Operations.  ✓ 2026-04-27
- [x] Glossary: `subcontractor-attendance` — verifiable evidence of who was on site, when, and at what package. Category: Operations.  ✓ 2026-04-27
- [x] Glossary: `safety-observation` — a recorded near-miss, hazard, or unsafe act that becomes part of a safety workflow. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `incident-record` — the assembled evidence and witness account of a reportable safety event. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `quality-non-conformance` — a documented deviation between as-built reality and design intent. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `as-built-record` — the verifiable record of how the project was actually built, used in handover. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `handover-pack` — the closeout deliverable assembled from progress, quality, and compliance evidence. Category: Compliance.  ✓ 2026-04-27
- [x] Glossary: `audit-readiness` — the state in which evidence required by a regulator or owner can be retrieved on demand. Category: Compliance.  ✓ 2026-04-27
- [x] Glossary: `regulatory-event` — an inspection, audit, or finding that requires documented project evidence. Category: Compliance.  ✓ 2026-04-27
- [x] Glossary: `oac-meeting` — owner, architect, and contractor coordination meeting where progress evidence is reviewed. Category: Roles.  ✓ 2026-04-27
- [x] Glossary: `commercial-director` — the role accountable for project margin, claims, and contractual exposure. Category: Roles.  ✓ 2026-04-27
- [x] Glossary: `package-manager` — the person accountable for a single trade or works package. Category: Roles.  ✓ 2026-04-27
- [x] Glossary: `digital-construction-lead` — the person responsible for digital tools, BIM coordination, and reality data on a project. Category: Roles.  ✓ 2026-04-27
- [x] Glossary: `evidence-retrieval-time` — how long it takes to locate and assemble a specific piece of project evidence. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `manual-reporting-load` — the recurring time cost of preparing progress and safety updates without automation. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `risk-mitigation-credit` — the value attributed to avoiding a low-frequency, high-cost project event. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `confidence-band` — the published low-mid-high range around an ROI assumption. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `directional-assumption` — a public assumption used to educate the market until project-specific data is available. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `replacement-workflow` — a workflow where RDI replaces a manual or third-party service the project already pays for. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `supporting-workflow` — a workflow where RDI supports an existing process rather than replacing it. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `command-view` — the cross-project portfolio view that helps leaders triage exceptions. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `pattern-of-recurrence` — repeated evidence of the same exception across projects, escalated to the command view. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `evidence-saturation` — the point at which adding more raw recordings stops improving decision quality. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `360-walk` — a structured 360-degree capture along a defined route, repeatable over time. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `time-lapse` — a compressed visual record of progress at a fixed view, used for reporting and review. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `drone-survey` — a scheduled aerial capture for progress, earthworks, or safety review. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `fixed-camera-view` — a persistent camera position whose framing does not change between captures. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `mobile-capture` — opportunistic site walks recorded by phone, helmet, or wearable. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `capture-density` — the number of effective capture points per unit of project area or activity. Category: Capture.  ✓ 2026-04-27
- [x] Glossary: `interpretation-layer` — the analysis step where captured reality becomes a finding with meaning and ownership. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `action-routing` — turning a finding into a task, observation, or escalation with a named owner. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `outcome-measurement` — the closing measurement step that records whether the action changed the project. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `reality-driven-decision` — a project decision made with time-aligned, location-aware evidence rather than recollection. Category: Foundations.  ✓ 2026-04-27
- [x] Glossary: `dispute-prevention` — workflow design that reduces the likelihood of a dispute reaching a formal claim. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `claim-substantiation` — the body of evidence assembled to support a formal claim or counterclaim. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `payment-evidence` — the evidence that supports or disputes an interim payment application. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `delivery-verification` — confirming a delivery against its docket, including time, place, and contents. Category: Operations.  ✓ 2026-04-27
- [x] Glossary: `theft-investigation` — the post-incident workflow that uses captured records to identify when and how property left site. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `access-control` — the discipline of who can enter site, when, and through which route, evidenced by capture. Category: Operations.  ✓ 2026-04-27
- [x] Glossary: `evidence-search` — the act of finding the relevant clip or record for a specific decision. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `evidence-export` — preparing a clip or record in a format suitable for an owner, insurer, or court. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `meeting-evidence-pack` — the evidence assembled before an OAC, programme, or safety meeting. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `closeout-archive` — the long-lived evidence archive retained after handover for warranty and disputes. Category: Compliance.  ✓ 2026-04-27
- [x] Glossary: `progress-claim` — an interim or final claim for payment based on quantified work in place. Category: Economics.  ✓ 2026-04-27
- [x] Glossary: `weather-claim` — a claim for time or cost rooted in weather conditions, evidenced by site capture and meteorology. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `stand-down` — an interruption to work, recorded so its programme impact can be quantified. Category: Risk.  ✓ 2026-04-27
- [x] Glossary: `bim-deviation` — a discrepancy between the BIM model and as-built reality, surfaced through reality data. Category: Workflows.  ✓ 2026-04-27
- [x] Glossary: `evidence-stewardship` — the practice of preserving, indexing, and curating evidence so future teams can use it. Category: Foundations.  ✓ 2026-04-27
- [ ] Glossary: `portfolio-pattern` — a recurring exception across projects that the command view turns into a programme of work. Category: Foundations.
- [ ] Glossary: `category-boundary` — the distinction between RDI and adjacent tool categories such as cameras, dashboards, or BIM. Category: Foundations.

## Field notes (target: 60+ notes spread Apr 2024 → Apr 2026)

Each: append a `FieldNote` to `fieldNotes` in `src/lib/content/field-notes.ts`. Body: 5–9 `ArticleBlock`s totalling roughly 500–900 words. Always set `category` (Foundations, Workflows, Evidence, Economics, Operations, Risk, Capture, Compliance, Roles, Industry) and `readingMinutes` (3–8). Use British/Irish English. No emojis.

- [x] Field note: `the-five-layer-stack-explained` — date 2024-05-08, category Foundations, readingMinutes 6. Walk through capture, ground truth, interpretation, action, command with a paragraph each and one list block summarising what fails when a layer is skipped.  ✓ 2026-04-28
- [ ] Field note: `from-cameras-to-evidence` — date 2024-05-22, category Foundations, 7 min. Tell the story of a project that bought cameras and a project that bought evidence, contrast outcomes, end on the category boundary.
- [ ] Field note: `the-trigger-evidence-action-loop` — date 2024-06-05, category Workflows, 6 min. Show the loop with a progress example and a safety example.
- [ ] Field note: `what-goes-wrong-without-ground-truth` — date 2024-06-19, category Evidence, 5 min. Catalogue the failure modes when records are not time-aligned.
- [ ] Field note: `chain-of-custody-on-construction-sites` — date 2024-07-03, category Evidence, 6 min. Adapt the legal concept to construction evidence.
- [ ] Field note: `capture-plans-not-camera-counts` — date 2024-07-17, category Capture, 5 min. Argue for planning by workflow, not by hardware.
- [ ] Field note: `coverage-gaps-are-decisions` — date 2024-07-31, category Capture, 4 min. Reframe gaps as deliberate choices the team should defend.
- [ ] Field note: `the-cost-of-evidence-retrieval` — date 2024-08-14, category Economics, 6 min. Quantify the recurring cost of finding clips when nothing is indexed.
- [ ] Field note: `manual-reporting-is-a-tax` — date 2024-08-28, category Economics, 5 min. Frame routine reporting as a recurring operational tax.
- [ ] Field note: `risk-mitigation-language-for-cfos` — date 2024-09-11, category Economics, 7 min. How to talk about avoided low-frequency, high-cost events.
- [ ] Field note: `weather-claims-and-the-record` — date 2024-09-25, category Risk, 6 min. How preserved capture supports a weather claim.
- [ ] Field note: `delay-claims-and-time-alignment` — date 2024-10-09, category Risk, 7 min. The mechanics of substantiation when a programme slips.
- [ ] Field note: `progress-meetings-after-rdi` — date 2024-10-23, category Workflows, 5 min. How OAC meetings change when evidence is on the table.
- [ ] Field note: `safety-loops-that-actually-close` — date 2024-11-06, category Risk, 6 min. The difference between a finding and a closed safety loop.
- [ ] Field note: `gate-records-as-commercial-evidence` — date 2024-11-20, category Operations, 5 min. Gate logs as a quiet but durable commercial record.
- [ ] Field note: `delivery-verification-without-shouting` — date 2024-12-04, category Operations, 5 min. Settling delivery disputes without escalation.
- [ ] Field note: `subcontractor-attendance-records` — date 2024-12-18, category Operations, 6 min. Evidence-led attendance verification.
- [ ] Field note: `quality-non-conformance-and-as-built` — date 2025-01-08, category Workflows, 6 min. The handoff between QA and as-built records.
- [ ] Field note: `the-handover-pack-built-from-day-one` — date 2025-01-22, category Compliance, 7 min. Handover starts at mobilisation, not at PC.
- [ ] Field note: `audit-readiness-as-a-state` — date 2025-02-05, category Compliance, 5 min. Treating audit readiness as ongoing posture.
- [ ] Field note: `regulatory-events-and-evidence` — date 2025-02-19, category Compliance, 6 min. The workflows that pay off when an inspector arrives.
- [ ] Field note: `command-views-are-not-dashboards` — date 2025-03-05, category Foundations, 5 min. Distinguish portfolio command from BI dashboards.
- [ ] Field note: `pattern-of-recurrence-as-a-leading-indicator` — date 2025-03-19, category Foundations, 6 min. Repeated exceptions point at programme work.
- [ ] Field note: `category-boundary-with-cameras-ai-bim` — date 2025-04-02, category Foundations, 7 min. Sharpen the boundary against adjacent tools.
- [ ] Field note: `confidence-bands-and-honesty` — date 2025-04-16, category Economics, 5 min. Why public ROI must publish ranges and assumptions.
- [ ] Field note: `directional-assumptions-vs-customer-numbers` — date 2025-04-30, category Economics, 5 min. The line between teaching and quoting.
- [ ] Field note: `replacement-vs-supporting-workflows` — date 2025-05-14, category Workflows, 6 min. The two shapes of RDI value and how to talk about them.
- [ ] Field note: `evidence-saturation-stop-adding-cameras` — date 2025-05-28, category Capture, 5 min. The point of diminishing returns.
- [ ] Field note: `time-lapse-is-not-a-strategy` — date 2025-06-11, category Capture, 5 min. Where time-lapse helps and where it stops.
- [ ] Field note: `drone-surveys-in-the-evidence-chain` — date 2025-06-25, category Capture, 6 min. How aerial surveys join the wider record.
- [ ] Field note: `360-walks-and-quality-loops` — date 2025-07-09, category Capture, 6 min. 360 capture inside QA workflows.
- [ ] Field note: `mobile-capture-and-the-helmet-camera` — date 2025-07-23, category Capture, 5 min. The role of opportunistic capture.
- [ ] Field note: `evidence-export-for-court` — date 2025-08-06, category Risk, 7 min. Producing exports that hold up in legal review.
- [ ] Field note: `theft-investigations-after-the-fact` — date 2025-08-20, category Risk, 6 min. What can be reconstructed and what cannot.
- [ ] Field note: `access-control-evidence` — date 2025-09-03, category Operations, 5 min. Evidencing controlled access without a guard hut.
- [ ] Field note: `payment-applications-with-evidence-attached` — date 2025-09-17, category Economics, 6 min. Faster payment cycles with proof.
- [ ] Field note: `bim-deviation-and-the-real-world` — date 2025-10-01, category Workflows, 7 min. Surfacing model-vs-reality gaps early.
- [ ] Field note: `the-roles-that-buy-rdi` — date 2025-10-15, category Roles, 6 min. Buyer profiles and what each one needs to hear.
- [ ] Field note: `project-director-view-of-rdi` — date 2025-10-29, category Roles, 5 min. The PD perspective on evidence and exception.
- [ ] Field note: `commercial-director-view-of-rdi` — date 2025-11-12, category Roles, 5 min. The CD perspective on dispute and payment.
- [ ] Field note: `safety-director-view-of-rdi` — date 2025-11-26, category Roles, 5 min. The HSE perspective on observation and closeout.
- [ ] Field note: `owner-representative-view-of-rdi` — date 2025-12-10, category Roles, 5 min. The owner-rep perspective on reporting and trust.
- [ ] Field note: `digital-construction-lead-view-of-rdi` — date 2025-12-24, category Roles, 6 min. The digital lead's stack view.
- [ ] Field note: `mission-critical-projects-and-rdi` — date 2026-01-07, category Industry, 7 min. Why data centres and similar projects need command-grade evidence.
- [ ] Field note: `infrastructure-projects-and-rdi` — date 2026-01-21, category Industry, 6 min. Linear projects, distributed risk, evidence chains.
- [ ] Field note: `commercial-buildings-and-rdi` — date 2026-02-04, category Industry, 5 min. The bread-and-butter project type for RDI.
- [ ] Field note: `residential-and-rdi` — date 2026-02-18, category Industry, 5 min. Residential adoption patterns.
- [ ] Field note: `energy-projects-and-rdi` — date 2026-03-04, category Industry, 6 min. Solar, wind, battery storage workflows.
- [ ] Field note: `closeout-archives-after-the-warranty-period` — date 2026-03-18, category Compliance, 5 min. The case for retaining evidence beyond the contract.
- [ ] Field note: `oac-meetings-with-evidence-not-anecdote` — date 2026-04-01, category Workflows, 5 min. Meeting hygiene after RDI.
- [ ] Field note: `the-economics-of-doing-nothing` — date 2026-04-15, category Economics, 6 min. The implicit cost of staying with manual evidence handling.

## Knowledge base articles (target: 30+ across 6 areas)

Each: append a `KnowledgeBaseArticle` to `knowledgeBaseArticles` in `src/lib/content/knowledge-base.ts`. Body: 6–12 `ArticleBlock`s totalling 700–1200 words. Set `area` (one of: foundations, workflows, evidence-quality, rdi-economics, learning-paths, planning-tools), `readingMinutes` (4–10), and `related` to two or three other KB slugs when sensible (it is fine to reference a slug that does not yet exist — the page guards against missing articles).

- [x] KB article: `what-is-rdi-canonical` — area foundations, 8 min. The canonical reference definition. Cover: discipline, five layers, category boundary, why now.  ✓ 2026-04-28
- [ ] KB article: `the-rdi-stack` — area foundations, 7 min. Walk through capture, ground truth, interpretation, action, command in detail.
- [ ] KB article: `category-boundary-with-cameras` — area foundations, 6 min. How RDI differs from buying cameras.
- [ ] KB article: `category-boundary-with-ai-dashboards` — area foundations, 6 min. How RDI differs from AI/BI dashboards.
- [ ] KB article: `category-boundary-with-bim` — area foundations, 6 min. How RDI differs from BIM coordination.
- [ ] KB article: `the-rdi-maturity-curve` — area foundations, 8 min. Visibility, control, optimisation, with failure modes between stages.
- [ ] KB article: `workflow-anatomy` — area workflows, 7 min. Trigger, evidence, interpretation, action, outcome, measurement, with examples.
- [ ] KB article: `progress-verification-workflows` — area workflows, 9 min. Detailed walk through the progress pack with workflows, evidence, and metrics.
- [ ] KB article: `claims-evidence-workflows` — area workflows, 9 min. Detailed walk through the claims pack.
- [ ] KB article: `safety-monitoring-workflows` — area workflows, 8 min. Detailed walk through the safety pack.
- [ ] KB article: `gate-and-logistics-workflows` — area workflows, 8 min. Detailed walk through the logistics pack.
- [ ] KB article: `stakeholder-reporting-workflows` — area workflows, 7 min. Detailed walk through the reporting pack.
- [ ] KB article: `subcontractor-performance-workflows` — area workflows, 7 min. Detailed walk through the subcontractor pack.
- [ ] KB article: `compliance-record-workflows` — area workflows, 7 min. Detailed walk through the compliance pack.
- [ ] KB article: `design-verification-workflows` — area workflows, 8 min. Detailed walk through the design verification pack.
- [ ] KB article: `evidence-quality-checklist` — area evidence-quality, 6 min. The checklist used to grade a record.
- [ ] KB article: `chain-of-custody-for-construction` — area evidence-quality, 7 min. Adapted chain-of-custody discipline.
- [ ] KB article: `time-alignment-and-cross-checking` — area evidence-quality, 6 min. The mechanics of time-aligned records.
- [ ] KB article: `evidence-grading-rubric` — area evidence-quality, 6 min. A simple A/B/C grading rubric for site evidence.
- [ ] KB article: `preservation-and-retention-policy` — area evidence-quality, 7 min. How long to keep what and why.
- [ ] KB article: `roi-method-overview` — area rdi-economics, 8 min. Operational savings, risk mitigation, capacity, confidence bands.
- [ ] KB article: `roi-confidence-and-credibility` — area rdi-economics, 6 min. Why public ROI must publish ranges and assumptions.
- [ ] KB article: `roi-modelling-replacement-vs-supporting` — area rdi-economics, 7 min. Modelling differences between workflow types.
- [ ] KB article: `manual-reporting-savings-model` — area rdi-economics, 6 min. The recurring-savings template applied to reporting.
- [ ] KB article: `dispute-avoidance-credit-model` — area rdi-economics, 7 min. The risk-credit template applied to claims.
- [ ] KB article: `learning-paths-by-role` — area learning-paths, 6 min. Suggested journeys by role.
- [ ] KB article: `learning-path-foundation` — area learning-paths, 5 min. The foundation curriculum, lesson by lesson.
- [ ] KB article: `learning-path-practitioner` — area learning-paths, 6 min. Practitioner curriculum overview.
- [ ] KB article: `learning-path-executive` — area learning-paths, 5 min. Executive curriculum overview.
- [ ] KB article: `capture-plan-template` — area planning-tools, 8 min. A reusable capture-plan template walkthrough.
- [ ] KB article: `site-planner-walkthrough` — area planning-tools, 7 min. How to use the site planner end to end.
- [ ] KB article: `readiness-assessment-walkthrough` — area planning-tools, 6 min. How to use the readiness assessment.
- [ ] KB article: `quote-brief-walkthrough` — area planning-tools, 5 min. How to use the project brief for a quote.

## New courses (target: 5 additional courses)

Each: append a new `Course` object to `courses` in `src/lib/content/courses.ts`. Set `outcomes` (3–4) and `audience` (3–4 roles). Each course should have 5–7 lessons. Each lesson has 3 sections (each 60–150 words) and a checkpoint. Lessons in the course are independent tasks below — start by adding the **course shell with empty `lessons: []`**, then later tasks fill lessons in.

### Course 1: Claims & Evidence Practitioner

- [ ] Course shell: `claims-evidence-practitioner` — title "Claims & Evidence Practitioner", level Practitioner, estimatedMinutes 90, with outcomes and audience filled and `lessons: []`. Summary should describe a course for commercial managers, claims managers, and QSs on assembling defensible records.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `delay-claims-anatomy` — 14 min, 3 sections (the anatomy of a delay claim, what evidence supports each part, common failure modes), checkpoint.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `weather-claims-substantiation` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `subcontractor-disputes` — 14 min, 3 sections (scope, attendance, quality), checkpoint.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `evidence-export-for-legal-review` — 12 min, 3 sections (formats, metadata, chain-of-custody), checkpoint.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `payment-evidence-and-cycles` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `claims-evidence-practitioner`, add `building-the-claim-file` — 14 min, 3 sections, checkpoint.

### Course 2: Safety Workflows for Site Leadership

- [ ] Course shell: `safety-workflows-site-leadership` — title "Safety Workflows for Site Leadership", level Practitioner, estimatedMinutes 80, outcomes and audience filled, `lessons: []`. Audience: site managers, HSE leads, project directors.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `from-finding-to-closeout` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `incident-evidence-preservation` — 14 min, 3 sections, checkpoint.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `near-miss-loops` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `ppe-and-high-risk-monitoring` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `safety-meetings-with-evidence` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `safety-workflows-site-leadership`, add `regulatory-and-insurer-conversations` — 14 min, 3 sections, checkpoint.

### Course 3: RDI for Owners and Owner Representatives

- [ ] Course shell: `rdi-for-owners` — title "RDI for Owners and Owner Representatives", level Executive, estimatedMinutes 70, outcomes and audience filled, `lessons: []`.
- [ ] Course lesson: in `rdi-for-owners`, add `the-owners-question` — 10 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-for-owners`, add `reporting-without-chasing` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-for-owners`, add `programme-confidence-from-evidence` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-for-owners`, add `risk-and-claims-from-the-owner-side` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-for-owners`, add `closeout-and-handover-from-day-one` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-for-owners`, add `portfolio-command-for-owners` — 11 min, 3 sections, checkpoint.

### Course 4: Capture Planning and Coverage

- [ ] Course shell: `capture-planning-and-coverage` — title "Capture Planning and Coverage", level Practitioner, estimatedMinutes 75, outcomes and audience filled, `lessons: []`. Audience: digital construction leads, planners, project directors.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `from-camera-count-to-capture-plan` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `coverage-by-workflow-not-by-area` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `fixed-mobile-360-and-drone` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `evidence-saturation-and-pruning` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `revisions-as-the-project-evolves` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `capture-planning-and-coverage`, add `handover-of-the-capture-plan` — 13 min, 3 sections, checkpoint.

### Course 5: RDI Economics for the Business Case

- [ ] Course shell: `rdi-economics-business-case` — title "RDI Economics for the Business Case", level Executive, estimatedMinutes 75, outcomes and audience filled, `lessons: []`. Audience: finance partners, commercial directors, project directors, owner representatives.
- [ ] Course lesson: in `rdi-economics-business-case`, add `three-shapes-of-rdi-value` — 12 min, 3 sections (operational savings, risk mitigation, capacity), checkpoint.
- [ ] Course lesson: in `rdi-economics-business-case`, add `confidence-bands-and-credibility` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-economics-business-case`, add `replacement-versus-supporting-models` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-economics-business-case`, add `directional-public-numbers` — 12 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-economics-business-case`, add `building-a-defensible-business-case` — 13 min, 3 sections, checkpoint.
- [ ] Course lesson: in `rdi-economics-business-case`, add `tracking-outcomes-after-go-live` — 13 min, 3 sections, checkpoint.

### Extra lessons for RDI Foundations

- [ ] Course lesson: in `rdi-foundations`, add `the-maturity-curve` — 12 min, 3 sections (visibility, control, optimisation; failure modes; how to advance), checkpoint.
- [ ] Course lesson: in `rdi-foundations`, add `category-boundary-in-practice` — 12 min, 3 sections (vs cameras, vs dashboards, vs BIM), checkpoint.
- [ ] Course lesson: in `rdi-foundations`, add `command-views-and-portfolio-thinking` — 12 min, 3 sections, checkpoint.

## Anonymized case studies (target: 6)

Each: append a `CaseStudy` to `caseStudies` in `src/lib/content/case-studies.ts`. Always anonymise: never use real company names, never name a project. Use phrases like "an anonymized residential project of approximately 320 units" or "an anonymized energy project on the eastern seaboard". Body: 6–10 `ArticleBlock`s totalling 600–900 words. `facts`: 4–6 `{label, value}` pairs covering project type, scale, duration, packs used. `workflowPacks`: 2–4 pack slugs from `progress-verification`, `claims-evidence`, `gate-logistics`, `safety-monitoring`, `stakeholder-reporting`, `subcontractor-performance`, `compliance-record`, `design-verification`.

- [ ] Case study: `mission-critical-data-centre-claims-defence` — sector "Mission critical / data centre", primary packs claims-evidence and progress-verification.
- [ ] Case study: `residential-progress-and-stakeholder-reporting` — sector "Residential", primary packs progress-verification and stakeholder-reporting.
- [ ] Case study: `infrastructure-claims-and-compliance` — sector "Infrastructure", primary packs claims-evidence and compliance-record.
- [ ] Case study: `commercial-fitout-design-verification` — sector "Commercial fitout", primary packs design-verification and stakeholder-reporting.
- [ ] Case study: `energy-project-gate-and-logistics` — sector "Energy", primary packs gate-logistics and safety-monitoring.
- [ ] Case study: `industrial-subcontractor-performance` — sector "Industrial", primary packs subcontractor-performance and progress-verification.

---

End of ledger. When everything above is `- [x]` or `- [!]`, the loop is complete.
