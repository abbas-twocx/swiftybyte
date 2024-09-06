
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "abbas143186@gmail.com",
        pass: "mlbu nhcc cdhh sxbm",
      },
    });

    const mailOptions = {
      from: email,
      to: "abbas143186@gmail.com",
      subject: `Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
