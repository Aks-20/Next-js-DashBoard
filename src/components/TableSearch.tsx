"use client";

import Image from "next/image";
import { useRole } from "@/context/RoleContext";

const TableSearch = () => {
  const { searchQuery, setSearchQuery } = useRole();

  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full border border-gray-200 px-3 py-1.5 bg-gray-50/80 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-400 transition-all duration-150">
      <Image src="/search.png" alt="search" width={14} height={14} className="opacity-60" />
      <input
        type="text"
        placeholder="Search records..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[180px] md:w-[220px] bg-transparent outline-none text-gray-700 placeholder-gray-400 text-xs"
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="text-gray-400 hover:text-gray-600 text-xs font-bold px-1 btn-interactive"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default TableSearch;