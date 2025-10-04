import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { createTransporter, EMAIL_SETTINGS, validateSMTPConfig } from '@/lib/smtp-config'

export async function POST(request: NextRequest) {
  try {
    // Validate SMTP configuration
    const configErrors = validateSMTPConfig()
    if (configErrors.length > 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured properly',
          details: configErrors 
        },
        { status: 500 }
      )
    }

    // Parse request body
    const body = await request.json()
    const {
      firstName,
      lastName,
      email,
      companyName,
      projectType,
      budget,
      timeline,
      phoneNumber,
      projectDescription
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !projectDescription) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = createTransporter()

    // Email content
    const subject = `New Project Inquiry from ${firstName} ${lastName}`
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">🚀 New Project Inquiry</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">ADOT Development Team</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 12px 12px;">
          <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2d3748; margin-top: 0; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              👤 Client Information
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Company:</strong> ${companyName || 'Not specified'}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
              ${phoneNumber ? `<p><strong>Phone:</strong> <a href="tel:${phoneNumber}" style="color: #667eea;">${phoneNumber}</a></p>` : ''}
            </div>

            <h3 style="color: #2d3748; margin-top: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              📋 Project Details
            </h3>
            
            <div style="margin-bottom: 20px;">
              <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
            </div>

            <h3 style="color: #2d3748; margin-top: 25px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
              💬 Project Description
            </h3>
            
            <div style="background: #f7fafc; padding: 15px; border-left: 4px solid #667eea; border-radius: 0 4px 4px 0;">
              <p style="margin: 0; line-height: 1.6; color: #4a5568;">${projectDescription}</p>
            </div>

            <div style="margin-top: 25px; text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                📧 Reply to Client
              </a>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 12px;">
          <p>This email was generated from your ADOT website contact form</p>
          <p>Sent on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    `

    const textContent = `
New Project Inquiry from ${firstName} ${lastName}

Client Information:
- Name: ${firstName} ${lastName}
- Company: ${companyName || 'Not specified'}
- Email: ${email}
- Phone: ${phoneNumber || 'Not provided'}

Project Details:
- Type: ${projectType || 'Not specified'}
- Budget: ${budget || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}

Project Description:
${projectDescription}

Reply to: ${email}
    `

    // Send email
    await transporter.sendMail({
      from: EMAIL_SETTINGS.from,
      to: EMAIL_SETTINGS.to,
      replyTo: email,
      subject: subject,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully'
    })

  } catch (error) {
    console.error('Email sending error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Handle GET requests (optional - for testing)
export async function GET() {
  return NextResponse.json({
    message: 'Contact form email endpoint',
    status: 'active'
  })
}
