import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

export const reducers = combineReducers({
    repositories: repositoriesReducer,
});

// * This is describing the type in our redux store
export type RootState = ReturnType<typeof reducers>;
