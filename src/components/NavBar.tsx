const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100'>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 bg-white'>
        <span className='text-gray-500 pl-1'>⌕</span>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
      </div>
      <div className='flex items-center gap-4 justify-end w-full'>
        <button className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-gray-600 text-sm hover:bg-gray-100'>
          ✉
        </button>
        <button className='bg-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer text-gray-600 text-sm hover:bg-gray-100 relative'>
          🔔
          <span className='absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-purple-500 text-white rounded-full text-[10px]'>1</span>
        </button>
        <div className='flex items-center gap-2'>
          <div className='flex flex-col'>
            <span className="text-xs leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
          </div>
          <div className="rounded-full w-9 h-9 bg-gradient-to-br from-purple-400 to-blue-400 text-white flex items-center justify-center text-sm font-semibold">
            JD
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar