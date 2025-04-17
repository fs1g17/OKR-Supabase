"use client";

import { OkrType } from "@/types/response";
import { useEffect, useState } from "react";
import ListOkrs from "./components/ListOkrs";
import { getOkrsInfo } from "@/supabase/supabase";

export default function List() {
  const [okrList, setOkrList] = useState<Omit<OkrType, "okr">[]>([]);

  useEffect(() => {
    (async () => {
      setOkrList(await getOkrsInfo());
    })();
  }, []);

  return <ListOkrs list={okrList} />;
}
