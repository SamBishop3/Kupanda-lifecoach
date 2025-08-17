import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { to, subject, firstName, lastName, email, phone, coachingType, message } = body

    // Create email content
    const emailContent = `
New Consultation Request

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Coaching Type: ${coachingType}

Message:
${message || "No message provided"}

---
Sent from Kupanda Coaching website
    `.trim()

    // Try multiple email services
    const emailServices = [
      // Formspree backup
      {
        url: "https://formspree.io/f/xanbzbpo",
        body: {
          name: `${firstName} ${lastName}`,
          email: email,
          phone: phone,
          coachingType: coachingType,
          message: emailContent,
          _replyto: email,
          _subject: subject,
        },
      },
      // EmailJS backup (if you want to set this up)
      // You can add more services here
    ]

    let success = false
    let lastError = null

    for (const service of emailServices) {
      try {
        const response = await fetch(service.url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(service.body),
        })

        if (response.ok) {
          success = true
          break
        } else {
          lastError = `Service failed: ${response.status}`
        }
      } catch (error) {
        lastError = error.message
        continue
      }
    }

    if (success) {
      return NextResponse.json({ success: true, message: "Email sent successfully" })
    } else {
      throw new Error(lastError || "All email services failed")
    }
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
