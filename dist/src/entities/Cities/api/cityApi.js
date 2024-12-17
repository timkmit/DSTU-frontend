import { rtkApi } from "@/shared/api/rtkApi";
export const cityApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCities: build.query({
            query: () => "/university_branches",
        }),
    }),
});
export const { useGetCitiesQuery } = cityApi;
