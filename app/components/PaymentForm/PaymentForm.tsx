"use client";
import { contextType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input } from "antd";
import { Dispatch, SetStateAction, useState } from "react";
import styles from "./payment.module.css";

const PaymentForm = ({
  setPaymentDone,
}: {
  setPaymentDone: Dispatch<SetStateAction<boolean>>;
}) => {
  const { profile, selectSeat, setCurrent } = useMainContext() as contextType;
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPaymentDone(true);
      setCurrent(3);
    }, 1500);
  };

  return (
    <div className={styles.payment_form_container}>
      <Form layout="vertical" onFinish={onFinish} autoComplete="off">
        <Form.Item
          initialValue={profile?.FullName}
          label="Full Name"
          name="Fullname"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Jack Sparrow" />
        </Form.Item>
        <Form.Item
          label="Card Number"
          name="cardNumber"
          rules={[
            { required: true, message: "Please input your card number!" },
            {
              pattern: new RegExp(/[0-9]+$/i),
              message: "Field just accept numbers",
            },
          ]}
        >
          <Input placeholder="1234 5678 9012 3456" />
        </Form.Item>
        <div style={{ display: "flex", gap: "10px" }}>
          {" "}
          <Form.Item
            label="Expiration"
            name="expiration"
            rules={[
              { required: true, message: "Please input your expiration!" },
            ]}
          >
            <DatePicker
              style={{ width: "170px" }}
              format={"MM/YY"}
              picker="month"
              placeholder="MM/YY"
            />
          </Form.Item>
          <Form.Item
            label="CVC"
            name="CVC"
            rules={[
              { required: true, message: "Please select your CVC!" },
              {
                max: 3,
              },
            ]}
          >
            <Input placeholder="3 digits" />
          </Form.Item>
        </div>
        <Form.Item
          label="Card Holder Name"
          name="cardName"
          rules={[
            { required: true, message: "Please input your Card Holder Name!" },
          ]}
        >
          <Input placeholder="Jack Sparrow" />
        </Form.Item>
        <Form.Item style={{ marginTop: "20px" }}>
          <h3 style={{ textAlign: "center" }}>
            Ödenecek Tutar {selectSeat * 450}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Button style={{ width: "100%" }} href="/home" type="dashed">
              Geri
            </Button>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Submit
              {loading && <LoadingOutlined />}
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PaymentForm;
