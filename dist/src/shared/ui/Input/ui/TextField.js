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
import { useState } from "react";
import styles from "./TextField.module.css";
import cn from "classnames";
export const TextField = (_a) => {
    var { title, caption, error, disabled, label, before, after } = _a, props = __rest(_a, ["title", "caption", "error", "disabled", "label", "before", "after"]);
    const [isFocused, setIsFocused] = useState(false);
    const titleClass = error ? styles.errorTitle : styles.title;
    const captionClass = error ? styles.errorCaption : styles.caption;
    return (_jsxs("div", { children: [title && _jsx("div", { className: titleClass, children: title }), _jsxs("div", { className: cn(styles.inputWrapper, { [styles.errorWrapper]: !!error }, { [styles.disabledInput]: disabled }, {
                    [styles.focucedWrapper]: isFocused,
                }), children: [before ? before : null, _jsx("input", Object.assign({}, props, { onFocus: () => setIsFocused(true), onBlur: () => setIsFocused(false), type: "text", className: cn(styles.input, error ? "text-[#E44444] placeholder:text-[#E44]" : ""), disabled: disabled, placeholder: label })), after ? (after) : (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: cn(styles.closeIcon), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }))] }), caption && _jsx("div", { className: captionClass, children: caption }), error && _jsx("div", { className: styles.error, children: error })] }));
};
