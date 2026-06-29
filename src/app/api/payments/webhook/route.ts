import { NextRequest, NextResponse } from "next/server";
import { handleWebhook } from "@/features/billing/services/webhook-handler.service";
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

await handleWebhook(payload);

return NextResponse.json({
  received: true,
});
}