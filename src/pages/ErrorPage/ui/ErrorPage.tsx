import { getRouteEventList, getRouteSubjectList } from "@/shared/consts/router";
import { Button } from "@/shared/ui/Button";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const nav = useNavigate();

	return (
		<Paper className="flex-1 flex justify-center items-center">
			<Paper variant="white" className="p-6 rounded-lg shadow-lg">
				<Typography.Title as="h3">Простите, ошибка!</Typography.Title>
				<Typography.Paragraph>Вы можете вернуться!</Typography.Paragraph>
				<div className="flex justify-between items-center p-2 mt-4">
					<Button onClick={() => nav(getRouteSubjectList())} variant="link-main">
						Предметы
					</Button>
					<Button onClick={() => nav(getRouteEventList())} variant="link-main">
						Мероприятия
					</Button>
				</div>
			</Paper>
		</Paper>
	);
};

export default ErrorPage;
