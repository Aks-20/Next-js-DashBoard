"use client";

import { useRole, RoleType } from "@/context/RoleContext";
import { useRouter } from "next/navigation";
import { Search, Mail, Bell, ShieldCheck, UserCheck, GraduationCap, Users } from "lucide-react";

const Navbar = () => {
  const { role, setRole, searchQuery, setSearchQuery } = useRole();
  const router = useRouter();

  const roleDetails: Record<RoleType, { name: string; avatar: string; color: string; icon: React.ReactNode }> = {
    admin: { name: "Alex Mercer", avatar: "AM", color: "bg-indigo-600", icon: <ShieldCheck className="w-3 h-3" /> },
    teacher: { name: "Sarah Jenkins", avatar: "SJ", color: "bg-emerald-600", icon: <UserCheck className="w-3 h-3" /> },
    student: { name: "Ethan Hunt", avatar: "EH", color: "bg-sky-600", icon: <GraduationCap className="w-3 h-3" /> },
    parent: { name: "Robert Hunt", avatar: "RH", color: "bg-amber-600", icon: <Users className="w-3 h-3" /> },
  };

  const currentRole = roleDetails[role] || roleDetails.admin;

  const handleRoleChange = (newRole: RoleType) => {
    setRole(newRole);
    router.push(`/${newRole}`);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-40">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full border border-gray-200 px-3 py-1.5 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white transition-all">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search students, teachers, classes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[220px] lg:w-[300px] bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* RIGHT SIDE ACTIONS */}
      <div className="flex items-center gap-4 justify-end w-full md:w-auto">
        {/* ROLE SWITCHER DROPDOWN (DEMO FEATURE) */}
        <div className="flex items-center gap-1.5 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100">
          <span className="text-xs font-semibold text-indigo-700 hidden sm:inline">Role View:</span>
          <select
            value={role}
            onChange={(e) => handleRoleChange(e.target.value as RoleType)}
            className="bg-transparent text-xs font-bold text-indigo-900 cursor-pointer outline-none capitalize"
          >
            <option value="admin">Admin View</option>
            <option value="teacher">Teacher View</option>
            <option value="student">Student View</option>
            <option value="parent">Parent View</option>
          </select>
        </div>

        {/* NOTIFICATIONS & MESSAGES */}
        <div className="flex items-center gap-2">
          <button className="bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-gray-600 transition-all btn-interactive">
            <Mail className="w-4 h-4" />
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-gray-600 relative transition-all btn-interactive">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-indigo-600 text-white rounded-full text-[10px] font-bold">
              3
            </span>
          </button>
        </div>

        {/* USER PROFILE CARD */}
        <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-xs font-bold text-gray-800 leading-tight">{currentRole.name}</span>
            <span className="text-[10px] text-gray-500 capitalize flex items-center justify-end gap-1">
              {currentRole.icon}
              {role}
            </span>
          </div>
          <div className={`rounded-full w-9 h-9 ${currentRole.color} text-white flex items-center justify-center text-sm font-bold shadow-sm`}>
            {currentRole.avatar}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;