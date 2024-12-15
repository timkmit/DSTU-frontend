import { EventSubjectSummary } from "@/entities/Analysis";

export interface Subject {
	id: number;
	name: string;
	average_rating: number;
}

export interface Analysis_summary {
	discipline: string;
	group: string;
	average_rating: number;
	number_of_reviews: number;
}

export interface Review {
	id: number;
	rating: number;
	comment: string;
}

export interface ExpandedSubject {
	id: number;
	name: string;
	average_rating: number;
	number_of_reviews: number;
	reviews: Review[];
	summary?: {
		id: number;
		content: {
			created_at: string;
			review_ids: number[];
			related_id: number;
			summary: EventSubjectSummary;
		};
	};
}
