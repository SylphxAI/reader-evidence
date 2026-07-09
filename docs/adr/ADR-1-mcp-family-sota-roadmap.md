# ADR-1: Adopt Reader Evidence Family SOTA Roadmap

Date: 2026-07-09
Status: Proposed in PR #1
Slug: mcp-family-sota-roadmap

## Context

Reader Evidence is archived but still represents an important family concept:
shared evidence and provenance schemas for the Reader MCP line.

## Decision

Adopt `docs/roadmap/sota-family-roadmap.md` as the repo-local roadmap.

The repository's future is either reactivation as a versioned schema package
with generated artifacts and conformance fixtures, or permanent archive status
with active reader repositories owning generated schema contracts.

## Consequences

- Active readers must not depend on unshipped behavior from this archived repo.
- If reactivated, the package needs schema generation, tests, release gates, and
  compatibility policy before adoption.
- Product claims stay in the active reader repositories.

## Verification

- Roadmap added at `docs/roadmap/sota-family-roadmap.md`.
- PROJECT and README link to the roadmap.
- Docs-only validation: `git diff --check`.
