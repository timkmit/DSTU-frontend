export interface SubjectReview {
	subject_id: number;
	group: string;
	rating: number;
	comment: string;
}

export interface EventReview {
	event_id: number;
	author: string;
	rating?: number;
	positive_comment?: string;
	negative_comment?: string;
	additionally?: string;
}