import { NextResponse } from "next/server";
import { checkDomainTransfer } from "@/domain/domain-service";

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get("q") ?? "";

  try {
    return NextResponse.json(await checkDomainTransfer(query));
  } catch (error) {
    const message = error instanceof Error ? error.message : "We could not check that transfer.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
