import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";
import { ContactSchema } from "@/app/Schemas/ContactSchema";

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 },
      );
    }

    const validation = ContactSchema.safeParse({ email, message });
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 },
      );
    }

    const result = await sendEmail({ email, message });

    if (result.success) {
      return NextResponse.json(
        { success: true, message: "Email sent successfully!" },
        { status: 200 },
      );
    } else {
      return NextResponse.json({ error: result.message }, { status: 500 });
    }
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
