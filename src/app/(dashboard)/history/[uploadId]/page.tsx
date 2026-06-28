import { headers } from "next/headers";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

import { getUploadDetails } from "@/features/upload/services/upload-query.service";

import { UploadHeader } from "@/features/upload/components/upload-details/upload-header";
import { UploadInformation } from "@/features/upload/components/upload-details/upload-information";
import { UploadJson } from "@/features/upload/components/upload-details/upload-json";
import { UploadPreview } from "@/features/upload/components/upload-details/upload-preview";

type Props = Readonly<{
  params: Promise<{
    uploadId: string;
  }>;
}>;

export default async function Page({ params }: Props) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    notFound();
  }

  const { uploadId } = await params;
  console.log("UploadId : ",uploadId)

  const upload = await getUploadDetails(uploadId, session.user.id);

  return (
    <div className="space-y-6">
      <UploadHeader
        fileName={upload.originalFileName}
        status={upload.status}
        documentType={upload.documentType}
      />

      <Link href={`/api/export/excel/${upload.id}`}>
        <Button>Export Excel</Button>
      </Link>

      <p className="text-red-500">URL ID : {uploadId}</p>

      <p className="text-green-500">DB ID : {upload.id}</p>

      <div className="grid gap-6 lg:grid-cols-2">
        <UploadInformation upload={upload} />

        <UploadPreview />
      </div>

      <UploadJson data={upload.extractedDocument?.extractedData} />
    </div>
  );
}
