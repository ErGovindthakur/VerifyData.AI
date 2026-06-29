import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import type { ActivityItem } from "../types/analytics.types";

type Props = Readonly<{
  activities: ActivityItem[];
}>;

export function RecentActivity({
  activities,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Recent Activity
        </CardTitle>

        <CardDescription>
          Latest processed documents.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {activities.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No recent activity found.
          </p>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">
                    {activity.originalFileName}
                  </p>

                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">
                      {activity.documentType}
                    </Badge>

                    <Badge>
                      {activity.status}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {activity.createdAt.toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}    