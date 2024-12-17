import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Modal.module.css";
import { Typography } from "../../Text";
export const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen)
        return null;
    return (_jsx("div", { className: styles.modalOverlay, onClick: onClose, children: _jsxs("div", { className: styles.modalContent, onClick: (e) => e.stopPropagation(), children: [_jsx(Typography.Title, { as: "h2", className: "text-center", children: title }), _jsx("div", { className: styles.modalBody, children: children })] }) }));
};
