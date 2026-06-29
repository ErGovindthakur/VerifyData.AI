import { prisma } from "@/lib/prisma";

type CreateConnectedAccountInput = Readonly<{
  userId: string;
  provider: string;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
  scope?: string;
}>;

export async function upsertConnectedAccount(
  data: CreateConnectedAccountInput
) {
  return prisma.connectedAccount.upsert({
    where: {
      userId_provider: {
        userId: data.userId,
        provider: data.provider,
      },
    },

    update: {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      expiresAt: data.expiresAt,
      scope: data.scope,
    },

    create: data,
  });
}

export async function findConnectedAccount(
  userId: string,
  provider: string
) {
  return prisma.connectedAccount.findUnique({
    where: {
      userId_provider: {
        userId,
        provider,
      },
    },
  });
}

export async function getConnectedAccounts(
  userId: string
) {
  return prisma.connectedAccount.findMany({
    where: {
      userId,
    },

    orderBy: {
      provider: "asc",
    },
  });
}

export async function disconnectProvider(
  userId: string,
  provider: string
) {
  return prisma.connectedAccount.delete({
    where: {
      userId_provider: {
        userId,
        provider,
      },
    },
  });
}