import { markWebhookPaymentFailed } from "../repository/payment.repository";
import { completePayment } from "./payment.service";
type RazorpayWebhook = {
  event: string;

  payload: {
    payment: {
      entity: {
        id: string;

        order_id: string;

        status: string;

        error_reason?: string;

        error_description?: string;
      };
    };
  };
};

export async function handleWebhook(payload: RazorpayWebhook) {
  const payment = payload.payload.payment.entity;
  switch (payload.event) {
    case "payment.captured":
      await completePayment({
  orderId: payment.order_id,

  paymentId: payment.id,
});

      break;

    case "payment.failed":
      await markWebhookPaymentFailed(payment.order_id, payment.id);

      console.log("Payment Failed:", payment.order_id);

      break;

    default:
      console.log("Unhandled Event:", payload.event);
  }
}
