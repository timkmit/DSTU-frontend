// Импортируем библиотеки
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Evaluation_criteria } from "../model/types/Sumary";

interface BarChartProps {
	data: Evaluation_criteria[];
	loading?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ data }) => {
	const svgRef = useRef<SVGSVGElement | null>(null);

	useEffect(() => {
		if (!svgRef.current) return;

		const svg = d3.select(svgRef.current);
		const width = svgRef.current.clientWidth;
		const height = svgRef.current.clientHeight;
		const margin = { top: 20, right: 30, bottom: 120, left: 50 };

		const innerWidth = width - margin.left - margin.right;
		const innerHeight = height - margin.top - margin.bottom;

		svg.selectAll("*").remove();

		const xScale = d3
			.scaleBand()
			.domain(data.map((d) => d.name))
			.range([0, innerWidth])
			.padding(0.2);

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.rating) || 0])
			.range([innerHeight, 0]);

		const chartGroup = svg
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`);

		// Добавляем оси
		chartGroup.append("g").call(d3.axisLeft(yScale)).attr("class", "y-axis");

		chartGroup
			.append("g")
			.call(d3.axisBottom(xScale))
			.attr("transform", `translate(0, ${innerHeight})`)
			.attr("class", "x-axis")
			.selectAll("text")
			.attr("transform", "rotate(-45)")
			.style("text-anchor", "end");

		// Добавляем столбцы с анимацией
		chartGroup
			.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", (d) => xScale(d.name) || 0)
			.attr("y", innerHeight)
			.attr("width", xScale.bandwidth())
			.attr("height", 0)
			.attr("fill", "#1a73e8")
			.transition()
			.duration(800)
			.attr("y", (d) => yScale(d.rating))
			.attr("height", (d) => innerHeight - yScale(d.rating));
	}, [data]);

	return <svg className="w-full h-full" ref={svgRef}></svg>;
};
