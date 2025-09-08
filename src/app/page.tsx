import Link from "next/link";
import UserCard from "@/components/UserCard";
import FinanceChart from "@/components/FinanceChart";
import Performance from "@/components/Performance";
import EventCalendar from "@/components/EventCalendar";
import Annoucement from "@/components/Annoucement";

const Homepage = () => {
  return (
    <div className='flex flex-col gap-6'>
      <section className='rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white p-6 md:p-10 shadow-sm'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
          <div>
            <h1 className='text-2xl md:text-3xl font-semibold'>Welcome back 👋</h1>
            <p className='text-gray-300 text-sm mt-1'>Here is what’s happening in your school today.</p>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <Link href="/list/teachers" className='px-3 py-2 rounded-md bg-white text-gray-900 text-sm hover:bg-gray-100'>View Teachers</Link>
            <Link href="/list/students" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>View Students</Link>
            <Link href="/(dashboard)/admin" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Admin</Link>
            <Link href="/(dashboard)/teacher" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Teacher</Link>
            <Link href="/(dashboard)/student" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Student</Link>
            <Link href="/(dashboard)/parent" className='px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15'>Parent</Link>
          </div>
        </div>
      </section>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <UserCard type="teacher" />
        <UserCard type="student" />
        <UserCard type="parent" />
        <UserCard type="subject" />
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm xl:col-span-2'>
          <h2 className='text-sm font-semibold mb-3'>Quick Links</h2>
          <div className='grid grid-cols-2 gap-2 text-sm'>
            <Link href="/list/assignment" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Assignments</Link>
            <Link href="/list/exams" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Exams</Link>
            <Link href="/list/results" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Results</Link>
            <Link href="/list/events" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Events</Link>
            <Link href="/list/lessons" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Lessons</Link>
            <Link href="/list/annoucements" className='px-3 py-2 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-100'>Announcements</Link>
          </div>
        </div>
        <div className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm'>
          <h2 className='text-sm font-semibold mb-3'>Today</h2>
          <EventCalendar />
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-3 gap-6'>
        <div className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm xl:col-span-2'>
          <h2 className='text-sm font-semibold mb-3'>Financial Overview</h2>
          <FinanceChart />
        </div>
        <div className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm'>
          <h2 className='text-sm font-semibold mb-3'>Announcements</h2>
          <Annoucement />
        </div>
      </div>

      <div className='bg-white rounded-xl p-4 border border-gray-100 shadow-sm'>
        <h2 className='text-sm font-semibold mb-3'>Performance</h2>
        <Performance />
      </div>
    </div>
  )
}

export default Homepage