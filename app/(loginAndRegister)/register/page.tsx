"use client";

import FormComponent from "@/app/components/Form/Form";
import { registerForm } from "@/app/lib/LoginRegister";
import { message } from "antd";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    message
      .success({
        content: "User registered",
        duration: 3,
      })
      .then(() => router.push("/login"));
    const user = localStorage.setItem("user", JSON.stringify(values));
  };

  return (
    <>
      <FormComponent
        buttonText="Register"
        linkHref="/login"
        onFinish={onFinish}
        data={registerForm}
      />
    </>
  );
};

export default Register;
