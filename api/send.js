import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { user_name, user_email, subject, message } = body;

    const htmlContent = Object.keys(body).length === 0
      ? "<p>Congrats on sending your <strong>first email</strong>!</p>"
      : `<p><strong>Name:</strong> ${user_name}</p>
         <p><strong>Email:</strong> ${user_email}</p>
         <p><strong>Subject:</strong> ${subject}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>`;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kushmody0710@gmail.com",
      subject: subject || "Hello World",
      html: htmlContent,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Email failed" });
  }
}
