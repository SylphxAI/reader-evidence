/** Bootstrap export — types will move here from portfolio ADR-0004. */
export type EvidenceKind = 'text' | 'ocr' | 'asr' | 'subtitle' | 'metadata' | 'region' | 'frame';

export interface EvidenceRef {
  id: string;
  kind: EvidenceKind;
  source: string;
  page?: number;
  frame?: number;
  time_ms?: number;
  bbox?: { left: number; top: number; width: number; height: number };
}
