import { FileText } from "lucide-react";

type UploadPreviewProps = Readonly<{
  file: File;
}>;

export function UploadPreview({
  file,
}: UploadPreviewProps) {
  return (
    <div className="mt-6 rounded-xl border p-4">
      <div className="flex items-center gap-4">
        <FileText className="h-10 w-10 text-primary" />

        <div className="space-y-1">
          <p className="font-medium">
            {file.name}
          </p>

          <p className="text-sm text-muted-foreground">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          <p className="text-xs text-muted-foreground">
            {file.type}
          </p>
        </div>
      </div>
    </div>
  );
}