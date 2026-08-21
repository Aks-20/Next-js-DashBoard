"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Menu from "./Menu";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="fixed left-3 top-3 z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 shadow-sm md:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-900/30 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white px-4 pt-16 shadow-xl transition-transform duration-200 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Menu mobile />
      </aside>
    </>
  );
};

export default MobileMenu;
