export function getDocumentSummary(
  data: Record<string, unknown>
) {
  return {
    vendor: data.vendorName,
    total: data.total,
    date: data.date,
  };
}