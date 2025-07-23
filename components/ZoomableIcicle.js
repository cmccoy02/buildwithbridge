import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const ZoomableIcicle = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    // Clear the SVG first
    d3.select(ref.current).selectAll("*").remove();
    
    const width = 300;
    const height = 300;
    
    const partition = data => d3.partition()
        .size([height, width])
      (d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.height - a.height || b.value - a.value));

    // Use a more muted color scheme
    const color = d3.scaleOrdinal()
      .domain(['analytics', 'cluster', 'graph', 'optimization'])
      .range(['#f7931e', '#4ade80', '#60a5fa', '#f87171']);

    const root = partition(data);
    let focus = root;

    const svg = d3.select(ref.current)
        .attr("viewBox", [0, 0, width, height])
        .style("font", "10px JetBrains Mono");

    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
        .attr("transform", d => `translate(${d.y0},${d.x0})`);

    const rect = cell.append("rect")
        .attr("width", d => d.y1 - d.y0 - 1)
        .attr("height", d => rectHeight(d))
        .attr("fill-opacity", 0.8)
        .attr("fill", d => {
          if (!d.depth) return "#2d3748";
          while (d.depth > 1) d = d.parent;
          return color(d.data.name) || '#a0aec0';
        })
        .attr("stroke", "#4a5568")
        .attr("stroke-width", 1)
        .style("cursor", "pointer")
        .on("click", clicked);

    const text = cell.append("text")
        .style("user-select", "none")
        .attr("pointer-events", "none")
        .attr("x", 4)
        .attr("y", 13)
        .attr("fill", "#ffffff")
        .attr("fill-opacity", d => +labelVisible(d));

    text.append("tspan")
        .text(d => d.data.name);

    const tspan = text.append("tspan")
        .attr("fill-opacity", d => labelVisible(d) * 0.7)
        .text(d => ` ${d.value}`);

    cell.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${d.value}`);

    function clicked(event, p) {
      focus = focus === p ? p = p.parent : p;
      
      root.each(d => d.target = {
        x0: (d.x0 - p.x0) / (p.x1 - p.x0) * height,
        x1: (d.x1 - p.x0) / (p.x1 - p.x0) * height,
        y0: d.y0 - p.y0,
        y1: d.y1 - p.y0
      });

      const t = cell.transition().duration(750)
          .attr("transform", d => `translate(${d.target.y0},${d.target.x0})`);

      rect.transition(t).attr("height", d => rectHeight(d.target));
      text.transition(t).attr("fill-opacity", d => +labelVisible(d.target));
      tspan.transition(t).attr("fill-opacity", d => labelVisible(d.target) * 0.7);
    }

    function rectHeight(d) {
      return d.x1 - d.x0 - Math.min(1, (d.x1 - d.x0) / 2);
    }

    function labelVisible(d) {
      return d.y1 <= width && d.y0 >= 0 && d.x1 - d.x0 > 16;
    }

  }, [data]);

  return (
    <svg ref={ref} width="300" height="300" className="mx-auto"></svg>
  );
};

export default ZoomableIcicle;