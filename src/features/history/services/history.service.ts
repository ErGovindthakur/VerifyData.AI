import { findHistoryByUserId } from "../repository/history.repository";

export async function getHistory(
  userId: string
) {
  return findHistoryByUserId(userId);
}