import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import buildURL from "./paths";


const MenuOptionItem = (props) => {
    let to_link = buildURL(props.urlPath);

    return (
        <span className="col menu-option">
            <Link className="menu-option-link" to={to_link}>{props.displayText}</Link>
        </span>
    );
};

const MenuOptionListItem = (props) => {
    let to_link = buildURL(props.urlPath);

    return (
        <li>
            <Link className="menu-option-link" to={to_link}>{props.displayText}</Link>
        </li>
    );
};

const MenuOptionList = (props) => {
    let opt_list = props.opts.map((opt) => {
        let arr = opt.split('#');

        return (<MenuOptionListItem urlPath={arr[0]} displayText={arr[1]} key={arr[1]} />);
    });

    return (
        <span className="col menu-option">
            <a className="menu-option-list-toggle menu-option-link" href="#">{props.displayText}</a>
            <div className="menu-option-list">
                <ul>
                    {opt_list}
                </ul>
            </div>
        </span>
    );
};

export default class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu_list_opts = [
            [
                'ClermontLocation#clermont',
                'LakeIvanhoeLocation#lake ivanhoe'
            ],
            [
                'Videos#videos',
                'Photos#photos',
                'Careers#Careers',
                'EmailJoin#mailing list',
                'Reviews#testimonials',
                'LoyaltyProgram#loyalty program'
            ]
        ];

        return (
            <header className="row" id="mesa21-nav-menu">

                <MenuOptionItem urlPath="MenuComingSoon" displayText="Our food" />
                <MenuOptionItem urlPath="OurStory" displayText="Our story" />
                <MenuOptionItem urlPath="HappyHourFullServiceConcept" displayText="happy hour & more" />

                <span className="col menu-logo">
                    <Link className="menu-option-link" to="/">
                        <img src={require("./assets/main_logo.png")}
                             width="150"
                             height="150"
                             alt="Mesa21 logo"/>
                    </Link>
                </span>

                <MenuOptionList opts={menu_list_opts[0]} displayText="locations"/>
                <MenuOptionItem urlPath="ContactUs" displayText="contact us" />
                <MenuOptionList opts={menu_list_opts[1]} displayText="more"/>

            </header>
        );
    }
}
