import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type GlassCardProps = ComponentPropsWithoutRef<"div">;

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-xl",
        "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
