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
import styles from "./Typography.module.css";
const styleMapping = {
    h1: styles.title_h1,
    h2: styles.title_h2,
    h3: styles.title_h3,
    h4: styles.title_h4,
    button: styles.button,
    button_small: styles.button_small,
    accent: styles.accent,
    body: styles.body,
    caption: styles.caption,
};
export const Typography = (props) => {
    return _jsx("p", Object.assign({}, props));
};
Typography.Title = (_a) => {
    var { as: Component = "h1", className } = _a, props = __rest(_a, ["as", "className"]);
    return (_jsx(Component, Object.assign({ className: cn(styleMapping[Component], className) }, props)));
};
Typography.Paragraph = (_a) => {
    var { as: Component = "p", variant = "body", className } = _a, props = __rest(_a, ["as", "variant", "className"]);
    return (_jsx(Component, Object.assign({ className: cn(styleMapping[variant], className) }, props)));
};
