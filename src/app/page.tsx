"use client";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  Shield,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Play,
  UserCheck,
  BookOpen,
  TrendingUp,
  Zap,
  Clock,
  ShieldCheck,
  Lock,
} from "lucide-react";

export default function SchoolManagementLanding() {
  const [activeTab, setActiveTab] = useState<"admin" | "teacher" | "student" | "parent">("admin");
  const [activeFeatureCategory, setActiveFeatureCategory] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = { students: 1250, teachers: 120, classes: 45, events: 28 };

  const faqItems = [
    {
      q: "How quick is the onboarding setup process for a new school?",
      a: "EduManage is built for immediate deployment. You can import existing CSV data for students, staff, and classes in under 15 minutes, with role-based permissions automatically provisioned.",
    },
    {
      q: "Is EduManage FERPA and GDPR compliant for student privacy?",
      a: "Yes. Enterprise-grade encryption (AES-256 at rest, TLS 1.3 in transit) and strict role-based access control ensure student records and grade data remain 100% secure and compliant.",
    },
    {
      q: "Can I test different role views like Teacher, Student, or Parent?",
      a: "Absolutely! Our live dashboard includes an instant Role Switcher dropdown in the top navbar allowing you to experience the exact UI designed for each stakeholder.",
    },
    {
      q: "Does EduManage support custom grade scales and attendance tracking?",
      a: "Yes, EduManage supports customizable grading scales (letter grades, GPA 4.0/5.0, percentage), automated attendance logs, and instant parent notifications.",
    },
  ];

  const features = [
    {
      category: "ops",
      icon: <Users className="h-6 w-6 text-indigo-600" />,
      title: "Student Lifecycle & Directory",
      desc: "Complete 360-degree profiles with enrollment tracking, medical logs, attendance history, and parent contacts.",
    },
    {
      category: "analytics",
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      title: "Real-Time Performance Analytics",
      desc: "Interactive visual dashboards tracking class score averages, exam trends, and early intervention indicators.",
    },
    {
      category: "scheduling",
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
      title: "Smart Timetabling & Events",
      desc: "Conflict-free schedule builder for classes, exam rooms, faculty availability, and school-wide events calendar.",
    },
    {
      category: "communication",
      icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
      title: "Instant Multi-Channel Messaging",
      desc: "Direct communication hub bridging teachers, parents, and administrative staff with instant alert delivery.",
    },
    {
      category: "security",
      icon: <Shield className="h-6 w-6 text-amber-600" />,
      title: "FERPA Compliance & Access Control",
      desc: "Granular permission scoping ensuring staff and parents access only authorized records.",
    },
    {
      category: "analytics",
      icon: <GraduationCap className="h-6 w-6 text-pink-600" />,
      title: "Automated Gradebooks & Cards",
      desc: "Effortless term grade calculations, custom report card generation, and instant export capabilities.",
    },
  ];

  const filteredFeatures =
    activeFeatureCategory === "all"
      ? features
      : features.filter((f) => f.category === activeFeatureCategory);

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="container mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Edu<span className="text-indigo-600">Manage</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#preview" className="hover:text-indigo-600 transition-colors">
              Interactive Demo
            </a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#impact" className="hover:text-indigo-600 transition-colors">
              Impact
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href="/sign-in"
              className="text-xs font-semibold px-3 py-2 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-slate-100 transition-all btn-interactive"
            >
              Sign In
            </Link>
            <Link
              href="/admin"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-md shadow-indigo-600/20 transition-all btn-interactive flex items-center gap-1.5"
            >
              <span>Explore Dashboard</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6 shadow-xs animate-pulse">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            <span>Next-Gen School Operating System 2.0</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
            Streamline Your School Management with{" "}
            <span className="gradient-text">Real-Time Precision</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empower educators, students, and administrators with a unified, high-speed dashboard for attendance, analytics, timetables, and communication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Link
              href="/admin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/25 transition-all btn-interactive"
            >
              <span>Launch Live Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#preview"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 px-7 py-3.5 rounded-xl font-semibold text-sm shadow-xs transition-all btn-interactive"
            >
              <Play className="h-4 w-4 text-indigo-600 fill-indigo-600" />
              <span>Preview Interactive UI</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-5 text-left shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500">Students</p>
                <Users className="h-4 w-4 text-indigo-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{stats.students.toLocaleString()}+</p>
              <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3" /> +12% this term
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-5 text-left shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500">Educators</p>
                <UserCheck className="h-4 w-4 text-purple-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{stats.teachers}+</p>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Active faculty</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-5 text-left shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500">Classes</p>
                <BookOpen className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{stats.classes}</p>
              <p className="text-[11px] text-slate-500 font-medium mt-1">Active sections</p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-5 text-left shadow-xs hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-slate-500">Uptime</p>
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">99.9%</p>
              <p className="text-[11px] text-emerald-600 font-medium mt-1">FERPA Secured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Dashboard Preview Section */}
      <section id="preview" className="py-16 px-4 bg-slate-100/70 border-y border-slate-200/80">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Experience Role-Based Dashboard Intelligence
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Select a stakeholder role below to inspect how EduManage customizes views for Admins, Teachers, Students, and Parents.
            </p>
          </div>

          {/* Interactive Role Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
            {(["admin", "teacher", "student", "parent"] as const).map((role) => (
              <button
                key={role}
                onClick={() => setActiveTab(role)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold capitalize transition-all duration-150 btn-interactive ${
                  activeTab === role
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-105"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {role} View
              </button>
            ))}
          </div>

          {/* Dynamic Interactive Preview Mockup Window */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Mockup Window Header Bar */}
            <div className="bg-slate-900 px-4 py-3 flex items-center justify-between text-white text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-slate-400 font-mono text-[11px] ml-2">
                  edumanage.app/{activeTab}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-medium text-[10px] capitalize">
                  Active View: {activeTab}
                </span>
                <Link
                  href={`/${activeTab}`}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1 rounded text-[11px] font-semibold transition-colors btn-interactive"
                >
                  Open Full Page →
                </Link>
              </div>
            </div>

            {/* Mockup Content Body */}
            <div className="p-6 bg-slate-50">
              {activeTab === "admin" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Admin Control Center</h3>
                      <p className="text-xs text-slate-500">Institutional metrics, financial summaries, and user management.</p>
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-bold">
                      Live Status: Optimal
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium">Total Staff</p>
                      <p className="text-xl font-bold text-indigo-600 mt-1">120 Active</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium">Attendance Rate</p>
                      <p className="text-xl font-bold text-emerald-600 mt-1">96.4% Today</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs text-slate-500 font-medium">Pending Tasks</p>
                      <p className="text-xl font-bold text-amber-600 mt-1">4 Approvals</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "teacher" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Teacher Workspace</h3>
                      <p className="text-xs text-slate-500">Today&apos;s schedule, automated gradebooks, and student attendance.</p>
                    </div>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-bold">
                      Period 3: Mathematics
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Next Class: Algebra II</p>
                      <p className="text-xs text-slate-500 mt-0.5">Room 204 • 10:30 AM</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Unsubmitted Grades</p>
                      <p className="text-xs text-slate-500 mt-0.5">Midterm Quiz (24 submissions)</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "student" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Student Portal</h3>
                      <p className="text-xs text-slate-500">Assignments, academic progress, and class announcements.</p>
                    </div>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-bold">
                      GPA: 3.88
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Upcoming Assignment</p>
                      <p className="text-xs text-rose-600 font-semibold mt-0.5">Physics Lab Report • Due Today</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Attendance Score</p>
                      <p className="text-xs text-emerald-600 font-semibold mt-0.5">98% Present</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "parent" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900">Parent Monitor</h3>
                      <p className="text-xs text-slate-500">Student progress, attendance logs, and teacher direct messages.</p>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-bold">
                      Student: Ethan Hunt (Grade 10)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Latest Grade Notice</p>
                      <p className="text-xs text-emerald-600 font-semibold mt-0.5">A+ in Advanced Chemistry</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                      <p className="text-xs font-bold text-slate-700">Teacher Communication</p>
                      <p className="text-xs text-indigo-600 font-semibold mt-0.5">1 Unread message from Ms. Jenkins</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase Grid */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Comprehensive Platform Capabilities
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto mb-6">
              Everything your institution needs to eliminate administrative manual overhead and drive educational excellence.
            </p>

            {/* Feature Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Features" },
                { id: "ops", label: "Student Ops" },
                { id: "analytics", label: "Analytics & Grades" },
                { id: "scheduling", label: "Scheduling" },
                { id: "communication", label: "Messaging" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFeatureCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all btn-interactive ${
                    activeFeatureCategory === cat.id
                      ? "bg-slate-900 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Impact Section */}
      <section id="impact" className="py-16 px-4 bg-indigo-900 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="h-8 w-8 text-indigo-400 mx-auto mb-3" />
              <h4 className="text-3xl font-black text-white">15+ Hours</h4>
              <p className="text-xs text-indigo-200 mt-2">Saved weekly per educator on manual administrative grading and roster updates.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Zap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-3xl font-black text-white">40% Reduction</h4>
              <p className="text-xs text-indigo-200 mt-2">In parent inquiry response latency with automated message notifications.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Lock className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
              <h4 className="text-3xl font-black text-white">100% Digital</h4>
              <p className="text-xs text-indigo-200 mt-2">Paperless gradebook management and audit-ready attendance reporting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about setting up and operating EduManage.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors btn-interactive"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Conversion CTA Section */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Modernize Your Educational Management?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Experience the speed and efficiency of EduManage. Access the full admin dashboard demo with pre-populated institutional data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/admin"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all btn-interactive"
            >
              <span>Explore Admin Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/teacher"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all btn-interactive"
            >
              <span>Teacher View</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-4 text-slate-600">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                  E
                </div>
                <span className="text-base font-extrabold text-slate-900">EduManage</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Empowering schools worldwide with intuitive, high-speed administrative tools.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Dashboard Modules
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/admin" className="hover:text-indigo-600 transition-colors">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/teacher" className="hover:text-indigo-600 transition-colors">
                    Teacher Hub
                  </Link>
                </li>
                <li>
                  <Link href="/student" className="hover:text-indigo-600 transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="/parent" className="hover:text-indigo-600 transition-colors">
                    Parent Monitor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Directories
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/list/teachers" className="hover:text-indigo-600 transition-colors">
                    Teacher Directory
                  </Link>
                </li>
                <li>
                  <Link href="/list/students" className="hover:text-indigo-600 transition-colors">
                    Student Directory
                  </Link>
                </li>
                <li>
                  <Link href="/list/results" className="hover:text-indigo-600 transition-colors">
                    Academic Results
                  </Link>
                </li>
                <li>
                  <Link href="/list/events" className="hover:text-indigo-600 transition-colors">
                    School Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Compliance & Security
              </h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> FERPA Compliant
                </li>
                <li className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> AES-256 Encrypted
                </li>
                <li className="flex items-center gap-1.5 text-slate-500">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> Role-Based Control
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>&copy; {new Date().getFullYear()} EduManage OS. All rights reserved.</p>
            <div className="flex space-x-6 text-xs text-slate-500">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                Security Disclosure
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
