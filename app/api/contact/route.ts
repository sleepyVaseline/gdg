import { NextResponse } from "next/server";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Wire to Resend, EmailJS, or Nodemailer here.
    // For now, log to server console.
    console.log("[Contact form submission]", {
      name: body.name,
      email: body.email,
      message: body.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }
}
