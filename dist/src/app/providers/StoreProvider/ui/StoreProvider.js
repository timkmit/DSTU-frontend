import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
export const StoreProvider = ({ children }) => {
    // const nav = useNavigate()
    const store = createReduxStore(
    // initialSchema as StateSchema,
    // asyncReducers as ReducersMapObject<StateSchema>,
    // nav
    );
    return _jsx(Provider, { store: store, children: children });
};
