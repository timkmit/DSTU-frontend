import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from "./Stack";
export const HStack = (props) => {
    return _jsx(Stack, Object.assign({ direction: "row" }, props));
};
