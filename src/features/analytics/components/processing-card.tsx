import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { ProcessingStats } from "../types/analytics.types";

type Props = Readonly<{
  processing: ProcessingStats;
}>;

export function ProcessingCard({
  processing,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Processing Status
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Completed</span>

          <span className="font-semibold text-green-600">
            {processing.completed}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Failed</span>

          <span className="font-semibold text-red-600">
            {processing.failed}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}