import { rtkApi } from "@/shared/api/rtkApi";
import { Event, ExtandedEvent } from "../model/types/Event";

export const eventApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllEvents: build.query<Event[], string>({
			query: (city: string) => `/get_events?city=${city}`,
		}),
		getEvent: build.query<ExtandedEvent, {city: string, id: string}>({
			query: ({city, id}) => `/get_event/?city=${city}&id=${id}`,
		}),
		addEvent: build.mutation<void, { event_name: string; place: string; city: string }>({
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
