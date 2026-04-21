import { useState } from 'react';
import { 
  User, Settings, Shield, CreditCard, Bell, 
  Key, Smartphone, Mail, AlertTriangle, Monitor,
  CheckCircle2
} from 'lucide-react';

export default function Profile() {
  // Simple state for visual toggles
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [marketingNotifs, setMarketingNotifs] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div className="flex-1 p-8 w-full max-w-[1000px] mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">Account Settings</h1>
        <div className="text-sm text-sb-text-muted">Manage your profile, billing, and security preferences.</div>
      </div>

      <div className="space-y-8 pb-12">
        
        {/* Profile Header */}
        <div className="bg-sb-surface rounded-2xl p-8 border border-sb-border flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-sb-primary shrink-0 relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200" alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs font-bold text-white">Change</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1">Alex Chen</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-sb-primary tracking-widest uppercase font-bold">Pro Plan</span>
              <CheckCircle2 className="w-3 h-3 text-sb-primary" />
            </div>
            <div className="text-sm text-sb-text-muted">alex.chen@example.com</div>
          </div>
          <button className="w-full sm:w-auto px-6 py-2.5 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors mt-4 sm:mt-0">
            View Public Profile
          </button>
        </div>

        {/* Personal Information Form */}
        <div className="bg-sb-surface rounded-2xl p-6 md:p-8 border border-sb-border">
          <div className="flex items-center gap-2 text-sm font-bold text-white mb-6">
            <User className="w-5 h-5 text-sb-text-muted" /> Personal Information
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-sb-text-muted font-bold mb-2">First Name</label>
              <input type="text" defaultValue="Alex" className="w-full bg-[#0A0A0A] border border-sb-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-sb-primary text-white" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-sb-text-muted font-bold mb-2">Last Name</label>
              <input type="text" defaultValue="Chen" className="w-full bg-[#0A0A0A] border border-sb-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-sb-primary text-white" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs uppercase tracking-widest text-sb-text-muted font-bold mb-2">Email Address</label>
              <input type="email" defaultValue="alex.chen@example.com" className="w-full bg-[#0A0A0A] border border-sb-border rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-sb-primary text-white" />
            </div>
            <div className="md:col-span-2 flex justify-end mt-2">
              <button className="px-6 py-2.5 bg-sb-primary/10 text-sb-primary border border-sb-primary/20 hover:bg-sb-primary/20 rounded-lg text-sm font-bold transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Security */}
          <div className="bg-sb-surface rounded-2xl p-6 border border-sb-border">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6">
              <Shield className="w-5 h-5 text-sb-purple" /> Security
            </div>
            <div className="space-y-2">
              <button className="w-full text-left p-4 rounded-xl border border-transparent hover:border-sb-border hover:bg-[#0A0A0A] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sb-bg rounded-lg group-hover:bg-sb-surface"><Key className="w-4 h-4 text-sb-text-muted" /></div>
                  <div>
                    <div className="text-sm font-bold text-white">Change Password</div>
                    <div className="text-xs text-sb-text-muted mt-0.5">Last updated 3 months ago</div>
                  </div>
                </div>
              </button>
              
              <button className="w-full text-left p-4 rounded-xl border border-transparent hover:border-sb-border hover:bg-[#0A0A0A] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sb-bg rounded-lg group-hover:bg-sb-surface"><Smartphone className="w-4 h-4 text-sb-text-muted" /></div>
                  <div>
                    <div className="text-sm font-bold text-white">Two-Factor Authentication</div>
                    <div className="text-xs text-sb-text-muted mt-0.5">Add an extra layer of security</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">Enabled</span>
              </button>

              <button className="w-full text-left p-4 rounded-xl border border-transparent hover:border-sb-border hover:bg-[#0A0A0A] transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-sb-bg rounded-lg group-hover:bg-sb-surface"><Monitor className="w-4 h-4 text-sb-text-muted" /></div>
                  <div>
                    <div className="text-sm font-bold text-white">Active Sessions</div>
                    <div className="text-xs text-sb-text-muted mt-0.5">Manage your logged in devices</div>
                  </div>
                </div>
                <span className="text-xs text-sb-text-muted">2 Devices</span>
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-sb-surface rounded-2xl p-6 border border-sb-border">
            <div className="flex items-center gap-2 text-sm font-bold text-white mb-6">
              <Bell className="w-5 h-5 text-yellow-500" /> Notification Preferences
            </div>
            <div className="grid grid-cols-1 gap-6">
              
              {/* Toggle 1 */}
              <div className="flex items-start justify-between p-4 bg-[#0A0A0A] border border-sb-border rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white mb-1">Account Emails</div>
                  <div className="text-xs text-sb-text-muted max-w-[200px]">Receive emails about your account activity and security.</div>
                </div>
                <button 
                  onClick={() => setEmailNotifs(!emailNotifs)}
                  className={`w-11 h-6 rounded-full relative transition-colors ${emailNotifs ? 'bg-sb-primary' : 'bg-sb-border'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${emailNotifs ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 2 */}
              <div className="flex items-start justify-between p-4 bg-[#0A0A0A] border border-sb-border rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white mb-1">Marketing & Updates</div>
                  <div className="text-xs text-sb-text-muted max-w-[200px]">Receive news, updates, and special offers from us.</div>
                </div>
                <button 
                  onClick={() => setMarketingNotifs(!marketingNotifs)}
                  className={`w-11 h-6 rounded-full relative transition-colors ${marketingNotifs ? 'bg-sb-primary' : 'bg-sb-border'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${marketingNotifs ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              {/* Toggle 3 */}
              <div className="flex items-start justify-between p-4 bg-[#0A0A0A] border border-sb-border rounded-xl">
                <div>
                  <div className="text-sm font-bold text-white mb-1">Auto-Backup</div>
                  <div className="text-xs text-sb-text-muted max-w-[200px]">Automatically sync new assets to your secure cloud storage.</div>
                </div>
                <button 
                  onClick={() => setAutoBackup(!autoBackup)}
                  className={`w-11 h-6 rounded-full relative transition-colors ${autoBackup ? 'bg-sb-primary' : 'bg-sb-border'}`}
                >
                  <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${autoBackup ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-sb-surface rounded-2xl p-6 border border-red-500/20 md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-bold text-red-500 mb-2">
              <AlertTriangle className="w-5 h-5" /> Danger Zone
            </div>
            <p className="text-sm text-sb-text-muted mb-6">Permanently delete your account and all of your content. This action cannot be undone.</p>
            <button className="px-6 py-2.5 bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white rounded-lg text-sm font-bold transition-all">
              Delete Account
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}