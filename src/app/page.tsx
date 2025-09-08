import Link from "next/link";
import UserCard from "@/components/UserCard";

const Homepage = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
        <div>
          <h1 className='text-2xl md:text-3xl font-semibold'>Welcome back 👋</h1>
          <p className='text-gray-500 text-sm'>Here is what’s happening in your school today.</p>
        </div>
        <div className='flex items-center gap-2'>
          <Link href="/list/teachers" className='px-3 py-2 rounded-md bg-gray-900 text-white text-sm'>View Teachers</Link>
          <Link href="/list/students" className='px-3 py-2 rounded-md bg-gray-100 text-gray-900 text-sm'>View Students</Link>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <UserCard type="teacher" />
        <UserCard type="student" />
        <UserCard type="parent" />
        <UserCard type="subject" />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-xl p-4 border border-gray-100'>
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
        <div className='bg-white rounded-xl p-4 border border-gray-100'>
          <h2 className='text-sm font-semibold mb-3'>Get Started</h2>
          <p className='text-gray-600 text-sm'>Use the links to manage teachers, students, classes, and more.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage