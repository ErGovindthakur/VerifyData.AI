import { prisma } from "@/lib/prisma";

import type { ExtractedDocument } from "../schemas/extracted-document.schema";
import { toPrismaJson } from "@/lib/prisma-json";

type CreateExtractedDocumentInput = Readonly<{
  uploadId: string;
  result: ExtractedDocument;
}>;

export async function createExtractedDocument({
  uploadId,
  result,
}: CreateExtractedDocumentInput) {
  return prisma.extractedDocument.create({
    data: {
      uploadId,
      extractedData:toPrismaJson(result.extractedData),
      confidence: result.confidence,
      aiModel: "gemini-2.5-flash",
    },
  });
}