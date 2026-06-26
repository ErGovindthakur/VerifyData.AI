import Link from "next/link";

export function DashboardLogo() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
        V
      </div>

      <div className="leading-tight">
        <p className="font-semibold">
          VerifyData.AI
        </p>

        <p className="text-xs text-muted-foreground">
          AI Document Automation
        </p>
      </div>
    </Link>
  );
}