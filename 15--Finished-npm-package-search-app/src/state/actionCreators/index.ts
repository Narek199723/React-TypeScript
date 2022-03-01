import axios from "axios";
import { ActionType } from "../actionTypes";
import { Action } from "../actions";
import { Dispatch } from "react";

export const searchRepositories =
    (term: string) => async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                "https://registry.npmjs.org/-//v1/search",
                {
                    params: {
                        text: term,
                    },
                }
            );
            console.log(data);
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: data.objects.map((pack: any) => pack.package.name),
            });
        } catch (error: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: error.message,
            });
        }
    };
