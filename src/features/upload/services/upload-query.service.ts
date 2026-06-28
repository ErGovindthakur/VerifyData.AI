import { notFound } from "next/navigation";
import {
  findUploadById,
  findUploadDetails,
  findUploadsByUserId,
} from "../repository/upload.repository";

export async function getUploads(
  userId: string
) {
  return findUploadsByUserId(userId);
}

export async function getUpload(
  uploadId: string,
  userId: string
) {
  return findUploadById(
    uploadId,
    userId
  );
}


export async function getUploadDetails(
  uploadId: string,
  userId: string
) {
  const upload = await findUploadDetails(
    uploadId,
    userId
  );

  if (!upload) {
    notFound();
  }

  return upload;
}