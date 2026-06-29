import {
  getDocumentTypeStats,
  getUploadTrend,
  getAnalyticsStats,
  getRecentActivity,
  getTopDocumentType,
  getProcessingStats,
} from "../repository/analytics.repository";

import type { AnalyticsData, UploadTrend } from "../types/analytics.types";

export async function getAnalyticsData(userId: string): Promise<AnalyticsData> {
  const [stats, uploadTrend, documentTypes, recentActivity, topDocument, processing] =
    await Promise.all([
      getAnalyticsStats(userId),
      getUploadTrend(userId),
      getDocumentTypeStats(userId),
      getRecentActivity(userId),
      getTopDocumentType(userId),
      getProcessingStats(userId),
    ]);

  const trendMap = new Map<string, number>();

  for (const upload of uploadTrend) {
    const date = upload.createdAt.toISOString().split("T")[0];

    trendMap.set(date, (trendMap.get(date) ?? 0) + 1);
  }

  const trend: UploadTrend[] = [...trendMap.entries()].map(([date, uploads]) => ({
    date,
    uploads,
  }));

  return {
    stats: {
      uploads: stats.uploads,
      exports: stats.exports,
      aiRequests: stats.aiRequests,
      successRate: stats.uploads === 0 ? 0 : 100,
    },

    uploadTrend: trend,

    documentTypes: documentTypes.map((item) => ({
      documentType: item.documentType,
      count: item._count,
    })),

    topDocument: topDocument
      ? {
          documentType: topDocument.documentType,
          count: topDocument._count,
        }
      : null,

    processing,
    recentActivity,
  };
}
