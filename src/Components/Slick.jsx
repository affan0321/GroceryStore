import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slick.css'

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
        <ul style={{ margin: "0px" }}> {dots.slice(0, 5)} </ul>
      ),
    
  };
  return (
    <Slider {...settings}>
        
      <div>
        <img src="https://springs.com.pk/cdn/shop/files/Web_Banner_-_WOW_OFFER_-_25_2.png?v=1745557891&width=1370" alt="" />
      </div>
      <div>
        <img src="https://springs.com.pk/cdn/shop/files/PEPSICOBANNER.jpg?v=1743659904&width=1370" alt="" />
      </div>
      <div>
        <img src="https://springs.com.pk/cdn/shop/files/metro_web_summer_-_desk.png?v=1744971944&width=1370" alt="" />
      </div>
      <div>
        <img src="https://springs.com.pk/cdn/shop/files/drinks_banners_2_2.jpg?v=1743771448&width=1370" alt="" />
      </div>
      <div>
        <img src="https://springs.com.pk/cdn/shop/files/1880-X-720.jpg?v=1744287996&width=1370" alt="" />
      </div>
      
    </Slider>
  );
}