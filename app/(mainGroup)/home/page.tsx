"use client";

import AllRoutes from "@/app/components/Route/AllRoutes";
import RouteSelect from "@/app/components/Route/RouteSelect";
import { contextType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { Spin } from "antd";
import { useEffect } from "react";
import styles from "./page.module.css";

const Select = () => {
  const { current, loadingBusRoad, setCurrent } =
    useMainContext() as contextType;

  useEffect(() => {
    setCurrent(0);
  }, []);

  return (
    <div>
      <RouteSelect />
      {current === 1 && !loadingBusRoad && (
        <div className={styles.home_bus_road_div}>
          <AllRoutes />
        </div>
      )}
      {loadingBusRoad && (
        <Spin
          size="large"
          style={{
            marginLeft: "10px",
            textAlign: "center",
            width: "100%",
            marginTop: "50px",
          }}
        />
      )}
      {/* {selectSeat > 5 && <div className={styles.select_bus_modal}>test</div>} */}
    </div>
  );
};

export default Select;
