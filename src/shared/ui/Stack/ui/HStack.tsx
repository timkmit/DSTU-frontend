import { FC } from "react";
import { FlexProps, Stack } from "./Stack";

type Props = Omit<FlexProps, "direction">;

export const HStack: FC<Props> = (props) => {
	return <Stack direction="row" {...props} />;
};
