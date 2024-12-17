var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShortArrowRight } from "../../icons";
import { Typography } from "../../Text";
import cn from "classnames";
const buttonStyles = {
    main: "pr-3 pl-4 py-3  rounded-lg",
    text: "text-blue-500 hover:text-blue-700 py-4 px-2",
    small: "bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-800 py-2 px-2",
    icon: "max-w-14 text-gray-400 hover:text-gray-600 aspect-square p-4 rounded-lg",
    "link-main": "text-blue-500 hover:text-blue-700 underline py-2 px-4",
    socials: "text-gray-400 hover:text-gray-600 p-2",
    large: "py-3 px-4 border-[3px] border-[#D2DAE3] rounded-lg text-base",
};
export const Button = (_a) => {
    var { variant = "main", icon, children, onClick, href, className } = _a, props = __rest(_a, ["variant", "icon", "children", "onClick", "href", "className"]);
    const baseStyles = "flex justify-center items-center rounded-md active:outline-none active:ring-2 active:ring-offset-2";
    const combinedStyles = `${baseStyles} ${buttonStyles[variant]}`;
    if (href) {
        return (
        // @ts-ignore
        _jsx("a", Object.assign({ href: href, className: cn(combinedStyles, className) }, props, { children: children })));
    }
    return (_jsxs("button", Object.assign({ onClick: onClick, className: cn(combinedStyles, className) }, props, { children: [_jsx(Typography.Paragraph, { variant: variant === "small" ? "button_small" : "button", className: "flex-1 text-center justify-center flex", children: children }), ["main", "text", "small", "large"].includes(variant) && (_jsx("span", { className: `${variant === "small" ? "p-2" : "p-3"} ml-2 rounded-lg aspect-square flex justify-center items-center  bg-blue-500 hover:bg-blue-700`, children: icon ? icon : _jsx(ShortArrowRight, { stroke: "#fff" }) }))] })));
};
