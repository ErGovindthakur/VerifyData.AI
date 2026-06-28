import type { findHistoryByUserId } from "../repository/history.repository";

export type HistoryItem =
  Awaited<
    ReturnType<typeof findHistoryByUserId>
  >[number];