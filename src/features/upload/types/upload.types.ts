export interface UploadResult {
  id: string;
  originalFileName: string;
  storagePath: string;
}

export interface UploadProgress {
  progress: number;
  status:
    | "idle"
    | "uploading"
    | "processing"
    | "completed"
    | "failed";
}