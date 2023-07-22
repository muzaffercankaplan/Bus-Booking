"use client";

import { LogoutOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./loginRegister.module.css";

const LoginHeader = ({ isLogin }: { isLogin?: boolean }) => {
  const pathName = usePathname();

  return (
    <div className={styles.login__container_header}>
      <Image alt="lojiper" src="/Logo.svg" width={200} height={50} />
      {!isLogin && (
        <div>
          <Link
            className={styles.login__container_header_link}
            href={pathName === "/login" ? "/register" : "/login"}
            type="primary"
            color="red"
          >
            {pathName === "/login" ? "Register" : "Login"}
          </Link>
        </div>
      )}
      {isLogin && (
        <div>
          <div>
            <LogoutOutlined style={{ fontSize: "24px" }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginHeader;
