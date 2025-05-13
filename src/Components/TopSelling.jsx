import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TopSelling.css";

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
    <div style={{width:"80%",margin:"0 auto"}}>
    <Slider {...settings}>
      <div className="slide-box">
      <div className="card">
                    <span className="badge">Fresh</span>
                    <img style={{height:"180px"}} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
                    <div className="card-body">
                      <h3 className="card-title">Mango</h3>
                      <p className="card-price">$80.00</p>
                      <button className="card-button" onClick={() => addToCart(product)}>
                        Shop Now
                      </button>
                    </div>
                  </div>      </div>
      <div className="slide-box">
      <div className="card">
                    <span className="badge">Fresh</span>
                    <img style={{height:"180px"}} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
                    <div className="card-body">
                      <h3 className="card-title">Mango</h3>
                      <p className="card-price">$80.00</p>
                      <button className="card-button" onClick={() => addToCart(product)}>
                        Shop Now
                      </button>
                    </div>
                  </div>      </div>
      <div className="slide-box">
      <div className="card">
                    <span className="badge">Fresh</span>
                    <img style={{height:"180px"}} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
                    <div className="card-body">
                      <h3 className="card-title">Mango</h3>
                      <p className="card-price">$80.00</p>
                      <button className="card-button" onClick={() => addToCart(product)}>
                        Shop Now
                      </button>
                    </div>
                  </div>      </div>
      <div className="slide-box">
      <div className="card">
                    <span className="badge">Fresh</span>
                    <img style={{height:"180px"}} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
                    <div className="card-body">
                      <h3 className="card-title">Mango</h3>
                      <p className="card-price">$80.00</p>
                      <button className="card-button" onClick={() => addToCart(product)}>
                        Shop Now
                      </button>
                    </div>
                  </div>      </div>
      <div className="slide-box">
      <div className="card">
                    <span className="badge">Fresh</span>
                    <img style={{height:"180px"}} src="https://images.unsplash.com/photo-1501746877-14782df58970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" />
                    <div className="card-body">
                      <h3 className="card-title">Mango</h3>
                      <p className="card-price">$80.00</p>
                      <button className="card-button" onClick={() => addToCart(product)}>
                        Shop Now
                      </button>
                    </div>
                  </div>      </div>
    </Slider>
   
    </div>
    
  );
}
