import { Card } from "@/shared/ui/Card";
import { FC } from "react";
import { getRouteSubjectById } from "@/shared/consts/router";
import { useNavigate } from "react-router-dom";
import { Subject } from "../model/types/Subject";
import { Stars } from "@/shared/ui/Stars";

interface EventCardProps {
	subject: Subject;
}

export const SubjectCard: FC<EventCardProps> = ({ subject }) => {
	const nav = useNavigate();

	return (
		<Card
			title={subject.name}
			description={`Средняя оценка: ${subject.average_rating}`}
			actionDescription="Перейти к мероприятию"
			caption={<Stars rating={subject.average_rating} />}
			onClick={() => nav(getRouteSubjectById(subject.id.toString()))}
		/>
	);
};
