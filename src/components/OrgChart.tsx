"use client";
import React, { useEffect, useRef } from "react";
import { hierarchy, linkVertical, select, tree } from "d3";
import useWindowSize from "@/app/hooks/useWindowSize";
import OrgCard from "./OrgCard";
import { createRoot } from 'react-dom/client';

const data = {
  id: 0,
  data: {
    name: "Bob McRob",
    title: "CEO"
  },
  children: [
    {
      id: 1,
      data: {
        name: "Joseph Hubbard",
        title: "Poop Scooper"
      }
    }
  ]
}

export default function OrgChart() {
  const svgRef = useRef(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!svgRef) return;
    if (!width || !height) return;

    const svg = select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const root = hierarchy(data);
    const treeLayout = tree().size([width - 100, height - 100]);
    treeLayout(root);
    const paths = treeLayout(root).links();

    const pathGenerator = linkVertical()
      .x((d) => (d as any).x)
      .y((d) => (d as any).y);

    svg
      .selectAll("path")
      .data(paths)
      .enter()
      .append("path")
      .attr("d", pathGenerator as any)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    const nodes = svg.selectAll("node")
      .data([root,root.descendants()])
      .enter()
      .append("foreignObject")
      .attr("width", 100)
      .attr("height", 60)
      // .attr("x", d => ((d as any).x as number) - 50)
      // .attr("y", d => ((d as any).y as number) - 30)
      .append("xhtml:div")
      .style("display", "flex")
      .style("justify-content", "center")
      .style("align-items", "center")
      .style("width", "100%")
      .style("height", "100%")
      .style("background", "transparent")
      .html(d => {
        console.log({poop:"scoop", d});
        return `<div id="node-${(d as any).id}"></div>`
      });

      console.log(nodes);

      // [root,root.descendants()].forEach(d => {
      //   const nodeElement = document.getElementById(`node-${(d as any).id}`);

      //   console.log(nodeElement);
      //   // if (nodeElement) {
      //   //   const { name, title } = (d as any).data;
      //   //   const orgCard = <OrgCard name={name} title={title} />;
      //   //   createRoot(nodeElement).render(orgCard);
      //   // }
      // })

  }, [width, height]);

  return <svg ref={svgRef} />;
}
