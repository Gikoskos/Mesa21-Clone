import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import fb_icon from "./assets/bxl-facebook.svg";
import yt_icon from "./assets/bxl-youtube.svg";
import ig_icon from "./assets/bxl-instagram.svg";

const SitemapLink = (props) => {
    let to_link = `/${props.urlPath}`;

    return (
        <p>
            <Link to={to_link}>{props.displayText}</Link>
        </p>
    );
};

const SocialMediaButton = (props) => {
    return (
        <a className="btn btn-link social-media-link" href={props.mediaLink}>
            <img src={props.imgSrc} width="23" height="23"/>
        </a>
    );
};

export default class SiteFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sitemap_links = [
            [ //first column
                { urlPath:"", displayText:"home" },
                { urlPath:"MenuComingSoon", displayText:"our food" },
                { urlPath:"OurStory", displayText:"our story" },
                { urlPath:"HappyHourFullServiceConcept", displayText:"happy hour & more" },
                { urlPath:"Photos", displayText:"photos" },
                { urlPath:"Videos", displayText:"videos" },
                { urlPath:"Login", displayText:"login" },
            ],
            [ //second column
                { urlPath:"CateringCS", displayText:"catering" },
                { urlPath:"Careers", displayText:"careers" },
                { urlPath:"ContactUs", displayText:"contact us" },
                { urlPath:"Directions", displayText:"directions" },
                { urlPath:"Reviews", displayText:"testimonials" },
                { urlPath:"ClermontLocation", displayText:"clermont location" },
                { urlPath:"LakeIvanhoeLocation", displayText:"lake ivanhoe location" }
            ]
        ];

        const ColumnLinks = [
            sitemap_links[0].map((link) =>
                <SitemapLink key={link.displayText} urlPath={link.urlPath} displayText={link.displayText} />
            ),
            sitemap_links[1].map((link) =>
                <SitemapLink key={link.displayText} urlPath={link.urlPath} displayText={link.displayText} />
            )
        ]

        return (
            <footer className="row" id="mesa21-footer">
                <div className="col social-media-links">
                    <h1>follow us</h1>
                    <div className="btn-group social-media-links">

                        <SocialMediaButton imgSrc={ig_icon} mediaLink="https://www.instagram.com/mesa21realmexican/" />
                        <SocialMediaButton imgSrc={fb_icon} mediaLink="https://www.facebook.com/mesa21realmexican/" />
                        <SocialMediaButton imgSrc={yt_icon} mediaLink="https://www.youtube.com/channel/UC1vsGgYd-KIl6aus5K1U3ug/videos?sort=dd&shelf_id=0&view=0/" />

                    </div>
                </div>
                <div className="col sitemap-links">
                    {ColumnLinks[0]}
                </div>
                <div className="col sitemap-links">
                    {ColumnLinks[1]}
                </div>
                <div className="col join-mailing-list">
                    <p>📧 join our mailing list</p>
                    <input type="search" placeholder="Enter your email"/>
                    <button type="button" className="btn btn-warning">Join Now</button>
                </div>
            </footer>
        );
    }
}
