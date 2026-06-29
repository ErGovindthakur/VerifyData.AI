import { prisma } from "@/lib/prisma";
import type { VerifyPaymentInput } from "../payments/payment.types";
import { PLANS } from "@/config/plans";
import { activatePro } from "./subscription.service";
import { createOrder, verifySignature } from "../payments/razorpay.service";

import {
  createPayment,
  markPaymentFailed,
  markPaymentPaid,
} from "../repository/payment.repository";

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
  return completePayment(input);
}


async function completePayment(input: VerifyPaymentInput) {
  return prisma.$transaction(async (tx) => {
    const payment = await markPaymentPaid(
      tx, // 1. getting warning here
      input.razorpay_order_id,
      input.razorpay_payment_id,
      input.razorpay_signature
    );

    await activatePro(
      tx, // 2. getting warning here
      payment.userId
    );

    return payment;
  });
}
