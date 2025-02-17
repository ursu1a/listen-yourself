import { NextRequest, NextResponse } from "next/server";

import { transporter } from "@/lib/emails";
import { siteConfig as strings } from "@/config/site";
import { SITE_URL } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const { name, email, plan, link } = await req.json();

    const info = await transporter.sendMail({
      to: email,
      subject: `${strings.pricing.calendarEvent.title} ${name}`,
      text: `${strings.pricing.calendarEvent.description} "${plan}". Event link ${link}. Please check pricing here: ${SITE_URL}/pricing`,
      html: `<p>${strings.pricing.calendarEvent.description} "${plan}".</p><p>Event link: ${link}</p><p>Please check pricing here: ${SITE_URL}/pricing</p>`,
    });

    return NextResponse.json({ success: true, message: info.messageId });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error sending email:", error);

    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
