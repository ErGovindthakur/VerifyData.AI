import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

type Props = Readonly<{
  plan: string;
}>;

export function CurrentPlanCard({
  plan,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Current Plan
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Badge
          variant={
            plan === "PRO"
              ? "default"
              : "secondary"
          }
        >
          {plan}
        </Badge>
      </CardContent>
    </Card>
  );
}