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
	rating: number;
	review: string;
}

export interface Criteria {
	name: string;
	reviews: Review[];
	average_rating: number;
	number_of_reviews: number;
}

export interface ExpandedSubject {
	analysis_summary: Analysis_summary;
	criteria: Criteria[];
	summary_comments: string;
}