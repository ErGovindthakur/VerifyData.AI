"use client";

import { useRef } from "react";

import { Upload } from "lucide-react";

import { useUpload } from "../hooks/use-upload";

import { UploadPreview } from "./upload-preview";
import { UploadButton } from "./upload-button";
import { cn } from "@/lib/utils";

export function UploadDropzone() {
  const inputRef =
    useRef<HTMLInputElement>(null);

const {
  file,
  error,
  selectFile,
  upload,
  uploading,
} = useUpload();

  function handleClick() {
    inputRef.current?.click();
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const selected =
      e.target.files?.[0];

    if (!selected) return;

    selectFile(selected);
  }

  return (
    <div className={cn(
        uploading &&
        "pointer-events-none opacity-60"
    )}>
      <input
        ref={inputRef}
        hidden
        type="file"
        accept=".pdf,.png,.jpg,.jpeg,.webp"
        onChange={handleChange}
      />

      <div
        onClick={handleClick}
        className="flex min-h-[350px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 transition-colors hover:border-primary"
      >
        <Upload className="mb-4 h-14 w-14 text-primary" />

        <h2 className="text-xl font-semibold">
          Drag & Drop your document
        </h2>

        <p className="text-sm text-muted-foreground">
          PDF, PNG, JPG, WEBP
        </p>

        <p className="text-xs text-muted-foreground">
          Maximum size 10 MB
        </p>
      </div>

      {error && (
        <p className="mt-4 text-sm text-red-500">
          {error}
        </p>
      )}

      {file && (
  <>
    <UploadPreview file={file} />

    <UploadButton
      uploading={uploading}
      onUpload={upload}
    />
  </>
)}
    </div>
  );
}