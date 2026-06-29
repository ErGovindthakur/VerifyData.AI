export type UsageItem = Readonly<{
  used: number;
  limit: number;
}>;

export type BillingData = Readonly<{
  plan: string;

  aiRequests: UsageItem;

  uploads: UsageItem;

  exports: UsageItem;
}>;