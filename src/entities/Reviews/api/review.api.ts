import { rtkApi } from "@/shared/api/rtkApi";
import { EventReview, SubjectReview } from "../model/types/Reviews";

const reviewApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		addEventReview: build.mutation<EventReview, EventReview & { city: string }>({
			query: ({ city, ...eventReview }) => ({
				method: "POST",
				url: `/review_event?city=${city}`,
				body: eventReview,
			}),
		}),
		addSubjectReview: build.mutation<SubjectReview, SubjectReview>({
			query: (subjectReview) => ({
				method: "POST",
				url: "/add_review",
				body: subjectReview,
			}),
		}),
	}),
});

export const { useAddEventReviewMutation, useAddSubjectReviewMutation } = reviewApi;
