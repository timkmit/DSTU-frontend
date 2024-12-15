import { rtkApi } from "@/shared/api/rtkApi";

export const cityApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getCities: build.query<string[], void>({
      query: () => "/university_branches",
    }),
  }),
});

export const { useGetCitiesQuery } = cityApi;