import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSystemActions } from "@/entities/System";
import { getRouteEventList } from "@/shared/consts/router";
import { Button } from "@/shared/ui/Button";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { PageLoader } from "@/widgets/PageLoader";
import { useNavigate } from "react-router-dom";
export const MainPage = () => {
    // const { data, isLoading } = useGetCitiesQuery();
    const data = ["Шахты", "Ростов-на-Дону"];
    const isLoading = false;
    const { setCity } = useSystemActions();
    const nav = useNavigate();
    if (isLoading) {
        return _jsx(PageLoader, {});
    }
    const handleCity = (value) => () => {
        setCity(value);
        nav(getRouteEventList());
    };
    return (_jsx(Paper, { className: "flex justify-center items-center flex-1", children: _jsxs(Paper, { variant: "white", className: "p-4 rounded-xl ", children: [_jsx(Typography.Title, { className: "m-3", as: "h2", children: "\u0412\u044B\u0431\u043E\u0440 \u0433\u043E\u0440\u043E\u0434\u0430" }), data === null || data === void 0 ? void 0 : data.map((value) => (_jsx(Button, { onClick: handleCity(value), variant: "text", children: value })))] }) }));
};
