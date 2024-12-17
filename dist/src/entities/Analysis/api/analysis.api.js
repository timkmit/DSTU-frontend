var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { rtkApi } from "@/shared/api/rtkApi";
export const analysisApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getEventSummary: build.query({
            query: (_a) => {
                var { city } = _a, body = __rest(_a, ["city"]);
                return ({ url: `/generate_summary_events?city=${city}`, body, method: "POST" });
            },
        }),
        getSubjectSummary: build.query({
            query: (_a) => {
                var { city } = _a, body = __rest(_a, ["city"]);
                return ({ url: `/generate_summary_subjects/?city=${city}`, body, method: "POST" });
            },
        }),
        checkGen: build.query({
            query: () => ({
                url: "/check",
            }),
        }),
    }),
});
export const { useLazyGetEventSummaryQuery, useLazyGetSubjectSummaryQuery } = analysisApi;
