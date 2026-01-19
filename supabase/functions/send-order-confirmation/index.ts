// Supabase Edge Function for sending order confirmation emails
// This function sends emails to both the customer and the business

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const BUSINESS_EMAIL = 'marketinghydron@gmail.com'

interface OrderData {
  customerName: string
  customerEmail: string
  packageName: string
  price: number
  currencySymbol: string
  region: string
  hostingMonthlyPrice: number
  hostingIncludedMonths: number
}

function generateEmailHTML(data: OrderData): string {
  const renewalDate = new Date()
  renewalDate.setMonth(renewalDate.getMonth() + data.hostingIncludedMonths)
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation - Hydron Marketing</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #0a0a0a; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header -->
    <div style="text-align: center; margin-bottom: 40px;">
      <h1 style="font-size: 32px; font-weight: bold; margin: 0 0 16px 0; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
        Hydron Marketing
      </h1>
      <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); margin-bottom: 16px;">
        <svg style="width: 32px; height: 32px; color: white;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 style="font-size: 28px; font-weight: bold; margin: 0;">Thank You for Your Purchase!</h2>
      <p style="font-size: 16px; color: #a1a1aa; margin: 8px 0 0 0;">We're excited to start working on your website.</p>
    </div>

    <!-- Order Details -->
    <div style="background: rgba(26, 26, 26, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
      <h3 style="font-size: 20px; font-weight: bold; margin: 0 0 24px 0;">Order Confirmation</h3>
      
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 16px; background: #1a1a1a; border-radius: 8px; margin-bottom: 8px;">
            <div style="color: #a1a1aa; font-size: 14px; margin-bottom: 4px;">Customer</div>
            <div style="font-weight: 600;">${data.customerName}</div>
          </td>
        </tr>
        <tr style="height: 8px;"></tr>
        <tr>
          <td style="padding: 16px; background: #1a1a1a; border-radius: 8px;">
            <div style="color: #a1a1aa; font-size: 14px; margin-bottom: 4px;">Email</div>
            <div style="font-weight: 600;">${data.customerEmail}</div>
          </td>
        </tr>
        <tr style="height: 8px;"></tr>
        <tr>
          <td style="padding: 16px; background: #1a1a1a; border-radius: 8px;">
            <div style="color: #a1a1aa; font-size: 14px; margin-bottom: 4px;">Package</div>
            <div style="font-weight: 600;">${data.packageName}</div>
          </td>
        </tr>
        <tr style="height: 8px;"></tr>
        <tr>
          <td style="padding: 16px; background: #1a1a1a; border-radius: 8px;">
            <div style="color: #a1a1aa; font-size: 14px; margin-bottom: 4px;">Total Paid</div>
            <div style="font-weight: 600; font-size: 18px;">${data.currencySymbol}${data.price.toFixed(2)}</div>
          </td>
        </tr>
      </table>

      <!-- Hosting Details -->
      <div style="margin-top: 32px; padding-top: 32px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
        <h4 style="font-size: 18px; font-weight: bold; margin: 0 0 16px 0;">Hosting Subscription Details</h4>
        <div style="color: #a1a1aa; line-height: 1.6;">
          <p style="margin: 0 0 12px 0;">
            ✓ <strong style="color: #ffffff;">${data.hostingIncludedMonths} months of hosting included</strong> in your package price
          </p>
          <p style="margin: 0 0 12px 0;">
            ✓ After ${data.hostingIncludedMonths} months, hosting will automatically renew monthly at <strong style="color: #ffffff;">${data.currencySymbol}${data.hostingMonthlyPrice}/month</strong>
          </p>
          <p style="margin: 0 0 12px 0;">
            ✓ Renewal starts on approximately <strong style="color: #ffffff;">${renewalDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
          </p>
          <p style="margin: 0;">
            ✓ You can cancel anytime before the renewal date
          </p>
        </div>
      </div>
    </div>

    <!-- What's Next -->
    <div style="background: rgba(26, 26, 26, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
      <h3 style="font-size: 20px; font-weight: bold; margin: 0 0 16px 0;">What Happens Next?</h3>
      <div style="color: #a1a1aa; line-height: 1.6;">
        <p style="margin: 0 0 12px 0;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; color: white; font-weight: bold; font-size: 12px; margin-right: 8px;">1</span>
          We'll send you a draft of your website within the timeframe specified for your package
        </p>
        <p style="margin: 0 0 12px 0;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; color: white; font-weight: bold; font-size: 12px; margin-right: 8px;">2</span>
          Review the draft and provide feedback on any changes you'd like
        </p>
        <p style="margin: 0 0 12px 0;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; color: white; font-weight: bold; font-size: 12px; margin-right: 8px;">3</span>
          We'll refine the website based on your feedback
        </p>
        <p style="margin: 0;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 50%; background: #6366f1; color: white; font-weight: bold; font-size: 12px; margin-right: 8px;">4</span>
          Once you're happy, we'll launch your website!
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="text-align: center; color: #71717a; font-size: 14px; margin-top: 40px;">
      <p style="margin: 0 0 8px 0;">Thank you for choosing Hydron Marketing</p>
      <p style="margin: 0;">If you have any questions, please contact us at <a href="mailto:marketinghydron@gmail.com" style="color: #6366f1; text-decoration: none;">marketinghydron@gmail.com</a></p>
    </div>
  </div>
</body>
</html>
  `
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    // Parse request body
    const orderData: OrderData = await req.json()

    // Validate required fields
    if (!orderData.customerName || !orderData.customerEmail || !orderData.packageName) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Check if Resend API key is configured
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Generate email HTML
    const emailHTML = generateEmailHTML(orderData)
    const subject = `Order Confirmation - ${orderData.packageName} - Hydron Marketing`

    // Send email to customer
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Hydron Marketing <orders@hydronmarketing.com>',
        to: [orderData.customerEmail],
        subject: subject,
        html: emailHTML,
      }),
    })

    if (!customerEmailResponse.ok) {
      const errorText = await customerEmailResponse.text()
      console.error('Failed to send customer email:', errorText)
      throw new Error('Failed to send customer email')
    }

    // Send email to business
    const businessEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Hydron Marketing <orders@hydronmarketing.com>',
        to: [BUSINESS_EMAIL],
        subject: `New Order: ${subject}`,
        html: emailHTML,
      }),
    })

    if (!businessEmailResponse.ok) {
      const errorText = await businessEmailResponse.text()
      console.error('Failed to send business email:', errorText)
      // Don't fail the whole request if business email fails
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Confirmation emails sent successfully' 
      }),
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  } catch (error) {
    console.error('Error sending emails:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  }
})
