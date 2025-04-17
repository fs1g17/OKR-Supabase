"use client";
import { createRoot } from "react-dom/client";
import React, { useEffect, useRef, useState } from "react";
import { hierarchy, linkVertical, select, tree, zoom } from "d3";

import OkrCard from "./OkrCard/OkrCard";
import OkrChartSpread from "./OkrChartSpread";

import useWindowSize from "@/hooks/useWindowSize";
import { addChildToNodeById, addKeyResultById, updateKeyResultById, updateNodeById, updateNodeObjectiveById } from "@/utils/graph";
import SaveOkr from "./SaveOkr";
import { ArrowBigLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OkrChart({
  id,
  initialData,
}: {
  id: string;
  initialData: OkrData;
}) {
  console.log(initialData);
  const svgRef = useRef(null);
  const { width, height } = useWindowSize();
  const [data, setData] = useState<OkrData>(initialData);
  const [multiplier, setMultiplier] = useState<number>(1);

  console.log(data);

  const updateObjectiveFactory = (id: number) => {
    return (objective: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        updateNodeObjectiveById(id, deepCopy.data, objective);
        return deepCopy;
      });
    };
  };

  const updateKeyResultFactory = (id: number) => {
    return (keyResult: string, keyResultNumber: number) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        updateKeyResultById(id, deepCopy.data, keyResult, keyResultNumber);
        return deepCopy;
      })
    }
  }

  const addKeyResultFactory = (id: number) => {
    return (keyResult: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        addKeyResultById(id, deepCopy.data, keyResult)
        return deepCopy;
      });
    };
  };

  const addChildObjectiveFactory = (id: number) => {
    return (objective: string) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        addChildToNodeById(id, deepCopy, objective);
        return deepCopy;
      });
    };
  };

  useEffect(() => {
    if (!svgRef) return;
    if (!width || !height) return;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();

    svg.attr("width", width * multiplier).attr("height", height * multiplier);

    const g = svg.append("g");

    const zoomBehavior = zoom()
      .scaleExtent([0.5, 2])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoomBehavior as any);

    const root = hierarchy(data.data);
    const treeLayout = tree().size([width * multiplier - 100, height - 200]);
    treeLayout(root);
    const paths = treeLayout(root).links();

    const pathGenerator = linkVertical()
      .x((d) => (d as any).x)
      .y((d) => (d as any).y);

    g.selectAll("path")
      .data(paths)
      .enter()
      .append("path")
      .attr("d", pathGenerator as any)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    g.selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("foreignObject")
      .attr("width", 100)
      .attr("height", 50)
      .attr("x", (d) => (d as any).x as number)
      .attr("y", (d) => (d as any).y as number)
      .append("xhtml:div")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("width", "100%")
      .style("height", "100%")
      .style("background", "transparent")
      .html((d) => `<div id="node-${d.data.id}"></div>`);

    root.descendants().forEach((d) => {
      const nodeElement = document.getElementById(`node-${d.data.id}`);
      if (nodeElement) {
        const { objective, keyResults } = d.data.data;
        const orgCard = (
          <OkrCard
            id={`org-card-${d.data.id}`}
            objective={objective}
            keyResults={keyResults}
            updateObjective={updateObjectiveFactory(d.data.id)}
            updateKeyResult={updateKeyResultFactory(d.data.id)}
            addKeyResult={addKeyResultFactory(d.data.id)}
            addChildObjective={addChildObjectiveFactory(d.data.id)}
          />
        );
        createRoot(nodeElement).render(orgCard);

        const observer = new MutationObserver(() => {
          const cardSize = nodeElement.getBoundingClientRect();
          const parent = select(nodeElement.parentNode?.parentNode as Element);
          if (cardSize.width > 0 && cardSize.height > 0) {
            observer.disconnect();
            parent
              .attr("width", cardSize.width)
              .attr("height", cardSize.height)
              .attr("x", (d) => ((d as any).x as number) - cardSize.width / 2)
              .attr("y", (d) => (d as any).y as number);
          }
        });
        observer.observe(nodeElement, { childList: true, subtree: true });
      }
    });

    return () => {
      svg.on(".zoom", null);
    };
  }, [width, height, data, multiplier]);

  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <svg ref={svgRef} className="absolute top-0 left-0" />
      <div className="absolute bottom-2 right-2">
        <OkrChartSpread setSpread={setMultiplier} />
      </div>
      <div className="absolute top-2 right-2">
        <SaveOkr {...{ id, data, setData }} />
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
