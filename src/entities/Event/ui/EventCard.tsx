import { Card } from "@/shared/ui/Card";
import { FC } from "react";
import { Event } from "../model/types/Event";
import { getRouteEventById } from "@/shared/consts/router";
import { useNavigate } from "react-router-dom";
import { Stars } from "@/shared/ui/Stars";

interface EventCardProps {
	event: Event;
}

export const EventCard: FC<EventCardProps> = ({ event }) => {
	const nav = useNavigate();

	return (
		<Card
			title={event.name}
			caption={<Stars rating={event.average_rating} />}
			description={`Средняя оценка: ${event.average_rating}`}
			actionDescription="Перейти к мероприятию"
			onClick={() => nav(getRouteEventById(event.id.toString()))}
		/>
	);
};
