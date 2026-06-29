import { SubscriptionPlan } from "@/generated/prisma/enums";

import type { PrismaExecutor } from "@/lib/prisma.types";

export function getSubscription(db: PrismaExecutor,userId: string) {
  return db.subscription.findUnique({
    where: {
      userId,
    },
  });
}

function getSubscriptionExpiry() {
  return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
}

function getSubscriptionData() {
  return {
    plan: SubscriptionPlan.PRO,

    isActive: true,

    startsAt: new Date(),

    expiresAt: getSubscriptionExpiry(),
  };
}

export function upgradeSubscription(db: PrismaExecutor, userId: string) {
  return db.subscription.update({
    where: {
      userId,
    },

    data: getSubscriptionData(),
  });
}

export function createSubscription(db: PrismaExecutor, userId: string) {
  return db.subscription.create({
    data: {
      userId,
      ...getSubscriptionData(),
    },
  });
}
