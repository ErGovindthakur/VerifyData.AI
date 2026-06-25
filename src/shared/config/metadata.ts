import type { Metadata } from "next";
import { appConfig } from "@/shared/config/app";
export const metadata: Metadata = {
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`,
  },

  description: appConfig.description,

  applicationName: appConfig.name,

  authors: [
    {
      name: appConfig.company.name,
    },
  ],

  keywords: ["AI", "OCR", "Document Extraction", "Gemini AI", "Next.js", "Google Sheets", "Excel"],
};
