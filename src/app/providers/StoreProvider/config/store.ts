import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "@/entities/User";
import { rtkApi } from "@/shared/api/rtkApi";
import { SystemReducer } from "@/entities/System";

export const createReduxStore = () => {
	const rootReducers = {
		user: UserReducer,
		system: SystemReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};

	const store = configureStore({
		// @ts-ignore
		reducer: rootReducers,
		devTools: __IS_DEV__,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(rtkApi.middleware),
	});

	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
