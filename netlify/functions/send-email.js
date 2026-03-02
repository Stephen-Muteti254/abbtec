import nodemailer from "nodemailer";

export const handler = async (event) => {
  try {
    const { name, email, phone, subject, message } = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
        <h2 style="color: #1985a1; border-bottom: 2px solid #1985a1; padding-bottom: 10px;">
          New Inquiry from Abbtec Website
        </h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f7f7f7; padding: 15px; border-radius: 8px; white-space: pre-line;">
          ${message}
        </div>
        <hr style="margin-top: 20px; border-color: #dcdcdd;" />
        <p style="color: #999; font-size: 12px;">Sent from the Abbtec website contact form.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Abbtec Website" <${process.env.SMTP_EMAIL}>`,
      to: "abbtecbuildingconstructionltd@gmail.com",
      subject: `New Inquiry: ${subject}`,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
