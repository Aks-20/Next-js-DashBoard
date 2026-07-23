"use client";

import { useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        className="py-2 px-4 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 btn-interactive"
      >
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        {[1, 2, 3, 10].map((pNum) => (
          <button
            key={pNum}
            onClick={() => setPage(pNum)}
            className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-150 btn-interactive ${
              page === pNum
                ? "bg-indigo-600 text-white font-bold shadow-xs"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {pNum}
          </button>
        ))}
      </div>
      <button
        disabled={page === 10}
        onClick={() => setPage((p) => Math.min(10, p + 1))}
        className="py-2 px-4 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 btn-interactive"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;