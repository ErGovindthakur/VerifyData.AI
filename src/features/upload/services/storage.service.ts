import { supabase } from "@/lib/supabase";

type UploadFileParams = Readonly<{
  path: string;
  file: File;
}>;

export async function uploadFile({
  path,
  file,
}: UploadFileParams) {
  const { data, error } =
    await supabase.storage
      .from(process.env.SUPABASE_BUCKET!)
      .upload(path, file);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteFile(path: string) {
  const { error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET!)
    .remove([path]);

  if (error) {
    // throw new Error(error.message);
     console.error("Supabase Storage Error:", error);

  throw new Error(
    JSON.stringify(error, null, 2)
  );
  }
}