import type { ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
}>;

export function PageContainer({
  children,
}: Props) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}