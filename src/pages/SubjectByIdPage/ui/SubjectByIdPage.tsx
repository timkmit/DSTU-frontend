import { BarChart, useLazyGetSubjectSummaryQuery } from "@/entities/Analysis";
import { useGetSubjectQuery } from "@/entities/Subject";
import { useAppSelector } from "@/shared/lib/hooks";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EventSubjectSummary } from "../../../entities/Analysis/model/types/Sumary";

const SubjectByIdPage = () => {
	const { id } = useParams<{ id: string }>();
	const { city } = useAppSelector((state) => state.system);
	const { isLoading, data: subject } = useGetSubjectQuery({ city, id: id! });
	const [getSummary, { isLoading: isSummaryLoading }] = useLazyGetSubjectSummaryQuery();
	const [currentSummary, setCurrentSummary] = useState<null | EventSubjectSummary>(null);

	const fetchSummary = async () => {
		try {
			if (subject && city && id && subject.reviews.length !== 0) {
				if (!subject.summary) {
					const summary = await getSummary({
						city,
						related_id: Number(id),
						review_ids: subject.reviews.slice(0, 10).map(({ id }) => id),
					}).unwrap();
					setCurrentSummary(summary);
				} else {
					setCurrentSummary(subject?.summary.content.summary);
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchSummary();
	}, [subject, city, id]);

	if (isLoading) {
		return (
			<Paper className="flex flex-1 justify-center items-center p-3">
				<Loader />
			</Paper>
		);
	}

	if (!subject) {
		return (
			<Paper className="flex flex-1 justify-center items-center p-3">
				<Typography.Title as="h3">Простите, предмета нет</Typography.Title>
			</Paper>
		);
	}

	const { average_rating, name, number_of_reviews, reviews } = subject;

	return (
		<>
			<Paper className="flex flex-col gap-4 flex-1 p-3">
				<div className="flex flex-col gap-2">
					<Typography.Title as="h3">{name}</Typography.Title>
					<Typography.Title as="h4">Средняя оценка: {average_rating}</Typography.Title>
				</div>
				{isSummaryLoading ? (
					<div className="flex p-4 justify-center items-center">
						<Loader />
					</div>
				) : !currentSummary || subject.reviews.length !== 0 ? (
					<div className="flex p-4 justify-center items-center">
						<Typography.Title as="h3">Простите, анализ невозможен</Typography.Title>
					</div>
				) : (
					<div className="grid sm:grid-cols-[2fr_1fr] max-sm:grid-rows-2 gap-2 p-2 max-h-[90vh] min-h-[80vh]">
						<BarChart loading={isSummaryLoading} data={currentSummary?.summary.evaluation_criteria || []} />
						<Paper variant="white" className="flex flex-col gap-2  rounded-lg p-3">
							<Typography.Title as="h3">Рекомендации</Typography.Title>
							{currentSummary?.summary.recommendations.map(({ text }) => <Paper className="p-2">{text}</Paper>)}
						</Paper>
					</div>
				)}
				<div>
					<Typography.Title className="my-2" as="h4">
						Количество отзывов: {number_of_reviews}
					</Typography.Title>

					<div className="flex flex-col gap-2">
						{reviews.map((review) => (
							<Paper key={review.id} variant="white" className="shadow-md rounded-md p-3 flex flex-col gap-2">
								<Typography.Title as="h4">{review.comment}</Typography.Title>
								<Stars starClassname="h-8 w-8" rating={review.rating} />
							</Paper>
						))}
					</div>
				</div>
			</Paper>
		</>
	);
};

export default SubjectByIdPage;
