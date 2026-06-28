import { prisma } from "@/lib/prisma";

export async function findHistoryByUserId(
  userId: string,
  page = 1,
  limit = 10
) {
  return prisma.upload.findMany({
    where: {
      userId,
    },

    include: {
      extractedDocument: true,
    },

    orderBy: {
      createdAt: "desc",
    },

    skip: (page - 1) * limit,

    take: limit,
  });
}

export async function countUploads(
  userId: string
) {
  return prisma.upload.count({
    where: {
      userId,
    },
  });
}