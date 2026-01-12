# Payment Integration Guide

This document explains how to integrate the funding pots tracking system with your payment provider (e.g., Stripe, PayPal, etc.).

## Overview

The funding pots system automatically updates when successful purchases are made. It tracks:
- **Total Amount Raised**: Cumulative total of all successful purchases
- **Counselling Packages Funded**: Increments every time £3000 is reached
- **Current Package Amount**: Resets to £0 every time a package is funded

## Backend API Endpoints

### GET `/api/funding`
Returns the current funding statistics.

**Response:**
```json
{
  "totalAmountRaised": 0,
  "currentPackageAmount": 0,
  "packagesFundedCount": 0
}
```

### POST `/api/payment-webhook`
Processes a successful payment and updates the funding totals.

**Request Body:**
```json
{
  "amount": 45.00,
  "orderId": "order_12345",
  "paymentProvider": "stripe",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Payment processed successfully",
  "data": {
    "totalAmountRaised": 45.00,
    "currentPackageAmount": 45.00,
    "packagesFundedCount": 0
  }
}
```

## Integration Steps

### For Stripe

1. **Set up Stripe Webhook**:
   - Go to Stripe Dashboard → Developers → Webhooks
   - Add endpoint: `https://your-domain.com/api/payment-webhook`
   - Select events: `checkout.session.completed`, `payment_intent.succeeded`

2. **Update `netlify/functions/payment-webhook.js`**:
   - Uncomment and configure the Stripe webhook signature verification
   - Install Stripe SDK: `npm install stripe`
   - Add your Stripe secret key to Netlify environment variables: `STRIPE_SECRET_KEY`
   - Add webhook secret: `STRIPE_WEBHOOK_SECRET`

3. **Example Stripe webhook handler** (add to `payment-webhook.js`):
   ```javascript
   const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
   
   exports.handler = async (event, context) => {
     // Verify webhook signature
     const sig = event.headers['stripe-signature'];
     let stripeEvent;
     
     try {
       stripeEvent = stripe.webhooks.constructEvent(
         event.body,
         sig,
         process.env.STRIPE_WEBHOOK_SECRET
       );
     } catch (err) {
       return {
         statusCode: 400,
         body: JSON.stringify({ error: `Webhook Error: ${err.message}` })
       };
     }
     
     // Handle successful payment
     if (stripeEvent.type === 'checkout.session.completed' || 
         stripeEvent.type === 'payment_intent.succeeded') {
       const session = stripeEvent.data.object;
       const amount = session.amount_total / 100; // Convert from cents to GBP
       
       // Call the existing processPayment logic
       const updatedData = processPayment(amount);
       
       return {
         statusCode: 200,
         body: JSON.stringify({ success: true, data: updatedData })
       };
     }
     
     return { statusCode: 200, body: JSON.stringify({ received: true }) };
   };
   ```

### For PayPal

1. **Set up PayPal Webhook**:
   - Go to PayPal Developer Dashboard → My Apps & Credentials → Webhooks
   - Add webhook URL: `https://your-domain.com/api/payment-webhook`
   - Subscribe to events: `PAYMENT.CAPTURE.COMPLETED`

2. **Update webhook handler** to verify PayPal webhook signatures.

### For Other Payment Providers

Follow the same pattern:
1. Set up webhook endpoint in your payment provider's dashboard
2. Verify webhook signatures (important for security)
3. Extract the payment amount from the webhook payload
4. Call `processPayment(amount)` with the payment amount in GBP

## Testing

### Test the Funding API
```bash
# Get current funding stats
curl https://your-domain.com/api/funding

# Test payment webhook (for development only)
curl -X POST https://your-domain.com/api/payment-webhook \
  -H "Content-Type: application/json" \
  -d '{"amount": 45.00, "orderId": "test_123"}'
```

### Test Locally with Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Run functions locally
netlify dev
```

The functions will be available at:
- `http://localhost:8888/.netlify/functions/get-funding`
- `http://localhost:8888/.netlify/functions/payment-webhook`

## Important Security Notes

⚠️ **CRITICAL**: Before going to production:

1. **Always verify webhook signatures** from your payment provider
2. **Only process confirmed, successful payments** - ignore pending or failed payments
3. **Use environment variables** for API keys and secrets (never commit them)
4. **Consider migrating to a proper database** instead of JSON file storage for:
   - Better concurrency handling
   - Transaction safety
   - Better performance at scale
   - Production-ready reliability

## Database Migration (Recommended for Production)

The current implementation uses a JSON file for storage. For production, consider migrating to:

- **Supabase** (PostgreSQL) - Easy integration with Netlify
- **MongoDB Atlas** - Simple NoSQL option
- **PlanetScale** - Serverless MySQL
- **Firebase Firestore** - Google's NoSQL database

Update the `readFundingData()` and `writeFundingData()` functions in both Netlify Functions to use your chosen database instead of file system operations.

## Data Structure

The funding data structure:
```json
{
  "totalAmountRaised": 0,
  "currentPackageAmount": 0,
  "packagesFundedCount": 0,
  "lastUpdated": "2024-01-01T00:00:00.000Z",
  "transactions": [
    {
      "amount": 45.00,
      "timestamp": "2024-01-01T12:00:00.000Z",
      "totalAfter": 45.00,
      "packagesAfter": 0,
      "packageAmountAfter": 45.00
    }
  ]
}
```

## Support

For questions or issues with payment integration, refer to your payment provider's documentation or contact your development team.




