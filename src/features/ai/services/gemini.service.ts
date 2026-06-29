import { generateExtraction } from "../providers/gemini.provider";
import { EXTRACT_DOCUMENT_PROMPT } from "../prompts/extract-document";
import { extractedDocumentSchema } from "../schemas/extracted-document.schema";
import { extractJson } from "../utils/parse-json";

export async function extractDocument(
  file: File
) {
  const response = await generateExtraction(
    EXTRACT_DOCUMENT_PROMPT,
    file
  );

  const json = extractJson(response);

  // Normalize documentType to uppercase before Zod validation
  if (json && typeof json === "object" && "documentType" in json) {
    json.documentType = String(json.documentType).toUpperCase().trim();
  }
  return extractedDocumentSchema.parse(json);
}