import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style.css";


class App extends React.Component {
    render() {
        return <div>
            <div className="header" >
                <h1 style={{color: "red"}}>Gullbog</h1>

            </div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
