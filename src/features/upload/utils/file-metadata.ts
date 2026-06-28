import { nanoid } from "nanoid";

export function createFileMetadata(
  userId: string,
  file: File
) {
  const extension = file.name.split(".").pop() ?? "";
  const storedFileName = `${nanoid()}.${extension}`;
  const filePath = `uploads/${userId}/${storedFileName}`;

  return {
    extension,
    storedFileName,
    filePath,
  };
}