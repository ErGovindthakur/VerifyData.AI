export function extractJson(text: string) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON object found in AI response.");
  }

  const json = text
    .slice(start, end + 1)
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(json);
}