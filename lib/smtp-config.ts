import nodemailer from 'nodemailer'

// SMTP Configuration
export const SMTP_CONFIG = {
  // Your SMTP settings - you can use Gmail, Outlook, or any SMTP server
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASS || 'your-app-password', // Use App Password for Gmail
  },
}

// Company email settings
export const EMAIL_SETTINGS = {
  from: process.env.SMTP_USER || 'your-email@gmail.com',
  to: process.env.COMPANY_EMAIL || 'info@adotdevs.com',
  replyTo: '', // Will be set to client's email
}

// Create reusable transporter
export function createTransporter() {
    const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: SMTP_CONFIG.secure,
    auth: SMTP_CONFIG.auth,
  })

  return transporter
}

// Validation function
export function validateSMTPConfig(): string[] {
  const errors: string[] = []
  
  if (!process.env.SMTP_USER || process.env.SMTP_USER.includes('your-email')) {
    errors.push('SMTP_USER is not configured')
  }
  
  if (!process.env.SMTP_PASS || process.env.SMTP_PASS.includes('your-app-password')) {
    errors.push('SMTP_PASS is not configured')
  }
  
  if (!process.env.COMPANY_EMAIL || process.env.COMPANY_EMAIL.includes('info@adotdevs.com')) {
    errors.push('COMPANY_EMAIL should be set to your actual company email')
  }
  
  return errors
}

/*
SETUP INSTRUCTIONS:

1. Email Service Setup (Using Gmail as example):
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use your email and the app password for SMTP_PASS

2. Environment Variables (.env.local):
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password-here
   COMPANY_EMAIL=info@adotdevs.com

3. Alternative Providers:
   - Outlook: smtp-mail.outlook.com:587
   - Yahoo: smtp.mail.yahoo.com:587
   - Custom SMTP: Use your hosting provider's SMTP settings

4. Security Note:
   - Never commit .env.local to version control
   - Use app passwords, not your main password
   - Consider using environment-specific configurations for production
*/
