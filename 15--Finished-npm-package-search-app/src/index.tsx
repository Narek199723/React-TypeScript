import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./state/mainStorage";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
