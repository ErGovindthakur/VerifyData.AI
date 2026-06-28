import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const file = new Blob(["Hello VerifyData.AI"]);

  const result = await supabase.storage
    .from("documents")
    .upload(
      `test/hello-${Date.now()}.txt`,
      file
    );

  return NextResponse.json(result);
}