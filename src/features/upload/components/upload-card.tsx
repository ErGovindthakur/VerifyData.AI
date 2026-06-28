import { Card, CardContent } from "@/components/ui/card";

import { UploadDropzone } from "./upload-dropzone";

export function UploadCard() {
  return (
    <Card>
      <CardContent className="p-8">
        <UploadDropzone />
      </CardContent>
    </Card>
  );
}