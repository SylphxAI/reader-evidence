# Reader Evidence

Shared evidence and provenance schemas for the [Sylphx Reader portfolio](https://github.com/SylphxAI/pdf-reader-mcp/blob/main/docs/adr/0004-reader-portfolio-architecture.md).

## Purpose

One schema home for:

- `EvidenceRef` — stable IDs with page, frame, or time_ms provenance
- `MediaTrustReport` — format-specific trust signals
- `ReadResult` — MCP tool response envelope shared by pdf/image/video/smart readers

## Status

Bootstrap — TypeScript types and JSON Schema drafts; consumers adopt incrementally.

## License

MIT © SylphxAI
