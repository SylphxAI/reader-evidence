# SOTA Family Roadmap

Status: archived adoption plan
Owner: Reader Evidence
Scope: repo-local future plan and its role in the SylphxAI MCP family
Decision record: pending PR-number ADR

## Family Role

Reader Evidence is the schema substrate for the Reader line. Its value is one
shared vocabulary for evidence references, source hashes, locators, confidence,
warnings, extraction routes, and follow-up actions across PDF, image, video,
and routed media outputs.

Because the repository is archived, its current role is planning and schema
governance, not active package delivery.

## Family Fit

| Project | Relationship |
| --- | --- |
| PDF Reader MCP | Mature document evidence contract and the strongest source of schema lessons. |
| Image Reader MCP | Uses image locators such as pixel boxes, OCR boxes, metadata routes, and privacy warnings. |
| Video Reader MCP | Uses temporal locators such as timestamps, frame indexes, stream ids, transcript spans, and scene ids. |
| Smart Reader MCP | Normalizes child reader evidence and needs a shared envelope vocabulary. |
| Architecture Reader MCP | Can consume reader evidence for repo-adjacent design artifacts. |
| Consultant MCP | Can receive reader evidence bundles for review and research synthesis. |

## SOTA End State

The best end state is not a hand-written schema graveyard. The family needs one
machine-checkable evidence contract that is generated from the owning reader
schemas or from this package if it is reactivated.

## Roadmap

### Phase 0: Decide Ownership

- Decide whether Reader Evidence reactivates as the canonical schema package or
  stays archived while active readers own generated schemas.
- If it stays archived, link active reader docs to their own schema contracts.
- If it reactivates, add release, versioning, and conformance gates.

### Phase 1: Evidence Vocabulary

- Define stable terms for source, source hash, locator, route, confidence,
  warning, cache freshness, and next action.
- Map PDF page/bbox, image pixel box, video timestamp/frame, and routed media
  delegation evidence into the vocabulary.

### Phase 2: Generated Artifacts

- Generate TypeScript types, JSON Schema, examples, and validation fixtures.
- Add cross-reader fixtures that prove evidence can round-trip through the
  shared envelope.

### Phase 3: Adoption Gates

- Active readers can depend on the package only after generated schemas,
  fixtures, release workflow, and compatibility policy are in place.
- Until then, this repo remains a planning reference, not a runtime dependency.

## Validation Gates

- Schema examples validate.
- Every locator type maps to at least one active reader.
- Generated artifacts match source schemas.
- No product README claims are duplicated from active reader repositories.
