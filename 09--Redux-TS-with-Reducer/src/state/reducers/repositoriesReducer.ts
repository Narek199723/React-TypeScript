interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// &  Now putting : RepositoriesState before => we tell TS that whatever we are going to return from our function is going to be one of the types of RepositoriesState  
const reducer = (state: RepositoriesState, action: any): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { loading: true, error: null, data: [] }; //^ so now by putting : RepositoriesState we won't be able to return number here or just a [] or string[]
    case "search_repositories_success":
      return { loading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
export default reducer;
