"use client";
import { contextType, userModal } from "@/app/types/type";
import { createContext, ReactNode, useContext, useState } from "react";

const MainContext = createContext<contextType | null>(null);

const MainProvider = ({ children }: { children: ReactNode }) => {
  let user;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    const userInfo = localStorage.getItem("user");
    user = userInfo && JSON.parse(userInfo);
  }
  const [profile, setProfile] = useState<userModal | null>(user);
  const [loadingBusRoad, setLoadingBusRoad] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [selectSeat, setSelectSeat] = useState<number>(0);

  const values = {
    profile,
    setProfile,
    current,
    setCurrent,
    loadingBusRoad,
    setLoadingBusRoad,
    selectSeat,
    setSelectSeat,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
const useMainContext = () => useContext(MainContext);
export { MainProvider, useMainContext };
