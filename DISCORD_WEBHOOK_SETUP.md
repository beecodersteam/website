# Discord Webhook Setup for Contact Form

## Overview
The contact form now sends submissions directly to Discord via webhook instead of using Formspree.

## Setup Instructions

### 1. Create Discord Webhook
1. Go to your Discord server
2. Navigate to **Server Settings** > **Integrations** > **Webhooks**
3. Click **Create Webhook** or edit an existing one
4. Give it a name like "Bee Coders Contact Form"
5. Select the channel where you want to receive messages
6. Copy the **Webhook URL**

### 2. Configure Environment Variable
1. Open the `.env.local` file in the project root
2. Replace `YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN` with your actual webhook URL:
   ```
   NEXT_PUBLIC_DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/1234567890/abcdef123456...
   ```
3. Save the file

### 3. Security Notes
- The `.env.local` file should be added to `.gitignore` to prevent exposing the webhook URL
- Never commit webhook URLs to version control
- Webhook URLs should be treated as sensitive information

### 4. Message Format
The Discord message will include:
- **Email**: Sender's email address
- **Message**: The message content
- **Timestamp**: When the form was submitted
- **Formatted embed**: Professional looking message with Bee Coders branding

### 5. Testing
1. Start the development server: `npm run dev`
2. Fill out the contact form
3. Check your Discord channel for the message

### 6. Troubleshooting
- **"Discord webhook not found"**: Check if the webhook URL is correct
- **"Discord webhook is not configured"**: Make sure the environment variable is set properly
- **No message received**: Verify the webhook URL and Discord channel permissions

## Benefits of Discord Webhook
- **Real-time notifications**: Instant delivery to Discord
- **No third-party dependencies**: Direct communication with Discord
- **Rich formatting**: Professional embed messages
- **Free**: No costs associated with sending messages
- **Team collaboration**: Multiple team members can see and respond to messages
