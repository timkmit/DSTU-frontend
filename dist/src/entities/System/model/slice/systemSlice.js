import { buildSlice } from "@/shared/lib/store/buildSlice";
const initialState = {
    city: "Шахты",
};
const systemSlice = buildSlice({
    name: "review",
    initialState,
    reducers: {
        setCity: (store, action) => {
            store.city = action.payload;
        },
    },
});
export const { reducer: SystemReducer, useActions: useSystemActions } = systemSlice;
