# SMTP Email Setup Guide

This guide will help you set up real email functionality for your contact form using SMTP (no EmailJS needed!).

## 🚀 Quick Setup Using Gmail

### 1. Enable 2-Factor Authentication
1. Go to your [Google Account Settings](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled
3. This is required to generate App Passwords

### 2. Generate App Password
1. In Google Account Security, go to "App passwords"
2. Generate a new app password for "Mail"
3. Copy the 16-character password (you'll need this!)

### 3. Create Environment Variables
Create a `.env.local` file in your project root:

```bash
# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password

# Your company email
COMPANY_EMAIL=info@adotdevs.com
```

### 4. Test the Setup
1. Save the `.env.local` file
2. Restart your development server: `npm run dev`
3. Submit the contact form to test email delivery

## 📧 Alternative Email Providers

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP (Hosting Provider)
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=noreply@yourdomain.com
SMTP_PASS=your-smtp-password
```

## 🔧 Server-Side Implementation

The email functionality uses:
- **Next.js API Route**: `/app/api/send-email/route.ts`
- **Nodemailer**: For SMTP email sending
- **Professional Email Templates**: HTML + text versions

### Features Added:
✅ **Real Email Sending**: Uses your SMTP credentials  
✅ **Professional Templates**: Beautiful HTML email formatting  
✅ **Package Integration**: Auto-fills project type from package selection  
✅ **Error Handling**: Proper validation and user feedback  
✅ **Security**: Server-side validation and secure credential handling  

## 🎨 Email Template Features

The emails sent include:
- **Gradient header** with company branding
- **Client information** section
- **Project details** (type, budget, timeline)
- **Full project description**
- **Direct reply link** to client's email
- **Timestamp** and source tracking

## 🔒 Security Notes

- **Never commit** `.env.local` to version control
- **Use app passwords**, not your main email password
- **Environment variables** are kept server-side only
- **Email validation** prevents spam and invalid submissions

## 🐛 Troubleshooting

### "SMTP Error"
- Verify your email and password are correct
- Ensure 2FA is enabled for Gmail users
- Check that SMTP settings match your provider

### "Connection Refused"
- Check SMTP_HOST and SMTP_PORT settings
- Some networks block SMTP ports (587, 465)

### "Authentication Failed"
- Use App Passwords for Gmail (not your main password)
- Verify account has IMAP/POP access enabled

### Emails Not Received
- Check spam/junk folder
- Verify COMPANY_EMAIL is set to a real email address
- Some email providers have sending limits

## 🚀 Production Deployment

For production deployment:

1. **Set environment variables** on your hosting platform
2. **Use production SMTP** provider (avoid Gmail for high volume)
3. **Consider email services** like:
   - SendGrid
   - AWS SES
   - Mailgun
   - Resend

## 📝 Contact Form Integration

The contact form now:
- Sends real emails to your company account
- Pre-fills project type when packages are selected
- Shows professional success/error messages
- Resets form after successful submission

No EmailJS, no third-party services, no monthly costs! 🎉
