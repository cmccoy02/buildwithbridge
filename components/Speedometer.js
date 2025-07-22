
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Speedometer = ({ value }) => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arc = d3.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius - 20)
      .startAngle(-Math.PI / 2)
      .endAngle(Math.PI / 2);

    g.append('path')
      .attr('d', arc)
      .attr('fill', '#ddd');

    const valueArc = d3.arc()
      .innerRadius(radius - 40)
      .outerRadius(radius - 20)
      .startAngle(-Math.PI / 2)
      .endAngle(-Math.PI / 2 + (value / 100) * Math.PI);

    g.append('path')
      .attr('d', valueArc)
      .attr('fill', 'steelblue');

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .text(`${value}%`);

  }, [value]);

  return (
    <svg ref={ref} width="300" height="300"></svg>
  );
};

export default Speedometer;
