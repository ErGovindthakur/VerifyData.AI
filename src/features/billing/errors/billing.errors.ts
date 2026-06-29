import { AppError } from "@/lib/error";

export class UploadLimitExceededError extends AppError {
  constructor() {
    super(
      "Upload limit reached. Please upgrade your plan.",
      403,
      "UPLOAD_LIMIT_EXCEEDED"
    );
  }
}

export class AiLimitExceededError extends AppError {
  constructor() {
    super(
      "AI request limit reached. Please upgrade your plan.",
      403,
      "AI_LIMIT_EXCEEDED"
    );
  }
}

export class ExportLimitExceededError extends AppError {
  constructor() {
    super(
      "Export limit reached. Please upgrade your plan.",
      403,
      "EXPORT_LIMIT_EXCEEDED"
    );
  }
}