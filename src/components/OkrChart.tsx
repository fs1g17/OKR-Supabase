"use client";
import React, { useEffect, useRef, useState } from "react";
import { hierarchy, linkVertical, select, tree, zoom } from "d3";
import useWindowSize from "@/app/hooks/useWindowSize";
import OkrCard from "./OkrCard";
import { createRoot } from "react-dom/client";
import { addChildToNodeById, updateNodeById } from "@/utils/graph";

const initialDataNode: DataNode = {
  id: 0,
  data: {
    objective: "Backend",
    description: "become a better backend engineer",
  },
  children: [],
};

const initialData: OkrData = {
  counter: 1,
  data: initialDataNode,
};

export default function OkrChart() {
  const svgRef = useRef(null);
  const { width, height } = useWindowSize();
  const [data, setData] = useState<OkrData>(initialData);

  const updateCardFactory = (id: number) => {
    return ({
      description,
      objective,
    }: {
      description: string;
      objective: string;
    }) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        updateNodeById(id, deepCopy.data, {
          id,
          data: { description, objective },
        });
        return deepCopy;
      });
    };
  };

  const addKeyResultFactory = (id: number) => {
    return ({
      description,
      objective,
    }: {
      description: string;
      objective: string;
    }) => {
      setData((prev) => {
        const deepCopy = JSON.parse(JSON.stringify(prev)) as OkrData;
        addChildToNodeById(id, deepCopy, {
          id,
          data: { description, objective },
        });
        return deepCopy;
      });
    };
  };

  useEffect(() => {
    if (!svgRef) return;
    if (!width || !height) return;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const g = svg
    .append("g")
    //.attr("transform", `translate(${width / 2}, 50)`);

    // D3 zoom behavior
    const zoomBehavior = zoom()
      .scaleExtent([0.5, 2]) // Zoom limits (min 50%, max 200%)
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoomBehavior as any); // apply zoom

    const root = hierarchy(data.data);
    const treeLayout = tree().size([width - 100, height - 100]);
    treeLayout(root);
    const paths = treeLayout(root).links();

    const pathGenerator = linkVertical()
      .x((d) => (d as any).x)
      .y((d) => (d as any).y);

    g
      .selectAll("path")
      .data(paths)
      .enter()
      .append("path")
      .attr("d", pathGenerator as any)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    g
      .selectAll(".node")
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
        const { objective, description } = d.data.data;
        const orgCard = (
          <OkrCard
            id={`org-card-${d.data.id}`}
            description={description}
            objective={objective}
            updateCard={updateCardFactory(d.data.id)}
            addKeyResult={addKeyResultFactory(d.data.id)}
          />
        );
        createRoot(nodeElement).render(orgCard);

        const observer = new MutationObserver(() => {
          const cardSize = nodeElement.getBoundingClientRect();
          const parent = select(nodeElement.parentNode?.parentNode as Element);

          console.log("inside here bitch");

          if (cardSize.width > 0 && cardSize.height > 0) {
            observer.disconnect();

            console.log("got good cardSize!");
            console.log({ width: cardSize.width, height: cardSize.height });
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
  }, [width, height, data]);

  return <svg ref={svgRef} />;
}
