import Razorpay from "razorpay";
import crypto from "crypto";
import { VerifyPaymentInput } from "./payment.types";

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,

  key_secret:
    process.env.RAZORPAY_KEY_SECRET!,
});

export async function createOrder(
  amount: number
) {
  console.log({
  keyId: process.env.RAZORPAY_KEY_ID,
  hasSecret: !!process.env.RAZORPAY_KEY_SECRET,
});
  return razorpay.orders.create({
    amount,

    currency: "INR",

    receipt: crypto.randomUUID(),
  });
}

export function verifySignature({
  razorpay_order_id,
  razorpay_payment_id,
  razorpay_signature,
}: VerifyPaymentInput) {
  const body =
    `${razorpay_order_id}|${razorpay_payment_id}`;

  const expected =
    crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(body)
      .digest("hex");

  return expected === razorpay_signature;
}