/**
 * Netlify Function: POST /api/payment-webhook
 * Handles successful payment confirmations from payment providers
 * 
 * Expected payload structure:
 * {
 *   amount: number (in GBP, full order value),
 *   orderId: string (optional, for tracking),
 *   paymentProvider: string (e.g., 'stripe', 'paypal'),
 *   timestamp: string (ISO timestamp),
 * }
 * 
 * IMPORTANT: In production, this should:
 * 1. Verify webhook signatures from the payment provider
 * 2. Only process confirmed, successful payments
 * 3. Use a proper database instead of JSON file storage
 * 4. Implement proper locking/concurrency handling
 */

const fs = require('fs');
const path = require('path');

// Path to the data file
const DATA_FILE_PATH = path.join(__dirname, '../../data/funding.json');

// Constants
const PACKAGE_THRESHOLD = 3000; // £3000 per counselling package

// Default initial data structure
const DEFAULT_DATA = {
  totalAmountRaised: 0,
  currentPackageAmount: 0,
  packagesFundedCount: 0,
  lastUpdated: new Date().toISOString(),
  transactions: [], // Keep transaction log for auditing
};

/**
 * Read funding data from JSON file
 */
function readFundingData() {
  try {
    const dataDir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf8');
      return JSON.parse(fileContent);
    }
    
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(DEFAULT_DATA, null, 2));
    return DEFAULT_DATA;
  } catch (error) {
    console.error('Error reading funding data:', error);
    return DEFAULT_DATA;
  }
}

/**
 * Write funding data to JSON file
 */
function writeFundingData(data) {
  try {
    data.lastUpdated = new Date().toISOString();
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing funding data:', error);
    return false;
  }
}

/**
 * Process a payment contribution
 * Adds amount to totals and handles package threshold logic
 */
function processPayment(amount) {
  const data = readFundingData();
  
  // Add to total amount raised
  data.totalAmountRaised = (data.totalAmountRaised || 0) + amount;
  
  // Add to current package amount
  let remainingAmount = amount;
  data.currentPackageAmount = (data.currentPackageAmount || 0) + remainingAmount;
  
  // Check if package threshold is reached (handle multiple thresholds if amount is large)
  while (data.currentPackageAmount >= PACKAGE_THRESHOLD) {
    data.currentPackageAmount -= PACKAGE_THRESHOLD;
    data.packagesFundedCount = (data.packagesFundedCount || 0) + 1;
  }
  
  // Log transaction for auditing
  if (!data.transactions) {
    data.transactions = [];
  }
  data.transactions.push({
    amount,
    timestamp: new Date().toISOString(),
    totalAfter: data.totalAmountRaised,
    packagesAfter: data.packagesFundedCount,
    packageAmountAfter: data.currentPackageAmount,
  });
  
  // Keep only last 1000 transactions to prevent file bloat
  if (data.transactions.length > 1000) {
    data.transactions = data.transactions.slice(-1000);
  }
  
  // Write updated data
  const success = writeFundingData(data);
  
  if (!success) {
    throw new Error('Failed to persist funding data');
  }
  
  return {
    totalAmountRaised: data.totalAmountRaised,
    currentPackageAmount: data.currentPackageAmount,
    packagesFundedCount: data.packagesFundedCount,
  };
}

/**
 * Handler function
 */
exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse request body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (parseError) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Invalid JSON in request body' }),
      };
    }

    // Validate required fields
    if (typeof body.amount !== 'number' || body.amount <= 0) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Invalid amount. Must be a positive number.' }),
      };
    }

    // TODO: In production, verify webhook signature here
    // Example for Stripe:
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // const sig = event.headers['stripe-signature'];
    // try {
    //   stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    // } catch (err) {
    //   return { statusCode: 400, body: JSON.stringify({ error: 'Invalid signature' }) };
    // }

    // Process the payment
    const updatedData = processPayment(body.amount);

    console.log(`Payment processed: £${body.amount}. New total: £${updatedData.totalAmountRaised}, Packages: ${updatedData.packagesFundedCount}`);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        success: true,
        message: 'Payment processed successfully',
        data: updatedData,
      }),
    };
  } catch (error) {
    console.error('Error in payment-webhook function:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error processing payment' }),
    };
  }
};




