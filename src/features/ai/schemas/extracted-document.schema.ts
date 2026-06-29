import { z } from "zod";

const documentTypes = [
  "INVOICE",
  "RECEIPT",
  "BUSINESS_CARD",
  "AADHAAR",
  "PAN",
  "PASSPORT",
  "DRIVING_LICENSE",
  "FORM",
  "TABLE",
  "UNKNOWN",
] as const;

export const extractedDocumentSchema = z.object({
  documentType: z.enum(documentTypes).catch("UNKNOWN"), // fallback instead of 500
  confidence: z.number().min(0).max(1),
  extractedData: z.record(z.string(), z.unknown()),
});

export type ExtractedDocument = z.infer<
  typeof extractedDocumentSchema
>;