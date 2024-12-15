export enum AppRoutes {
	TEST = "TEST",
	ERROR = "ERROR",
	EVENT_LIST = "EVENT_LIST",
	EVENT_BY_ID = "EVENT_BY_ID",
	SUBJECT_LIST = "SUBJECT_LIST",
	SUBJECT_BY_ID = "SUBJECT_BY_ID",
	ADMIN_PAGE = "ADMIN_PAGE",
	FEEDBACK_PAGE = "FEEDBACK_PAGE",
	MAIN = "",
}

export const getRouteMain = () => "/";
export const getRouteTest = () => "/test";
export const getRouteError = () => "/error";
export const getRouteEventList = () => "/event";
export const getRouteEventById = (id: string) => `/event/${id}`;
export const getRouteSubjectList = () => `/subject`;
export const getRouteSubjectById = (id: string) => `/subject/${id}`;
export const getRouteAdminPage = () => `/adminpage`;
export const getRouteFeedbackPage = () => `/feedback`;
