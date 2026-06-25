/**
 * Global application configuration.
 * This file is the single source of truth for application metadata.
 */
export const appConfig = {
  name: "VerifyData.AI",
  shortName: "VerifyData",
  description:
    "AI-powered document extraction platform that transforms images into structured Excel and Google Sheets data.",

  company: {
    name: "VerifyData.AI",
    supportEmail: "support@verifydata.ai",
  },

  version: "1.0.0",

  defaultTheme: "dark",

  locale: "en-IN",
} as const;
