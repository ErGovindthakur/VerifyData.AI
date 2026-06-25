/**
 * Centralized application routes.
 * Every route used in the application should come from here.
 */
export const routes = {
  // Public Pages
  home: "/",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",

  // Authentication
  auth: {
    login: "/login",
    register: "/register",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    verifyEmail: "/verify-email",
  },

  // Dashboard
  dashboard: {
    home: "/dashboard",
    upload: "/dashboard/upload",
    history: "/dashboard/history",
    analytics: "/dashboard/analytics",
    subscription: "/dashboard/subscription",
    settings: "/dashboard/settings",
    profile: "/dashboard/profile",
  },

  // API Routes
  api: {
    auth: "/api/auth",
    upload: "/api/upload",
    export: "/api/export",
    ai: "/api/ai",
    webhook: "/api/webhook",
  },
} as const;
