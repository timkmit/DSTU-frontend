import { rtkApi } from "@/shared/api/rtkApi";
export const eventApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllEvents: build.query({
            query: (city) => `/get_events?city=${city}`,
        }),
        getEvent: build.query({
            query: ({ city, id }) => `/get_event/?city=${city}&id=${id}`,
        }),
        addEvent: build.mutation({
            query: ({ event_name, place, city }) => ({
                url: `/add_event?city=${encodeURIComponent(city)}`,
                method: "POST",
                body: {
                    event_name,
                    place,
                },
            }),
        }),
    }),
});
export const { useGetAllEventsQuery, useGetEventQuery, useAddEventMutation } = eventApi;
