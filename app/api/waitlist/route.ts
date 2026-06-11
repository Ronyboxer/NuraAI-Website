import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

// Server-side only — these env vars are never exposed to the browser.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  // Fail clearly if the project hasn't been configured yet.
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error("Supabase env vars are not set.");
    return NextResponse.json(
      { error: "Waitlist is not configured yet." },
      { status: 500 },
    );
  }

  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.trim().toLowerCase(), source: "marketing-site" });

  if (error) {
    // 23505 = unique_violation: the email is already on the list. Treat that as
    // success so we never reveal whether an address is already signed up.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true });
    }
    console.error("Waitlist insert failed:", error.message);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
