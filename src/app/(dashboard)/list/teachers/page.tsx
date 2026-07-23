"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { teachersData } from "@/lib/data";
import { useRole } from "@/context/RoleContext";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const { role, searchQuery } = useRole();

  const filteredData = useMemo(() => {
    if (!searchQuery) return teachersData;
    const q = searchQuery.toLowerCase();
    return teachersData.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.subjects.some((s) => s.toLowerCase().includes(q)) ||
        item.classes.some((c) => c.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-indigo-50/50 transition-colors"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover shadow-xs"
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-gray-900">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell font-mono text-xs text-gray-600">{item.teacherId}</td>
      <td className="hidden md:table-cell text-gray-700 font-medium">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell text-gray-700">{item.classes.join(", ")}</td>
      <td className="hidden md:table-cell text-gray-600">{item.phone}</td>
      <td className="hidden md:table-cell text-gray-600">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-[10px] font-bold transition-colors">
              View
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id} />
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
          All Teachers ({filteredData.length})
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
            {role === "admin" && <FormModal table="teacher" type="create" />}
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

export default TeacherListPage;