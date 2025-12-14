# EmailJS Setup Guide - Quick Start

**Current Status:** ⚠️ EmailJS is not configured yet. Follow these steps to enable email sending.

To enable email functionality in your contact form, you need to set up EmailJS (free service - 200 emails/month).

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month for free)

## Step 2: Add Email Service

1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** Contact Form

**Subject:** New Contact Form Message: {{subject}}

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find **Public Key** and copy it

## Step 5: Update Contact.js

**File to edit:** `src/components/Contact/Contact.js`

**Lines to update:** Around lines 292-294

Replace these three lines:

```javascript
// BEFORE (Current - needs to be changed):
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// AFTER (Example - replace with YOUR actual values):
const EMAILJS_SERVICE_ID = "service_abc123";
const EMAILJS_TEMPLATE_ID = "template_xyz789";
const EMAILJS_PUBLIC_KEY = "abcdefghijklmnop";
```

**Important:** 
- The recipient email is already set to: `abishekm2295@gmail.com` ✅
- Keep the quotes around the values
- Don't remove the `const` keyword
- Save the file after making changes

## Step 6: Test

1. Restart your dev server: `npm start`
2. Fill out the contact form
3. Submit and check your email inbox

## Troubleshooting

- Make sure all three IDs are correctly replaced
- Check EmailJS dashboard for any error logs
- Verify your email service is connected properly
- Free tier allows 200 emails/month

