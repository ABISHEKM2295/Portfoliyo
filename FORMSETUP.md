# Contact Form Setup - Formspree (EASY METHOD)

## Quick Setup (2 minutes!)

### Step 1: Sign Up for Formspree
1. Go to **https://formspree.io/**
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Sign up with your email (free account allows 50 submissions/month)

### Step 2: Create a New Form
1. After signing in, click **"New Form"** or **"Create Form"**
2. Give it a name like "Portfolio Contact Form"
3. Set the email to receive submissions: **abishekm2295@gmail.com**
4. Click **"Create"**

### Step 3: Get Your Form Endpoint
1. After creating the form, you'll see your form endpoint
2. It looks like: `https://formspree.io/f/YOUR_FORM_ID`
3. **Copy this entire URL**

### Step 4: Update Your Code
1. Open: `src/components/Contact/Contact.js`
2. Find line around **310** that says:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID from Step 3
4. Example:
   ```javascript
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpzgkqwn";
   ```
5. **Save the file**

### Step 5: Test It!
1. Restart your dev server: `npm start`
2. Fill out the contact form
3. Submit and check your email at **abishekm2295@gmail.com**

## That's It! 🎉

Your contact form will now send emails directly to your inbox!

## Troubleshooting

- **Still seeing error?** Make sure you replaced `YOUR_FORM_ID` with your actual form ID
- **Not receiving emails?** Check your spam folder
- **Need more submissions?** Formspree free tier: 50/month. Upgrade for more.

## Alternative: Email Directly

If you don't want to set up Formspree, users can click the email icon in the contact section to email you directly at **abishekm2295@gmail.com**


