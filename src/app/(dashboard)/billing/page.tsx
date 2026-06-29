import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PageContainer } from "@/components/common/page-container";
import { UsageProgress } from "@/components/common/usage-progress";
import { UpgradeCard } from "@/features/billing/components/upgrade-card";
import { CurrentPlanCard } from "@/features/billing/components/current-plan-card";
import { auth } from "@/lib/auth";

import { getBillingDetails } from "@/features/billing/services/billing.service";

import { SectionHeader } from "@/components/common/section-header";

export default async function BillingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const billing = await getBillingDetails(session.user.id);

  return (
    <PageContainer>
      <SectionHeader title="Billing & Usage" description="Monitor your current plan and usage." />

      <CurrentPlanCard plan={billing.plan} />

      <div className="grid gap-6 lg:grid-cols-3">
        <UsageProgress title="AI Requests" {...billing.aiRequests} />

        <UsageProgress title="Uploads" {...billing.uploads} />

        <UsageProgress title="Exports" {...billing.exports} />
      </div>
      <UpgradeCard currentPlan={billing.plan} />
    </PageContainer>
  );
}
