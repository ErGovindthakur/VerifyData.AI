import { getBillingDetails } from "../services/billing.service";

import {
  UploadLimitExceededError,
  ExportLimitExceededError,
  AiLimitExceededError,
} from "../errors/billing.errors";

export async function canUpload(
  userId: string
) {
  const billing =
    await getBillingDetails(userId);

  return (
    billing.uploads.used <
    billing.uploads.limit
  );
}

export async function ensureCanUpload(
  userId: string
) {
  const allowed =
    await canUpload(userId);

  if (!allowed) {
    throw new UploadLimitExceededError();
  }
}

export async function canExport(
  userId: string
) {
  const billing =
    await getBillingDetails(userId);

  return (
    billing.exports.used <
    billing.exports.limit
  );
}

export async function ensureCanExport(
  userId: string
) {
  const allowed =
    await canExport(userId);

  if (!allowed) {
    throw new ExportLimitExceededError();
  }
}

export async function canUseAI(
  userId: string
) {
  const billing =
    await getBillingDetails(userId);

  return (
    billing.aiRequests.used <
    billing.aiRequests.limit
  );
}

export async function ensureCanUseAI(
  userId: string
) {
  const allowed =
    await canUseAI(userId);

  if (!allowed) {
    throw new AiLimitExceededError();
  }
}