"use client";

import { useRole } from "@/context/RoleContext";
import BigCalendar from "@/components/BigCalendar";
import Announcements from "@/components/Annoucement";
import Performance from "@/components/Performance";
import { Mail, Phone, MapPin, Calendar, BookOpen, ShieldCheck, Award } from "lucide-react";

const ProfilePage = () => {
  const { role } = useRole();

  const profiles = {
    admin: {
      name: "Alex Mercer",
      role: "System Administrator",
      email: "alex.mercer@edumanage.edu",
      phone: "+1 (555) 019-2834",
      address: "742 Evergreen Terrace, Springfield",
      joined: "August 2021",
      stats: [
        { label: "Total Managed Users", value: "1,415" },
        { label: "Active Classes", value: "45" },
        { label: "System Health", value: "99.9%" },
      ],
    },
    teacher: {
      name: "Sarah Jenkins",
      role: "Mathematics Lead Teacher",
      email: "sarah.jenkins@edumanage.edu",
      phone: "+1 (555) 392-1049",
      address: "123 Innovation Way, Tech City",
      joined: "September 2022",
      stats: [
        { label: "Classes Taught", value: "6" },
        { label: "Total Students", value: "184" },
        { label: "Pass Rate", value: "96.4%" },
      ],
    },
    student: {
      name: "Ethan Hunt",
      role: "Grade 10 Student (Class 4A)",
      email: "ethan.hunt@student.edumanage.edu",
      phone: "+1 (555) 883-9201",
      address: "456 Oak Lane, Riverdale",
      joined: "September 2023",
      stats: [
        { label: "GPA", value: "3.85" },
        { label: "Attendance", value: "98.2%" },
        { label: "Completed Assignments", value: "42" },
      ],
    },
    parent: {
      name: "Robert Hunt",
      role: "Parent / Guardian",
      email: "robert.hunt@edumanage.edu",
      phone: "+1 (555) 771-4820",
      address: "456 Oak Lane, Riverdale",
      joined: "September 2023",
      stats: [
        { label: "Children Enrolled", value: "2" },
        { label: "Fee Status", value: "Paid" },
        { label: "Teacher Meetings", value: "4" },
      ],
    },
  };

  const user = profiles[role] || profiles.admin;

  return (
    <div className="flex-1 p-2 flex gap-4 flex-col xl:flex-row">
      {/* LEFT COLUMN: USER DETAILS & CALENDAR */}
      <div className="w-full xl:w-2/3 flex flex-col gap-6">
        {/* PROFILE HEADER CARD */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur border-2 border-white/40 flex items-center justify-center text-3xl font-extrabold shadow-inner">
            {user.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-indigo-200 text-sm font-medium flex items-center gap-1 justify-center md:justify-start">
                  <ShieldCheck className="w-4 h-4 text-indigo-300" />
                  {user.role}
                </p>
              </div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur border border-white/20 self-center md:self-start">
                Active Member
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-4 text-xs text-indigo-100 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-300" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-300" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-300" />
                <span>{user.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-indigo-300" />
                <span>Enrolled: {user.joined}</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {user.stats.map((s, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 flex flex-col">
              <span className="text-xs text-gray-500 font-medium mb-1">{s.label}</span>
              <span className="text-2xl font-extrabold text-indigo-600">{s.value}</span>
            </div>
          ))}
        </div>

        {/* SCHEDULE CALENDAR */}
        <div className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 min-h-[400px]">
          <h2 className="text-base font-bold text-gray-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Personal Timetable & Schedule
          </h2>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT COLUMN: PERFORMANCE & ANNOUNCEMENTS */}
      <div className="w-full xl:w-1/3 flex flex-col gap-6">
        <div className="bg-white p-4 rounded-xl shadow-xs border border-gray-100">
          <h3 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600" />
            Performance & Evaluation
          </h3>
          <Performance />
        </div>
        <Announcements />
      </div>
    </div>
  );
};

export default ProfilePage;
