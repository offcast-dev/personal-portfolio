import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
  const filePath = path.resolve(".", "public/Vsevolod_Deriushkin_CV.pdf");
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(new Uint8Array(fileBuffer), {
    headers: { "content-type": "application/pdf" },
  });
}
