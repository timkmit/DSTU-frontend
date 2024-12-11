import { Event, useGetAllEventsQuery } from "@/entities/Event";
import { EventCard } from "@/entities/Event/ui/EventCard";
import { getRouteEventList, getRouteSubjectList } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EventListPage = () => {
	const nav = useNavigate();
	const { city } = useAppSelector((state) => state.system);
	const { isLoading, data } = useGetAllEventsQuery(city);
	const [search, setSearch] = useState("");
	const [currentData, setCuurentData] = useState<Event[]>([]);
	const [page, setPage] = useState(1);

	useEffect(() => {
		if (data) {
			setCuurentData(data.slice(0, 20));
		}
	}, [data]);

	useEffect(() => {
		let newData = [...(data?.slice((page - 1) * 20, page * 20) || [])];
		console.log(newData);
		if (search !== "" && search) {
			newData = currentData.filter(
				({ name, average_rating }) =>
					name.toLowerCase().includes(search.toLowerCase()) ||
					String(average_rating).toLowerCase().includes(search.toLowerCase()),
			);
		}
		setCuurentData(newData);
	}, [search, data, page]);

	if (isLoading) {
		return (
			<Paper className="flex-1 flex flex-col p-2">
				<div className="flex gap-3 m-3">
					<Button onClick={() => nav(getRouteSubjectList())} variant="link-main">
						Предметы
					</Button>
					<Button onClick={() => nav(getRouteEventList())} variant="link-main">
						Мероприятия
					</Button>
					<TextField value={search} onChange={(e) => setSearch(e.target.value)} label="Поиск..." />
				</div>
				<div className="flex-1 flex justify-center items-center">
					<Loader />
				</div>
			</Paper>
		);
	}

	return (
		<Paper className="flex-1 flex flex-col p-2">
			<div className="flex gap-3 m-3">
				<Button onClick={() => nav(getRouteSubjectList())} variant="link-main">
					Предметы
				</Button>
				<Button onClick={() => nav(getRouteEventList())} variant="link-main">
					Мероприятия
				</Button>
				<TextField value={search} onChange={(e) => setSearch(e.target.value)} label="Поиск..." />
			</div>
			{currentData.length !== 0 ? (
				<>
					<Typography.Title className="m-2" as="h4">
						Страница {page}
					</Typography.Title>
					<div className="grid flex-1 grid-cols-3 max-sm:grid-cols-1 max p-2 gap-3">
						{currentData.map((event) => (
							<EventCard event={event} key={event.id} />
						))}
					</div>
					<div className="flex justify-center gap-3 m-3">
						{page !== 1 && (
							<Button onClick={() => setPage((prev) => prev - 1)} variant="link-main">
								Назад
							</Button>
						)}
						{page * 20 < Number(data?.length) && (
							<Button onClick={() => setPage((prev) => prev + 1)} variant="link-main">
								Вперед
							</Button>
						)}
					</div>
				</>
			) : (
				<div className="flex flex-1 justify-center items-center">
					<Typography.Title as="h3">Простите, нет мероприятий</Typography.Title>
				</div>
			)}
		</Paper>
	);
};

export default EventListPage;
