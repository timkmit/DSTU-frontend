import { buildSlice } from "@/shared/lib/store/buildSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { ReviewSchema } from "../types/SystemSchema";

const initialState: ReviewSchema = {
	city: "Шахты",
};

const systemSlice = buildSlice({
	name: "review",
	initialState,
	reducers: {
		setCity: (store, action: PayloadAction<string>) => {
			store.city = action.payload;
		},
	},
});

export const { reducer: SystemReducer, useActions: useSystemActions } = systemSlice;
