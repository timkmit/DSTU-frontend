import { LazyAdminPage } from "@/pages/AdminPage";
import { LazyErrorPage } from "@/pages/ErrorPage";
import { LazyEventByIdPage } from "@/pages/EventByIdPage";
import { LazyEventListPage } from "@/pages/EventListPage";
import { LazyFeedbackPage } from "@/pages/FeedbackPage";
import { MainPage } from "@/pages/MainPage";
import { LazySubjectByIdPage } from "@/pages/SubjectByIdPage";
import { LazySubjectListPage } from "@/pages/SubjectListPage";
import { LazyTestPage } from "@/pages/Test";
import {
	AppRoutes,
	getRouteError,
	getRouteEventById,
	getRouteTest,
	getRouteEventList,
	getRouteSubjectById,
	getRouteSubjectList,
	getRouteAdminPage,
	getRouteFeedbackPage,
	getRouteMain,
} from "@/shared/consts/router";
import { AppRouteProps } from "@/shared/types/router";

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.TEST]: {
		path: getRouteTest(),
		element: <LazyTestPage />,
	},
	[AppRoutes.ERROR]: {
		path: getRouteError(),
		element: <LazyErrorPage />,
	},
	[AppRoutes.EVENT_BY_ID]: {
		path: getRouteEventById(":id"),
		element: <LazyEventByIdPage />,
	},
	[AppRoutes.EVENT_LIST]: {
		path: getRouteEventList(),
		element: <LazyEventListPage />,
	},
	[AppRoutes.SUBJECT_BY_ID]: {
		path: getRouteSubjectById(":id"),
		element: <LazySubjectByIdPage />,
	},
	[AppRoutes.SUBJECT_LIST]: {
		path: getRouteSubjectList(),
		element: <LazySubjectListPage />,
	},
	[AppRoutes.ADMIN_PAGE]: {
		path: getRouteAdminPage(),
		element: <LazyAdminPage />,
	},
	[AppRoutes.FEEDBACK_PAGE]: {
		path: getRouteFeedbackPage(),
		element: <LazyFeedbackPage />,
	},
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
};
