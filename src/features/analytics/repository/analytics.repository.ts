import { prisma } from "@/lib/prisma";

import { UploadStatus } from "@/generated/prisma/client";

export async function getProcessingStats(
  userId: string
) {
  const [completed, failed] =
    await Promise.all([
      prisma.upload.count({
        where: {
          userId,
          status:
            UploadStatus.COMPLETED,
        },
      }),

      prisma.upload.count({
        where: {
          userId,
          status:
            UploadStatus.FAILED,
        },
      }),
    ]);

  return {
    completed,
    failed,
  };
}

export async function getDocumentTypeStats(
  userId: string
) {
  return prisma.upload.groupBy({
    by: ["documentType"],

    where: {
      userId,
    },

    _count: true,
  });
}

export async function getUploadTrend(
  userId: string
) {
  return prisma.upload.findMany({
    where: {
      userId,
    },

    select: {
      createdAt: true,
    },

    orderBy: {
      createdAt: "asc",
    },
  });
}

export async function getAnalyticsStats(
  userId: string
) {
  const [uploads, exports, usage] =
    await Promise.all([
      prisma.upload.count({
        where: {
          userId,
        },
      }),

      prisma.exportHistory.count({
        where: {
          userId,
        },
      }),

      prisma.usageRecord.aggregate({
        where: {
          userId,
        },

        _sum: {
          aiRequests: true,
        },
      }),
    ]);

  return {
    uploads,
    exports,
    aiRequests:
      usage._sum.aiRequests ?? 0,
  };
}

export async function getRecentActivity(
  userId: string
) {
  return prisma.upload.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 10,

    select: {
      id: true,
      originalFileName: true,
      status: true,
      documentType: true,
      createdAt: true,
    },
  });
}

export async function getTopDocumentType(
  userId: string
) {
  const result =
    await prisma.upload.groupBy({
      by: ["documentType"],

      where: {
        userId,
      },

      _count: true,

      orderBy: {
        _count: {
          documentType: "desc",
        },
      },

      take: 1,
    });

  return result[0] ?? null;
}