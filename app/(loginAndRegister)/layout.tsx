import LoginHeader from "@/app/components/loginRegisterHeader/LoginHeader";
import { ReactNode } from "react";

const LoginRegisterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ height: "100vh" }}>
      <LoginHeader />
      <main>{children}</main>
    </div>
  );
};

export default LoginRegisterLayout;
