import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { ShieldCheck, User as UserIcon, KeyRound, ArrowRight, Type, Lock } from 'lucide-react';
import { useGoogleLogin } from '@react-oauth/google';
import { cn } from '../lib/utils';
import streamboatIcon from '../assets/streamboat.svg';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

export default function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSignUp = location.pathname === '/signup';
  const { login, register, googleLogin, verifyOTP, resendOTP } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // OTP verification state
  const [otpMode, setOtpMode] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (isSignUp) {
      if (!firstName || !lastName || !email || !password) {
        toast.error('Please fill in all fields');
        setIsSubmitting(false);
        return;
      }
      const result = await register({ firstName, lastName, email, password });
      if (result.success && result.requiresOTPVerification) {
        setPendingEmail(result.email);
        setOtpMode(true);
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
      }
    } else {
      const result = await login(email, password);
      if (result.success) {
        // Already navigated in context
      } else if (result.requiresOTPVerification) {
        setPendingEmail(result.email);
        setOtpMode(true);
        setPassword('');
      } else if (result.authMethod === 'google') {
        // Show error that they should use Google login
      }
    }
    
    setIsSubmitting(false);
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsSubmitting(true);
    const result = await verifyOTP(pendingEmail, otp);
    if (!result.success) {
      // Error already toasted from context
    }
    setIsSubmitting(false);
  };

  const handleResendOTP = async () => {
    setIsSubmitting(true);
    const result = await resendOTP(pendingEmail);
    if (result.success) {
      setOtp('');
      setResendCooldown(60);
      const interval = setInterval(() => {
        setResendCooldown(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    setIsSubmitting(false);
  };

  const handleBackToLogin = () => {
    setOtpMode(false);
    setPendingEmail('');
    setOtp('');
    setEmail('');
    setPassword('');
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsSubmitting(true);
      // Send the access token to backend for verification and profile fetching
      await googleLogin({ access_token: tokenResponse.access_token });
      setIsSubmitting(false);
    },
    onError: () => {
      toast.error('Google login failed');
    }
  });

  return (
    <div className="min-h-screen bg-sb-bg flex text-sb-text">
      {/* Left side: Visuals */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-end p-20 overflow-hidden border-r border-sb-border">
        {/* Abstract wavy lines background placeholder */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00e5ff', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#9d4edd', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M0,200 C200,100 400,300 600,200 C800,100 1000,300 1200,200 L1200,1000 L0,1000 Z" fill="url(#grad1)" opacity="0.1" />
            <path d="M0,400 C300,200 500,500 800,400 C1100,300 1300,600 1600,500 L1600,1000 L0,1000 Z" fill="url(#grad1)" opacity="0.1" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 mb-6 text-sb-primary font-bold text-xs uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            The Cinematic Sentinel
          </div>
          <h1 className="text-6xl font-extrabold tracking-tighter leading-tight mb-4">
            Uncompromised<br/>
            <span className="gradient-primary text-gradient">Quality.</span>
          </h1>
          <p className="text-lg text-sb-text-muted leading-relaxed">
            Experience premium streaming backed by enterprise-grade anti-piracy architecture.
          </p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 h-screen overflow-y-auto">
        <div className="w-full max-w-md mx-auto py-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <img src={streamboatIcon} alt="Logo" className="w-16 h-16" />
            <span className="font-bold text-2xl tracking-tight">Streamboat</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {otpMode ? (
              // OTP Verification Form
              <>
                <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
                  Verify Your Email
                </h2>
                <p className="text-sm text-sb-text-muted mb-8">
                  We've sent a 6-digit OTP to {pendingEmail}
                </p>

                <form onSubmit={handleOTPSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sb-text-muted font-bold mb-2">
                      Enter OTP
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-muted" />
                      <input 
                        type="text" 
                        maxLength="6"
                        inputMode="numeric"
                        required
                        value={otp}
                        onChange={e => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
                        placeholder="000000"
                        className="w-full bg-sb-surface border border-sb-border rounded-lg py-3 pl-11 pr-4 text-sm font-mono tracking-widest text-center focus:outline-none focus:border-sb-primary transition-colors text-sb-text placeholder:text-sb-text-muted"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting || otp.length !== 6}
                    className="w-full bg-gradient-to-r from-sb-primary to-[#00f2fe] text-black font-bold py-3.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-4 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Verifying...' : 'Verify OTP'} {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>

                <div className="mt-8 text-center text-sm text-sb-text-muted space-y-4">
                  <button
                    onClick={handleResendOTP}
                    disabled={resendCooldown > 0 || isSubmitting}
                    className="text-sb-primary font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : 'Resend OTP'}
                  </button>
                  <div>
                    <button
                      onClick={handleBackToLogin}
                      className="text-sb-primary font-bold hover:underline"
                    >
                      Back to {isSignUp ? 'Sign Up' : 'Login'}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              // Login/Signup Form
              <>
                <h2 className="text-3xl font-extrabold mb-2 tracking-tight">
                  {isSignUp ? 'Create an Account' : 'Welcome Back'}
                </h2>
                <p className="text-sm text-sb-text-muted mb-8">
                  {isSignUp ? 'Enter your details below to create your account.' : 'Enter your credentials to access your account.'}
                </p>

                <div className="flex gap-4 mb-8">
                  <button 
                    type="button" 
                    disabled={isSubmitting}
                    onClick={handleGoogleLogin}
                    className="flex-1 bg-sb-surface hover:bg-sb-surface-hover border border-sb-border rounded-lg py-2.5 text-sm font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                   >
                    <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                    Google
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-sb-border"></div>
                  <span className="text-[10px] uppercase tracking-widest text-sb-text-muted font-bold">Or continue with email</span>
                  <div className="flex-1 h-px bg-sb-border"></div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSignUp && (
                     <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-[10px] uppercase tracking-widest text-sb-text-muted font-bold mb-2">
                          First Name
                        </label>
                        <div className="relative">
                          <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-muted" />
                          <input 
                            type="text" 
                            required
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="John"
                            className="w-full bg-sb-surface border border-sb-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-sb-primary transition-colors text-sb-text placeholder:text-sb-text-muted"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-[10px] uppercase tracking-widest text-sb-text-muted font-bold mb-2">
                          Last Name
                        </label>
                        <div className="relative">
                          <Type className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-muted" />
                          <input 
                            type="text" 
                            required
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Doe"
                            className="w-full bg-sb-surface border border-sb-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-sb-primary transition-colors text-sb-text placeholder:text-sb-text-muted"
                          />
                        </div>
                      </div>
                     </div>
                  )}

                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-sb-text-muted font-bold mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-muted" />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full bg-sb-surface border border-sb-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-sb-primary transition-colors text-sb-text placeholder:text-sb-text-muted"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="block text-[10px] uppercase tracking-widest text-sb-text-muted font-bold">
                        Password
                      </label>
                      {!isSignUp && (
                        <a href="#" className="text-[10px] font-bold text-sb-primary hover:underline">
                          Forgot Password?
                        </a>
                      )}
                    </div>
                    <div className="relative">
                      <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sb-text-muted" />
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-sb-surface border border-sb-border rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-sb-primary transition-colors text-sb-text placeholder:text-sb-text-muted"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-sb-primary to-[#00f2fe] text-black font-bold py-3.5 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-4 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Log In')} {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>

                <div className="mt-8 text-center text-sm text-sb-text-muted">
                  {isSignUp ? (
                    <>Already have an account? <Link to="/login" className="text-sb-purple font-bold hover:underline">Log In</Link></>
                  ) : (
                    <>Don't have an account? <Link to="/signup" className="text-sb-purple font-bold hover:underline">Sign Up</Link></>
                  )}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}