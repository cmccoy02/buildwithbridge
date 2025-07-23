
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Speedometer = ({ value }) => {
  const ref = useRef();

  // Function to determine debt level and color
  const getDebtLevel = (val) => {
    if (val >= 70) return { level: 'HIGH', color: '#ff6b6b' };
    if (val >= 40) return { level: 'MEDIUM', color: '#ffd93d' };
    return { level: 'LOW', color: '#6bcf7f' };
  };

  const debtLevel = getDebtLevel(value);

  useEffect(() => {
    // Clear the SVG first
    d3.select(ref.current).selectAll("*").remove();
    
    const svg = d3.select(ref.current);
    const width = 300;
    const height = 300;
    const radius = 150; // half of 300
    const g = svg.append('g').attr('transform', `translate(150, 150)`);

    // Color scale for the gauge
    const color = d3.scaleLinear()
      .domain([0, 25, 50, 75, 100])
      .range(["#00ff00", "#ffff00", "#ffa500", "#ff0000"]);

    // Create the arc generator
    const arc = d3.arc()
      .innerRadius(radius - 50)
      .outerRadius(radius - 10)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    // Background arc
    g.append("path")
      .attr("d", arc)
      .attr("fill", "#2d3748")
      .attr("stroke", "#4a5568")
      .attr("stroke-width", 2);

    // Create segments for the gauge
    const segments = 100;
    const segmentAngle = Math.PI / segments;
    
    for (let i = 0; i < segments; i++) {
      const startAngle = -Math.PI / 2 + (i * segmentAngle);
      const endAngle = startAngle + segmentAngle;
      const segmentValue = (i / segments) * 100;
      
      g.append("path")
        .attr("d", arc.startAngle(startAngle).endAngle(endAngle))
        .attr("fill", color(segmentValue))
        .attr("opacity", 0.8);
    }

    // Calculate needle angle
    const angle = (value / 100) * Math.PI - Math.PI / 2;
    
    // Create needle
    const needle = g.append('g')
      .attr('class', 'needle')
      .attr('transform', `rotate(${angle * 180 / Math.PI})`);

    needle.append('path')
      .attr('d', `M ${-radius + 80} 0 L 0 -3 L 0 3 Z`)
      .attr('fill', 'white')
      .attr('stroke', '#2d3748')
      .attr('stroke-width', 1);

    // Center circle
    g.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', 'white')
      .attr('stroke', '#2d3748')
      .attr('stroke-width', 2);

    // Value text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.5em')
      .attr('fill', 'white')
      .attr('font-family', 'OCR-A, monospace')
      .attr('font-size', '24px')
      .attr('font-weight', 'bold')
      .text(`${value}%`);

    // Add some labels
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '4.5em')
      .attr('fill', '#a0aec0')
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-size', '12px')
      .text('Tech Debt Score');

    // Add debt level title
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '6.5em')
      .attr('fill', debtLevel.color)
      .attr('font-family', 'OCR-A, monospace')
      .attr('font-size', '32px')
      .attr('font-weight', 'bold')
      .text(debtLevel.level);

  }, [value]);

  return (
    <svg ref={ref} width="100%" height="100%" viewBox="0 0 300 300" className="mx-auto block"></svg>
  );
};

export default Speedometer;
