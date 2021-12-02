import { Fragment } from "react";
import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App = () => {

  return (
    <Fragment>
      {/* <GuestList /> */}
      <UserSearch />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
