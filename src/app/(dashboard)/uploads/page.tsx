import { UploadCard } from "@/features/upload/components/upload-card";
export default function UploadPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Upload Document
        </h1>

        <p className="mt-2 text-muted-foreground">
          Upload invoices, receipts, identity documents,
          or forms for AI-powered extraction.
        </p>
      </div>

      <UploadCard />
    </div>
  );
}