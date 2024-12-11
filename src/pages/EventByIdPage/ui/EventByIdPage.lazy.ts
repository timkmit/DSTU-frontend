import { lazy } from "react";

export const LazyEventByIdPage = lazy(async () => await import("./EventByIdPage"));
