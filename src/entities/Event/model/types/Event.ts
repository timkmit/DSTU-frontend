export interface Event {
	id: number;
	name: string;
}

export interface Event_summary {
	event_name: string;
	average_rating: number;
	number_of_reviews: number;
}

export interface Review {
	rating: number;
	review: string;
}

export interface Criteria {
	name: string;
	reviews: Review[];
	average_rating: number;
	number_of_reviews: number;
}

export interface ExtandedEvent {
	event_summary: Event_summary;
	criteria: Criteria[];
	additional_comments: string[];
}
