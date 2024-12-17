import { jsx as _jsx } from "react/jsx-runtime";
import { getRouteError } from "@/shared/consts/router";
import { PageLoader } from "@/widgets/PageLoader";
import { Component, Suspense } from "react";
import { Navigate } from "react-router-dom";
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        console.error(error.message);
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (_jsx(Suspense, { fallback: _jsx(PageLoader, {}), children: _jsx(Navigate, { to: getRouteError() }) }));
        }
        return children;
    }
}
