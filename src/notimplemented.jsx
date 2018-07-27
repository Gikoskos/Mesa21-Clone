import React from "react";
import ReactDOM from "react-dom";


export default class NotImplementedPage extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Mesa21 - Not implemented";
    }

    render() {
        return (
            <div className="row" id="mesa21-notimplemented">
                <h1>This path is correct but the page has not been implemented yet.</h1>
            </div>
        );
    }
}
