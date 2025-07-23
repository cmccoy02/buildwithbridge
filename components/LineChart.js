
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    // Clear the SVG first
    d3.select(ref.current).selectAll("*").remove();
    
    const svg = d3.select(ref.current);
    const width = 300;
    const height = 300;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    // Fixed x-axis scale from 0 to 100
    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([margin.left, width - margin.right]);

    // Fixed y-axis scale from 0 to 100
    const y = d3.scaleLinear()
      .domain([0, 100])
      .range([height - margin.bottom, margin.top]);

    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.y))
      .curve(d3.curveMonotoneX);

    // Month labels for x-axis
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Add grid lines
    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x)
        .tickSize(-height + margin.top + margin.bottom)
        .tickFormat('')
        .ticks(10)
      )
      .selectAll('line')
      .attr('stroke', '#4a5568')
      .attr('stroke-opacity', 0.3);

    svg.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y)
        .tickSize(-width + margin.left + margin.right)
        .tickFormat('')
        .ticks(5)
      )
      .selectAll('line')
      .attr('stroke', '#4a5568')
      .attr('stroke-opacity', 0.3);

    // Add the line path
    svg.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#f7931e')
      .attr('stroke-width', 3)
      .attr('d', line);

    // Add data points
    svg.selectAll('.dot')
      .data(data)
      .enter().append('circle')
      .attr('class', 'dot')
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', 4)
      .attr('fill', '#f7931e')
      .attr('stroke', 'white')
      .attr('stroke-width', 2);

    // Add x-axis with custom month labels
    const xAxis = d3.axisBottom(x)
      .ticks(10)
      .tickFormat((d, i) => {
        // Map the 0-100 scale to month indices (0-11)
        const monthIndex = Math.floor((d / 100) * 12);
        return monthLabels[monthIndex] || '';
      });

    svg.append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll('text')
      .attr('fill', '#a0aec0')
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-size', '10px');

    // Add y-axis with fixed domain
    const yAxis = d3.axisLeft(y)
      .ticks(5)
      .tickFormat(d => `${d}%`);

    svg.append('g')
      .attr('transform', `translate(${margin.left},0)`)
      .call(yAxis)
      .selectAll('text')
      .attr('fill', '#a0aec0')
      .attr('font-family', 'JetBrains Mono, monospace')
      .attr('font-size', '10px');

    // Style the axes
    svg.selectAll('path.domain')
      .attr('stroke', '#4a5568');

    svg.selectAll('line.tick')
      .attr('stroke', '#4a5568');

  }, [data]);

  return (
    <svg ref={ref} width="300" height="300" className="mx-auto"></svg>
  );
};

export default LineChart;
