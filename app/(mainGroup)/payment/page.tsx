"use client";

import PaymentForm from "@/app/components/PaymentForm/PaymentForm";
import { Button, Result } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Payment = () => {
  const router = useRouter();
  const [paymentDone, setPaymentDone] = useState<boolean>(false);

  return (
    <div>
      {!paymentDone && <PaymentForm setPaymentDone={setPaymentDone} />}
      {paymentDone && (
        <Result
          status="success"
          title="Successfully Payment!"
          subTitle="Ticket number: 2017182818828182881 Thank You!"
          extra={[
            <Button onClick={() => router.push("/home")} key="buy">
              Buy Again
            </Button>,
          ]}
        />
      )}
    </div>
  );
};

export default Payment;
