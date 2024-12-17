import { jsx as _jsx } from "react/jsx-runtime";
import { Card } from "@/shared/ui/Card";
import { getRouteSubjectById } from "@/shared/consts/router";
import { useNavigate } from "react-router-dom";
import { Stars } from "@/shared/ui/Stars";
export const SubjectCard = ({ subject }) => {
    const nav = useNavigate();
    return (_jsx(Card, { title: subject.name, description: `Средняя оценка: ${subject.average_rating}`, actionDescription: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0443", caption: _jsx(Stars, { rating: subject.average_rating }), onClick: () => nav(getRouteSubjectById(subject.id.toString())) }));
};
