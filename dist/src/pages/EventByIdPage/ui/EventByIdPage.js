import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BarChart, useLazyGetEventSummaryQuery } from "@/entities/Analysis";
import { useGetEventQuery } from "@/entities/Event";
import { useAddEventReviewMutation } from "@/entities/Reviews";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";
import { useState } from "react";
import { useParams } from "react-router-dom";
const EventByIdPage = () => {
    var _a, _b;
    const { id } = useParams();
    const { city } = useAppSelector((state) => state.system);
    const { isLoading, data: event, refetch } = useGetEventQuery({ city, id: id });
    const [getSummary, { isLoading: isSummaryLoading }] = useLazyGetEventSummaryQuery();
    const [currentSummary, setCurrentSummary] = useState(null);
    const [addReview] = useAddEventReviewMutation();
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({ author: "" });
    const fetchSummary = async () => {
        try {
            if (event && city && id && event.reviews.length !== 0) {
                const summary = await getSummary({
                    city,
                    related_id: Number(id),
                    review_ids: event.reviews.slice(0, 10).map(({ id }) => id),
                }).unwrap();
                setCurrentSummary(summary);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await addReview(Object.assign(Object.assign({}, formData), { event_id: Number(id), city }));
        await refetch();
        setIsOpen(false);
    };
    if (isLoading) {
        return (_jsx(Paper, { className: "flex flex-1 justify-center items-center p-3", children: _jsx(Loader, {}) }));
    }
    if (isLoading) {
        return (_jsx(Paper, { className: "flex flex-1 justify-center items-center p-3", children: _jsx(Loader, {}) }));
    }
    if (!event) {
        return (_jsx(Paper, { className: "flex flex-1 justify-center items-center p-3", children: _jsx(Typography.Title, { as: "h3", children: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0435, \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u043D\u0435\u0442" }) }));
    }
    const { average_rating, name, number_of_reviews, reviews } = event;
    return (_jsxs(_Fragment, { children: [_jsx(Modal, { onClose: () => setIsOpen(false), isOpen: isOpen, title: "\u041D\u043E\u0432\u044B\u0439 \u043E\u0442\u0437\u044B\u0432", children: _jsxs("form", { className: "flex flex-col gap-2 p-2 mt-3", onSubmit: onSubmit, children: [_jsx(TextField, { required: true, label: "\u0410\u0432\u0442\u043E\u0440", value: formData.author, onChange: (e) => setFormData((prev) => (Object.assign(Object.assign({}, prev), { author: e.target.value }))) }), _jsx(TextField, { label: "\u041F\u043B\u044E\u0441\u044B", value: formData.positive_comment, onChange: (e) => setFormData((prev) => (Object.assign(Object.assign({}, prev), { positive_comment: e.target.value }))) }), _jsx(TextField, { label: "\u041C\u0438\u043D\u0443\u0441\u044B", value: formData.negative_comment, onChange: (e) => setFormData((prev) => (Object.assign(Object.assign({}, prev), { aunegative_commentthor: e.target.value }))) }), _jsx(TextField, { label: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E", value: formData.additionally, onChange: (e) => setFormData((prev) => (Object.assign(Object.assign({}, prev), { additionally: e.target.value }))) }), _jsx(Stars, { starClassname: "h-8 w-8", rating: formData.rating || 0, onStarClick: (starNumber) => setFormData((prev) => (Object.assign(Object.assign({}, prev), { rating: starNumber }))) }), _jsx(Button, { variant: "large", className: "mt-2", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })] }) }), _jsxs(Paper, { className: "flex flex-col gap-4 flex-1 p-3", children: [_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Typography.Title, { as: "h3", children: name }), _jsxs(Typography.Title, { as: "h4", children: ["\u0421\u0440\u0435\u0434\u043D\u044F\u044F \u043E\u0446\u0435\u043D\u043A\u0430: ", average_rating] })] }), isSummaryLoading ? (_jsx("div", { className: "flex p-4 justify-center items-center", children: _jsx(Loader, {}) })) : !currentSummary ? (_jsx("div", { className: "flex p-4 justify-center items-center", children: _jsx(Button, { onClick: fetchSummary, children: "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0432\u043E\u0434\u043A\u0443" }) })) : (_jsxs("div", { className: "grid sm:grid-cols-[2fr_1fr] max-sm:grid-rows-2 gap-2 p-2 max-h-[90vh] min-h-[80vh]", children: [_jsx("div", { className: "w-full", children: _jsx(BarChart, { loading: isSummaryLoading, data: (currentSummary === null || currentSummary === void 0 ? void 0 : currentSummary.evaluation_criteria) || [] }) }), _jsxs(Paper, { variant: "white", className: "flex flex-col gap-2  rounded-lg p-3", children: [_jsx(Typography.Title, { as: "h3", children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438" }), ((_b = (_a = currentSummary === null || currentSummary === void 0 ? void 0 : currentSummary.summary) === null || _a === void 0 ? void 0 : _a.recommendations) === null || _b === void 0 ? void 0 : _b.length) ? (currentSummary.summary.recommendations.map(({ text }) => (_jsx(Paper, { className: "p-2", children: text })))) : (_jsx(Typography.Paragraph, { children: "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442" }))] })] })), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center my-2", children: [_jsxs(Typography.Title, { className: "my-2", as: "h4", children: ["\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0437\u044B\u0432\u043E\u0432: ", number_of_reviews] }), _jsx(Button, { onClick: () => setIsOpen(true), children: "\u041D\u043E\u0432\u044B\u0439 \u043E\u0442\u0437\u044B\u0432" })] }), _jsx("div", { className: "flex flex-col gap-3", children: reviews.map((review) => (_jsxs(Paper, { variant: "white", className: "shadow-md rounded-md p-3 flex flex-col gap-2", children: [_jsxs(Typography.Paragraph, { variant: "button", children: ["\u0410\u0432\u0442\u043E\u0440: ", review.author ? review.author : "Отсутствует"] }), _jsxs(Typography.Paragraph, { variant: "body", children: ["\u041F\u043B\u044E\u0441\u044B: ", review.positive_comment ? review.positive_comment : "Отсутствует"] }), _jsxs(Typography.Paragraph, { variant: "body", children: ["\u041C\u0438\u043D\u0443\u0441\u044B: ", review.negative_comment ? review.negative_comment : "Отсутствует"] }), _jsxs(Typography.Paragraph, { variant: "caption", children: ["\u0414\u043E\u043F.: ", review.additionally ? review.additionally : "Отсутствует"] }), _jsx(Stars, { starClassname: "h-6 w-6", rating: review.rating })] }))) })] })] })] }));
};
export default EventByIdPage;
