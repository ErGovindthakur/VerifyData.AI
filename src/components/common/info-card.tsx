import type { ReactNode } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = Readonly<{
  title: string;
  children: ReactNode;
}>;

export function InfoCard({
  title,
  children,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}