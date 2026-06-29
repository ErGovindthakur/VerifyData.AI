import {
  Card,
  CardContent,
} from "@/components/ui/card";

type Props = Readonly<{
  title: string;
  description: string;
}>;

export function EmptyState({
  title,
  description,
}: Props) {
  return (
    <Card>
      <CardContent className="flex min-h-52 flex-col items-center justify-center text-center">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}