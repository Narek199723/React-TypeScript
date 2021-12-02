interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}

interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

const reducer = (
  state: RepositoriesState,
  // &  So here we tell TS that whenever we call action, it is going to be one of these actions and apply and satisfy to their types
  action:
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction
): RepositoriesState => {
  // & This is functioning like a type guard
  // if(action.type==='search_repositories_success'){
  // *  100% certainty that action satisfies the SearchRepositoriesSuccessAction interface
  //   action.payload

  // }

  switch (action.type) {
    // & These are also type guards
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      // *  100% certainty that action satisfies the SearchRepositoriesSuccessAction interface
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
