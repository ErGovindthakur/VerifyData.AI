import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { TopDocument } from "../types/analytics.types";

type Props = Readonly<{
  document: TopDocument | null;
}>;

export function TopDocumentCard({
  document,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Top Document
        </CardTitle>
      </CardHeader>

      <CardContent>
        {document ? (
          <>
            <p className="text-3xl font-bold">
              {document.documentType}
            </p>

            <p className="mt-2 text-muted-foreground">
              {document.count} processed
            </p>
          </>
        ) : (
          <p className="text-muted-foreground">
            No data available
          </p>
        )}
      </CardContent>
    </Card>
  );
}