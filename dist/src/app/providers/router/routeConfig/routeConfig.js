import { jsx as _jsx } from "react/jsx-runtime";
import { LazyAdminPage } from "@/pages/AdminPage";
import { LazyErrorPage } from "@/pages/ErrorPage";
import { LazyEventByIdPage } from "@/pages/EventByIdPage";
import { LazyEventListPage } from "@/pages/EventListPage";
import { LazyFeedbackPage } from "@/pages/FeedbackPage";
import { MainPage } from "@/pages/MainPage";
import { LazySubjectByIdPage } from "@/pages/SubjectByIdPage";
import { LazySubjectListPage } from "@/pages/SubjectListPage";
import { LazyTestPage } from "@/pages/Test";
import { AppRoutes, getRouteError, getRouteEventById, getRouteTest, getRouteEventList, getRouteSubjectById, getRouteSubjectList, getRouteAdminPage, getRouteFeedbackPage, getRouteMain, } from "@/shared/consts/router";
export const routeConfig = {
    [AppRoutes.TEST]: {
        path: getRouteTest(),
        element: _jsx(LazyTestPage, {}),
    },
    [AppRoutes.ERROR]: {
        path: getRouteError(),
        element: _jsx(LazyErrorPage, {}),
    },
    [AppRoutes.EVENT_BY_ID]: {
        path: getRouteEventById(":id"),
        element: _jsx(LazyEventByIdPage, {}),
    },
    [AppRoutes.EVENT_LIST]: {
        path: getRouteEventList(),
        element: _jsx(LazyEventListPage, {}),
    },
    [AppRoutes.SUBJECT_BY_ID]: {
        path: getRouteSubjectById(":id"),
        element: _jsx(LazySubjectByIdPage, {}),
    },
    [AppRoutes.SUBJECT_LIST]: {
        path: getRouteSubjectList(),
        element: _jsx(LazySubjectListPage, {}),
    },
    [AppRoutes.ADMIN_PAGE]: {
        path: getRouteAdminPage(),
        element: _jsx(LazyAdminPage, {}),
    },
    [AppRoutes.FEEDBACK_PAGE]: {
        path: getRouteFeedbackPage(),
        element: _jsx(LazyFeedbackPage, {}),
    },
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: _jsx(MainPage, {}),
    },
};
