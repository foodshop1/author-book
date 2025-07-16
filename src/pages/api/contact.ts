import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, subject, message }: ContactData = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Here you would integrate with an email service
    // For now, we'll just log the data and return success
    console.log('Contact Form Submission:', {
      firstName,
      lastName,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service like:
    // - SendGrid
    // - Nodemailer
    // - EmailJS
    // - Formspree
    // - Netlify Forms

    res.status(200).json({
      message: 'Message sent successfully!',
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      message: 'Failed to send message. Please try again.',
      success: false,
    });
  }
}
