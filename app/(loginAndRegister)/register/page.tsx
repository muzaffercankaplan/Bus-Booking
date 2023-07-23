"use client";

import FormComponent from "@/app/components/Form/Form";
import { registerForm } from "@/app/lib/LoginRegister";
import { contextType, userModal } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { message } from "antd";
import { useRouter } from "next/navigation";

const Register = () => {
  const { setProfile } = useMainContext() as contextType;
  const router = useRouter();

  const onFinish = (values: userModal) => {
    setProfile(values);
    const user = localStorage.setItem("user", JSON.stringify(values));
    message
      .success({
        content: "User registered",
        duration: 1,
      })
      .then(() => router.push("/login"));
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
