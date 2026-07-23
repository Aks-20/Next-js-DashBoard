"use client";

import { useState } from "react";
import { useRole } from "@/context/RoleContext";
import { Bell, Lock, Globe, Save, CheckCircle } from "lucide-react";

const SettingsPage = () => {
  const { role } = useRole();
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);
  const [theme, setTheme] = useState("Light");
  const [language, setLanguage] = useState("English (US)");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xs border border-gray-100 max-w-4xl mx-auto flex-1">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Institutional Settings</h1>
          <p className="text-xs text-gray-500">Manage account preferences, notifications, and portal display settings</p>
        </div>
        <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">
          {role} Role
        </span>
      </div>

      {saved && (
        <div className="mb-6 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          Settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* NOTIFICATIONS SECTION */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-indigo-600" />
            Notification Preferences
          </h3>
          <div className="space-y-3 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-800">Email Notifications</h4>
                <p className="text-[11px] text-gray-500">Receive announcements, exam results, and weekly reports via email.</p>
              </div>
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={(e) => setEmailNotifications(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
            <hr className="border-gray-200/60" />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-800">SMS Alerts</h4>
                <p className="text-[11px] text-gray-500">Send instant text alerts for urgent school closures and events.</p>
              </div>
              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={(e) => setSmsAlerts(e.target.checked)}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* REGIONAL & DISPLAY SECTION */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Globe className="w-4 h-4 text-indigo-600" />
            Language & Regional Settings
          </h3>
          <div className="grid md:grid-cols-2 gap-4 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-gray-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="English (US)">English (US)</option>
                <option value="Spanish">Spanish (Español)</option>
                <option value="French">French (Français)</option>
                <option value="German">German (Deutsch)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Interface Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full text-xs font-medium bg-white border border-gray-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="Light">Light Dashboard</option>
                <option value="Dark">Dark Mode (Beta)</option>
                <option value="System">System Preference</option>
              </select>
            </div>
          </div>
        </div>

        {/* SECURITY & PASSWORD SECTION */}
        <div>
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-indigo-600" />
            Security & Authentication
          </h3>
          <div className="grid md:grid-cols-2 gap-4 bg-gray-50/70 p-4 rounded-xl border border-gray-100">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Current Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full text-xs bg-white border border-gray-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full text-xs bg-white border border-gray-200 rounded-lg p-2.5 outline-none focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
