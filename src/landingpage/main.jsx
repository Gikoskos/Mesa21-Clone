import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import fb_icon from "../assets/bxl-facebook.svg";
import yt_icon from "../assets/bxl-youtube.svg";
import ig_icon from "../assets/bxl-instagram.svg";


const SocialMediaButton = (props) => {
    return (
        <a className="btn btn-link social-media-link" href={props.mediaLink}>
            <img src={props.imgSrc} width="23" height="23"/>
        </a>
    );
};

export default class IndexMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row" id="mesa21-main">
                <div className="row">
                    <div className="col jumbotron mission-statement">
                        <h1>OUR STORY</h1>
                        <p>Our <strong>mission</strong> is to redefine the meaning of real Mexican dining on American soil. MESA21 resembles a place of freedom, growth, and adventure just like the age 21. From the moment you walk through our doors it won't be long before the fun, family oriented atmosphere becomes your number one spot. </p>
                        <ScrollAnimation animateIn="fadeInUp" initiallyVisible={false} animateOnce={true}>
                            <Link className="row read-more-link" to="/OurStory">
                                <span className="orange-button-text">READ MORE</span>
                            </Link>
                            <div className="btn-group social-media-links">
                                <SocialMediaButton
                                    imgSrc={fb_icon}
                                    mediaLink="https://www.facebook.com/mesa21realmexican/"
                                />
                                <SocialMediaButton
                                    imgSrc={yt_icon}
                                    mediaLink="https://www.youtube.com/channel/UC1vsGgYd-KIl6aus5K1U3ug/videos?sort=dd&shelf_id=0&view=0"
                                />
                                <SocialMediaButton
                                    imgSrc={ig_icon}
                                    mediaLink="https://www.instagram.com/mesa21realmexican/"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col">
                        <img className="img-fluid" src={require("../assets/main_image.jpg")}/>
                    </div>
                </div>
            </div>
        );
    }
}
