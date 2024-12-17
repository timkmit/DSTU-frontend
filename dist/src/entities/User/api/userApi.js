import { rtkApi } from "@/shared/api/rtkApi";
const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMe: build.query({
            query: () => "/user",
        }),
        register: build.mutation({
            query: (authData) => ({
                url: "user/register",
                body: authData,
                method: "POST",
            }),
        }),
        signIn: build.mutation({
            query: (authData) => ({
                url: "/user/signIn",
                body: authData,
                method: "POST",
            }),
        }),
        signOut: build.mutation({
            query: () => "/user/signOut",
        }),
    }),
});
export const { useRegisterMutation, useSignInMutation, useSignOutMutation, useGetMeQuery } = userApi;
