import { prisma } from "@/lib/prisma";
import { PaymentStatus } from "@/generated/prisma/enums";

type CreatePaymentParams = Readonly<{
  userId: string;

  amount: number;

  providerOrderId: string;
}>;
import type { PrismaExecutor } from "@/lib/prisma.types";

export async function createPayment(
  params: CreatePaymentParams
) {
  return prisma.payment.create({
    data: {
      userId: params.userId,

      amount: params.amount,

      status:
        PaymentStatus.CREATED,

      providerOrderId:
        params.providerOrderId,
    },
  });
}

export async function markPaymentPaid(
  db: PrismaExecutor,
  orderId: string,
  paymentId: string,
  signature: string | null
) {
  return db.payment.update({
    where: {
      providerOrderId: orderId,
    },

    data: {
      status: PaymentStatus.PAID,

      providerPaymentId: paymentId,

      providerSignature: signature,
    },

    include: {
      user: true,
    },
  });
}

export async function markPaymentFailed(
  db: PrismaExecutor,
  orderId: string
) {
  return db.payment.update({
    where: {
      providerOrderId: orderId,
    },

    data: {
      status: PaymentStatus.FAILED,
    },
  });
}

export async function markWebhookPaymentFailed(
  orderId: string,
  paymentId: string
) {
  return prisma.payment.update({
    where: {
      providerOrderId: orderId,
    },

    data: {
      status: PaymentStatus.FAILED,

      providerPaymentId: paymentId,
    },
  });
}

export async function findPaymentByOrderId(
  orderId: string
) {
  return prisma.payment.findUnique({
    where: {
      providerOrderId: orderId,
    },
  });
}