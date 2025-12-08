import { NextResponse } from "next/server";
import { Resend } from "resend";

// Configure recipients here (fallback to env for flexibility)
const DEFAULT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@bharatvoip.com";
const resendApiKey = process.env.RESEND_API_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const requiredFields = ["email", "message"];

export async function POST(request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const message = (body.message || "").trim();
    const type = (body.type || "").trim();

    // Basic validation
    for (const field of requiredFields) {
      if (!body[field] || String(body[field]).trim().length === 0) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const subjectParts = ["New enquiry from website"];
    if (type) subjectParts.push(`(${type})`);
    if (name) subjectParts.push(`- ${name}`);

    const htmlBody = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f9fafb;padding:24px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:linear-gradient(135deg,#f36a1d,#0b9c66);padding:16px 20px;color:#ffffff;font-size:16px;font-weight:700;">
              New Enquiry from Website
            </td>
          </tr>
          <tr>
            <td style="padding:20px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;color:#0f172a;">
                <tr><td style="padding:6px 0;color:#475569;">Name</td><td style="padding:6px 0;font-weight:600;">${name || "N/A"}</td></tr>
                <tr><td style="padding:6px 0;color:#475569;">Email</td><td style="padding:6px 0;font-weight:600;"><a href="mailto:${email}" style="color:#0b9c66;text-decoration:none;">${email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#475569;">Phone</td><td style="padding:6px 0;font-weight:600;"><a href="tel:${phone}" style="color:#0b9c66;text-decoration:none;">${phone || "N/A"}</a></td></tr>
                <tr><td style="padding:6px 0;color:#475569;">Enquiry Type</td><td style="padding:6px 0;font-weight:600;">${type || "General"}</td></tr>
              </table>

              <div style="margin:18px 0;padding:14px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0;">
                <div style="font-weight:700;color:#0f172a;margin-bottom:8px;">Message</div>
                <div style="white-space:pre-wrap;line-height:1.6;color:#1f2937;">${message || "N/A"}</div>
              </div>

              <div style="margin-top:18px;font-size:12px;color:#94a3b8;">
                Sent from bharatfibernet.com contact form
              </div>
            </td>
          </tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      // Use a verified or default Resend sender. Switch to your domain once verified.
      from: "Bharat Fibernet <onboarding@resend.dev>",
      to: DEFAULT_TO_EMAIL,
      subject: subjectParts.join(" "),
      reply_to: email,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
