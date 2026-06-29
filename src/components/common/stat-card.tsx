import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = Readonly<{
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
}>;

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: Props) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>

        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <div className="text-3xl font-bold">
          {value}
        </div>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}