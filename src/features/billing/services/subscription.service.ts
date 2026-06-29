import {
  createSubscription,
  getSubscription,
  upgradeSubscription,
} from "../repository/subscription.repository";

import { SubscriptionPlan } from "@/generated/prisma/enums";

import type { PrismaExecutor } from "@/lib/prisma.types";

export async function activatePro(db: PrismaExecutor, userId: string) {
  const subscription = await getSubscription(db, userId);

  if (!subscription) {
    return createSubscription(db, userId);
  }

  const active =
    subscription.isActive &&
    subscription.plan === SubscriptionPlan.PRO &&
    (!subscription.expiresAt || subscription.expiresAt > new Date());

  if (active) {
    return subscription;
  }

  return upgradeSubscription(db, userId);
}
