export interface Evaluation_criteria {
	name: string;
	rating: number;
	pros: string[];
	cons: string[];
	emotional_assessment: string;
}

export interface Recommendation {
	text: string;
}

export interface Summary {
	evaluation_criteria: Evaluation_criteria[];
	recommendations: Recommendation[];
}

export interface EventSubjectSummary {
	status: string;
	summary: Summary;
}