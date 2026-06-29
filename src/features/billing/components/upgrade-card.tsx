import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { CheckCircle2 } from "lucide-react";

import { PricingDialog } from "./pricing-dialog";

import { PLANS } from "@/config/plans";

type Props = Readonly<{
  currentPlan: string;
}>;

export function UpgradeCard({
  currentPlan,
}: Props) {
  if (currentPlan === "PRO") {
    return (
      <Card>
        <CardHeader>
          <CardTitle>
            You are on Pro
          </CardTitle>

          <CardDescription>
            Enjoy unlimited access to VerifyData.AI.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Upgrade to Pro
        </CardTitle>

        <CardDescription>
          Unlock premium features and higher usage limits.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-3">
          {PLANS.PRO.features.map(
            (feature) => (
              <Feature
                key={feature}
                text={feature}
              />
            )
          )}
        </div>

        <PricingDialog>
          <Button className="w-full">
            Upgrade Now
          </Button>
        </PricingDialog>
      </CardContent>
    </Card>
  );
}

function Feature({
  text,
}: Readonly<{
  text: string;
}>) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5 text-green-600" />

      <span>{text}</span>
    </div>
  );
}