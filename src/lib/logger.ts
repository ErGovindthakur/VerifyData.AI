import pino from "pino";
import { appConfig } from "@/shared/config/app";

const isDevelopment = process.env.NODE_ENV !== "production";

export const logger = pino({
  name: appConfig.name,

  level: isDevelopment ? "debug" : "info",

  transport: isDevelopment
    ? {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      }
    : undefined,
});
