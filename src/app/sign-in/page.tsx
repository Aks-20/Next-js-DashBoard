"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GraduationCap, ShieldCheck, UserCheck, Users, ArrowRight, Lock, Mail } from "lucide-react";

const LoginPage = () => {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<"admin" | "teacher" | "student" | "parent">("admin");
  const [email, setEmail] = useState("admin@edumanage.edu");
  const [password, setPassword] = useState("••••••••");

  const roles = [
    {
      id: "admin",
      title: "Admin",
      desc: "Full institutional control",
      email: "admin@edumanage.edu",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      color: "border-indigo-500 bg-indigo-50/50",
    },
    {
      id: "teacher",
      title: "Teacher",
      desc: "Classes & grades management",
      email: "teacher@edumanage.edu",
      icon: <UserCheck className="w-5 h-5 text-emerald-600" />,
      color: "border-emerald-500 bg-emerald-50/50",
    },
    {
      id: "student",
      title: "Student",
      desc: "Schedule & assignments view",
      email: "student@edumanage.edu",
      icon: <GraduationCap className="w-5 h-5 text-sky-600" />,
      color: "border-sky-500 bg-sky-50/50",
    },
    {
      id: "parent",
      title: "Parent",
      desc: "Child academic tracking",
      email: "parent@edumanage.edu",
      icon: <Users className="w-5 h-5 text-amber-600" />,
      color: "border-amber-500 bg-amber-50/50",
    },
  ];

  const handleSelectRole = (roleId: "admin" | "teacher" | "student" | "parent", roleEmail: string) => {
    setSelectedRole(roleId);
    setEmail(roleEmail);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("user_role", selectedRole);
    router.push(`/${selectedRole}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10">
        
        {/* LEFT COLUMN: AUTH FORM */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-xl shadow-lg">
                E
              </div>
              <span className="text-xl font-bold text-gray-900">EduManage</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-500 mb-6">Sign in to access your school portal</p>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs py-1">
                <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  Remember me
                </label>
                <a href="#" className="text-indigo-600 font-semibold hover:underline">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              >
                Sign In as {selectedRole.toUpperCase()}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            Back to <Link href="/" className="text-indigo-600 font-semibold hover:underline">Landing Page</Link>
          </div>
        </div>

        {/* RIGHT COLUMN: QUICK DEMO ROLE SELECTOR */}
        <div className="bg-slate-50 p-8 md:p-10 border-t md:border-t-0 md:border-l border-gray-200 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-700 bg-indigo-100/80 px-3 py-1 rounded-full mb-3">
              Portfolio Demo Mode
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">Select Demo Role</h3>
            <p className="text-xs text-gray-500 mb-6">Click any role card below to test role-based permissions immediately:</p>

            <div className="space-y-3">
              {roles.map((r) => (
                <div
                  key={r.id}
                  onClick={() => handleSelectRole(r.id as "admin" | "teacher" | "student" | "parent", r.email)}
                  className={`p-3.5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                    selectedRole === r.id ? r.color : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white shadow-sm border border-gray-100">
                      {r.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{r.title}</h4>
                      <p className="text-[11px] text-gray-500">{r.desc}</p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedRole === r.id ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-300"
                  }`}>
                    {selectedRole === r.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 p-3 rounded-lg bg-indigo-50/70 border border-indigo-100 text-[11px] text-indigo-900 leading-relaxed">
            💡 <strong>Resume Note:</strong> Role-Based Access Control (RBAC) dynamically updates menu options, user permissions, and dashboard analytics based on your active role choice.
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;