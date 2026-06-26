"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { dashboardNav } from "@/config/dashboard-nav";
import { DashboardLogo } from "./dashboard-logo";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 border-r bg-background lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b p-6">
        <DashboardLogo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-4">
        {dashboardNav.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all hover:bg-muted",
                isActive &&
                  "bg-primary text-primary-foreground hover:bg-primary"
              )}
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}