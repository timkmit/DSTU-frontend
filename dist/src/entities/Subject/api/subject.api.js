import { rtkApi } from "@/shared/api/rtkApi";
export const subjectApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSubjects: build.query({
            query: (city) => `/get_subjects?city=${city}`,
        }),
        getSubject: build.query({
            query: ({ id, city }) => `/get_subject/?city=${city}&id=${id}`,
        }),
    }),
});
export const { useGetAllSubjectsQuery, useGetSubjectQuery } = subjectApi;
