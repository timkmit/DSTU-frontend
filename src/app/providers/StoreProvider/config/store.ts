import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { UserReducer } from "@/entities/User";
import { $api } from "@/shared/api/api";
import { rtkApi } from "@/shared/api/rtkApi";
// import { NavigateOptions, To } from 'react-router-dom'

export const createReduxStore = (
	initaialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	// nav?: (to: To, options?: NavigateOptions) => void
) => {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: UserReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
	};


	const store = configureStore({
		// @ts-ignore
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initaialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: {
					extraArgument: { api: $api /* nav */ },
				},
			}).concat(rtkApi.middleware),
	});


	return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
