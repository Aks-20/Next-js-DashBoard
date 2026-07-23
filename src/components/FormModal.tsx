"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import type { TeacherFormData } from "./forms/TeacherForm";
import type { StudentFormData } from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1 className="p-4 text-center text-sm font-semibold text-gray-500">Loading Teacher Form...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1 className="p-4 text-center text-sm font-semibold text-gray-500">Loading Student Form...</h1>,
});

type TableType =
  | "teacher"
  | "student"
  | "parent"
  | "subject"
  | "class"
  | "lesson"
  | "exam"
  | "assignment"
  | "result"
  | "attendance"
  | "event"
  | "announcement";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table: TableType;
  type: "create" | "update" | "delete";
  data?: Record<string, any>;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow hover:bg-amber-300"
      : type === "update"
      ? "bg-lamaSky hover:bg-sky-200"
      : "bg-lamaPurple hover:bg-indigo-200";

  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preloadForms = () => {
    import("./forms/TeacherForm");
    import("./forms/StudentForm");
  };

  const triggerLabel = useMemo(() => {
    if (type === "create") return "+";
    if (type === "update") return "✎";
    return "🗑";
  }, [type]);

  const handleSubmitGeneric = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOpen(false);
    }, 300);
  };

  const Form = () => {
    if (type === "delete") {
      return (
        <form onSubmit={handleSubmitGeneric} className="p-6 flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xl mb-1">
            ⚠️
          </div>
          <span className="text-sm font-semibold text-gray-800">
            Are you sure you want to delete this <span className="capitalize">{table}</span> record?
          </span>
          <p className="text-xs text-gray-500">This action cannot be undone and will permanently remove ID #{id || data?.id || 1}.</p>
          <div className="flex items-center gap-3 mt-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-5 rounded-lg text-xs transition-colors btn-interactive"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-rose-600 hover:bg-rose-700 text-white font-semibold py-2 px-5 rounded-lg text-xs transition-colors shadow-sm btn-interactive flex items-center gap-1.5"
            >
              {isSubmitting ? "Deleting..." : "Confirm Delete"}
            </button>
          </div>
        </form>
      );
    }

    if (table === "teacher") {
      return <TeacherForm type={type} data={data as TeacherFormData} />;
    }
    if (table === "student") {
      return <StudentForm type={type} data={data as StudentFormData} />;
    }

    // Generic Modal Form for all other entity types
    return (
      <form onSubmit={handleSubmitGeneric} className="p-4 flex flex-col gap-5">
        <h1 className="text-lg font-bold text-gray-900 capitalize">
          {type === "create" ? `Create New ${table}` : `Update ${table}`}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700 capitalize">{table} Name / Title</label>
            <input
              type="text"
              defaultValue={data?.name || data?.title || data?.subject || ""}
              required
              placeholder={`Enter ${table} title`}
              className="border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">Class / Group</label>
            <input
              type="text"
              defaultValue={data?.class || "1A"}
              placeholder="e.g. 1A, 2B"
              className="border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">Date / Deadline</label>
            <input
              type="date"
              defaultValue={data?.dueDate || data?.date || new Date().toISOString().split("T")[0]}
              className="border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-700">Assigned Teacher / Instructor</label>
            <input
              type="text"
              defaultValue={data?.teacher || "John Doe"}
              placeholder="Instructor name"
              className="border border-gray-300 rounded-lg p-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium p-2.5 rounded-lg text-sm transition-all duration-150 mt-2 btn-interactive flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Saving..." : type === "create" ? `Create ${table}` : `Save Changes`}
        </button>
      </form>
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} transition-all duration-150 shadow-xs btn-interactive`}
        onMouseEnter={preloadForms}
        onClick={() => {
          preloadForms();
          setOpen(true);
        }}
      >
        <span className="text-xs font-bold text-gray-800">{triggerLabel}</span>
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl relative w-full md:w-[70%] lg:w-[50%] xl:w-[40%] shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 transition-colors btn-interactive"
              onClick={() => setOpen(false)}
            >
              ✕
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;