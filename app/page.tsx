"use client";

import { useMainContext } from "@/context/MainContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { contextType } from "./types/type";

export default function Home() {
  const router = useRouter();
  const { profile } = useMainContext() as contextType;

  useEffect(() => {
    if (!profile) {
      router.push("/login");
    } else {
      router.push("/home");
    }
  }, []);
  return <></>;
}
