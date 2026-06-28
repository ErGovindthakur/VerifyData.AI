"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
type UploadButtonProps = Readonly<{
  uploading: boolean;
  onUpload: () => Promise<void>;
}>;

export function UploadButton({ uploading, onUpload }: UploadButtonProps) {
  return (
    <Button type="button" className="w-full" disabled={uploading} onClick={() => void onUpload()}>
      {uploading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        "Upload Document"
      )}
    </Button>
  );
}
