import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/jpg",
  "image/webp",
];

export const uploadSchema = z.object({
  file: z
    .instanceof(File)
    .refine(
      (file) => file.size <= MAX_FILE_SIZE,
      "Maximum file size is 10MB."
    )
    .refine(
      (file) => ACCEPTED_TYPES.includes(file.type),
      "Unsupported file type."
    ),
});

export type UploadInput = z.infer<typeof uploadSchema>;