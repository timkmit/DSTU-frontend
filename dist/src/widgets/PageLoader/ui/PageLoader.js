import { jsx as _jsx } from "react/jsx-runtime";
import { Loader } from "@/shared/ui/Loader";
export const PageLoader = () => {
    return (_jsx("div", { className: "flex", children: _jsx(Loader, {}) }));
};
