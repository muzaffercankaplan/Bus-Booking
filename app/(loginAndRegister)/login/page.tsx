"use client";

import FormComponent from "@/app/components/Form/Form";
import { loginForm } from "@/app/lib/LoginRegister";
import { contextType, userModal } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";
import { useRouter } from "next/navigation";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();
  const { profile } = useMainContext() as contextType;

  const messageText = (type: NoticeType, text: string) => {
    messageApi.open({
      type: type,
      duration: 1,
      content: text,
    });
  };

  const onFinish = (values: userModal) => {
    if (profile) {
      if (values.FullName != profile?.FullName) {
        messageText("error", "Wrong FullName");
      } else if (values.Password != profile?.Password) {
        messageText("error", "Wrong Password");
      } else {
        messageText("success", "Information is correct");
        setTimeout(() => {
          router.push("/home");
        }, 1000);
      }
    } else {
      messageText("error", "User Not Found");
    }
  };
  // FullName Password
  return (
    <>
      {contextHolder}
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
