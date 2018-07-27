import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";


const img_path = "assets/carousel/#.jpg";


const SocialMediaButton = (props) => {
    return (
        <div>
            <img src={props.srcPath} width="313" height="235"/>
        </div>
    );
};

export default class IndexCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.carouselImgs = [];

        for (let i = 1; i <= 6; i++) {
            this.carouselImgs.push(
                <SocialMediaButton key={i} srcPath={img_path.replace('#', i.toString())} />
            );
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000, //in ms
            focusOnSelect: true,
            variableWidth: true,
            centerMode: true
        };

        return (
            <div className="row" id="mesa21-carousel">
                <div className="container">
                    <Slider {...settings}>
                        {this.carouselImgs}
                    </Slider>
                </div>
            </div>
        );
    }
}
