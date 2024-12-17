import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
export const useDispatchedActions = (actions) => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actions, dispatch);
};
