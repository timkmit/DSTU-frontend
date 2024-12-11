import React, { ReactNode } from "react";
import { Typography } from "../../Text";
import { Button } from "../../Button";
import { ShortArrowRight } from "../../icons";
import { Paper } from "../../Paper";

interface CardProps {
	title?: ReactNode;
	description?: ReactNode;
	caption?: ReactNode;
	actionDescription: ReactNode;
	onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({ title, caption, description, actionDescription, onClick }) => {
	return (
		<Paper variant="white" className="flex flex-col justify-between gap-3 rounded-[32px] p-8 shadow-md">
			<Typography.Title as="h4">{title}</Typography.Title>
			<Typography.Paragraph variant="body">{description}</Typography.Paragraph>
			<Typography.Paragraph variant="caption">{caption}</Typography.Paragraph>
			<div className="mt-6 flex items-center justify-between">
				{actionDescription}
				<Button variant="icon" onClick={onClick}>
					<ShortArrowRight stroke="#38424F" />
				</Button>
			</div>
		</Paper>
	);
};
