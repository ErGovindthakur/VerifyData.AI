import { cn } from "@/lib/utils";

type AuthHeaderProps = Readonly<{
  title: string;
  description: string;
  className?: string;
}>;

export function AuthHeader({
  title,
  description,
  className,
}: AuthHeaderProps) {
  return (
    <header className={cn("space-y-2 text-center", className)}>
      <h1 className="text-3xl font-bold tracking-tight">
        {title}
      </h1>

      <p className="text-sm text-muted-foreground">
        {description}
      </p>
    </header>
  );
}