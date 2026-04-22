import React from 'react';
import { ArrowLeft, Play, Maximize, Volume2, Settings, Shield, AlertTriangle } from 'lucide-react';

export default function StreamPlayer() {
  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden">
      
      <header className="h-16 flex items-center justify-between px-6 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0 right-0 z-20">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="font-bold text-lg leading-tight">Project Sentinel: Final Cut</h1>
            <p className="text-xs text-cyan-400 font-bold tracking-widest uppercase">Encrypted Vault Alpha</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-3 py-1 rounded text-xs font-bold text-purple-400">
            <Shield size={14} /> Tracking Active
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <AlertTriangle size={20} className="text-gray-400 hover:text-white" />
          </button>
        </div>
      </header>

      <main className="flex-1 relative flex items-center justify-center bg-[#050505]">
        
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden flex flex-wrap justify-around items-center">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="text-gray-500 text-xs font-mono opacity-20 rotate-[-20deg]">
              usr_8f6a2c_track_seq_{i}
            </span>
          ))}
        </div>

        <div className="w-full max-w-6xl aspect-video bg-gray-900 border border-gray-800 shadow-2xl relative group">
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold flex items-center gap-2 border border-gray-700 z-10">
            4K HDR
          </div>
          
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer backdrop-blur-sm">
              <Play size={40} className="text-cyan-400 ml-2" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-full h-1 bg-gray-700 rounded-full mb-4 cursor-pointer relative">
              <div className="absolute top-0 left-0 bottom-0 bg-cyan-400 w-1/3 rounded-full"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-3 h-3 bg-white rounded-full shadow"></div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <button className="hover:text-cyan-400 transition-colors">
                  <Play size={24} />
                </button>
                <div className="flex items-center gap-2 text-sm text-gray-300 font-mono">
                  <span>00:45:12</span>
                  <span className="text-gray-600">/</span>
                  <span className="text-gray-500">02:24:00</span>
                </div>
                <div className="flex items-center gap-2 group/vol cursor-pointer">
                  <Volume2 size={20} className="text-gray-400 hover:text-white" />
                  <div className="w-0 overflow-hidden group-hover/vol:w-20 transition-all duration-300 ease-out">
                    <div className="w-16 h-1 bg-gray-600 rounded-full ml-2 mt-2">
                      <div className="w-1/2 h-full bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-white transition-colors">
                  <Settings size={20} />
                </button>
                <button className="hover:text-white transition-colors">
                  <Maximize size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}