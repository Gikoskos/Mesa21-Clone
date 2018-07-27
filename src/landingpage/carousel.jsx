import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

import img1 from "../assets/carousel/1.jpg";
import img2 from "../assets/carousel/2.jpg";
import img3 from "../assets/carousel/3.jpg";
import img4 from "../assets/carousel/4.jpg";
import img5 from "../assets/carousel/5.jpg";
import img6 from "../assets/carousel/6.jpg";
//const img_path = "assets/carousel/#.jpg";


const CarouselImage = (props) => {
    return (
        <div>
            <img src={props.srcPath} width="313" height="235"/>
        </div>
    );
};

export default class IndexCarousel extends React.Component {
    constructor(props) {
        super(props);

        /*this.carouselImgs = [];

        for (let i = 1; i <= 6; i++) {
            this.carouselImgs.push(
                <SocialMediaButton key={i} srcPath={img_path.replace('#', i.toString())} />
            );
        }*/
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
                        <CarouselImage srcPath={img1}/>
                        <CarouselImage srcPath={img2}/>
                        <CarouselImage srcPath={img3}/>
                        <CarouselImage srcPath={img4}/>
                        <CarouselImage srcPath={img5}/>
                        <CarouselImage srcPath={img6}/>
                    </Slider>
                </div>
            </div>
        );
    }
}
