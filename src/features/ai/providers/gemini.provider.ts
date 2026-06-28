import { gemini } from "@/lib/ai/gemini";
import { AI_MODELS } from "@/shared/constants/ai";
import { fileToPart } from "../utils/file-to-part";

export async function generateExtraction(
  prompt: string,
  file: File
): Promise<string> {
  const model = gemini.getGenerativeModel({
    model: AI_MODELS.documentExtraction,
  });

  const part = await fileToPart(file);
//   console.log("Calling Gemini...");
  const result = await model.generateContent([
    prompt,
    part,
  ]);

//   console.log(
//   process.env.GEMINI_API_KEY
// );
//   console.log(result.response.text());
  return result.response.text();
}