import { Suspense, memo, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";
// import { RequireAuth } from "./RequireAuth";
import { AppRouteProps } from "@/shared/types/router";
import { PageLoader } from "@/widgets/PageLoader";

export const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRouteProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

		return (
			<Route
				element={
					route.authOnly
						? // <RequireAuth>
							element
						: // </RequireAuth>
							element
				}
				path={route.path}
				key={route.path}
			/>
		);
	}, []);

	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</Suspense>
	);
});
