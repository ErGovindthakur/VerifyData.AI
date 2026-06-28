"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createUploadAction } from "../actions/upload-action";
import { uploadSchema } from "../schemas/upload.schema";

export function useUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function selectFile(file: File) {
    const result = uploadSchema.safeParse({
      file,
    });

    if (!result.success) {
      setFile(null);
      setError(result.error.issues[0].message);
      return;
    }

    setError(null);
    setFile(file);
  }

  async function upload() {
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      await createUploadAction(file);
      toast.success("Document uploaded successfully!");
      reset();
    } catch (err) {
      toast.error("Upload failed.");
      setError(
        err instanceof Error
          ? err.message
          : "Upload failed."
      );
    } finally {
      setUploading(false);
    }
  }

  function reset() {
    setFile(null);
    setError(null);
    setUploading(false);
  }

  return {
    file,
    error,
    uploading,
    selectFile,
    upload,
    reset,
  };
}