import { EventSubjectSummary } from "@/entities/Analysis/model/types/Sumary";

export interface Event {
	id: number;
	name: string;
	average_rating: number;
}

export interface Review {
	id: number;
	author: string;
	rating: number;
	positive_comment: string;
	negative_comment: string;
	additionally: string;
}

export interface ExtandedEvent {
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
