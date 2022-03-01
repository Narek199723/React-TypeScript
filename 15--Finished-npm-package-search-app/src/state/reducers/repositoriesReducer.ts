import { ActionType } from "../actionTypes";
import { Action } from "../actions";

interface RepositoriesStateI {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const repositoriesReducer = (
    state: RepositoriesStateI = initialState,
    action: Action
): RepositoriesStateI => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };

        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };

        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };

        default:
            return state;
    }
};
export default repositoriesReducer;
