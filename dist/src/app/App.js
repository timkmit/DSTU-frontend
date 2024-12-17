import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import "./index.css";
import { PageLoader } from "@/widgets/PageLoader";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
const App = () => {
    return (_jsx("div", { children: _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, {}), _jsx("div", { className: "flex-grow flex ", children: _jsx(AppRouter, {}) }), _jsx(Footer, {})] }) }) }));
};
export default App;
