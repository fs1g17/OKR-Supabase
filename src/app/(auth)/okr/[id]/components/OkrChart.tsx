"use client";
import React from "react";

import OkrChartSpread from "./OkrChartSpread";

import SaveOkr from "./SaveOkr";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useOkrSvg from "../hooks/useOkrSvg";

export default function OkrChart({
  id,
  initialData,
}: {
  id: string;
  initialData: OkrData;
}) {
  const { svgRef, data, setData, setMultiplier } = useOkrSvg(initialData);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <svg ref={svgRef} className="absolute top-0 left-0" />
      <div className="absolute bottom-2 right-2">
        <OkrChartSpread setSpread={setMultiplier} />
      </div>
      <div className="absolute top-2 right-2">
        <SaveOkr id={parseInt(id)} value={data} />
      </div>
      <div className="absolute top-2 left-2">
        <Link href="/list">
          <Button>
            <ArrowBigLeft />
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
