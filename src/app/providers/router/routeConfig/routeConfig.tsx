import { LazyErrorPage } from "@/pages/ErrorPage";
import { LazyTestPage } from "@/pages/Test";
import { AppRoutes, getRouteError, getRouteTest } from "@/shared/consts/router";
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
};
