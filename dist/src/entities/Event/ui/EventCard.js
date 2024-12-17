import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "@/shared/ui/Card";
import { getRouteEventById } from "@/shared/consts/router";
import { useNavigate } from "react-router-dom";
import { Stars } from "@/shared/ui/Stars";
export const EventCard = ({ event }) => {
    const nav = useNavigate();
    return (_jsx(Card, { title: event.name, caption: _jsx(Stars, { rating: event.average_rating }), description: `Средняя оценка: ${event.average_rating}`, actionDescription: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044E", onClick: () => nav(getRouteEventById(event.id.toString())) }));
};
