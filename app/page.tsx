"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const { user } = useSelector((state: RootStore) => state.auth);

  const { data: session } = useSession();
  console.log("session", session);

  useEffect(() => {
    if (session?.user) {
      redirect("/job");
    } else {
      redirect("/signup");
    }
  }, [session?.user]);

  return <></>;
}
