"use client";
import { userModal, userType } from "@/app/types/type";
import { createContext, ReactNode, useContext, useState } from "react";

const MainContext = createContext<userType | null>(null);

const MainProvider = ({ children }: { children: ReactNode }) => {
  let user;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userInfo = localStorage.getItem("user");
    user = userInfo && JSON.parse(userInfo);
  }
  const [profile, setProfile] = useState<userModal | null>(user);
  const values = {
    profile,
    setProfile,
  };
  console.log("profile", profile);
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };
