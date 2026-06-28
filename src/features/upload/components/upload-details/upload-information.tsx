import { getUploadDetails } from "../../services/upload-query.service";

type Props = Readonly<{
  upload: Awaited<
    ReturnType<typeof getUploadDetails>
  >;
}>;

export function UploadInformation({
  upload,
}: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="mb-4 text-lg font-semibold">
        File Information
      </h2>

      <div className="space-y-2 text-sm">
        <p>
          Size:{" "}
          {(upload.fileSize / 1024).toFixed(1)}
          KB
        </p>

        <p>
          MIME: {upload.mimeType}
        </p>

        <p>
          Extension:{" "}
          {upload.fileExtension}
        </p>

        <p>
          Uploaded:
          {" "}
          {upload.createdAt.toLocaleString()}
        </p>
      </div>
    </div>
  );
}