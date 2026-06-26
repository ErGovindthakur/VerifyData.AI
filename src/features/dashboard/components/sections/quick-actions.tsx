import {
  ArrowUpRight,
  BarChart3,
  History,
  Upload,
} from "lucide-react";

import { routes } from "@/shared/constants/routes";

import { ActionCard } from "../cards/action-card";

export function QuickActions() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="text-sm text-muted-foreground">
          Jump straight into your most common tasks.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <ActionCard
          title="Upload Document"
          description="Upload a new document for AI processing."
          href={routes.dashboard.upload}
          icon={Upload}
        />

        <ActionCard
          title="View History"
          description="Browse your previously processed documents."
          href={routes.dashboard.history}
          icon={History}
        />

        <ActionCard
          title="Analytics"
          description="View processing statistics and insights."
          href={routes.dashboard.analytics}
          icon={BarChart3}
        />

        <ActionCard
          title="Upgrade Plan"
          description="Unlock higher limits and premium AI features."
          href={routes.dashboard.subscription}
          icon={ArrowUpRight}
        />
      </div>
    </section>
  );
}