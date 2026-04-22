import React, { useState } from 'react';
import { Upload, Shield, Play, Cloud, Settings, Lock, Check } from 'lucide-react';

export default function IngestSource() {
  const [watermark, setWatermark] = useState(false);
  const [geoBlock, setGeoBlock] = useState(true);

  return (
    <div className="flex h-screen bg-[#0a0a0c] text-white font-sans">
      <aside className="w-20 border-r border-gray-800 flex flex-col items-center py-6 gap-8 bg-[#0f0f12]">
        <div className="w-10 h-10 bg-cyan-400 rounded-sm mb-4 flex items-center justify-center">
          <Shield size={20} className="text-black" />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Play size={24} />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Cloud size={24} />
        </div>
        <div className="text-cyan-400 border-l-2 border-cyan-400 pl-2 cursor-pointer flex items-center justify-center w-full bg-cyan-900/10 py-2">
          <Upload size={24} />
        </div>
        <div className="text-gray-500 hover:text-white cursor-pointer">
          <Shield size={24} />
        </div>
        <div className="mt-auto text-gray-500 hover:text-white cursor-pointer">
          <Settings size={24} />
        </div>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          
          <div>
            <h1 className="text-5xl font-bold mb-2 tracking-tight">Ingest Source</h1>
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold tracking-widest uppercase">
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              Secure connection established. Ready for high-bandwidth transfer.
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            
            <div className="flex-[2] border border-gray-800 border-dashed rounded-2xl bg-[#0f0f12] flex flex-col items-center justify-center p-20 hover:border-gray-600 transition-colors cursor-pointer relative overflow-hidden">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 z-10">
                <Upload className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 z-10">Drag & Drop Encrypted Payload</h3>
              <p className="text-gray-400 mb-8 z-10 text-center max-w-sm">Select a file from your local vault or drop it here to begin secure ingestion.</p>
              <button className="px-6 py-3 bg-[#1a1a20] border border-gray-700 rounded-full text-sm font-semibold flex items-center gap-2 z-10 hover:bg-gray-800">
                <Lock size={16} /> Browse Local Vault
              </button>
              
              <div className="absolute bottom-6 left-8 right-8 flex justify-between text-xs font-bold text-gray-600 uppercase tracking-widest z-10">
                <span>Supported Formats: .MP4, .MKV, .PRORES</span>
                <span className="flex items-center gap-1 text-cyan-400"><Cloud size={14}/> Max File Size: 50GB</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col gap-6">
              
              <div className="border border-blue-500/30 rounded-2xl bg-[#121216] p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Metadata Configuration
                </div>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Asset Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Operation: Sentinel" 
                      className="w-full bg-[#1a1a20] border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-2 block">Description / Manifest</label>
                    <textarea 
                      rows="4"
                      placeholder="Enter secure payload details..." 
                      className="w-full bg-[#1a1a20] border border-gray-800 rounded-lg py-3 px-4 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="border border-purple-500/30 rounded-2xl bg-[#121216] p-6 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6">
                  <Shield size={14} />
                  DRM Protection
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm">Forensic Watermarking</h4>
                      <p className="text-xs text-gray-500 mt-1">Embed invisible user-specific tracking data.</p>
                    </div>
                    <button 
                      onClick={() => setWatermark(!watermark)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${watermark ? 'bg-purple-500' : 'bg-gray-800'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${watermark ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-sm">Strict Geo-blocking</h4>
                      <p className="text-xs text-gray-500 mt-1">Restrict access by IP geographical location.</p>
                    </div>
                    <button 
                      onClick={() => setGeoBlock(!geoBlock)}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${geoBlock ? 'bg-purple-500' : 'bg-gray-800'}`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform flex items-center justify-center ${geoBlock ? 'translate-x-6' : 'translate-x-0'}`}>
                        {geoBlock && <Check size={10} className="text-purple-500" />}
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <button className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 text-lg">
                <Upload size={20} /> Initialize Ingest Sequence
              </button>
              <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest">End-to-end encryption active</p>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}