import { NextResponse } from "next/server";
import { searchDomains } from "@/domain/domain-service";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q") ?? "";

  try {
    const response = await searchDomains(query);
    return NextResponse.json(response);
  } catch (error) {
    const message = error instanceof Error ? error.message : "We could not search that domain.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
