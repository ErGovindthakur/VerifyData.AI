import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import { WelcomeBanner } from "@/features/dashboard/components/sections/welcome-banner";
import { StatsGrid } from "@/features/dashboard/components/sections/stats-grid";
import { QuickActions } from "@/features/dashboard/components/sections/quick-actions";
import { RecentUploads } from "@/features/dashboard/components/sections/recent-uploads";

import { getDashboardData } from "@/features/dashboard/service/dashboard.service";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return null;
  }

  const dashboard = await getDashboardData(
    session.user.id
  );

  return (
    <div className="space-y-8">
      <WelcomeBanner
        name={session.user.name}
      />

      <StatsGrid
        stats={dashboard.stats}
      />

      <QuickActions />

      <RecentUploads
        uploads={dashboard.recentUploads}
      />
    </div>
  );
}