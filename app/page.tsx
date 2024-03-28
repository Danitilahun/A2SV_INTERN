"use client";
import { RootStore } from "@/lib/store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { user } = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if (user?.accessToken) {
      redirect("/job");
    } else {
      redirect("/signup");
    }
  }, [user]);

  return <></>;
}
