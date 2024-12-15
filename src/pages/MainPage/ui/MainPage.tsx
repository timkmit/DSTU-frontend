import { useSystemActions } from "@/entities/System";
import { getRouteEventList } from "@/shared/consts/router";
import { Button } from "@/shared/ui/Button";
import { Paper } from "@/shared/ui/Paper";
import { Typography } from "@/shared/ui/Text";
import { PageLoader } from "@/widgets/PageLoader";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
	// const { data, isLoading } = useGetCitiesQuery();
	const data = ["Шахты", "Ростов-на-Дону"];
	const isLoading = false;
	const { setCity } = useSystemActions();
	const nav = useNavigate();

	if (isLoading) {
		return <PageLoader />;
	}

	const handleCity = (value: string) => () => {
		setCity(value);
		nav(getRouteEventList());
	};

	return (
		<Paper className="flex justify-center items-center flex-1">
			<Paper variant="white" className="p-4 rounded-xl ">
				<Typography.Title className="m-3" as="h2">
					Выбор города
				</Typography.Title>
				{data?.map((value) => (
					<Button onClick={handleCity(value)} variant="text">
						{value}
					</Button>
				))}
			</Paper>
		</Paper>
	);
};
