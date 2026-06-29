"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { CheckCircle2 } from "lucide-react";

type Props = Readonly<{
  children: React.ReactNode;
}>;

import { PLANS } from "@/config/plans";
import { openCheckout } from "../payments/checkout";

const plan = PLANS.PRO;
export function PricingDialog({ children }: Props) {

  async function handleCheckout() {
  const response = await fetch(
    "/api/payments/create-order",
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    const error =
      await response.json();

    console.error(error);

    return;
  }

  const order =
    await response.json();

openCheckout({
  orderId: order.id,

  amount: order.amount,

  currency: order.currency,

  user: order.user,
});
}

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl">VerifyData Pro</DialogTitle>

          <DialogDescription>Unlock premium features and higher usage limits.</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">₹{plan.price}</h2>

            <p className="text-muted-foreground">per month</p>
          </div>

          <div className="space-y-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600" />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Button onClick={handleCheckout} className="w-full">
            Continue to Payment
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
