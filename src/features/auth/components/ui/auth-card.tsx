import { cn } from "@/lib/utils";

type AuthCardProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export function AuthCard({
  children,
  className,
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md",
        "rounded-3xl",
        "border border-white/10",
        "bg-white/5",
        "backdrop-blur-2xl",
        "shadow-2xl",
        "p-8",
        "transition-all duration-300",
        "hover:border-white/20",
        className
      )}
    >
      {children}
    </div>
  );
}