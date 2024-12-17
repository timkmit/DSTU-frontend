import { lazy } from "react";
export const LazyEventListPage = lazy(async () => await import("./EventListPage"));
