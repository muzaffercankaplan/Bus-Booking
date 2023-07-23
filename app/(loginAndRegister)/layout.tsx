"use client";

import LoginHeader from "@/app/components/loginRegisterHeader/LoginHeader";
import { useMainContext } from "@/context/MainContext";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { contextType } from "../types/type";

const LoginRegisterLayout = ({ children }: { children: ReactNode }) => {
  const { profile } = useMainContext() as contextType;
  const router = useRouter();

  useEffect(() => {
    if (!profile) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <LoginHeader />
      <main>{children}</main>
    </div>
  );
};

export default LoginRegisterLayout;
