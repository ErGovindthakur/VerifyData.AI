export type CreatePaymentOrderInput = Readonly<{
  userId: string;
}>;

export type RazorpayOrder = Readonly<{
  id: string;
  amount: number;
  currency: string;
}>;

export type VerifyPaymentInput = Readonly<{
  razorpay_order_id: string;

  razorpay_payment_id: string;

  razorpay_signature: string;
}>;