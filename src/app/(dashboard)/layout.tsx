// src/app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lama Dev School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <div className="flex min-h-screen bg-[#f7f8fa]">
          <aside className="hidden md:flex w-16 lg:w-64 border-r border-gray-100 bg-white/90 backdrop-blur-sm">
            <div className="sticky top-0 h-screen w-full p-2 lg:p-4">
              <div className="hidden lg:flex items-center gap-2 px-2 py-3">
                <span className="text-base font-semibold">Dashboard</span>
              </div>
              <Menu />
            </div>
          </aside>
          <main className="flex-1 min-w-0">
            <Navbar />
            <div className="p-3 md:p-4 lg:p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
