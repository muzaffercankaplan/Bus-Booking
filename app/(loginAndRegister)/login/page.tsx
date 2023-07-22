"use client";

import FormComponent from "@/app/components/Form/Form";
import { loginForm } from "@/app/lib/LoginRegister";
import { userType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { profile } = useMainContext() as userType;
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  // useEffect(() => {
  //   if (!profile) {
  //     router.push("/login");
  //   } else {
  //     router.push("/home");
  //   }
  // }, []);

  return (
    <>
      <FormComponent
        buttonText="Log in"
        linkHref="/register"
        data={loginForm}
        onFinish={onFinish}
      />
    </>
  );
};

export default Login;
