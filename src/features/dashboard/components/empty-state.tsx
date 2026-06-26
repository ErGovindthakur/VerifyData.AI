import Link from "next/link";
import { FileUp } from "lucide-react";

import { Button } from "@/components/ui/button";

type EmptyStateProps = Readonly<{
  title: string;
  description: string;
  buttonText: string;
  href: string;
}>;

export function EmptyState({
  title,
  description,
  buttonText,
  href,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed p-10 text-center">
      <div className="mb-4 rounded-full bg-primary/10 p-4">
        <FileUp className="h-8 w-8 text-primary" />
      </div>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>

      <Button
        asChild
        className="mt-6"
      >
        <Link href={href}>
          {buttonText}
        </Link>
      </Button>
    </div>
  );
}