"use client";

import OkrChart from "./components/OkrChart";
import { getOkr } from "@/supabase/supabase";
import { useEffect, useState } from "react";

export default function OkrPage({
  params,
}: {
  params: { [key: string]: string };
}) {
  const id = params["id"];
  const [okrData, setOkrData] = useState<OkrData>()
  
  useEffect(() => {
    (async () => {setOkrData(await getOkr(parseInt(id)))})();
  }, []);

  if (!okrData) return <div>Loading...</div>;

  return <OkrChart id={id} initialData={okrData} />;
}
