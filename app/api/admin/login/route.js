import { NextResponse } from "next/server";
import { isValidAdminCredentials, setAdminSession } from "@/lib/adminAuth";

export async function POST(request) {
  const body = await request.json();
  const username = String(body?.username || "");
  const password = String(body?.password || "");

  if (!isValidAdminCredentials(username, password)) {
    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 }
    );
  }

  return setAdminSession(NextResponse.json({ ok: true }));
}
