import {
  getDashboardStats,
  getRecentUploads,
} from "../repository/dashboard.repository";

import type { DashboardData } from "../types/dashboard.types";

export async function getDashboardData(
  userId: string
): Promise<DashboardData> {
  const [stats, recentUploads] = await Promise.all([
    getDashboardStats(userId),
    getRecentUploads(userId),
  ]);

  return {
    stats: {
      uploads: stats.uploads,
      exports: stats.exports,
      aiRequests: stats.aiRequests,
      successRate:
        stats.uploads === 0 ? 0 : 100,
    },

    recentUploads,
  };
}