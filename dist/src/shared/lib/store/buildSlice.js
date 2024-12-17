import { createSlice } from "@reduxjs/toolkit";
import { useDispatchedActions } from "../hooks/useDispatchedActions/useDispatchedActions";
export const buildSlice = (options) => {
    const slice = createSlice(options);
    // @ts-ignore
    const useActions = () => useDispatchedActions(slice.actions);
    return Object.assign(Object.assign({}, slice), { useActions });
};
