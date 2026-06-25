/**
 * Technical upload constraints.
 * These are infrastructure limits, not subscription limits.
 */

export const UploadLimits = {
  image: {
    maxSizeInMB: 10,
    allowedMimeTypes: ["image/jpeg", "image/png", "image/webp"],
  },

  pdf: {
    maxSizeInMB: 20,
    maxPages: 10,
    allowedMimeTypes: ["application/pdf"],
  },

  maxFilesPerRequest: 1,
} as const;

/**
 * AI processing limits.
 */
export const AILimits = {
  timeoutInSeconds: 30,
  retryAttempts: 2,
} as const;

/**
 * General application limits.
 */
export const AppLimits = {
  maxSearchResults: 50,
  maxHistoryItemsPerPage: 20,
} as const;

/**
 * Supported export formats.
 */
export const ExportFormats = {
  EXCEL: "xlsx",
  CSV: "csv",
  GOOGLE_SHEETS: "google-sheets",
} as const;

export type ExportFormat = (typeof ExportFormats)[keyof typeof ExportFormats];
