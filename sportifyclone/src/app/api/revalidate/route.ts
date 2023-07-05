import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET (request: Request) {
  const tag = request.url.search..searchParams.get("tag") as any;
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
