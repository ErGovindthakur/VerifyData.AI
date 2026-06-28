import { prisma } from "@/lib/prisma";

import { UploadStatus } from "@/generated/prisma/client";

type CreateUploadInput = Readonly<{
  userId: string;
  originalFileName: string;
  storedFileName: string;
  fileExtension: string;
  mimeType: string;
  fileSize: number;
  filePath: string;
}>;

import { DocumentType } from "@/generated/prisma/enums";

export async function updateDocumentType(
  id: string,
  documentType: DocumentType
) {
  return prisma.upload.update({
    where: {
      id,
    },
    data: {
      documentType,
    },
  });
}
export async function createUpload(
  data: CreateUploadInput
) {
  return prisma.upload.create({
    data: {
      ...data,
      status: UploadStatus.PENDING,
    },
  });
}

export async function updateUploadStatus(
  id: string,
  status: UploadStatus
) {
  return prisma.upload.update({
    where: {
      id,
    },

    data: {
      status,
    },
  });
}

export async function findUploadById(
  id: string,
  userId: string
) {
  return prisma.upload.findFirst({
    where: {
      id,
      userId,
    },

    include: {
      extractedDocument: true,
    },
  });
}

export async function markUploadFailed(
  id: string
) {
  return updateUploadStatus(
    id,
    UploadStatus.FAILED
  );
}

export async function findUploadsByUserId(
  userId: string
) {
  return prisma.upload.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    include: {
      extractedDocument: true,
    },
  });
}

export async function findUploadDetails(
  uploadId: string,
  userId: string
) {
  return prisma.upload.findFirst({
    where: {
      id: uploadId,
      userId,
    },

    include: {
      extractedDocument: true,
    },
  });
}

export async function getUploadDetails(
    uploadId:string,
    userId:string
){
    return findUploadDetails(
        uploadId,
        userId
    );
}

export async function findUploadForExport(
  uploadId: string,
  userId: string
) {
  return prisma.upload.findFirst({
    where: {
      id: uploadId,
      userId,
    },

    include: {
      extractedDocument: true,
    },
  });
}