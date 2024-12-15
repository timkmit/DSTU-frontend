import { lazy } from "react";

export const LazyFeedbackPage = lazy(async () => await import('./FeedbackPage'))