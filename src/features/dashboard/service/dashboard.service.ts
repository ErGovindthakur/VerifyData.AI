import { getAnalyticsData } from "@/features/analytics/services/analytics.service";

import type { DashboardData } from "../types/dashboard.types";

export async function getDashboardData(
  userId: string
): Promise<DashboardData> {
  const analytics =
    await getAnalyticsData(userId);

  return {
    stats: analytics.stats,

    recentUploads: [],
  };
}