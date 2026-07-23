"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useRole } from "@/context/RoleContext";
import { useMemo, useState } from "react";

type AttendanceRecord = {
  id: number;
  studentName: string;
  class: string;
  date: string;
  status: "Present" | "Absent" | "Late";
  remarks: string;
};

const mockAttendance: AttendanceRecord[] = [
  { id: 1, studentName: "John Doe", class: "1A", date: "2026-07-22", status: "Present", remarks: "On time" },
  { id: 2, studentName: "Jane Smith", class: "1A", date: "2026-07-22", status: "Absent", remarks: "Sick leave" },
  { id: 3, studentName: "Mike Johnson", class: "2B", date: "2026-07-22", status: "Present", remarks: "On time" },
  { id: 4, studentName: "Emily Davis", class: "2B", date: "2026-07-22", status: "Late", remarks: "15 mins delayed" },
  { id: 5, studentName: "Alex Turner", class: "3C", date: "2026-07-22", status: "Present", remarks: "On time" },
  { id: 6, studentName: "Sarah Connor", class: "3C", date: "2026-07-22", status: "Present", remarks: "On time" },
];

const columns = [
  { header: "Student Name", accessor: "studentName" },
  { header: "Class", accessor: "class" },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
  { header: "Status", accessor: "status" },
  { header: "Remarks", accessor: "remarks", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "action" },
];

const AttendanceListPage = () => {
  const { role, searchQuery } = useRole();
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const filteredData = useMemo(() => {
    return mockAttendance.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.class.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === "All" || item.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, filterStatus]);

  const renderRow = (item: AttendanceRecord) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-indigo-50/50 transition-colors"
    >
      <td className="flex items-center gap-4 p-4 font-medium text-gray-900">{item.studentName}</td>
      <td><span className="px-2 py-0.5 rounded text-xs font-semibold bg-gray-100 text-gray-700">{item.class}</span></td>
      <td className="hidden md:table-cell text-gray-600">{item.date}</td>
      <td>
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-bold ${
            item.status === "Present"
              ? "bg-emerald-100 text-emerald-800"
              : item.status === "Absent"
              ? "bg-rose-100 text-rose-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="hidden md:table-cell text-gray-500 text-xs">{item.remarks}</td>
      <td>
        <div className="flex items-center gap-2">
          {(role === "admin" || role === "teacher") && (
            <>
              <FormModal table="attendance" type="update" data={item} />
              <FormModal table="attendance" type="delete" id={item.id} />
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
          Attendance Tracker ({filteredData.length})
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-2 self-end">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="text-xs font-medium bg-gray-100 text-gray-700 rounded-lg px-2.5 py-1.5 outline-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
            </select>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="attendance" type="create" />
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

export default AttendanceListPage;
