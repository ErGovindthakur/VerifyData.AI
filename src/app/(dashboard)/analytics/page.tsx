import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { UploadTrendChart } from "@/features/analytics/components/upload-trend-chart";
import { auth } from "@/lib/auth";
import { DocumentTypeChart } from "@/features/analytics/components/document-type-chart";
import { getAnalyticsData } from "@/features/analytics/services/analytics.service";
import { RecentActivity } from "@/features/analytics/components/recent-activity";
import { AnalyticsHeader } from "@/features/analytics/components/analytics-header";
import { StatsGrid } from "@/features/analytics/components/stats-grid";
import { TopDocumentCard } from "@/features/analytics/components/top-document-card";
import { ProcessingCard } from "@/features/analytics/components/processing-card";
import { SectionHeader } from "@/components/common/section-header";

export default async function AnalyticsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const analytics = await getAnalyticsData(session.user.id);

  //   console.log(analytics);
  return (
    <div className="space-y-8">
      <SectionHeader
        title="Analytics"
        description="Understand your document processing and export activity."
      />

      <StatsGrid stats={analytics.stats} />

      <div className="grid gap-6 lg:grid-cols-2">
        <UploadTrendChart data={analytics.uploadTrend} />

        <DocumentTypeChart data={analytics.documentTypes} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <TopDocumentCard document={analytics.topDocument} />

        <ProcessingCard processing={analytics.processing} />
      </div>
      <RecentActivity activities={analytics.recentActivity} />
    </div>
  );
}
