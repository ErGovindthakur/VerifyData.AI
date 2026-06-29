import {
  Upload,
  FileSpreadsheet,
  Bot,
  CircleCheckBig,
} from "lucide-react";

import { StatCard } from "@/components/common/stat-card";

import type { AnalyticsStats } from "../types/analytics.types";

type Props = Readonly<{
  stats: AnalyticsStats;
}>;

export function StatsGrid({
  stats,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Uploads"
        value={stats.uploads}
        icon={Upload}
      />

      <StatCard
        title="Exports"
        value={stats.exports}
        icon={FileSpreadsheet}
      />

      <StatCard
        title="AI Requests"
        value={stats.aiRequests}
        icon={Bot}
      />

      <StatCard
        title="Success Rate"
        value={`${stats.successRate}%`}
        icon={CircleCheckBig}
      />
    </div>
  );
}