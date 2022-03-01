import { FormEvent, useState } from "react";
import { useActions } from "../hooks/useActions";
import { searchRepositories } from "../state/actionCreators/index";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface IRepositoriesListProps {}

const RepositoriesList: React.FC<IRepositoriesListProps> = props => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector(
        state => state.repositories
    );

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading ...</h3>}
            {!error && !loading && data.map((rep, i) => <h1 key={i}>{rep}</h1>)}
        </div>
    );
};

export default RepositoriesList;
