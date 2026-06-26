import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     hello: "world",
//   });
// }