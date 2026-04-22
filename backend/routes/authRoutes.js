const express = require('express');
const router = express.Router();
const { registerUser, loginUser, googleOAuth, logoutUser, verifyOTP, resendOTP } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/google', googleOAuth);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.post('/logout', protect, logoutUser);

module.exports = router;
