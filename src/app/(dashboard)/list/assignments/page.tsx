"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData } from "@/lib/data";
import { useRole } from "@/context/RoleContext";
import Image from "next/image";
import { useMemo } from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AssignmentListPage = () => {
  const { role, searchQuery } = useRole();

  const filteredData = useMemo(() => {
    if (!searchQuery) return assignmentsData;
    const q = searchQuery.toLowerCase();
    return assignmentsData.filter(
      (item) =>
        item.subject.toLowerCase().includes(q) ||
        item.class.toLowerCase().includes(q) ||
        item.teacher.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-indigo-50/50 transition-colors"
    >
      <td className="flex items-center gap-4 p-4 font-medium text-gray-900">{item.subject}</td>
      <td><span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-700">{item.class}</span></td>
      <td className="hidden md:table-cell text-gray-600">{item.teacher}</td>
      <td className="hidden md:table-cell text-gray-600">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="assignment" type="update" data={item} />
              <FormModal table="assignment" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-xl flex-1 shadow-sm border border-gray-100">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-bold text-gray-800">
          All Assignments ({filteredData.length})
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-2 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow hover:opacity-80 transition-opacity">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow hover:opacity-80 transition-opacity">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="assignment" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={filteredData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default AssignmentListPage;
