import { useGetSubjectQuery } from "@/entities/Subject";
import { useAppSelector } from "@/shared/lib/hooks";
import { Loader } from "@/shared/ui/Loader";
import { Paper } from "@/shared/ui/Paper";
import { Stars } from "@/shared/ui/Stars";
import { Typography } from "@/shared/ui/Text";
import { useParams } from "react-router-dom";

const SubjectByIdPage = () => {
	const { id } = useParams<{ id: string }>();
	const { city } = useAppSelector((state) => state.system);
	const { isLoading, data: subject } = useGetSubjectQuery({ city, id: id! });

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
