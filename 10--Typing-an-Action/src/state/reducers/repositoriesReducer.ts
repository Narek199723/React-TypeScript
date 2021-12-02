interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  //& payload? here we mean that it can have or it can not have
  payload?: any;
}

// * so in React Action is going to be an object where every object that must have a type property, and optionally it can have a payload property
const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    // &  This is an action
    case "search_repositories":
      return { loading: true, error: null, data: [] };
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
