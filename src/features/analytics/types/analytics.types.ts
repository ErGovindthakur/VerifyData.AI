export type UploadTrend = Readonly<{
  date: string;
  uploads: number;
}>;

export type DocumentTypeStat = Readonly<{
  documentType: string;
  count: number;
}>;

export type AnalyticsStats = Readonly<{
  uploads: number;
  exports: number;
  aiRequests: number;
  successRate: number;
}>;

export type AnalyticsData = Readonly<{
  stats: AnalyticsStats;

  topDocument: TopDocument | null;

  processing: ProcessingStats;

  recentActivity: ActivityItem[];

  uploadTrend: UploadTrend[];

  documentTypes: DocumentTypeStat[];
}>;

export type ActivityItem = Readonly<{
  id: string;
  originalFileName: string;
  status: string;
  documentType: string;
  createdAt: Date;
}>;

export type ProcessingStats = Readonly<{
  completed: number;
  failed: number;
}>;

export type TopDocument = Readonly<{
  documentType: string;
  count: number;
}>;