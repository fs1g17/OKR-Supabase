"use client";

import OkrChart from "./components/OkrChart";
import { getOkr } from "@/supabase/supabase";
import { OkrRow } from "@/types/supabase";
import { useEffect, useState } from "react";

export default function OkrPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const id = params["id"];
  const [okrRow, setOkrRow] = useState<OkrRow>()
  
  useEffect(() => {
    (async () => {setOkrRow(await getOkr(parseInt(id)))})();
  }, []);

  if (!okrRow) return <div>Loading...</div>;

  return <OkrChart id={id} initialData={okrRow} />;
}
