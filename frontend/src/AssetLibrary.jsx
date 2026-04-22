import React from 'react';
import { Search, Bell, History, Shield, Play, Cloud, Settings, FileText, Image as ImageIcon, Video, ArrowRight } from 'lucide-react';

export default function AssetLibrary() {
  return (
    <div className="flex h-screen bg-[#0a0a0c] text-white font-sans">
      <aside className="w-20 border-r border-gray-800 flex flex-col items-center py-6 gap-8 bg-[#0f0f12]">
        <div className="w-10 h-10 bg-cyan-400 rounded-sm mb-4 flex items-center justify-center">
          <Shield size={20} className="text-black" />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Play size={24} />
        </div>
        <div className="text-cyan-400 border-l-2 border-cyan-400 pl-2 cursor-pointer flex items-center justify-center w-full bg-cyan-900/10 py-2">
          <Video size={24} />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Cloud size={24} />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Shield size={24} />
        </div>
        <div className="mt-auto text-gray-500 hover:text-white cursor-pointer">
          <Settings size={24} />
        </div>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 border-b border-gray-800 flex items-center justify-between px-10 bg-[#0a0a0c]">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search secure vault..." 
              className="w-full bg-[#121216] border border-gray-800 rounded-full py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-gray-600 transition-colors"
            />
          </div>
          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <History size={20} className="text-gray-400 hover:text-white cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-gray-600">
              <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        <div className="flex-1 p-10 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">Library</h1>
          
          <div className="flex gap-3 mb-10">
            <button className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full text-sm">All Assets</button>
            <button className="px-6 py-2 border border-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-800 transition-colors">Video</button>
            <button className="px-6 py-2 border border-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-800 transition-colors">Images</button>
            <button className="px-6 py-2 border border-gray-800 rounded-full text-sm text-gray-400 hover:bg-gray-800 transition-colors">Documents</button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 row-span-2 bg-[#121216] rounded-2xl border border-gray-800 overflow-hidden group cursor-pointer">
              <div className="h-[400px] bg-gray-900 relative">
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold flex items-center gap-2 border border-gray-700">
                  <Video size={14} className="text-cyan-400"/> 4K PRORES
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Project Sentinel: Final Cut</h3>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>24:00:00</span>
                  <span>•</span>
                  <span>120 GB</span>
                  <span>•</span>
                  <span className="text-blue-400">Encrypted Vault Alpha</span>
                </div>
              </div>
            </div>

            <div className="bg-[#121216] rounded-2xl border border-gray-800 overflow-hidden cursor-pointer hover:border-gray-600 transition-colors">
              <div className="h-48 bg-gray-900 relative">
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold flex items-center gap-2 border border-gray-700">
                   <ImageIcon size={14} className="text-purple-400"/> RAW
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">Environment Concept Beta</h3>
                <p className="text-xs text-gray-500">Modified 2h ago</p>
              </div>
            </div>

            <div className="bg-[#121216] rounded-2xl border border-gray-800 overflow-hidden cursor-pointer hover:border-gray-600 transition-colors flex flex-col">
              <div className="flex-1 p-6 relative">
                <FileText className="text-gray-600 mb-4" size={32} />
                <div className="absolute top-6 right-6 bg-gray-800 px-2 py-1 rounded text-[10px] font-bold text-gray-400">
                   PDF
                </div>
                <h3 className="text-lg font-bold text-blue-400 mb-1 mt-auto">Security Protocol V2.4</h3>
                <p className="text-xs text-gray-500 mb-6">Confidential - Eyes Only</p>
                <div className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-wider">
                  View Document <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div className="bg-[#121216] rounded-2xl border border-gray-800 overflow-hidden cursor-pointer hover:border-gray-600 transition-colors">
               <div className="h-32 bg-gray-900 relative">
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs font-bold flex items-center gap-2 border border-gray-700">
                    <Video size={14} className="text-cyan-400"/> MP4
                  </div>
               </div>
               <div className="p-5">
                 <h3 className="text-md font-bold mb-1">Archival Footage 1984</h3>
                 <p className="text-xs text-gray-500">00:45:12 • 2.4 GB</p>
               </div>
            </div>

            <div className="col-span-2 bg-[#121216] rounded-2xl border border-gray-800 overflow-hidden cursor-pointer flex relative hover:border-gray-600 transition-colors">
              <div className="p-8 flex-1 z-10">
                <div className="bg-purple-500/20 text-purple-400 w-fit px-3 py-1 rounded text-xs font-bold flex items-center gap-2 border border-purple-500/30 mb-4 uppercase tracking-widest">
                   <ImageIcon size={12} /> Asset Pack
                </div>
                <h3 className="text-2xl font-bold mb-2">Neon Cyber Grid Textures</h3>
                <p className="text-sm text-gray-400 mb-6 max-w-sm">High-resolution diffuse, normal, and displacement maps for Section 4 environments.</p>
                <div className="text-sm font-bold text-cyan-400 flex items-center gap-2 uppercase tracking-wider">
                  <Cloud size={16} /> Download Package
                </div>
              </div>
              <div className="w-1/2 bg-yellow-500/10 absolute right-0 top-0 bottom-0"></div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}