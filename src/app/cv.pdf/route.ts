import { createElement } from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "@/lib/cv/CvDocument";
import { profile } from "@/data/cv";

// Rendered once at build time from src/data/cv.ts; `next dev` re-renders on every request.
export const dynamic = "force-static";

export async function GET() {
  const pdf = await renderToBuffer(createElement(CvDocument));
  const filename = `CV_${profile.name.replace(/\s+/g, "")}.pdf`;

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${filename}"`,
    },
  });
}
