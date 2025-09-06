import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:flex flex-col">
        <div className="h-16 flex items-center justify-center border-b dark:border-gray-700">
          <span className="text-xl font-bold text-gray-800 dark:text-gray-100">
            My Dashboard
          </span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/dashboard/overview"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            📊 Overview
          </Link>
          <Link
            href="/dashboard/customers"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            📚 Customers
          </Link>
          <Link
            href="/dashboard/transactions"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            📝 Transactions
          </Link>
          <Link
            href="/dashboard/settings"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            ⚙️ Settings
          </Link>
          <Link
            href="/dashboard/bankaccounts"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            🏦 Bank Accounts
          </Link>
          <Link
            href="/dashboard/categories"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            🗂 Categories
          </Link>
          <Link
            href="/dashboard/invoice"
            className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            🧾 Invoice
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Dashboard Overview
          </h1>
          <button className="rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            + New Course
          </button>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-400">Total Courses</p>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">12</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-400">Enrollments</p>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">350</h2>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <p className="text-gray-500 dark:text-gray-400">Active Students</p>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">120</h2>
          </div>
        </div>

        {/* Table Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Recent Enrollments
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b dark:border-gray-700">
                <th className="py-2">Student</th>
                <th className="py-2">Course</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:border-gray-700">
                <td className="py-2">John Doe</td>
                <td className="py-2">Data Structures</td>
                <td className="py-2">2025-09-06</td>
              </tr>
              <tr>
                <td className="py-2">Jane Smith</td>
                <td className="py-2">Algorithms</td>
                <td className="py-2">2025-09-05</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
