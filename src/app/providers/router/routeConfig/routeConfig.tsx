import { LazyErrorPage } from "@/pages/ErrorPage";
import { LazyEventByIdPage } from "@/pages/EventByIdPage";
import { LazyEventListPage } from "@/pages/EventListPage";
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
};
