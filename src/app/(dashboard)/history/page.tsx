import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { auth } from "@/lib/auth";

import { getUploads } from "@/features/upload/services/upload-query.service";

export default async function HistoryPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const uploads = await getUploads(session.user.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Upload History</h1>

        <p className="text-muted-foreground">View all processed documents.</p>
      </div>

      {uploads.length === 0 ? (
        <p className="text-muted-foreground">No uploads found.</p>
      ) : (
        <div className="space-y-4">
          {uploads.map((upload) => (
            <Link
              key={upload.id}
              href={`/history/${upload.id}`}
              className="hover:border-primary block rounded-xl border p-4 transition"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  {/* <h3 className="font-medium">
                {upload.originalFileName}
              </h3> */}

                  <h3 className="font-medium">{upload.originalFileName}</h3>

                  <p className="text-xs text-red-500">{upload.id}</p>
                  <p className="text-muted-foreground text-sm">
                    {upload.createdAt.toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Badge>{upload.status}</Badge>

                  <Badge variant="secondary">{upload.documentType}</Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
