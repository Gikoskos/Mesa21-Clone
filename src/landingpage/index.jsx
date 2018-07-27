import React from "react";
import ReactDOM from "react-dom";

import IndexVideo from "./video";
import IndexMain from "./main";
import IndexJoin from "./join";
import IndexCarousel from "./carousel";
import IndexMap from "./map";

export default class IndexPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <IndexMain />
                <IndexJoin />
                <IndexCarousel />
                <IndexMap />
            </React.Fragment>
        );
    }
}
