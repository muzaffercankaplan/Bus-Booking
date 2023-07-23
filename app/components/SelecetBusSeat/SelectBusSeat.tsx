"use client";

import {
  busRoadModal,
  contextType,
  selectBusSeatModal,
} from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { FC, useCallback, useEffect, useState } from "react";
import BookingBus from "./BookingBus";
import styles from "./selectBusSeat.module.css";

type Props = {
  data: busRoadModal;
};

const SelectBusSeat: FC<Props> = ({ data }) => {
  const [busData, setBusData] = useState<selectBusSeatModal[]>([]);
  const { setSelectSeat } = useMainContext() as contextType;

  useEffect(() => {
    const BusData = Array.from({ length: 32 }).map((_, i) => ({
      seatNo: i + 1,
      empty:
        Math.floor(Math.random() * (4 - 1) + 1) === 1
          ? null
          : Math.floor(Math.random() * (4 - 1) + 1) === 2
          ? "women"
          : "man",
      price: 450,
    }));
    setBusData(BusData);
  }, []);

  const [openSeat, setOpenSeat] = useState<boolean>(false);

  const emptySeatNumber = busData.filter((item) => {
    return !item.empty && item.seatNo !== 19 && item.seatNo !== 20;
  });

  const BusSeatPlan = useCallback(() => {
    return (
      <div className={styles.select_bus_seat_container}>
        {busData.map((seat, index) => (
          <div>
            <BookingBus
              // setSelectSeat={setSelectSeat}
              index={index}
              seat={seat}
            />
          </div>
        ))}
      </div>
    );
  }, [busData]);

  return (
    <>
      <div
        role="button"
        onClick={() => {
          setSelectSeat(0);
          setOpenSeat((prev) => !prev);
        }}
        className={styles.select_bus_container}
      >
        <div>
          <p>Time </p> {data.time}
        </div>
        <div>
          <p>Bus Type</p> {data.type}
        </div>
        <div>
          {" "}
          {emptySeatNumber.length > 5
            ? `${emptySeatNumber.length} seats left!`
            : `Only ${emptySeatNumber.length} seat available!`}{" "}
        </div>
        <div>
          <p>Price</p> {data.price}
        </div>
      </div>
      {openSeat && (
        <div className={styles.bus_seat_plan_container}>
          <BusSeatPlan />
        </div>
      )}
    </>
  );
};

export default SelectBusSeat;
