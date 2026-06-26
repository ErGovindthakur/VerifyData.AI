export type DashboardStats = Readonly<{
  uploads: number;
  aiRequests: number;
  exports: number;
  successRate: number;
}>;

export type RecentUpload = Readonly<{
  id: string;
  originalFileName: string;
  status: string;
  documentType: string;
  createdAt: Date;
}>;

export type DashboardData = Readonly<{
  stats: DashboardStats;
  recentUploads: RecentUpload[];
}>;