import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Text";
import { Paper } from "@/shared/ui/Paper";
const FeedbackPage = () => {
    const nav = useNavigate();
    const [city, setCity] = useState("");
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState("");
    const [author, setAuthor] = useState("");
    const [rating, setRating] = useState(0);
    const [positiveComment, setPositiveComment] = useState("");
    const [negativeComment, setNegativeComment] = useState("");
    const [additionally, setAdditionally] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (city) {
                setIsLoading(true);
                fetch(`https://pepper-coding.online/get_events?city=${city}`)
                    .then((response) => response.json())
                    .then((data) => {
                    setEvents(data);
                    setIsLoading(false);
                })
                    .catch((error) => {
                    console.error("Ошибка получения мероприятий:", error);
                    setIsLoading(false);
                });
            }
            else {
                setEvents([]);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [city]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedEvent || !author || rating === 0 || !positiveComment || !negativeComment) {
            alert("Все поля должны быть заполнены!");
            return;
        }
        const reviewData = {
            event_id: selectedEvent,
            author,
            rating,
            positive_comment: positiveComment,
            negative_comment: negativeComment,
            additionally,
        };
        try {
            await fetch(`https://pepper-coding.online/review_event?city=${city}`, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reviewData),
            });
            alert("Отзыв успешно отправлен!");
        }
        catch (error) {
            console.error(error);
            alert("Ошибка при отправке отзыва.");
        }
    };
    const StarRating = ({ currentRating, onRate }) => {
        return (_jsx("div", { className: "flex space-x-1", children: [1, 2, 3, 4, 5].map((star) => (_jsx("span", { className: `cursor-pointer text-2xl ${star <= currentRating ? "text-yellow-500" : "text-gray-400"}`, onClick: () => onRate(star), children: "\u2605" }, star))) }));
    };
    return (_jsx("div", { className: "max-w-[700px] w-full mx-auto p-4", children: _jsxs(Paper, { className: "flex-1 flex flex-col p-2", children: [_jsx(Typography.Title, { as: "h3", className: "m-2", children: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 \u043E \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0438" }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { htmlFor: "city", className: "block mb-1", children: "\u0413\u043E\u0440\u043E\u0434" }), _jsx(TextField, { id: "city", value: city, onChange: (e) => setCity(e.target.value), label: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434", required: true })] }), city && isLoading && _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439..." }), events.length > 0 && !isLoading ? (_jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "event", className: "block mb-1", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435" }), _jsxs("select", { id: "event", value: selectedEvent, onChange: (e) => setSelectedEvent(e.target.value), className: "w-full p-2 border border-gray-300 rounded", required: true, children: [_jsx("option", { value: "", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0435" }), events.map((event) => (_jsx("option", { value: event.id, children: event.name }, event.id)))] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "author", className: "block mb-1", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435, \u043A\u0435\u043C \u0432\u044B \u044F\u0432\u043B\u044F\u0435\u0442\u0435\u0441\u044C" }), _jsxs("select", { id: "author", value: author, onChange: (e) => setAuthor(e.target.value), className: "w-full p-2 border border-gray-300 rounded", required: true, children: [_jsx("option", { value: "", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043E\u043B\u044C" }), _jsx("option", { value: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442", children: "\u0421\u0442\u0443\u0434\u0435\u043D\u0442" }), _jsx("option", { value: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C", children: "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C" }), _jsx("option", { value: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C", children: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u044C" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1", children: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F" }), _jsx(StarRating, { currentRating: rating, onRate: (star) => setRating(star) }), rating === 0 && _jsx("p", { className: "text-red-500 text-sm", children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0446\u0435\u043D\u043A\u0443" })] }), _jsx(TextField, { label: "\u0411\u043E\u043B\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C", value: positiveComment, onChange: (e) => setPositiveComment(e.target.value), required: true }), _jsx(TextField, { label: "\u041C\u0435\u043D\u044C\u0448\u0435 \u0432\u0441\u0435\u0433\u043E \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C", value: negativeComment, onChange: (e) => setNegativeComment(e.target.value), required: true }), _jsx(TextField, { label: "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439", value: additionally, onChange: (e) => setAdditionally(e.target.value) }), _jsx(Button, { type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432" })] })) : (!isLoading &&
                    city && (_jsx("p", { className: "text-center text-gray-500", children: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F \u0432 \u0434\u0430\u043D\u043D\u043E\u043C \u0433\u043E\u0440\u043E\u0434\u0435 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B." })))] }) }));
};
export default FeedbackPage;
