import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from "./Stack";
export const VStack = (props) => {
    return _jsx(Stack, Object.assign({ direction: "column" }, props));
};
