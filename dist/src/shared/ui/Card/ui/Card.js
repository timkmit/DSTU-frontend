import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from "../../Text";
import { Button } from "../../Button";
import { ShortArrowRight } from "../../icons";
import { Paper } from "../../Paper";
export const Card = ({ title, caption, description, actionDescription, onClick }) => {
    return (_jsxs(Paper, { variant: "white", className: "flex flex-col justify-between gap-3 rounded-[32px] p-8 shadow-md", children: [_jsx(Typography.Title, { as: "h4", children: title }), _jsx(Typography.Paragraph, { variant: "body", children: description }), _jsx(Typography.Paragraph, { variant: "caption", children: caption }), _jsxs("div", { className: "mt-6 flex items-center justify-between", children: [actionDescription, _jsx(Button, { variant: "icon", onClick: onClick, children: _jsx(ShortArrowRight, { stroke: "#38424F" }) })] })] }));
};
