import { Subject, SubjectCard, useGetAllSubjectsQuery } from "@/entities/Subject";
import { getRouteEventList, getRouteSubjectList } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SubjectListPage = () => {
	const nav = useNavigate();
	const { city } = useAppSelector((state) => state.system);
	const { data, isLoading } = useGetAllSubjectsQuery(city);
	const [search, setSearch] = useState("");
	const [currentData, setCuurentData] = useState<Subject[]>([]);
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
			<Paper className="flex-1 p-2 flex flex-col" variant="primary">
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
		<Paper className="flex-1 p-2" variant="primary">
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
					<div className="grid grid-cols-3 max-sm:grid-cols-1 max p-2 gap-3">
						{currentData.map((subject) => (
							<SubjectCard subject={subject} key={subject.id} />
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
				<div className="flex justify-center items-center min-w-20">
					<Typography.Title as="h3">Простите, нет предметов</Typography.Title>
				</div>
			)}
		</Paper>
	);
};

export default SubjectListPage;
