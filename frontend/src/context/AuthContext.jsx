import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../lib/axiosInstance';
import toast from 'react-hot-toast';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      const storedUser = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      
      if (storedUser && token) {
        setUser(JSON.parse(storedUser));
        // You could also verify token validity by hitting /api/user/profile here
      }
      setLoading(false);
    };
    checkUserLoggedIn();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post('/auth/login', { email, password });
      
      // Check if email needs verification
      if (data.requiresOTPVerification) {
        toast.error(data.message);
        return { success: false, requiresOTPVerification: true, email: data.email };
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        profileImage: data.profileImage,
      }));
      setUser(data);
      toast.success('Logged in successfully');
      navigate('/library');
      return { success: true };
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Login failed';
      
      // Check if it's a Google auth error
      if (error.response?.data?.authMethod === 'google') {
        toast.error(errorMsg);
        return { success: false, authMethod: 'google' };
      }
      
      toast.error(errorMsg);
      return { success: false };
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await axiosInstance.post('/auth/signup', userData);
      
      // Don't auto-login, prompt for OTP verification
      toast.success(data.message || 'Account created. Check your email for OTP.');
      return { success: true, requiresOTPVerification: true, email: data.email };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
      return { success: false };
    }
  };

  const verifyOTP = async (email, otp) => {
    try {
      const { data } = await axiosInstance.post('/auth/verify-otp', { email, otp });
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        profileImage: data.profileImage,
      }));
      setUser(data);
      toast.success('Email verified successfully');
      navigate('/library');
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'OTP verification failed');
      return { success: false };
    }
  };

  const resendOTP = async (email) => {
    try {
      const { data } = await axiosInstance.post('/auth/resend-otp', { email });
      toast.success(data.message || 'OTP resent to your email');
      return { success: true };
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to resend OTP');
      return { success: false };
    }
  };

  const googleLogin = async (googleData) => {
    try {
      const { data } = await axiosInstance.post('/auth/google', googleData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        profileImage: data.profileImage,
      }));
      setUser(data);
      toast.success('Logged in with Google');
      navigate('/library');
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || 'Google Login failed');
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    toast.success('Logged out');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, googleLogin, logout, loading, verifyOTP, resendOTP }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
