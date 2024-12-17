import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense, memo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";
import { PageLoader } from "@/widgets/PageLoader";
export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route) => {
        const element = _jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: route.element });
        return (_jsx(Route, { element: route.authOnly
                ? // <RequireAuth>
                    element
                : // </RequireAuth>
                    element, path: route.path }, route.path));
    }, []);
    return (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Routes, { children: Object.values(routeConfig).map(renderWithWrapper) }) }));
});
