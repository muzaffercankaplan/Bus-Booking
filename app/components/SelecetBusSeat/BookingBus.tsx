"use client";

import { contextType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { message, Popover } from "antd";
import { FC, useState } from "react";
import styles from "./selectBusSeat.module.css";

type Props = {
  seat: { seatNo: number; empty: string | null };
  index: number;
};

const BookingBus: FC<Props> = ({ seat, index }) => {
  const [seatBooking, setSeatBooking] = useState<"book" | null>(null);
  const { selectSeat, setSelectSeat } = useMainContext() as contextType;

  const handleSeatBooking = () => {
    if (selectSeat < 5) {
      setSeatBooking("book");
      setSelectSeat((prev: number) => prev + 1);
    } else {
      message.warning({
        content: "You can only get 5 seats at a time!",
        duration: 2,
      });
    }
  };

  const content = () => {
    return (
      <div className={styles.select_bus_seat_plan_popover_content}>
        <p role="button" onClick={handleSeatBooking}>
          Woman
        </p>
        <div />
        <p onClick={handleSeatBooking}>Man</p>
      </div>
    );
  };

  const removeSelectSeat = () => {
    // valueNumber--;
    setSelectSeat((prev: number) => prev - 1);
    setSeatBooking(null);
    // setSelectSeat((prev) => prev - 1);
  };

  return (
    <div>
      {index === 18 || index === 19 ? (
        <div style={{ display: "none" }}></div>
      ) : (
        <button
          disabled={seat.empty === "women" || seat.empty === "man"}
          style={{
            backgroundColor:
              seat.empty === "women"
                ? "#E8A2DC"
                : seat.empty === "man"
                ? "#A7B9DD"
                : seatBooking === "book"
                ? "#B5E08E"
                : seatBooking
                ? ""
                : "",
          }}
          onClick={() => {
            if (seatBooking === "book") {
              removeSelectSeat();
            } else content;
          }}
          className={styles.select_bus_seat_plan}
        >
          <Popover
            className={styles.select_bus_seat_plan_popover}
            content={!seatBooking && seat.empty === null && content}
            trigger="click"
          >
            {seat.seatNo}
          </Popover>
        </button>
      )}
    </div>
  );
};

export default BookingBus;
