import { buildSlice } from "@/shared/lib/store/buildSlice";
const initialState = {
    authData: undefined,
    _inited: false,
};
const userSlice = buildSlice({
    name: "user",
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload;
        },
    },
});
export const { reducer: UserReducer, actions: UserActions, useActions: useUserActions } = userSlice;
