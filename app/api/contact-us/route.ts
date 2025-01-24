import { NextRequest, NextResponse } from "next/server";

import { transporter } from "@/lib/emails";
import { ADMIN_EMAIL } from "@/lib/constants";
import { siteConfig as strings } from "@/config/site";
import { checkRateLimit } from "@/lib/rateLimiter";

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (checkRateLimit(ip)) {
    return NextResponse.json({ success: false }, { status: 429 });
  }

  try {
    const { name, email, message } = await req.json();

    const info = await transporter.sendMail({
      to: ADMIN_EMAIL,
      subject: `${strings.contact.emailSubject}: ${name} <${email}>`,
      text: message,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, message: info.messageId });
  } catch (error) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
