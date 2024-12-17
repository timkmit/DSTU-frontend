import { jsx as _jsx } from "react/jsx-runtime";
import { getRouteError, getRouteSubjectList } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks";
import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
export const RequireAuth = ({ children, roles }) => {
    const auth = useAppSelector((state) => state.user.authData);
    const location = useLocation();
    const userRoles = auth === null || auth === void 0 ? void 0 : auth.roles;
    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requireRole) => userRoles === null || userRoles === void 0 ? void 0 : userRoles.includes(requireRole));
    }, [roles, userRoles]);
    if (!auth) {
        return _jsx(Navigate, { to: getRouteSubjectList(), state: { from: location }, replace: true });
    }
    if (!hasRequiredRoles) {
        return _jsx(Navigate, { to: getRouteError(), state: { from: location }, replace: true });
    }
    return children;
};
