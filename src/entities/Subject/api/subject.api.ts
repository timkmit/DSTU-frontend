import { rtkApi } from "@/shared/api/rtkApi";
import { ExpandedSubject, Subject } from "../model/types/Subject";

const subjectApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllSubjects: build.query<Subject[], string>({
			query: (city: string) => `/get_subjects?city=${city}`,
		}),
		getSubject: build.query<ExpandedSubject, string>({
			query: (id: string) => `/get_subject/${id}`,
		}),
	}),
});

export const { useGetAllSubjectsQuery, useGetSubjectQuery } = subjectApi;
