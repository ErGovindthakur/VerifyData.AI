import { prisma } from "@/lib/prisma";

export async function getDashboardStats(userId: string) {
  const [uploads, exports, usage] = await Promise.all([
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
    aiRequests: usage._sum.aiRequests ?? 0,
  };
}

export async function getRecentUploads(userId: string) {
  return prisma.upload.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },

    take: 5,

    select: {
      id: true,
      originalFileName: true,
      status: true,
      documentType: true,
      createdAt: true,
    },
  });
}