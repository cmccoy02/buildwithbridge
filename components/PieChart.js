import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Color scale using our established palette
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range([
        '#6bcf7f',  // Green
        '#ffd93d',  // Yellow  
        '#ffa726',  // Orange
        '#ff6b6b',  // Red
        '#a8e6cf',  // Light green
        '#ffd3b6',  // Light orange
        '#ff8b94',  // Light red
        '#b8e6b8'   // Very light green
      ]);

    // Create pie generator
    const pie = d3.pie()
      .value(d => d.value)
      .sort(null);

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius - 40);

    // Create outer arc for labels
    const outerArc = d3.arc()
      .innerRadius(radius - 20)
      .outerRadius(radius - 20);

    // Generate pie data
    const pieData = pie(data);

    // Add slices
    const slices = svg.selectAll('.slice')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'slice');

    // Add paths for slices
    slices.append('path')
      .attr('d', arc)
      .attr('fill', d => color(d.data.name))
      .attr('stroke', '#1f2937')
      .attr('stroke-width', 2)
      .style('opacity', 0.9)
      .on('mouseover', function(event, d) {
        d3.select(this)
          .style('opacity', 1)
          .attr('stroke-width', 3);
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .style('opacity', 0.9)
          .attr('stroke-width', 2);
      });

    // Add labels
    const labels = svg.selectAll('.label')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'label')
      .attr('transform', d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.6 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      });

    // Add label text
    labels.append('text')
      .text(d => d.data.name)
      .attr('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? 'start' : 'end';
      })
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-size', '11px')
      .attr('fill', '#ffffff')
      .style('font-weight', '500');

    // Add percentage labels
    labels.append('text')
      .text(d => `${((d.value / d3.sum(data, d => d.value)) * 100).toFixed(1)}%`)
      .attr('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? 'start' : 'end';
      })
      .attr('dy', '1.2em')
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-size', '9px')
      .attr('fill', '#9ca3af')
      .style('font-weight', '400');

    // Add connecting lines
    svg.selectAll('.polyline')
      .data(pieData)
      .enter()
      .append('polyline')
      .attr('points', d => {
        const pos = outerArc.centroid(d);
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.6 * (midAngle < Math.PI ? 1 : -1);
        return [arc.centroid(d), outerArc.centroid(d), pos];
      })
      .attr('fill', 'none')
      .attr('stroke', '#4b5563')
      .attr('stroke-width', 1)
      .style('opacity', 0.6);

  }, [data]);

  return (
    <div className="flex justify-center items-center h-full">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PieChart; 