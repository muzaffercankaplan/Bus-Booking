import { Dispatch, SetStateAction } from "react";

export interface loginRegisterModal {
  labelName: string;
}

export interface userModal {
  FullName: string;
  Email: string;
  Gender: "female" | "male" | "other" | "";
  Birthday: string;
  Password: string;
}

export interface selectBusSeatModal {
  seatNo: number;
  empty: string | null;
  price: number;
}

export type contextType = {
  profile: userModal | null;
  setProfile: Dispatch<SetStateAction<userModal | null>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  loadingBusRoad: boolean;
  setLoadingBusRoad: Dispatch<SetStateAction<boolean>>;
  selectSeat: number;
  setSelectSeat: Dispatch<SetStateAction<number>>;
};

export interface bookingStepsModal {
  title: string;
  content: string;
}

export interface busRoadModal {
  time: string;
  type: string;
  price: number;
  // bus: selectBusSeatModal[];
}
