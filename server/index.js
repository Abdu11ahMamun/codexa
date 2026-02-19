import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MAIL_TO = process.env.MAIL_TO || process.env.EMAIL_USER;

app.use(cors());
app.use(express.json());

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Email transport verification failed:', error);
    return;
  }
  console.log('Email transport ready:', success);
});

// Contact form endpoint
app.post('/api/send-email', async (req, res) => {
  const {
    name,
    email,
    phone,
    message,
    formType,
    company,
    service,
    position,
    portfolio,
  } = req.body;

  console.log('Incoming form submission:', {
    formType,
    name,
    email,
    phone,
    company,
    service,
    position,
    portfolio,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: MAIL_TO,

    subject: `New ${formType || 'Contact'} Form Submission - Codexa`,
    html: `
      <h2>New Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType || 'Contact Form'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      ${position ? `<p><strong>Position:</strong> ${position}</p>` : ''}
      ${portfolio ? `<p><strong>Portfolio:</strong> ${portfolio}</p>` : ''}
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error?.message || 'Unknown error',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
