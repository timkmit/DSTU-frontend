import { rtkApi } from "@/shared/api/rtkApi";
import { ExpandedSubject, Subject } from "../model/types/Subject";

export const subjectApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllSubjects: build.query<Subject[], string>({
			query: (city: string) => `/get_subjects?city=${city}`,
		}),
		getSubject: build.query<ExpandedSubject, { id: string; city: string }>({
			query: ({ id, city }) => `/get_subject/?city=${city}&id=${id}`,
		}),
	}),
});

export const { useGetAllSubjectsQuery, useGetSubjectQuery } = subjectApi;
