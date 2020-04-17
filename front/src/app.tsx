import * as React from "react";
import * as ReactDOM from "react-dom";
import "../src/components/style.css";


class App extends React.Component {
    render() {
        return <div>
            <div className="header" >
                <h1 style={{color: "red"}}>Gullbog</h1>
            </div>
            <div className="flex-grid">
                <div className="col">Column</div>
                <div className="col">
                    <div id="game-board">Game Board</div>
                </div>
                <div className="col">Column</div>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app"),
);
