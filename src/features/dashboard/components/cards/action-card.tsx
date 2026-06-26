import Link from "next/link";
import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type ActionCardProps = Readonly<{
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}>;

export function ActionCard({
  title,
  description,
  href,
  icon: Icon,
}: ActionCardProps) {
  return (
    <Link href={href}>
      <Card className="transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        <CardContent className="flex items-start gap-4 p-6">
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>

          <div className="space-y-1">
            <h3 className="font-semibold">
              {title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}