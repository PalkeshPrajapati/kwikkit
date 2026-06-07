import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend. Will fall back to a mock mode if the API key is not set.
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

// Determine the recipient email address
const recipientEmail = process.env.NOTIFICATION_RECIPIENT_EMAIL || 'info@kwikkit.in';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    let formType = '';
    let data = {};
    let fileAttachment = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      formType = formData.get('formType');

      // Extract other text fields
      for (const [key, value] of formData.entries()) {
        if (key !== 'formType' && key !== 'resume') {
          data[key] = value;
        }
      }

      // Extract file attachment if present
      const file = formData.get('resume');
      if (file && typeof file === 'object' && 'arrayBuffer' in file) {
        const buffer = Buffer.from(await file.arrayBuffer());

        let customFilename = file.name || 'resume.pdf';
        if (formType === 'career') {
          const namePart = (formData.get('fullName') || 'Candidate').trim().replace(/[^a-zA-Z0-9]/g, '_');
          const rolePart = (formData.get('role') || 'Role').trim().replace(/[^a-zA-Z0-9]/g, '_');
          customFilename = `${namePart}_${rolePart}_Resume.pdf`.replace(/__+/g, '_');
        }

        fileAttachment = {
          filename: customFilename,
          content: buffer,
        };
      }
    } else {
      const body = await request.json();
      formType = body.formType;
      data = body;
    }

    if (!formType) {
      return NextResponse.json({ error: 'formType is required' }, { status: 400 });
    }

    // Prepare email parameters based on form type
    let subject = '';
    let emailHtml = '';

    if (formType === 'contact') {
      const { name, email, phone, subject: userSubject, message } = data;
      subject = `[Kwikkit Contact Form] ${userSubject || 'New Inquiry'}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #005f57; border-bottom: 2px solid #005f57; padding-bottom: 10px;">New Contact Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${name || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0;">${userSubject || 'N/A'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #faf9f6; border-left: 4px solid #ffe500; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #131a19;">Message:</h4>
            <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message || 'N/A'}</p>
          </div>
        </div>
      `;
    } else if (formType === 'partner') {
      const { restaurantName, ownerName, phone, address, cuisineType, currentPlatform, additionalInfo } = data;
      subject = `[Kwikkit Partner Application] ${restaurantName || 'New Restaurant'}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #005f57; border-bottom: 2px solid #005f57; padding-bottom: 10px;">New Partner Registration</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 180px;">Restaurant Name:</td>
              <td style="padding: 8px 0;">${restaurantName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Owner/Contact Name:</td>
              <td style="padding: 8px 0;">${ownerName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Restaurant Address:</td>
              <td style="padding: 8px 0;">${address || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Cuisine Type:</td>
              <td style="padding: 8px 0;">${cuisineType || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Currently Listed On:</td>
              <td style="padding: 8px 0;">${currentPlatform || 'None / Not Listed'}</td>
            </tr>
          </table>
          ${additionalInfo ? `
            <div style="margin-top: 20px; padding: 15px; background-color: #faf9f6; border-left: 4px solid #ffe500; border-radius: 4px;">
              <h4 style="margin: 0 0 10px 0; color: #131a19;">Additional Details:</h4>
              <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${additionalInfo}</p>
            </div>
          ` : ''}
        </div>
      `;
    } else if (formType === 'career') {
      const { fullName, email, phone, portfolio, linkedin, whyKwikkit, role } = data;
      subject = `[Kwikkit Job Application] ${fullName || 'New Candidate'} - ${role || 'General'}`;
      emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #005f57; border-bottom: 2px solid #005f57; padding-bottom: 10px;">New Job Application</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 160px;">Applicant Name:</td>
              <td style="padding: 8px 0;">${fullName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Target Role:</td>
              <td style="padding: 8px 0; font-weight: #700; color: #005f57;">${role || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;">${phone || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Portfolio Link:</td>
              <td style="padding: 8px 0;">${portfolio ? `<a href="${portfolio}" target="_blank">${portfolio}</a>` : 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">LinkedIn Profile:</td>
              <td style="padding: 8px 0;">${linkedin ? `<a href="${linkedin}" target="_blank">${linkedin}</a>` : 'N/A'}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #faf9f6; border-left: 4px solid #ffe500; border-radius: 4px;">
            <h4 style="margin: 0 0 10px 0; color: #131a19;">Why Kwikkit?</h4>
            <p style="margin: 0; line-height: 1.6; color: #374151; white-space: pre-wrap;">${whyKwikkit || 'N/A'}</p>
          </div>
        </div>
      `;
    } else {
      return NextResponse.json({ error: `Unsupported formType: ${formType}` }, { status: 400 });
    }

    // If API key is not configured, run mock mode (for local testing without keys)
    if (!resend) {
      console.warn(`[API Form Route] RESEND_API_KEY is not defined. Simulating email send for formType: "${formType}"`);
      if (fileAttachment) {
        console.warn(`[API Form Route] File attachment detected: "${fileAttachment.filename}" (${fileAttachment.content.length} bytes)`);
      }
      return NextResponse.json({
        success: true,
        mocked: true,
        message: 'Resend is not configured on the server. Submission succeeded in local simulation mode.'
      });
    }

    // Send the email via Resend
    const emailParams = {
      from: 'Kwikkit Forms <onboarding@resend.dev>', // Resend default domain for unverified senders
      to: recipientEmail,
      subject: subject,
      html: emailHtml,
    };

    if (fileAttachment) {
      emailParams.attachments = [fileAttachment];
    }

    const result = await resend.emails.send(emailParams);

    if (result.error) {
      console.error('[Resend Error]', result.error);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: result.data.id });
  } catch (err) {
    console.error('[API Submit Form Error]', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
