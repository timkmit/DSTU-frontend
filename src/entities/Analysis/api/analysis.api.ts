import { EventSubjectSummary } from "../model/types/Sumary";
import { rtkApi } from "@/shared/api/rtkApi";

const analysisApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getEventSummary: build.query<EventSubjectSummary, { city: string; review_ids: number[]; related_id: number }>({
			query: ({ city, ...body }) => ({ url: `/generate_summary_events?city=${city}`, body, method: "POST" }),
		}),
		getSubjectSummary: build.query<EventSubjectSummary, { city: string; review_ids: number[]; related_id: number }>({
			query: ({ city, ...body }) => ({ url: `/generate_summary_subjects/?city=${city}`, body, method: "POST" }),
		}),
	}),
});

export const { useLazyGetEventSummaryQuery, useLazyGetSubjectSummaryQuery } = analysisApi;
