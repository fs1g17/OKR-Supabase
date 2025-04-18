"use client";
import React from "react";

import OkrChartSpread from "./OkrChartSpread";

import SaveOkr from "./SaveOkr";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useOkrSvg from "../hooks/useOkrSvg";
import { OkrRow } from "@/types/supabase";
import DeleteOkrDialog from "./DeleteOkrDialog";

export default function OkrChart({
  id,
  initialData,
}: {
  id: string;
  initialData: OkrRow;
}) {
  const { svgRef, data, setData, setMultiplier } = useOkrSvg(initialData.value);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <svg ref={svgRef} className="absolute top-0 left-0" />
      <div className="flex justify-between items-center w-full absolute top-0 left-0 p-2 border border-b bg-white">
        <div className="flex space-x-5 w-full">
          <Link href="/list">
            <Button>
              <ArrowBigLeft />
              Back
            </Button>
          </Link>
          <OkrChartSpread setSpread={setMultiplier} />
        </div>
        <div className="font-bold text-lg w-full text-center">
          {initialData.name}
        </div>
        <div className="flex space-x-5 w-full justify-end">
          <SaveOkr id={parseInt(id)} value={data} />
          <DeleteOkrDialog id={parseInt(id)} />
        </div>
      </div>
    </div>
  );
}
