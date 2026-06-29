import { getBillingData } from "../repository/billing.repository";

import type { BillingData } from "../types/billing.types";
import { PLANS } from "@/config/plans";

type PlanId = keyof typeof PLANS;

export async function getBillingDetails(userId: string): Promise<BillingData> {
  const data = await getBillingData(userId);

  const planId = (data.subscription?.plan ?? "FREE") as PlanId;

  const plan = PLANS[planId];

  return {
    plan: plan.id,

    aiRequests: {
      used: data.aiRequests,
      limit: plan.limits.aiRequests,
    },

    uploads: {
      used: data.uploads,
      limit: plan.limits.uploads,
    },

    exports: {
      used: data.exports,
      limit: plan.limits.exports,
    },
  };
}
