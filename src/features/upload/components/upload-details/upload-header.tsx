import { Badge } from "@/components/ui/badge";

type UploadHeaderProps = Readonly<{
  fileName: string;
  status: string;
  documentType: string;
}>;

export function UploadHeader({
  fileName,
  status,
  documentType,
}: UploadHeaderProps) {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-bold">
        {fileName}
      </h1>

      <div className="flex gap-3">
        <Badge>{status}</Badge>

        <Badge variant="secondary">
          {documentType}
        </Badge>
      </div>
    </div>
  );
}