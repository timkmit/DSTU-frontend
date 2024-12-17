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
import classes from "./Flex.module.css";
import cn from "classnames";
const justifyClasses = {
    start: classes.justifyStart,
    end: classes.justifyEnd,
    center: classes.justifyCenter,
    between: classes.justifyBetween,
};
const alignClasses = {
    start: classes.alignStart,
    end: classes.alignEnd,
    center: classes.alignCenter,
};
const directionClasses = {
    row: classes.row,
    column: classes.column,
};
const gapClasses = {
    "0": classes.gap0,
    "4": classes.gap4,
    "8": classes.gap8,
    "16": classes.gap16,
    "32": classes.gap32,
};
export const Stack = (props) => {
    const { className, children, direction = "row", align = "center", justify = "start", gap = "0", max = false } = props, otherProps = __rest(props, ["className", "children", "direction", "align", "justify", "gap", "max"]);
    const classNames = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gapClasses[gap],
    ];
    const mods = {
        [classes.max]: max,
    };
    return (_jsx("div", Object.assign({}, otherProps, { className: cn(classes.Flex, mods, classNames), children: children })));
};
