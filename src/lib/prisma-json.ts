// src/lib/prisma-json.ts
import { Prisma } from "@/generated/prisma/client";

export function toPrismaJson<T>(value: T) {
  return value as Prisma.InputJsonValue;
}
