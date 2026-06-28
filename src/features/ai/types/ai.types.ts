export type AIExtractionResult = Readonly<{
  documentType: string;
  confidence: number;
  extractedData: Record<string, unknown>;
  processingTimeMs: number;
}>;