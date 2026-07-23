"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData } from "@/lib/data";
import { useRole } from "@/context/RoleContext";
import Image from "next/image";
import { useMemo } from "react";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassListPage = () => {
  const { role, searchQuery } = useRole();

  const filteredData = useMemo(() => {
    if (!searchQuery) return classesData;
    const q = searchQuery.toLowerCase();
    return classesData.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.supervisor.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-indigo-50/50 transition-colors"
    >
      <td className="flex items-center gap-4 p-4 font-bold text-gray-900">{item.name}</td>
      <td className="hidden md:table-cell text-gray-600 font-medium">{item.capacity} Students</td>
      <td className="hidden md:table-cell text-indigo-700 font-semibold">{item.grade}th Grade</td>
      <td className="hidden md:table-cell text-gray-700">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
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
          All Classes ({filteredData.length})
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
            {role === "admin" && <FormModal table="class" type="create" />}
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

export default ClassListPage;