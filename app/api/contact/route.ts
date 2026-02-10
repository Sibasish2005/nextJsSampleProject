import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ CHANGE 1: Force Node.js runtime (required for Nodemailer)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ✅ CHANGE 2: Validate request body before sending email
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // ✅ CHANGE 3: Use explicit Gmail SMTP config (more reliable than service: "gmail")
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 465,              // Secure SSL port
      secure: true,           // Required for port 465
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // Gmail APP PASSWORD
      },
    });

    // ✅ CHANGE 4: Send email using Nodemailer
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // ✅ CHANGE 5: Return success response if email sent
    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    // ✅ CHANGE 6: Log the REAL Nodemailer error for debugging
    console.error("NODEMAILER ERROR ->", error);

    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 }
    );
  }
}
