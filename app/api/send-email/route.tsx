import { Resend } from "resend"
import type { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  console.log("=== API ROUTE HIT ===")

  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, coachingType, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !coachingType) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 },
      )
    }

    const apiKey = process.env.RESEND_API_KEY || "re_YjVDQAzz_AAetK6o3mi6AoupHmbmtTWXJ"
    const resend = new Resend(apiKey)

    console.log("Sending email...")

    const { data, error } = await resend.emails.send({
      from: "Kupanda Coaching <onboarding@resend.dev>",
      // Change this to the email address you used to sign up with Resend
      // This is likely michele@kupandacoaching.com or your Gmail
      to: ["michele@kupandacoaching.com"], // Try this first
      subject: `New Consultation Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #78ae99;">New Consultation Request - Kupanda Coaching</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Coaching Interest:</strong> ${coachingType}</p>
          </div>

          ${
            message
              ? `
          <div style="background-color: #f0f8f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          `
              : ""
          }

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px;">
            <p>This email was sent from the Kupanda Coaching website contact form.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return Response.json(
        {
          success: false,
          error: `Email failed: ${error.message}`,
        },
        { status: 400 },
      )
    }

    console.log("Email sent successfully:", data)
    return Response.json({
      success: true,
      message: "Email sent successfully",
      data,
    })
  } catch (error) {
    console.error("API error:", error)
    return Response.json(
      {
        success: false,
        error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
