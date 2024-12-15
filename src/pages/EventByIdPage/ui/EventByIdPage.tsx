import { BarChart, useLazyGetEventSummaryQuery } from "@/entities/Analysis";
import { EventSubjectSummary } from "@/entities/Analysis/model/types/Sumary";
import { useGetEventQuery } from "@/entities/Event";
import { useAddEventReviewMutation } from "@/entities/Reviews";
import { useAppSelector } from "@/shared/lib/hooks";
import { Button } from "@/shared/ui/Button";
import { TextField } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Modal } from "@/shared/ui/Modal";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventByIdPage = () => {
	const { id } = useParams<{ id: string }>();
	const { city } = useAppSelector((state) => state.system);
	const { isLoading, data: event, refetch } = useGetEventQuery({ city, id: id! });
	const [getSummary, { isLoading: isSummaryLoading }] = useLazyGetEventSummaryQuery();
	const [currentSummary, setCurrentSummary] = useState<null | EventSubjectSummary>(null);
	const [addReview] = useAddEventReviewMutation();
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState<{
		author: string;
		positive_comment?: string;
		negative_comment?: string;
		additionally?: string;
		rating?: number;
	}>({ author: "" });

	const fetchSummary = async () => {
		try {
			if (event && city && id && event.reviews.length !== 0) {
				if (!event.summary) {
					const summary = await getSummary({
						city,
						related_id: Number(id),
						review_ids: event.reviews.slice(0, 10).map(({ id }) => id),
					}).unwrap();
					setCurrentSummary(summary);
				} else {
					setCurrentSummary(event?.summary.content.summary);
				}
			}
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchSummary();
	}, [event, city, id]);

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await addReview({ ...formData, event_id: Number(id), city });
		await refetch();
		setIsOpen(false);
	};

	if (isLoading) {
		return (
			<Paper className="flex flex-1 justify-center items-center p-3">
				<Loader />
			</Paper>
		);
	}

	if (!event) {
		return (
			<Paper className="flex flex-1 justify-center items-center p-3">
				<Typography.Title as="h3">Простите, мероприятия нет</Typography.Title>
			</Paper>
		);
	}
	const { average_rating, name, number_of_reviews, reviews } = event;

	return (
		<>
			<Modal onClose={() => setIsOpen(false)} isOpen={isOpen} title="Новый отзыв">
				<form className="flex flex-col gap-2 p-2 mt-3" onSubmit={onSubmit}>
					<TextField
						required
						label="Автор"
						value={formData.author}
						onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
					/>
					<TextField
						label="Плюсы"
						value={formData.positive_comment}
						onChange={(e) => setFormData((prev) => ({ ...prev, positive_comment: e.target.value }))}
					/>
					<TextField
						label="Минусы"
						value={formData.negative_comment}
						onChange={(e) => setFormData((prev) => ({ ...prev, aunegative_commentthor: e.target.value }))}
					/>
					<TextField
						label="Дополнительно"
						value={formData.additionally}
						onChange={(e) => setFormData((prev) => ({ ...prev, additionally: e.target.value }))}
					/>
					<Stars
						starClassname="h-8 w-8"
						rating={formData.rating || 0}
						onStarClick={(starNumber) => setFormData((prev) => ({ ...prev, rating: starNumber }))}
					/>
					<Button variant="large" className="mt-2">
						Отправить
					</Button>
				</form>
			</Modal>
			<Paper className="flex flex-col gap-4 flex-1 p-3">
				<div className="flex flex-col gap-2">
					<Typography.Title as="h3">{name}</Typography.Title>
					<Typography.Title as="h4">Средняя оценка: {average_rating}</Typography.Title>
				</div>
				{isSummaryLoading ? (
					<div className="flex p-4 justify-center items-center">
						<Loader />
					</div>
				) : !currentSummary || event.reviews.length !== 0 ? (
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
					<div className="flex justify-between items-center my-2">
						<Typography.Title className="my-2" as="h4">
							Количество отзывов: {number_of_reviews}
						</Typography.Title>
						<Button onClick={() => setIsOpen(true)}>Новый отзыв</Button>
					</div>
					<div className="flex flex-col gap-3">
						{reviews.map((review) => (
							<Paper variant="white" className="shadow-md rounded-md p-3 flex flex-col gap-2">
								<Typography.Paragraph variant="button">
									Автор: {review.author ? review.author : "Отсутствует"}
								</Typography.Paragraph>
								<Typography.Paragraph variant="body">
									Плюсы: {review.positive_comment ? review.positive_comment : "Отсутствует"}
								</Typography.Paragraph>
								<Typography.Paragraph variant="body">
									Минусы: {review.negative_comment ? review.negative_comment : "Отсутствует"}
								</Typography.Paragraph>
								<Typography.Paragraph variant="caption">
									Доп.: {review.additionally ? review.additionally : "Отсутствует"}
								</Typography.Paragraph>
								<Stars starClassname="h-6 w-6" rating={review.rating} />
							</Paper>
						))}
					</div>
				</div>
			</Paper>
		</>
	);
};

export default EventByIdPage;
