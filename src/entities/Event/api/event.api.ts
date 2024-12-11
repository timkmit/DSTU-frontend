import { rtkApi } from "@/shared/api/rtkApi";
import { Event, ExtandedEvent } from "../model/types/Event";

const eventApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllEvents: build.query<Event[], string>({
			query: (city: string) => `/get_events?city=${city}`,
		}),
		getEvent: build.query<ExtandedEvent, {city: string, id: string}>({
			query: ({city, id}) => `/get_event/?city=${city}&id=${id}`,
		}),
	}),
});

export const { useGetAllEventsQuery, useGetEventQuery } = eventApi;
