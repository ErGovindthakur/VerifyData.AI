import { NextRequest, NextResponse } from "next/server";

import { verifyPayment } from "@/features/billing/services/payment.service";

export async function POST(
  request: NextRequest
) {
  try {
    const body =
      await request.json();

    const payment =
      await verifyPayment(body);

    return NextResponse.json(payment);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Verification failed",
      },
      {
        status: 400,
      }
    );
  }
}