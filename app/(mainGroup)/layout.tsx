import { ReactNode } from "react";
import LoginHeader from "../components/loginRegisterHeader/LoginHeader";

const MainGroupLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ height: "100vh" }}>
      <LoginHeader isLogin={true} />
      <main>{children}</main>
    </div>
  );
};

export default MainGroupLayout;
