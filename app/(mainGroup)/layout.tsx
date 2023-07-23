"use client";

import { useMainContext } from "@/context/MainContext";
import { Steps } from "antd";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import LoginHeader from "../components/loginRegisterHeader/LoginHeader";
import { bookingSteps } from "../lib/BookingSteps";
import { contextType } from "../types/type";

const MainGroupLayout = ({ children }: { children: ReactNode }) => {
  const { current, profile } = useMainContext() as contextType;
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
      <LoginHeader isLogin={true} />
      <Steps
        style={{ padding: "50px 50px 0 50px" }}
        current={current}
        items={bookingSteps}
      />

      <main style={{ padding: "50px 150px 100px 150px" }}>{children}</main>
    </div>
  );
};

export default MainGroupLayout;
