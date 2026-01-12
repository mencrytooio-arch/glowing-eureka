/**
 * Netlify Function: GET /api/funding
 * Returns current funding statistics
 */

const fs = require('fs');
const path = require('path');

// Path to the data file (relative to function execution)
const DATA_FILE_PATH = path.join(__dirname, '../../data/funding.json');

// Default initial data structure
const DEFAULT_DATA = {
  totalAmountRaised: 0,
  currentPackageAmount: 0,
  packagesFundedCount: 0,
  lastUpdated: new Date().toISOString(),
};

/**
 * Read funding data from JSON file
 * If file doesn't exist, return default data
 */
function readFundingData() {
  try {
    // Ensure data directory exists
    const dataDir = path.dirname(DATA_FILE_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    if (fs.existsSync(DATA_FILE_PATH)) {
      const fileContent = fs.readFileSync(DATA_FILE_PATH, 'utf8');
      return JSON.parse(fileContent);
    }
    
    // File doesn't exist, create it with default data
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(DEFAULT_DATA, null, 2));
    return DEFAULT_DATA;
  } catch (error) {
    console.error('Error reading funding data:', error);
    // Return default data on error
    return DEFAULT_DATA;
  }
}

/**
 * Handler function
 */
exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
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
    const fundingData = readFundingData();
    
    // Return only the public-facing data (exclude internal fields like lastUpdated if needed)
    const response = {
      totalAmountRaised: fundingData.totalAmountRaised || 0,
      currentPackageAmount: fundingData.currentPackageAmount || 0,
      packagesFundedCount: fundingData.packagesFundedCount || 0,
    };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.error('Error in get-funding function:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};




