interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  order_id: string;

  name: string;
  description: string;

  prefill?: {
    name?: string;
    email?: string;
  };

  handler?(response: RazorpayResponse): void | Promise<void>;

  modal?: {
    ondismiss?(): void;
  };

  theme?: {
    color?: string;
  };
}

interface Window {
  Razorpay: new (
    options: RazorpayOptions
  ) => {
    open(): void;
  };
}