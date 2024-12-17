import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getRouteEventList, getRouteSubjectList } from "@/shared/consts/router";
import { Button } from "@/shared/ui/Button";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
    const nav = useNavigate();
    return (_jsx(Paper, { className: "flex-1 flex justify-center items-center", children: _jsxs(Paper, { variant: "white", className: "p-6 rounded-lg shadow-lg", children: [_jsx(Typography.Title, { as: "h3", children: "\u041F\u0440\u043E\u0441\u0442\u0438\u0442\u0435, \u043E\u0448\u0438\u0431\u043A\u0430!" }), _jsx(Typography.Paragraph, { children: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F!" }), _jsxs("div", { className: "flex justify-between items-center p-2 mt-4", children: [_jsx(Button, { onClick: () => nav(getRouteSubjectList()), variant: "link-main", children: "\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B" }), _jsx(Button, { onClick: () => nav(getRouteEventList()), variant: "link-main", children: "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F" })] })] }) }));
};
export default ErrorPage;
