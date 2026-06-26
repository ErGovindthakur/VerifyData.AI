import { routes } from "@/shared/constants/routes";

import { EmptyState } from "../empty-state";

import type { RecentUpload } from "../../types/dashboard.types";

type RecentUploadsProps = Readonly<{
  uploads: RecentUpload[];
}>;

// export interface DashboardData {
//   stats: DashboardStats;
//   recentUploads: RecentUpload[];
// }

export function RecentUploads({
  uploads,
}: RecentUploadsProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Recent Uploads
        </h2>

        <p className="text-sm text-muted-foreground">
          Your recently processed documents.
        </p>
      </div>

      {uploads.length === 0 ? (
        <EmptyState
          title="No uploads yet"
          description="Start by uploading your first invoice, receipt, identity document, or spreadsheet."
          buttonText="Upload your first document"
          href={routes.dashboard.upload}
        />
      ) : (
        <div className="space-y-3">
          {uploads.map((upload) => (
            <div
              key={upload.id}
              className="rounded-lg border p-4"
            >
              <p className="font-medium">
                {upload.originalFileName}
              </p>

              <p className="text-sm text-muted-foreground">
                {upload.documentType}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}