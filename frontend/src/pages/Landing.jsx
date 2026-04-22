import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Play, Pause, Lock, FileText, ArrowRight } from 'lucide-react';
import streamboatIcon from '../assets/streamboat.svg';

export default function Landing() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleGetStarted = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/library');
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-sb-bg text-sb-text flex flex-col relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sb-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sb-purple/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Navbar for Landing */}
      <nav className="h-24 w-full max-w-[1400px] mx-auto px-8 md:px-16 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <img src={streamboatIcon} alt="Logo" className="w-16 h-16" />
          <span className="font-bold text-2xl tracking-tight">Streamboat</span>
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/login')}
            className="text-sm font-semibold hover:text-sb-primary transition-colors"
          >
            Sign In
          </button>
          <button 
            onClick={handleGetStarted}
            className="bg-sb-surface border border-sb-border hover:border-sb-primary px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 z-10 py-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-sb-primary animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-sb-primary uppercase">Encrypted Transmission</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6"
          >
            Uncompromised<br/>
            Content.<br/>
            <span className="gradient-primary text-gradient">Absolute Security.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-sb-text-muted max-w-2xl mb-12 leading-relaxed"
          >
            Experience cinematic quality streaming within a fortified digital vault. 
            Anti-piracy architecture meets editorial design. Your premier destination for exclusive media.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button 
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-gradient-to-r from-sb-primary to-[#00f2fe] text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(0,229,255,0.3)] hover:scale-105 transform duration-200"
            >
              <Play className="w-5 h-5 fill-black" />
              Get Started
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold border border-sb-border hover:bg-sb-surface transition-colors flex items-center justify-center">
              View Technical Specs
            </button>
          </motion.div>
        </div>
      </main>

      {/* The Sentinel Architecture Section */}
      <section className="px-8 md:px-16 lg:px-24 pb-24 z-10 w-full max-w-[1400px] mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold mb-2 text-white">The Sentinel Architecture</h2>
          <p className="text-[10px] text-gray-400 font-semibold tracking-[0.2em] uppercase">Next-Generation Viewing Infrastructure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Flawless Playback */}
          <div className="md:col-span-2 bg-[#0A0A0A] rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[380px] border border-white/5 group">
            {/* Background Video & Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-black">
              <video 
                ref={videoRef}
                src="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" 
                loop
                playsInline
                muted
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent pointer-events-none" />
            </div>

            {/* Top Badges */}
            <div className="relative z-10 p-6 flex justify-between items-start pointer-events-none">
              <span className="text-[10px] font-bold bg-white/10 px-3 py-1.5 rounded text-white/90 backdrop-blur-md border border-white/5">
                4K HDR Support
              </span>
              <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-bold text-white/90 backdrop-blur-md border border-white/5">
                4K
              </span>
            </div>

            {/* Bottom Content & Player */}
            <div className="relative z-10 p-6 pt-0">
              <h3 className="text-xl font-bold mb-2 text-white">Flawless Playback</h3>
              <p className="text-sm text-gray-400 max-w-md mb-8 leading-relaxed">
                Zero buffering. Dynamic adaptive bitrate streaming wrapped in proprietary DRM ensures your visual experience is never compromised.
              </p>
              
              {/* Functional Custom Player UI */}
              <div className="flex items-center gap-4 bg-[#141414]/90 p-3.5 rounded-xl backdrop-blur-md border border-white/5">
                <button 
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                >
                   {isPlaying ? (
                     <Pause className="w-4 h-4 text-black fill-black" />
                   ) : (
                     <Play className="w-4 h-4 text-black fill-black pl-0.5" />
                   )}
                </button>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#00e5ff] rounded-full shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all duration-300"
                    style={{ width: isPlaying ? '45%' : '30%' }} // Simulating progress visually
                  ></div>
                </div>
                <span className="text-xs font-medium text-gray-500">
                  {isPlaying ? 'Playing...' : '01:24:00'}
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Secure Document Viewer */}
          <div className="bg-[#0A0A0A] rounded-2xl p-6 flex flex-col min-h-[380px] border border-white/5 relative overflow-hidden">
            <div className="mb-6 w-10 h-10 bg-[#2A1B38] rounded-full flex items-center justify-center">
              <Lock className="w-4 h-4 text-[#B57EDC]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Secure Document Viewer</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Access sensitive scripts, storyboards, and contracts with restricted print/download capabilities.
            </p>
            
            {/* Fake Document UI */}
            <div className="mt-auto bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center gap-4">
              <div className="w-10 h-10 bg-[#381B1B] rounded-lg flex items-center justify-center shrink-0">
                 <FileText className="w-5 h-5 text-[#FF6B6B]" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">Project_Omega_Script.pdf</div>
                <div className="text-[10px] text-[#4D9FFF] font-semibold mt-0.5">Watermarked • View Only</div>
              </div>
            </div>
          </div>

          {/* Card 3: Encrypted Image Galleries */}
          <div className="md:col-span-3 bg-[#0A0A0A] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            <div className="flex-1 max-w-sm">
              <h3 className="text-xl font-bold mb-2 text-white">Encrypted Image Galleries</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Browse high-resolution production stills and conceptual art in an environment protected against unauthorized saving or screen capturing.
              </p>
              <button className="text-sm font-bold text-[#B57EDC] hover:text-[#D1A3FF] flex items-center gap-2 transition-colors">
                Explore Galleries <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Thumbnail Previews */}
            <div className="flex gap-4 w-full md:w-auto overflow-hidden">
              <div className="w-48 h-48 rounded-xl overflow-hidden relative border border-white/5 shrink-0 bg-[#141414]">
                 <img 
                   src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80" 
                   className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                   alt="Camera Lens" 
                 />
              </div>
              <div className="w-48 h-48 rounded-xl overflow-hidden relative border border-white/5 shrink-0 bg-[#141414] hidden sm:block">
                 <img 
                   src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80" 
                   className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                   alt="Studio Setup" 
                 />
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Footer / Info */}
      <footer className="h-20 w-full max-w-[1400px] mx-auto border-t border-sb-border/50 flex items-center justify-between px-8 md:px-16 text-xs text-sb-text-muted z-10">
        <div className="flex items-center gap-4">
          <img src={streamboatIcon} alt="Logo" className="w-8 h-8 opacity-50" />
          <span>© 2026 Streamboat. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex gap-6 hidden md:flex">
          <a href="#" className="hover:text-sb-text transition-colors uppercase tracking-wider">Privacy Policy</a>
          <a href="#" className="hover:text-sb-text transition-colors uppercase tracking-wider">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}