import React, { useEffect, useState } from 'react';
//Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//API
import { sliderAPI } from "../../utils/apis";
import axios from "axios";
//CSS
import "./slider.css";

const SimpleSlider = () => {
    const [sliderDetails, setSliderDetails] = useState(null)

    useEffect(() => {
        axios(sliderAPI)
            .then((res) => {
                setSliderDetails(res.data?.items)
            })
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings}>
                {sliderDetails?.map(({ alt, img }) =>
                    <div>
                        <img
                            className="slider_img"
                            src={`https://www.landmarkmlp.com/js-plugin/owl.carousel/demos/${img}`}
                            alt={alt}
                        />
                    </div>
                )}
            </Slider>
        </div>
    );
}

export default SimpleSlider;
