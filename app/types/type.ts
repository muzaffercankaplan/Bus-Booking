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

export type userType = {
  profile: userModal | null;
  setProfile: any;
};
