/**
 * Available subscription plans.
 */
export const Plan = {
  FREE: "FREE",
  PRO: "PRO",
  ENTERPRISE: "ENTERPRISE",
  ADMIN: "ADMIN",
} as const;

export type Plan = (typeof Plan)[keyof typeof Plan];

/**
 * Features and limits for each plan.
 */
export const PlanFeatures = {
  [Plan.FREE]: {
    uploadsPerDay: 10,
    googleSheetsExport: true,
    excelExport: true,
    prioritySupport: false,
  },

  [Plan.PRO]: {
    uploadsPerDay: 50,
    googleSheetsExport: true,
    excelExport: true,
    prioritySupport: true,
  },

  [Plan.ENTERPRISE]: {
    uploadsPerDay: 500,
    googleSheetsExport: true,
    excelExport: true,
    prioritySupport: true,
  },

  [Plan.ADMIN]: {
    uploadsPerDay: Number.MAX_SAFE_INTEGER,
    googleSheetsExport: true,
    excelExport: true,
    prioritySupport: true,
  },
} as const;
