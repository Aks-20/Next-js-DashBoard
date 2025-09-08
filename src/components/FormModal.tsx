"use client";

import dynamic from "next/dynamic";
import { JSX, useMemo, useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: Record<string, (type: "create" | "update", data?: unknown) => JSX.Element> = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
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
  type: "create" | "update" | "delete";
  data?: unknown;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const triggerLabel = useMemo(() => {
    if (type === "create") return "+";
    if (type === "update") return "✎";
    return "🗑";
  }, [type]);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table]
        ? forms[table](type, data)
        : (
          <div className="p-6 text-center text-sm text-gray-600">
            Form for "{table}" is not available.
          </div>
        )
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <span className="text-xs">{triggerLabel}</span>
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-4 rounded-xl relative w-full md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] shadow-xl">
            <Form />
            <div
              className="absolute top-3 right-3 cursor-pointer w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm"
              onClick={() => setOpen(false)}
            >
              ×
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;