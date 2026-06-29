import {
  createSubscription,
  getSubscription,
  upgradeSubscription,
} from "../repository/subscription.repository";

import type { PrismaExecutor } from "@/lib/prisma.types";

export async function activatePro(
  db: PrismaExecutor,
  userId: string
) {
  const subscription =
    await getSubscription(db,userId);

  if (!subscription) {
    return createSubscription(
      db,
      userId
    );
  }

  return upgradeSubscription(
    db,
    userId
  );
}