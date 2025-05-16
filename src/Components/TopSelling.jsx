import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSelling.css";
import { Link } from "react-router-dom";

import React from "react";
import Slider from "react-slick";

export default function TopSelling() {
  const NextArrow = ({ onClick }) => {
    return <div className="next" onClick={onClick}></div>;
  };

  const PrevArrow = ({ onClick }) => {
    return <div className="prev" onClick={onClick}></div>;
  };

  var settings = {
    dots: false, // Disable dots
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <NextArrow />, // Use the custom right button
    prevArrow: <PrevArrow />, // Use the custom left button
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1570978561297-793391262fea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhY2h8ZW58MHx8MHx8fDA%3D" />
            <div className="card-body">
              <h3 className="card-title">Peach</h3>
              <p className="card-price">$90.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/freshProducts">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://media.istockphoto.com/id/1059744398/photo/hand-holding-chocolate-almonds-ice-cream-bar-isolate-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=N6R6CskNBhxmNWuWWYx7yna1c8fhDpUey5WOLlMJ1tU=" />
            <div className="card-body">
              <h3 className="card-title">Magnum</h3>
              <p className="card-price">$200.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Dairy">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1632054010678-7f2e5a1a7355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVzY2FmZSUyMGNvZmZlfGVufDB8fDB8fHww" />
            <div className="card-body">
              <h3 className="card-title">Nescafe Coffee</h3>
              <p className="card-price">$700.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Pantry">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://media.istockphoto.com/id/155099605/photo/overcooked-cinnamon-and-sugar-muffin.webp?a=1&b=1&s=612x612&w=0&k=20&c=BAq2z_IYQBsOtq8XFZOR9wlaHEoKcfj4Ig89oOiRL-w=" />
            <div className="card-body">
              <h3 className="card-title">Muffins</h3>
              <p className="card-price">$20.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Bakery">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://media.istockphoto.com/id/155285564/photo/a-close-up-of-a-stack-of-dark-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=U3dCXMQW3v9vD6r3axQNNEFHpB08oiWF6cu2UdqUMSg=" />
            <div className="card-body">
              <h3 className="card-title">Dark chocolate</h3>
              <p className="card-price">$500.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Bakery">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
      </Slider>

    </div>

  );
}
