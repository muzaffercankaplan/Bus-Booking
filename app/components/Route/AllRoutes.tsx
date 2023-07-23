"use client";

import { busRoadModal, contextType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import SelectBusSeat from "../SelecetBusSeat/SelectBusSeat";
import styles from "./route.module.css";

const AllRoutes = () => {
  const [busRoadData, setBusRoadData] = useState<busRoadModal[]>([]);
  const { selectSeat, setCurrent } = useMainContext() as contextType;

  useEffect(() => {
    const busRoad: busRoadModal[] = Array.from({
      length: Math.floor(Math.random() * (9 - 3) + 3),
    }).map((_, i) => ({
      time: `1${i}:00`,
      type: "2+2",
      price: 450,
    }));
    setBusRoadData(busRoad);
  }, []);

  return (
    <div className={styles.all_routes_container}>
      {busRoadData.map((road, index) => (
        <div key={index}>
          <SelectBusSeat data={road} />
        </div>
      ))}
      <div
        className={
          selectSeat > 0
            ? styles.select_seat_payment
            : styles.select_seat_payment_close
        }
      >
        <div> seçilen koltuk sayısı {selectSeat} </div>{" "}
        <div> Tutar {selectSeat * 450} </div>{" "}
        <Link
          style={{ textAlign: "center" }}
          className={styles.route__container_button}
          href="/payment"
          onClick={() => setCurrent(2)}
        >
          Payment
        </Link>
      </div>
    </div>
  );
};

export default AllRoutes;
