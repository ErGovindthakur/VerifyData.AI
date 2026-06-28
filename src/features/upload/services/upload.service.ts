import { nanoid } from "nanoid";
import { incrementUsage } from "@/features/dashboard/repository/dashboard.repository";
import { UploadStatus } from "@/generated/prisma/enums";

import {
  createUpload,
  markUploadFailed,
  updateUploadStatus,
  updateDocumentType
} from "../repository/upload.repository";

import { deleteFile, uploadFile } from "./storage.service";
import { createExtractedDocument } from "@/features/ai/repository/extracted-document.repository";
import { extractDocument } from "@/features/ai";

type ProcessUploadParams = Readonly<{
  userId: string;
  file: File;
}>;

export async function processUpload({
  userId,
  file,
}: ProcessUploadParams) {
  const extension =
  file.name.split(".").pop()?.toLowerCase() ?? "";

  const storedFileName =
    `${nanoid()}.${extension}`;

  const filePath =
    `uploads/${userId}/${storedFileName}`;

  const upload = await createUpload({
    userId,
    originalFileName: file.name,
    storedFileName,
    fileExtension: extension,
    mimeType: file.type,
    fileSize: file.size,
    filePath,
  });

  await markUploadFailed(upload.id)
 try {
  await uploadFile({
    path: filePath,
    file,
  });

  // await updateUploadStatus(
  //   upload.id,
  //   UploadStatus.PROCESSING
  // );

  const result = await extractDocument(file);

  await createExtractedDocument({
    uploadId: upload.id,
    result,
  });

  await updateDocumentType(
  upload.id,
  result.documentType
);

  await updateUploadStatus(
    upload.id,
    UploadStatus.COMPLETED
  );

   await incrementUsage(userId);
   
  return upload;
} catch (error) {
  await markUploadFailed(upload.id);

  try {
    await deleteFile(filePath);
  } catch {
    // Ignore cleanup failures
  }

  throw error;
}
}