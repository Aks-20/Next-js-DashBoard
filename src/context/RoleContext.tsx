"use client";

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from "react";

export type RoleType = "admin" | "teacher" | "student" | "parent";

interface RoleContextType {
  role: RoleType;
  setRole: (role: RoleType) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRoleState] = useState<RoleType>("admin");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const savedRole = localStorage.getItem("user_role") as RoleType;
    if (savedRole && ["admin", "teacher", "student", "parent"].includes(savedRole)) {
      setRoleState(savedRole);
    }
  }, []);

  const setRole = useCallback((newRole: RoleType) => {
    setRoleState(newRole);
    localStorage.setItem("user_role", newRole);
  }, []);

  const value = useMemo(
    () => ({ role, setRole, searchQuery, setSearchQuery }),
    [role, setRole, searchQuery]
  );

  return (
    <RoleContext.Provider value={value}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used within a RoleProvider");
  }
  return context;
};
