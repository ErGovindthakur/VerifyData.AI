import { CheckoutUser } from "../types/payment.types";
import { verifyPayment } from "./payment.client";

type OpenCheckoutParams = Readonly<{
  orderId: string;
  amount: number;
  currency: string;

  user:CheckoutUser
}>;

export function openCheckout({
  orderId,
  amount,
  currency,
  user,
}: OpenCheckoutParams) {
  const razorpay =
    new window.Razorpay({
      key:
        process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID!,

      amount,

      currency,

      order_id: orderId,

      name: "VerifyData.AI",

      description:
        "VerifyData Pro",

      prefill: {
        name: user.name,

        email: user.email,
      },

      handler: async (
        response
      ) => {
        try {
          const payment =
            await verifyPayment(
              response
            );

          console.log(
            "Payment Verified",
            payment
          );
        } catch (error) {
          console.error(error);
        }
      },

      modal: {
        ondismiss() {
          console.log(
            "Checkout Closed"
          );
        },
      },

      theme: {
        color: "#6366f1",
      },
    });

  razorpay.open();
}