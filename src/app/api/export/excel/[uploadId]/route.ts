import { headers } from "next/headers";
import { NextResponse } from "next/server";

import { auth } from "@/lib/auth";

import { findUploadForExport } from "@/features/upload/repository/upload.repository";
import { generateExcel } from "@/features/export/services/excel.service";

type Props = Readonly<{
  params: Promise<{
    uploadId: string;
  }>;
}>;

export async function GET(
  request: Request,
  { params }: Props
) {
  const session =
    await auth.api.getSession({
      headers: await headers(),
    });

  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const { uploadId } = await params;

  const upload =
    await findUploadForExport(
      uploadId,
      session.user.id
    );

  if (
    !upload ||
    !upload.extractedDocument
  ) {
    return NextResponse.json(
      {
        error: "Document not found",
      },
      {
        status: 404,
      }
    );
  }

  const buffer =
    await generateExcel({
  documentType:
    upload.documentType,

  extractedData:
    upload.extractedDocument.extractedData as Record<
      string,
      unknown
    >,
});

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

      "Content-Disposition": `attachment; filename="${upload.originalFileName}.xlsx"`,
    },
  });
}