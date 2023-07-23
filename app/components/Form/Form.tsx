import { loginRegisterModal } from "@/app/types/type";
import { Button, Form, Input, Select } from "antd";
import Link from "next/link";
import { FC } from "react";
import styles from "./form.module.css";

type Props = {
  onFinish: any;
  data: loginRegisterModal[];
  buttonText: string;
  linkHref: string;
};

const FormComponent: FC<Props> = ({ onFinish, data, buttonText, linkHref }) => {
  const { Option } = Select;
  return (
    <div className={styles.login__container}>
      <Form layout="vertical" onFinish={onFinish} autoComplete="off">
        {data.map((item, index) => (
          <Form.Item
            key={index}
            label={item.labelName}
            name={item.labelName}
            hasFeedback
            rules={[
              {
                required: true,
                message: `Please input your ${item.labelName}!`,
              },
            ]}
          >
            {item.labelName === "Password" ? (
              <Input.Password type="password" placeholder="Password" />
            ) : item.labelName === "Gender" ? (
              <Select placeholder="select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            ) : (
              <Input
                type={item.labelName === "Email" ? "email" : ""}
                placeholder={item.labelName}
              />
            )}
          </Form.Item>
        ))}

        <Form.Item style={{ margin: "0" }}>
          <Button
            style={{ margin: "5px 0" }}
            type="primary"
            htmlType="submit"
            className={styles.login__container_button}
          >
            {buttonText}
          </Button>
          Or{" "}
          <Link style={{ textTransform: "uppercase" }} href={linkHref}>
            {linkHref.split("/")} now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
