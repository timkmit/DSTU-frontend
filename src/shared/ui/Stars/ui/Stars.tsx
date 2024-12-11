import React, { HTMLAttributes, SVGProps } from "react";
import cn from "classnames";

interface StarProps extends SVGProps<SVGSVGElement> {
	filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled, className, ...props }) => {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="-0.5 0 25 25"
			strokeWidth="1.5"
			className={cn("h-5 w-5", className)}
			{...props}
		>
			<path
				fill={filled ? "#FFD700" : "none"}
				stroke={filled ? "none" : "#e0e0e0"}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
				d="m12.71 3.45 2.46 4.49a.81.81 0 0 0 .56.41l5 .95a.81.81 0 0 1 .44 1.35l-3.51 3.73a.81.81 0 0 0-.21.66l.64 5.08a.8.8 0 0 1-1.14.83l-4.63-2.18a.78.78 0 0 0-.7 0l-4.63 2.18a.81.81 0 0 1-1.15-.83l.65-5.08a.81.81 0 0 0-.21-.66l-3.51-3.73a.81.81 0 0 1 .44-1.35l5-.95a.81.81 0 0 0 .56-.41l2.51-4.49a.81.81 0 0 1 1.43 0v0Z"
			/>
		</svg>
	);
};

interface StarsProps extends HTMLAttributes<HTMLDivElement> {
	rating: number;
	maxRating?: number;
	starClassname?: string;
	onStarClick?: (starNumber: number) => void;
}

export const Stars: React.FC<StarsProps> = ({
	rating,
	maxRating = 5,
	starClassname,
	onStarClick,
	className,
	...props
}) => {
	const stars = [];
	for (let i = 0; i < maxRating; i++) {
		stars.push(
			<Star
				className={cn({ "cursor-pointer": onStarClick }, starClassname)}
				onClick={() => onStarClick?.(i + 1)}
				key={i}
				filled={i < rating}
			/>,
		);
	}
	return (
		<div className={cn("flex", className)} {...props}>
			{stars}
		</div>
	);
};
