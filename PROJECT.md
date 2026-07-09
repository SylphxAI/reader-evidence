# Reader Evidence

Reader Evidence is the shared evidence-schema substrate for the SylphxAI Reader
family. It is currently archived; its future is either reactivation as a
versioned schema package or replacement by generated schemas in the active
reader repositories.

## Lifecycle

- State: `archived`
- Layer: `foundation`

## Goals

- Define a single evidence envelope vocabulary for PDF, image, video, and
  routed media readers.
- Preserve provenance fields that agents can cite and re-check.
- Provide schema artifacts only if they can be generated, versioned, and tested.

## Non-Goals

- This repository does not own reader tool behavior, parsing, OCR, video
  timelines, file routing, or hosted service behavior.
- This repository does not publish product claims for active reader packages.
- This repository should not become a manually maintained duplicate of schemas
  owned by shipped readers.

## Public Surfaces

- Package manifest: [`package.json`](package.json)
- Public README: [`README.md`](README.md)
- SOTA family roadmap: [`docs/roadmap/sota-family-roadmap.md`](docs/roadmap/sota-family-roadmap.md)
