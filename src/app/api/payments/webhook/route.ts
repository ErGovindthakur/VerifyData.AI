import { NextRequest, NextResponse } from "next/server";

import { verifyWebhookSignature } from "@/features/billing/payments/webhook.service";

export async function POST(
  request: NextRequest
) {
  const body =
    await request.text();

  const signature =
    request.headers.get(
      "x-razorpay-signature"
    );

  if (!signature) {
    return NextResponse.json(
      {
        message:
          "Missing signature",
      },
      {
        status: 400,
      }
    );
  }

  const valid =
    verifyWebhookSignature(
      body,
      signature
    );

  if (!valid) {
    return NextResponse.json(
      {
        message:
          "Invalid signature",
      },
      {
        status: 401,
      }
    );
  }

  const payload = JSON.parse(body);

console.log("========== WEBHOOK ==========");
console.log("Event:", payload.event);

console.log(
  JSON.stringify(payload, null, 2)
);

  return NextResponse.json({
    received: true,
  });
}