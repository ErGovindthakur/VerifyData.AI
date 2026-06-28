import { NextResponse } from "next/server";

import { extractDocument } from "@/features/ai/services/gemini.service";

export async function POST(
  request: Request
) {
  try {
    const formData =
      await request.formData();

    const file =
      formData.get("file");

      console.log("File:", file);
      console.log("Is File:", file instanceof File);

    if (!(file instanceof File)) {
      return NextResponse.json(
        {
          error: "File is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result =
      await extractDocument(file);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "AI extraction failed.",
      },
      {
        status: 500,
      }
    );
  }
}