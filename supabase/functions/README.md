# Supabase Edge Function Setup for Email Confirmations

This directory contains the Supabase Edge Function for sending order confirmation emails.

## Setup Instructions

### 1. Install Supabase CLI

```bash
npm install -g supabase
```

### 2. Link to Your Supabase Project

```bash
supabase link --project-ref ijsxucmpnfdvqgfgyntl
```

### 3. Set Up Email Service

We recommend using Resend for email sending. 

1. Sign up at https://resend.com
2. Get your API key
3. Add it as a secret:

```bash
supabase secrets set RESEND_API_KEY=your_api_key_here
```

### 4. Deploy the Function

```bash
supabase functions deploy send-order-confirmation
```

### 5. Configure Stripe Success URLs

In your Stripe dashboard, set the success URL for each product to:
- US: `https://hydronmarketing.com/marketing/us/success`
- UK: `https://hydronmarketing.com/marketing/uk/success`

## Function Details

The `send-order-confirmation` function:
- Accepts order data (customer name, email, package, price, etc.)
- Sends a branded invoice email to the customer
- Sends the same email to marketinghydron@gmail.com
- Includes all required information: package details, pricing, hosting renewal info

## Email Template

The email includes:
- Customer name
- Package purchased (Starter/Custom/Business Plus/Premium)
- One-time price paid
- Hosting included for 3 months
- Monthly renewal price after 3 months
- Clear explanation of subscription details

## Testing

To test the function locally:

```bash
supabase functions serve send-order-confirmation
```

Then call it from your success page or use curl:

```bash
curl -i --location --request POST 'http://localhost:54321/functions/v1/send-order-confirmation' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"customerName":"Test User","customerEmail":"test@example.com","packageName":"Custom Website","price":500,"currencySymbol":"$","region":"US","hostingMonthlyPrice":15,"hostingIncludedMonths":3}'
```

## Troubleshooting

If emails aren't sending:
1. Check that RESEND_API_KEY is set correctly
2. Verify your Resend domain is verified
3. Check the function logs: `supabase functions logs send-order-confirmation`
4. Make sure the "from" email is from your verified domain
