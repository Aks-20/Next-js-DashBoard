import type { Metadata } from "next";
import Menu from "@/components/Menu";
import Navbar from "@/components/NavBar";
import { RoleProvider } from "@/context/RoleContext";

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RoleProvider>
      <div className="flex min-h-screen bg-[#f7f8fa]">
        {/* LEFT SIDEBAR */}
        <aside className="hidden md:flex w-16 lg:w-64 border-r border-gray-100 bg-white/90 backdrop-blur-sm flex-col">
          <div className="sticky top-0 h-screen w-full p-2 lg:p-4 overflow-y-auto">
            <div className="hidden lg:flex items-center gap-2 px-2 py-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                E
              </div>
              <span className="text-base font-bold text-gray-800">EduManage</span>
            </div>
            <Menu />
          </div>
        </aside>
        {/* RIGHT MAIN CONTENT */}
        <main className="flex-1 min-w-0 flex flex-col">
          <Navbar />
          <div className="p-3 md:p-4 lg:p-6 flex-1">
            {children}
          </div>
        </main>
      </div>
    </RoleProvider>
  );
}
