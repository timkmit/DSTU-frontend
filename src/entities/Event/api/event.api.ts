import { rtkApi } from "@/shared/api/rtkApi";
import { Event, ExtandedEvent } from "../model/types/Event";

const eventApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllEvents: build.query<Event[], string>({
			query: (city: string) => `/get_events?city=${city}`,
		}),
		getEvent: build.query<ExtandedEvent, string>({
			query: (id: string) => `/get_event/${id}`,
		}),
	}),
});

export const { useGetAllEventsQuery, useGetEventQuery } = eventApi;
