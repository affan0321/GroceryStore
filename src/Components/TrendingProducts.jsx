import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingProducts.css";
import { Link } from "react-router-dom";

import React from "react";
import Slider from "react-slick";

export default function TrendingProducts() {
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
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
  };

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <Slider {...settings}>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
            <div className="card-body">
              <h3 className="card-title">Mango</h3>
              <p className="card-price">$80.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/freshProducts">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2luZyUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
            <div className="card-body">
              <h3 className="card-title">Cooking Oil</h3>
              <p className="card-price">$200.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Pantry">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1582981760753-b52aae38f237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TnVnZ2V0c3xlbnwwfHwwfHx8MA%3D%3D" />
            <div className="card-body">
              <h3 className="card-title">Chicken Nuggets</h3>
              <p className="card-price">$350.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Dairy">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://www.dsmonline.pk/media/catalog/product/cache/e626209f6586797a49e0d0a395e17e33/i/m/image_2023-04-08_112346880.png" />
            <div className="card-body">
              <h3 className="card-title">Olpers Milk</h3>
              <p className="card-price">$300.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Dairy">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
        <div className="slide-box">
          <div className="card">
            <span className="badge">Fresh</span>
            <img style={{ height: "180px" }} src="https://images.unsplash.com/photo-1519666213631-be6e024eac6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwc2F1Y2V8ZW58MHx8MHx8fDA%3D" />
            <div className="card-body">
              <h3 className="card-title">Hot Sauce</h3>
              <p className="card-price">$1000.00</p>
              <button className="card-button">
                <Link className="l1" style={{ textDecoration: "none !important" }} to="/Pantry">Shop Now</Link>
              </button>
            </div>
          </div>      </div>
      </Slider>

    </div>

  );
}
