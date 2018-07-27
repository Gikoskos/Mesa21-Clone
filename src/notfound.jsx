import React from "react";
import ReactDOM from "react-dom";


export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);

        document.title = "Mesa21 - 404 Not Found";
    }

    render() {
        return (
            <div className="row" id="mesa21-notfound">
                <h1>404: FAILED TO FIND THIS PAGE</h1>
            </div>
        );
    }
}
