import React from "react";
import ReactDOM from "react-dom";

import ScrollAnimation from 'react-animate-on-scroll';
import Link from "react-router-dom";


const YellowButton = function (props) {
    return (
        <ScrollAnimation animateIn="fadeInUp" initiallyVisible={false} animateOnce={true}>
            <div>
                <a className="join-now-link" href={props.urlPath}>
                    <span className="orange-button-text">{props.displayText}</span>
                </a>
            </div>
        </ScrollAnimation>
    );
};

const DotPatternSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="dot-pattern-svg" width="3" height="3" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" />
            </pattern>
        </defs>
        <rect fill="url(#dot-pattern-svg)" width="100%" height="100%" />
    </svg>
);

export default class IndexJoin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row" id="mesa21-join">
                <div className="layered-block">

                    <DotPatternSVG />
                    <span className="transparent-block">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h2>Join Our Mailing List</h2>
                                    <p>For updates on specials and live music events!</p>
                                    <YellowButton displayText="JOIN NOW" urlPath="#" />
                                </div>
                                <div className="col">
                                    <h2>Join Our Loyalty Program</h2>
                                    <p>For exclusive deals!</p>
                                    <YellowButton displayText="JOIN NOW" urlPath="#" />
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}
