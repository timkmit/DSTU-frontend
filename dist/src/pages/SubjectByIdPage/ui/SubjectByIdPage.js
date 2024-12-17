import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BarChart, useLazyGetSubjectSummaryQuery } from "@/entities/Analysis";
import { useGetSubjectQuery } from "@/entities/Subject";
import { useAppSelector } from "@/shared/lib/hooks";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/shared/ui/Button";
const SubjectByIdPage = () => {
    const { id } = useParams();
    const { city } = useAppSelector((state) => state.system);
    const { isLoading, data: subject } = useGetSubjectQuery({ city, id: id });
    const [getSummary, { isLoading: isSummaryLoading }] = useLazyGetSubjectSummaryQuery();
    const [currentSummary, setCurrentSummary] = useState(null);
    useEffect(() => {
        if (subject && subject.summary) {
            setCurrentSummary(subject.summary.content.summary);
        }
        else {
            setCurrentSummary(null);
        }
    }, [subject]);
    const fetchSummary = async () => {
        try {
            if (subject && city && id && subject.reviews.length > 0) {
                const summary = await getSummary({
                    city,
                    related_id: Number(id),
                    review_ids: subject.reviews.slice(0, 10).map(({ id }) => id),
                }).unwrap();
                // @ts-ignore
                setCurrentSummary(summary.summary);
            }
        }
        catch (e) {
            console.error("Ошибка при получении сводки:", e);
        }
    };
    if (isLoading) {
        return (_jsx(Paper, { className: "flex flex-1 justify-center items-center p-3", children: _jsx(Loader, {}) }));
    }
    if (!subject) {
        return (_jsx(Paper, { className: "flex flex-1 justify-center items-center p-3", children: _jsx(Typography.Title, { as: "h3", children: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0435, \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430 \u043D\u0435\u0442" }) }));
    }
    const { average_rating, name, number_of_reviews, reviews } = subject;
    return (_jsxs(Paper, { className: "flex flex-col gap-4 flex-1 p-3", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Typography.Title, { as: "h3", children: name }), _jsxs(Typography.Title, { as: "h4", children: ["\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430: ", average_rating] })] }), isSummaryLoading ? (_jsx("div", { className: "flex p-4 justify-center items-center", children: _jsx(Loader, {}) })) : currentSummary ? (_jsxs("div", { className: "grid sm:grid-cols-[2fr_1fr] max-sm:grid-rows-2 gap-2 p-2 max-h-[90vh] min-h-[80vh]", children: [_jsx("div", { className: "w-full", children: _jsx(BarChart, { loading: isSummaryLoading, data: (currentSummary === null || currentSummary === void 0 ? void 0 : currentSummary.evaluation_criteria) || [] }) }), _jsxs(Paper, { variant: "white", className: "flex flex-col gap-2 rounded-lg p-3", children: [_jsx(Typography.Title, { as: "h3", children: "\u0421\u0432\u043E\u0434\u043A\u0438" }), currentSummary === null || currentSummary === void 0 ? void 0 : currentSummary.recommendations.map(({ text }, index) => (_jsx(Paper, { className: "p-2", children: text }, index)))] })] })) : (_jsx("div", { className: "flex p-4 justify-center items-center", children: _jsx(Typography.Title, { as: "h3", children: "\u0410\u043D\u0430\u043B\u0438\u0437 \u043E\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442" }) })), !currentSummary && (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex p-4 justify-center items-center", children: _jsx(Button, { onClick: fetchSummary, children: "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }) }), _jsxs("div", { className: "flex justify-center", children: [_jsx("br", {}), _jsx("p", { children: "*\u043F\u0440\u0438\u043C\u0435\u0440\u043D\u043E\u0435 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 5-15\u043C\u0438\u043D" })] })] })), _jsxs("div", { children: [_jsxs(Typography.Title, { className: "my-2", as: "h4", children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0437\u044B\u0432\u043E\u0432: ", number_of_reviews] }), _jsx("div", { className: "flex flex-col gap-2", children: reviews.map((review) => (_jsxs(Paper, { variant: "white", className: "shadow-md rounded-md p-3 flex flex-col gap-2", children: [_jsx(Typography.Title, { as: "h4", children: review.comment }), _jsx(Stars, { starClassname: "h-8 w-8", rating: review.rating })] }, review.id))) })] })] }));
};
export default SubjectByIdPage;
