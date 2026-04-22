const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Session = require('../models/Session');
const { generateOTP, sendOTPEmail } = require('../utils/mailer');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: 'Please add all fields' });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      otp,
      otp_expires: otpExpires,
      authMethod: 'email',
      email_verified: false,
    });

    if (user) {
      // Send OTP email
      const mailResult = await sendOTPEmail(email, otp);

      if (!mailResult.success) {
        return res.status(500).json({ message: 'Failed to send OTP email', error: mailResult.error });
      }

      res.status(201).json({
        message: 'User registered successfully. Check your email for OTP.',
        email: user.email,
        requiresOTPVerification: true,
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Verify OTP
// @route   POST /api/auth/verify-otp
// @access  Public
const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: 'Email and OTP are required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check if OTP has expired
    if (!user.otp_expires || new Date() > user.otp_expires) {
      return res.status(400).json({ message: 'OTP has expired. Please request a new one.' });
    }

    // Check if OTP matches
    if (user.otp !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Mark email as verified and clear OTP
    user.email_verified = true;
    user.otp = null;
    user.otp_expires = null;
    await user.save();

    // Generate token
    const token = generateToken(user._id);

    // Create session
    await Session.create({
      user_id: user._id,
      deviceInfo: req.headers['user-agent'],
      ipAddress: req.ip,
      token,
    });

    res.json({
      message: 'Email verified successfully',
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImage: user.profileImage,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Resend OTP
// @route   POST /api/auth/resend-otp
// @access  Public
const resendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.email_verified) {
      return res.status(400).json({ message: 'Email is already verified' });
    }

    // Generate new OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.otp = otp;
    user.otp_expires = otpExpires;
    await user.save();

    // Send OTP email
    const mailResult = await sendOTPEmail(email, otp);

    if (!mailResult.success) {
      return res.status(500).json({ message: 'Failed to send OTP email', error: mailResult.error });
    }

    res.json({ message: 'OTP resent successfully to your email' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if user logged in with Google
    if (user.authMethod === 'google' || user.googleId) {
      return res.status(400).json({
        message: 'This account is linked to Google. Please log in with Google instead.',
        authMethod: 'google',
      });
    }

    // Check if password is correct
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if email is verified
    if (!user.email_verified) {
      return res.status(400).json({
        message: 'Email not verified. Please verify your email first.',
        email: user.email,
        requiresOTPVerification: true,
      });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);

    // Create session
    await Session.create({
      user_id: user._id,
      deviceInfo: req.headers['user-agent'],
      ipAddress: req.ip,
      token,
    });

    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImage: user.profileImage,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const axios = require('axios');

// @desc    Google OAuth
// @route   POST /api/auth/google
// @access  Public
const googleOAuth = async (req, res) => {
  try {
    const { access_token } = req.body;
    
    if (!access_token) {
      return res.status(400).json({ message: 'No access token provided' });
    }

    // Securely pull Google Profile via official API
    const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });

    const { email, given_name: firstName, family_name: lastName, picture: profileImage, sub: googleId } = response.data;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        firstName,
        lastName,
        profileImage,
        googleId,
        email_verified: true,
        authMethod: 'google',
      });
    } else {
      // If user exists but doesn't have Google ID, add it
      if (!user.googleId) {
        user.googleId = googleId;
        user.authMethod = 'google'; // Update auth method
        await user.save();
      }
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(user._id);

    // Create session
    await Session.create({
      user_id: user._id,
      deviceInfo: req.headers['user-agent'],
      ipAddress: req.ip,
      token,
    });

    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profileImage: user.profileImage,
      token,
    });
  } catch (error) {
    console.error('Google OAuth Error:', error.response?.data || error.message);
    res.status(500).json({ message: 'Failed to authenticate with Google' });
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
const logoutUser = async (req, res) => {
  try {
    await Session.findOneAndUpdate({ token: req.token }, { isActive: false });
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  googleOAuth,
  logoutUser,
  verifyOTP,
  resendOTP,
};
