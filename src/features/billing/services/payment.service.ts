import { prisma } from "@/lib/prisma";
import type { VerifyPaymentInput } from "../payments/payment.types";
import { PaymentStatus } from "@/generated/prisma/enums";
import { PLANS } from "@/config/plans";
import { activatePro } from "./subscription.service";
import { createOrder, verifySignature } from "../payments/razorpay.service";

import {
  createPayment,
  findPaymentByOrderId,
  markPaymentFailed,
  markPaymentPaid,
} from "../repository/payment.repository";

type CompletePaymentInput = Readonly<{
  orderId: string;

  paymentId: string;

  signature?: string;
}>;

export async function createPaymentOrder(userId: string) {
  const amount = PLANS.PRO.price * 100;

  const order = await createOrder(amount);

  await createPayment({
    userId,

    amount,

    providerOrderId: order.id,
  });

  return order;
}

export async function verifyPayment(input: VerifyPaymentInput) {
  const valid = verifySignature(input);

  if (!valid) {
    await markPaymentFailed(prisma, input.razorpay_order_id);

    throw new Error("Invalid signature");
  }
  return completePayment({
    orderId: input.razorpay_order_id,

    paymentId: input.razorpay_payment_id,

    signature: input.razorpay_signature,
  });
}

export async function completePayment(input: CompletePaymentInput) {
  const existingPayment = await findPaymentByOrderId(input.orderId);

  if (!existingPayment) {
    throw new Error("Payment not found.");
  }

  if (existingPayment.status === PaymentStatus.PAID) {
    return existingPayment;
  }

  return prisma.$transaction(async (tx) => {
    const payment = await markPaymentPaid(
      tx, // 1. getting warning here
      input.orderId,
      input.paymentId,
      input.signature ?? null // hey check this one => Argument of type 'string | null' is not assignable to parameter of type 'string'.
    );

    await activatePro(
      tx, // 2. getting warning here
      payment.userId
    );

    return payment;
  });
}
