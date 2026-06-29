import { prisma } from "@/lib/prisma";

export type PrismaExecutor = Pick<
  typeof prisma,
  "payment" | "subscription"
>;