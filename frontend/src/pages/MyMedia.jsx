import { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Scissors, FileVideo, Clapperboard } from 'lucide-react';
import AssetCard from '../components/AssetCard';
import streamboatIcon from '../assets/streamboat.svg';

const MY_MEDIA_ASSETS = [
  {
    id: 1,
    title: 'Stream VOD: Cyberpunk Run',
    subtitle: ['04:12:00', '14 GB', 'Public'],
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    badgeText: 'STREAM',
    badgeIcon: Radio,
    type: 'stream',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 2,
    title: 'Epic Boss Fight Clip',
    subtitle: '1M Views • 2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
    badgeText: 'CLIP',
    badgeIcon: Scissors,
    type: 'clip',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 3,
    title: 'Intro Animation v2',
    subtitle: 'Unlisted',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600',
    badgeText: 'UPLOAD',
    badgeIcon: FileVideo,
    type: 'upload',
    className: 'md:col-span-1 md:row-span-1',
  },
];

const TABS = ['All Media', 'Streams', 'Clips', 'Uploads'];

export default function MyMedia() {
  const [activeTab, setActiveTab] = useState('All Media');

  const filteredAssets = MY_MEDIA_ASSETS.filter(asset => {
    if (activeTab === 'All Media') return true;
    if (activeTab === 'Streams') return asset.type === 'stream';
    if (activeTab === 'Clips') return asset.type === 'clip';
    if (activeTab === 'Uploads') return asset.type === 'upload';
    return true;
  });

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">My Media</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab 
                  ? 'bg-sb-primary text-black' 
                  : 'bg-sb-surface border border-sb-border text-sb-text-muted hover:text-sb-text hover:border-sb-primary/50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-3 auto-rows-[240px] gap-6 pb-12"
      >
        {filteredAssets.map(asset => (
          <motion.div
            key={asset.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className={asset.className}
          >
            <AssetCard {...asset} className="w-full h-full" />
          </motion.div>
        ))}
      </motion.div>

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