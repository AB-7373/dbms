const nodemailer = require('nodemailer');

// Create transporter with Brevo SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_KEY,
  },
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Send OTP email
const sendOTPEmail = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.BREVO_FROM_EMAIL,
      to: email,
      subject: 'Email Verification OTP',
      html: `
        <h2>Email Verification</h2>
        <p>Your OTP for email verification is:</p>
        <h1 style="color: #007bff; letter-spacing: 5px;">${otp}</h1>
        <p>This OTP will expire in 10 minutes.</p>
        <p>If you did not request this OTP, please ignore this email.</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return { success: true, message: 'OTP sent successfully', info };
  } catch (error) {
    console.error('Error sending OTP email:', error);
    return { success: false, message: 'Failed to send OTP email', error: error.message };
  }
};

module.exports = {
  generateOTP,
  sendOTPEmail,
};
