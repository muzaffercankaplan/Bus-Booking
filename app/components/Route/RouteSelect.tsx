"use client";

import { contextType } from "@/app/types/type";
import { useMainContext } from "@/context/MainContext";
import { DatePicker, DatePickerProps, message, Select } from "antd";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import cities from "../../lib/turkeyCity.json";
import styles from "./route.module.css";

const RouteSelect = () => {
  const router = useRouter();
  const { setCurrent, setLoadingBusRoad } = useMainContext() as contextType;
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [optionsTwo, setOptionsTwo] = useState<
    { value: string; label: string }[]
  >([]);
  const [searchParams, setSearchParams] = useState({
    routeOne: "",
    routeTwo: "",
    date: "",
  });

  const onChange = (value: string) => {
    setSearchParams((prev) => {
      return { ...prev, routeOne: value };
    });
    const newOption = [...options];
    const data = newOption.findIndex((city) => {
      return city.value === value;
    });
    newOption.splice(data, 1);
    setOptionsTwo(newOption);
  };

  const onChangeTwo = (value: string) => {
    setSearchParams((prev) => {
      return { ...prev, routeTwo: value };
    });
    const newOption = [...options];
    const data = newOption.findIndex((city) => {
      return city.value === value;
    });
    newOption.splice(data, 1);
    setOptions(newOption);
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    setSearchParams((prev) => {
      return { ...prev, date: dateString };
    });
  };

  const handleSearch = () => {
    const isSelectProps = Object.values(searchParams).every((item) => {
      return item;
    });
    if (isSelectProps) {
      router.push(
        `/home?from=${searchParams.routeOne}&to=${
          searchParams.routeTwo
        }&date=${searchParams.date.replaceAll(" ", "/")}`
      );
      setLoadingBusRoad(true);
      setTimeout(() => {
        setLoadingBusRoad(false);
        setCurrent(1);
      }, 1500);
    } else {
      message.warning({
        content: "Please fill in all fields!",
        duration: 2,
      });
    }
  };

  const cityOption = useCallback(() => {
    const data = Object.values(cities).map((city) => {
      return {
        value: city,
        label: city,
      };
    });
    setOptions(data);
  }, []);

  useEffect(() => {
    cityOption();
  }, [optionsTwo]);

  return (
    <div className={styles.route__container}>
      <Select
        style={{ minWidth: "200px", backgroundColor: "transparent" }}
        size="large"
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          (option?.label ?? "")
            .toLocaleUpperCase()
            .includes(input.toLocaleUpperCase())
        }
        options={options}
      />
      <Select
        style={{ minWidth: "200px" }}
        size="large"
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChangeTwo}
        filterOption={(input, option) =>
          (option?.label ?? "")
            .toLocaleUpperCase()
            .includes(input.toLocaleUpperCase())
        }
        options={optionsTwo}
      />
      <DatePicker
        style={{ minWidth: "200px" }}
        size="large"
        format={"D MMMM YYYY"}
        className="datePicker"
        onChange={onChangeDate}
        ref={(dateSelect) => {
          dateSelect = dateSelect;
        }}
        disabledDate={(current) => {
          return (
            moment().add(-1, "days") >= current ||
            moment().add(1, "month") <= current
          );
        }}
      />
      <button onClick={handleSearch} className={styles.route__container_button}>
        Search
      </button>
    </div>
  );
};

export default RouteSelect;
