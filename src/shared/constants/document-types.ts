/**
 * Supported document types for AI classification.
 * Gemini classifies every uploaded document into one of these types.
 */
export const DocumentType = {
  INVOICE: "INVOICE",
  RECEIPT: "RECEIPT",
  BUSINESS_CARD: "BUSINESS_CARD",
  AADHAAR: "AADHAAR",
  PAN: "PAN",
  PASSPORT: "PASSPORT",
  DRIVING_LICENSE: "DRIVING_LICENSE",
  FORM: "FORM",
  TABLE: "TABLE",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * Type representing all supported document types.
 */
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType];
