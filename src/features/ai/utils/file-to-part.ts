type GeminiPart = Readonly<{
  inlineData: {
    mimeType: string;
    data: string;
  };
}>;

export async function fileToPart(
  file: File
): Promise<GeminiPart> {
  const bytes = await file.arrayBuffer();

  const base64 = Buffer.from(bytes).toString(
    "base64"
  );

  if (!file.type) {
  throw new Error("Missing MIME type.");
}
  return {
    inlineData: {
      mimeType: file.type,
      data: base64,
    },
  };
}