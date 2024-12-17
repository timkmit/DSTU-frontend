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
import { jsx as _jsx } from "react/jsx-runtime";
import cn from "classnames";
const Star = (_a) => {
    var { filled, className } = _a, props = __rest(_a, ["filled", "className"]);
    return (_jsx("svg", Object.assign({}, props, { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "-0.5 0 25 25", strokeWidth: "1.5", className: cn("h-5 w-5", className) }, props, { children: _jsx("path", { fill: filled ? "#FFD700" : "none", stroke: filled ? "none" : "#e0e0e0", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m12.71 3.45 2.46 4.49a.81.81 0 0 0 .56.41l5 .95a.81.81 0 0 1 .44 1.35l-3.51 3.73a.81.81 0 0 0-.21.66l.64 5.08a.8.8 0 0 1-1.14.83l-4.63-2.18a.78.78 0 0 0-.7 0l-4.63 2.18a.81.81 0 0 1-1.15-.83l.65-5.08a.81.81 0 0 0-.21-.66l-3.51-3.73a.81.81 0 0 1 .44-1.35l5-.95a.81.81 0 0 0 .56-.41l2.51-4.49a.81.81 0 0 1 1.43 0v0Z" }) })));
};
export const Stars = (_a) => {
    var { rating, maxRating = 5, starClassname, onStarClick, className } = _a, props = __rest(_a, ["rating", "maxRating", "starClassname", "onStarClick", "className"]);
    const stars = [];
    for (let i = 0; i < maxRating; i++) {
        stars.push(_jsx(Star, { className: cn({ "cursor-pointer": onStarClick }, starClassname), onClick: () => onStarClick === null || onStarClick === void 0 ? void 0 : onStarClick(i + 1), filled: i < rating }, i));
    }
    return (_jsx("div", Object.assign({ className: cn("flex", className) }, props, { children: stars })));
};
