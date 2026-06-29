import crypto from "node:crypto";

export function verifyWebhookSignature(
  body: string,
  signature: string
) {
  const expectedSignature =
    crypto
      .createHmac(
        "sha256",
        process.env
          .RAZORPAY_WEBHOOK_SECRET!
      )
      .update(body)
      .digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature),
    Buffer.from(signature)
  );
}