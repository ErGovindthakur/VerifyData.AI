export const PLANS = {
  FREE: {
    id: "FREE",
    name: "FREE",
    price: 0,

    limits: {
      aiRequests: 100,
      uploads: 50,
      exports: 25,
    },

    features: ["100 AI Requests / month", "50 Uploads", "25 Excel Exports"],
  },

  PRO: {
    id: "PRO",
    name: "PRO",
    price: 299,

    limits: {
      aiRequests: 10000,
      uploads: 5000,
      exports: 5000,
    },

    features: [
      "10,000 AI Requests / month",
      "5,000 Uploads",
      "5,000 Exports",
      "Google Sheets Export",
      "Google Drive Sync",
      "Priority AI Processing",
      "Priority Support",
    ],
  },

  ENTERPRISE: {
    id: "ENTERPRISE",
    name: "Enterprise",
    price: 999,

    limits: {
      aiRequests: Number.MAX_SAFE_INTEGER,
      uploads: Number.MAX_SAFE_INTEGER,
      exports: Number.MAX_SAFE_INTEGER,
    },

    features: [],
  },
} as const;

export type PlanId = keyof typeof PLANS;
