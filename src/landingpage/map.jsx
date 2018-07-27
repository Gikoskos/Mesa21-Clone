import React from "react";
import ReactDOM from "react-dom";


export default class IndexMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row" id="mesa21-map">
                <div className="transparent-block"></div>
                <ul>
                    <li>
                        <h1>Mesa21</h1>
                        <p>2440 E Hwy 50</p>
                        <p>Clermont, FL 34711</p>
                        <p>Tel: 352-708-4980</p>
                    </li>
                    <br/>
                    <li>
                        <h1>MESA21</h1>
                        <p>1414 N Orange Ave</p>
                        <p>Orlando, FL 32804</p>
                        <p>Opening March 2017!</p>
                    </li>
                </ul>
                <iframe name="openmap"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-81.81140899658205%2C28.46778587131769%2C-81.52027130126955%2C28.688780610754364&amp;layer=mapnik">
                </iframe>
            </div>
        );
    }
}
