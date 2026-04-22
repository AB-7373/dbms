import React from 'react';
import { Shield, GitBranch, Mail, Key, ArrowRight } from 'lucide-react';

export default function LoginVault() {
  return (
    <div className="flex h-screen bg-[#0a0a0c] text-white font-sans">
      <div className="flex-1 relative overflow-hidden flex flex-col justify-center p-20 border-r border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
        <div className="relative z-10 max-w-xl">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold tracking-widest mb-6 uppercase">
            <Shield size={16} />
            The Cinematic Sentinel
          </div>
          <h1 className="text-7xl font-bold mb-2 tracking-tight">Uncompromised</h1>
          <h1 className="text-7xl font-bold text-cyan-400 mb-8 tracking-tight">Quality.</h1>
          <p className="text-gray-400 text-xl max-w-md leading-relaxed">
            Enter the secure vault. Experience premium streaming backed by enterprise-grade anti-piracy architecture.
          </p>
        </div>
      </div>

      <div className="w-[500px] bg-[#0f0f12] flex flex-col justify-center px-16">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-8 bg-cyan-400 rounded-sm"></div>
          <span className="text-2xl font-bold tracking-wider">STREAMBOAT</span>
        </div>

        <h2 className="text-3xl font-bold mb-2">Secure Vault Access</h2>
        <p className="text-gray-500 mb-8">Authenticate identity to continue to your dashboard.</p>

        <div className="flex gap-4 mb-8">
          <button className="flex-1 flex items-center justify-center gap-3 bg-[#121216] border border-gray-800 py-3 rounded-lg hover:border-gray-600 transition-colors">
            <Mail size={18} /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-3 bg-[#121216] border border-gray-800 py-3 rounded-lg hover:border-gray-600 transition-colors">
            <GitBranch size={18} /> Github
          </button>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px bg-gray-800 flex-1"></div>
          <span className="text-xs text-gray-600 uppercase tracking-widest">System Override / Manual Entry</span>
          <div className="h-px bg-gray-800 flex-1"></div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <label className="text-xs text-gray-500 uppercase tracking-widest mb-2 block">Operative Identifier</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="email" 
                placeholder="email@streamboat.io" 
                className="w-full bg-[#121216] border border-gray-800 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs text-gray-500 uppercase tracking-widest">Access Key</label>
              <a href="#" className="text-xs text-cyan-400 hover:text-cyan-300">Forgot Key?</a>
            </div>
            <div className="relative">
              <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-[#121216] border border-gray-800 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <button className="w-full bg-cyan-400 text-black font-bold py-4 rounded-lg mt-4 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
            Initialize Session <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          No active dossier? <a href="#" className="text-purple-400 hover:text-purple-300">Request Clearance</a>
        </p>
      </div>
    </div>
  );
}