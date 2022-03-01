import * as React from "react";
import RepositoriesList from "./components/RepositoriesList";

const App: React.FC = props => {
    return (
        <div>
            <h1>Search for a Package</h1>
            <RepositoriesList />
        </div>
    );
};

export default App;
