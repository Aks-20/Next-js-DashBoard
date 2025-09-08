// app/dashboard/layout.tsx

import React from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '200px', backgroundColor: 'black', padding: '1rem' }}>
        <h2>Dashboard</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/dashboard/settings">Settings</a></li>
          <li><a href="/dashboard/profile">Profile</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
}
