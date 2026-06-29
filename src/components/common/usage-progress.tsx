import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Progress } from "@/components/ui/progress";

type Props = Readonly<{
  title: string;
  used: number;
  limit: number;
}>;

export function UsageProgress({
  title,
  used,
  limit,
}: Props) {
  const percentage =
    Math.min((used / limit) * 100, 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Progress value={percentage} />

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            {used} / {limit}
          </span>

          <span className="font-medium">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}