/**
 * Netlify Function: Enquiry Form Submission Handler
 * Processes counselling intake form submissions
 */

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Validate required fields
    const requiredFields = [
      'fullName',
      'email',
      'dateOfBirth',
      'whatBringsYou',
      'howLong',
      'goals',
      'consentConfidential',
      'consentContact',
      'consentPrivacy',
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: `Missing required field: ${field}` }),
        };
      }
    }

    // Validate consent checkboxes
    if (
      !formData.consentConfidential ||
      !formData.consentContact ||
      !formData.consentPrivacy
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All consent checkboxes must be checked' }),
      };
    }

    // TODO: Store form submission in database or send email
    // For now, log the submission
    console.log('Enquiry form submission received:', {
      fullName: formData.fullName,
      email: formData.email,
      dateOfBirth: formData.dateOfBirth,
      country: formData.country,
      hasSuicidalThoughts: formData.areasOfConcern?.includes('Suicidal thoughts'),
      immediateDanger: formData.immediateDanger === 'yes',
      timestamp: new Date().toISOString(),
    });

    // If crisis indicators are present, log for priority handling
    if (
      formData.areasOfConcern?.includes('Suicidal thoughts') ||
      formData.immediateDanger === 'yes'
    ) {
      console.log('CRISIS INDICATOR: Priority handling required', {
        email: formData.email,
        immediateDanger: formData.immediateDanger,
        areasOfConcern: formData.areasOfConcern,
      });
    }

    // In production, you would:
    // 1. Store submission in a database (e.g., Airtable, MongoDB, PostgreSQL)
    // 2. Send notification email to MenCryToo team
    // 3. If crisis indicators present, send immediate alert email
    // 4. Optionally send auto-reply to user with crisis resources if applicable

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Enquiry form submitted successfully',
      }),
    };
  } catch (error) {
    console.error('Error processing enquiry form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};




