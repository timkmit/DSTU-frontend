import { FC } from "react";
import { FlexProps, Stack } from "./Stack";

type Props = Omit<FlexProps, "direction">;

export const VStack: FC<Props> = (props) => {
	return <Stack direction="column" {...props} />;
};
