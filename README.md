# 🎓 EduManage - Next.js 15 School Management Dashboard System

> **A modern, full-stack, enterprise-grade School Management System built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma ORM, Recharts, and React Hook Form.**

---

## 🌟 Executive Summary & Resume Highlights

**EduManage** is a feature-rich, high-performance web application designed to streamline educational institution administration. It features **Role-Based Access Control (RBAC)** tailored for four distinct user personas: **Admin**, **Teacher**, **Student**, and **Parent**.

### Key Portfolio & Resume Highlights:
- **Next.js 15 App Router Architecture**: Clean separation of routes using Route Groups `(dashboard)` and nested layout hierarchy.
- **Interactive Role Switcher (Portfolio Demo Mode)**: Real-time role switching from the Navbar or Quick Login page to instantly demonstrate dynamic UI rendering and permissions.
- **Full Database Schema (Prisma ORM)**: Complete relational database model for 14 entities including Students, Teachers, Parents, Grades, Classes, Lessons, Exams, Assignments, Results, Attendances, Events, and Announcements.
- **Form System with Zod & React Hook Form**: Type-safe modal dialogs for CRUD operations with custom date coercion and image file validation.
- **Data Analytics & Visualization**: Rich charts powered by Recharts (Gender distribution donut charts, Weekly attendance bar charts, Financial metrics area charts, Performance radial charts).

---

## 🚀 Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components) |
| **Library** | [React 19](https://react.dev/) & [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@theme` design tokens |
| **Database & ORM** | [Prisma ORM](https://www.prisma.io/) with PostgreSQL schema |
| **Form Handling** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) Schema Validation |
| **Data Viz & Charts** | [Recharts](https://recharts.org/) & [React Big Calendar](https://github.com/jquense/react-big-calendar) |
| **Icons** | [Lucide React](https://lucide.dev/) |

---

## 🏗️ Next.js 15 App Router & Layout Architecture

### 1. Folder & Route Structure
The project leverages Next.js 15 App Router conventions:

```text
src/
├── app/
│   ├── layout.tsx                <-- Root Layout (renders <html> and <body>)
│   ├── page.tsx                  <-- Public Landing Page
│   ├── globals.css               <-- Global Styles & Tailwind @theme definitions
│   ├── sign-in/
│   │   └── page.tsx              <-- Auth Page with Quick Demo Logins
│   └── (dashboard)/              <-- Route Group (omitted from URL)
│       ├── layout.tsx            <-- Nested Dashboard Layout (Sidebar + Navbar + RoleProvider)
│       ├── admin/page.tsx        <-- Admin Dashboard (/admin)
│       ├── teacher/page.tsx      <-- Teacher Dashboard (/teacher)
│       ├── student/page.tsx      <-- Student Dashboard (/student)
│       ├── parent/page.tsx       <-- Parent Dashboard (/parent)
│       ├── profile/page.tsx      <-- User Profile Page (/profile)
│       ├── settings/page.tsx     <-- System Settings Page (/settings)
│       └── list/                 <-- Entity Data Tables (/list/*)
│           ├── teachers/
│           ├── students/
│           ├── parents/
│           ├── subjects/
│           ├── classes/
│           ├── lessons/
│           ├── exams/
│           ├── assignments/
│           ├── results/
│           ├── attendance/
│           ├── events/
│           ├── messages/
│           └── announcements/
├── components/                   <-- Reusable UI & Chart Components
├── context/
│   └── RoleContext.tsx           <-- Dynamic Role & Search State Provider
└── lib/
    ├── data.ts                   <-- Data fixtures & Mock datasets
    └── api.ts                    <-- API Fetchers & Fallback Statistics
```

---

### 2. How `layout.tsx` Works in Next.js

In Next.js App Router, **Layouts** are UI elements shared across multiple pages. They preserve state, remain interactive, and do not re-render when navigating between sub-routes.

#### Root Layout (`src/app/layout.tsx`)
- The **Root Layout** is top-level and **MUST** define `<html>` and `<body>` tags.
- It wraps the entire application and loads global fonts (e.g., Google Inter font) and CSS styles.

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

#### Nested Layout (`src/app/(dashboard)/layout.tsx`)
- **CRITICAL RULE**: Nested layouts **MUST NOT** render `<html>` or `<body>` tags. Doing so creates duplicate DOM trees, leading to hydration errors and Next.js console warnings.
- The `(dashboard)` layout wraps all dashboard pages with the persistent left Sidebar (`<Menu />`), top Navigation Bar (`<Navbar />`), and the `<RoleProvider>` context.

```tsx
// src/app/(dashboard)/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <RoleProvider>
      <div className="flex min-h-screen bg-[#f7f8fa]">
        <aside className="hidden md:flex w-16 lg:w-64 border-r border-gray-100 bg-white/90">
          <Menu />
        </aside>
        <main className="flex-1 min-w-0 flex flex-col">
          <Navbar />
          <div className="p-4 lg:p-6 flex-1">{children}</div>
        </main>
      </div>
    </RoleProvider>
  );
}
```

#### What is a Route Group `(dashboard)`?
Directories named with parentheses `(group_name)` are **Route Groups**. They organize routes logically without affecting the URL path structure.
- File path: `src/app/(dashboard)/admin/page.tsx` $\rightarrow$ URL route: `/admin` (Notice `(dashboard)` is omitted from the URL).

---

## 🔐 Routing & Role-Based Access Control (RBAC)

The application supports four roles with dynamic UI adaptation:

1. **Admin**: Access to all management lists, CRUD modal forms (create, update, delete teachers, students, parents, classes, etc.), analytics, and institutional settings.
2. **Teacher**: View student lists, assigned classes, timetables, exams, assignments, attendance logging, and student messaging.
3. **Student**: Personal timetable, exam schedules, assignment submission deadlines, grades/results, and attendance status.
4. **Parent**: Child performance overview, class schedule, attendance tracking, teacher contact hub, and fee notices.

### Dynamic Role Switcher
Users can change active roles instantly via the dropdown selector in `<Navbar />` or the Quick Demo Login cards on `/sign-in`. This updates the `<RoleContext>` state, instantly re-filtering the sidebar menu items in `<Menu />` and restricting action buttons across table list pages.

---

## 🗄️ Database Schema & Prisma ORM

The backend database is modeled using **Prisma ORM** (`prisma/schema.prisma`).

```mermaid
erDiagram
    Admin ||--o{ User : manages
    Teacher ||--o{ Lesson : teaches
    Teacher ||--o{ Class : supervises
    Student }|--|| Class : belongs_to
    Student }|--|| Grade : enrolled_in
    Student }|--|| Parent : has_parent
    Student ||--o{ Result : achieves
    Student ||--o{ Attendance : records
    Class ||--o{ Lesson : schedules
    Class ||--o{ Event : hosts
    Class ||--o{ Announcement : broadcasts
    Subject ||--o{ Lesson : categorized_by
    Subject }|--|{ Teacher : taught_by
    Lesson ||--o{ Exam : contains
    Lesson ||--o{ Assignment : contains
```

### Core Schema Models:
- **`Student`**: Student profile connected to `Parent`, `Class`, `Grade`, `Attendance`, and `Result`.
- **`Teacher`**: Faculty profile connected to `Subject`, `Lesson`, and supervised `Class`.
- **`Parent`**: Guardian account connected to multiple `Student` records.
- **`Grade` & `Class`**: Grade levels (e.g. 1st - 12th Grade) and Class sections (e.g. 1A, 2B, 4C) with capacity limits and supervisors.
- **`Subject` & `Lesson`**: Academic subjects (Math, Physics, History) scheduled into weekly `Lesson` slots.
- **`Exam` & `Assignment`**: Evaluative items tied to lessons and linked to student `Result` records.
- **`Attendance`**: Daily presence records (`present: Boolean`).
- **`Event` & `Announcement`**: Campus notices and scheduled calendar events.

---

## 🛠️ Local Development & Setup Guide

### 1. Prerequisites
- **Node.js**: v18.17 or higher
- **npm**: v9 or higher

### 2. Installation
Clone the repository and install dependencies:

```bash
# Clone repository
git clone https://github.com/your-username/Next-js-DashBoard.git

# Navigate into project directory
cd Next-js-DashBoard

# Install npm dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/edumanage?schema=public"
NEXT_PUBLIC_API_BASE_URL=""
```

### 4. Database Setup (Prisma)
Generate Prisma client:

```bash
npx prisma generate
```

### 5. Launch Development Server
Run the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🧪 Verification & Build Check

To test production compilation and build artifacts:

```bash
npm run build
```

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more details.
