import { prisma } from "@/lib/prisma";

export async function getBillingData(
  userId: string
) {
  const [
    subscription,
    uploads,
    exports,
    usage,
  ] = await Promise.all([
    prisma.subscription.findUnique({
      where: {
        userId,
      },
    }),

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
    subscription,

    uploads,

    exports,

    aiRequests:
      usage._sum.aiRequests ?? 0,
  };
}