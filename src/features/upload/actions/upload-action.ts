"use server";

import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import { processUpload } from "../services/upload.service";

export async function createUploadAction(
  file: File
) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized");
  }

  return processUpload({
    userId: session.user.id,
    file,
  });
}