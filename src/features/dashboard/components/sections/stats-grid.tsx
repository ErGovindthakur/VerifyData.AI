import {
  BarChart3,
  FileSpreadsheet,
  Sparkles,
  Upload,
} from "lucide-react";

import type { DashboardStats } from "../../types/dashboard.types";

import { StatsCard } from "../cards/stats-card";

type StatsGridProps = Readonly<{
  stats: DashboardStats;
}>;

export function StatsGrid({
  stats,
}: StatsGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatsCard
        title="Uploads"
        value={stats.uploads}
        description="Documents uploaded"
        icon={Upload}
      />

      <StatsCard
        title="AI Requests"
        value={stats.aiRequests}
        description="AI processing requests"
        icon={Sparkles}
      />

      <StatsCard
        title="Exports"
        value={stats.exports}
        description="Excel & Sheets exports"
        icon={FileSpreadsheet}
      />

      <StatsCard
        title="Success Rate"
        value={`${stats.successRate}%`}
        description="Overall processing success"
        icon={BarChart3}
      />
    </section>
  );
}