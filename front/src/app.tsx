import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    render() {
        return <h1>Hello World, what's up?! 
        </h1>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);
