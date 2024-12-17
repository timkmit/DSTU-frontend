import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useGetAllEventsQuery } from "@/entities/Event";
import { EventCard } from "@/entities/Event/ui/EventCard";
import { getRouteEventList, getRouteSubjectList } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const EventListPage = () => {
    const nav = useNavigate();
    const { city } = useAppSelector((state) => state.system);
    const { isLoading, data } = useGetAllEventsQuery(city);
    const [search, setSearch] = useState("");
    const [currentData, setCuurentData] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        if (data) {
            setCuurentData(data.slice(0, 20));
        }
    }, [data]);
    useEffect(() => {
        let newData = [...((data === null || data === void 0 ? void 0 : data.slice((page - 1) * 20, page * 20)) || [])];
        console.log(newData);
        if (search !== "" && search) {
            newData = currentData.filter(({ name, average_rating }) => name.toLowerCase().includes(search.toLowerCase()) ||
                String(average_rating).toLowerCase().includes(search.toLowerCase()));
        }
        setCuurentData(newData);
    }, [search, data, page]);
    if (isLoading) {
        return (_jsxs(Paper, { className: "flex-1 flex flex-col p-2", children: [_jsxs("div", { className: "flex gap-3 m-3", children: [_jsx(Button, { onClick: () => nav(getRouteSubjectList()), variant: "link-main", children: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B" }), _jsx(Button, { onClick: () => nav(getRouteEventList()), variant: "link-main", children: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F" }), _jsx(TextField, { value: search, onChange: (e) => setSearch(e.target.value), label: "\u041F\u043E\u0438\u0441\u043A..." })] }), _jsx("div", { className: "flex-1 flex justify-center items-center", children: _jsx(Loader, {}) })] }));
    }
    return (_jsxs(Paper, { className: "flex-1 flex flex-col p-2", children: [_jsxs("div", { className: "flex gap-3 m-3", children: [_jsx(Button, { onClick: () => nav(getRouteSubjectList()), variant: "link-main", children: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B" }), _jsx(Button, { onClick: () => nav(getRouteEventList()), variant: "link-main", children: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F" }), _jsx(TextField, { value: search, onChange: (e) => setSearch(e.target.value), label: "\u041F\u043E\u0438\u0441\u043A..." })] }), currentData.length !== 0 ? (_jsxs(_Fragment, { children: [_jsxs(Typography.Title, { className: "m-2", as: "h4", children: ["\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 ", page] }), _jsx("div", { className: "grid flex-1 grid-cols-3 max-sm:grid-cols-1 max p-2 gap-3", children: currentData.map((event) => (_jsx(EventCard, { event: event }, event.id))) }), _jsxs("div", { className: "flex justify-center gap-3 m-3", children: [page !== 1 && (_jsx(Button, { onClick: () => setPage((prev) => prev - 1), variant: "link-main", children: "\u041D\u0430\u0437\u0430\u0434" })), page * 20 < Number(data === null || data === void 0 ? void 0 : data.length) && (_jsx(Button, { onClick: () => setPage((prev) => prev + 1), variant: "link-main", children: "\u0412\u043F\u0435\u0440\u0435\u0434" }))] })] })) : (_jsx("div", { className: "flex flex-1 justify-center items-center", children: _jsx(Typography.Title, { as: "h3", children: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0435, \u043D\u0435\u0442 \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439" }) }))] }));
};
export default EventListPage;
