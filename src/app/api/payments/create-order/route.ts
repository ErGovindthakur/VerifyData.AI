import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

import { createPaymentOrder } from "@/features/billing/services/payment.service";

export async function POST() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  console.log("Payment Session:", session);
  if (!session) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

const order = await createPaymentOrder(
  session.user.id
);

return NextResponse.json({
  id: order.id,

  amount: order.amount,

  currency: order.currency,

  user: {
    name: session.user.name,

    email: session.user.email,
  },
});
}