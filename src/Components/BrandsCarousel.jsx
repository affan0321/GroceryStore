// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './BrandsCarousel.css'

// import React from "react";
// import Slider from "react-slick";

// export default function BrandsCarousel() {

//     const NextArrow = ({ onClick }) => {
//         return (
//           <button className="slick-next custom-arrow" onClick={onClick}>
//             &gt; {/* Right Arrow Icon */}
//           </button>
//         );
//       };
    
//       const PrevArrow = ({ onClick }) => {
//         return (
//           <button className="slick-prev custom-arrow" onClick={onClick}>
//             &lt; {/* Left Arrow Icon */}
//           </button>
//         );
//       };

//   var settings = {
//     dots: false,
//     // infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // appendDots: (dots) => (
//     //     <ul style={{ margin: "0px" }}> {dots.slice(0, 5)} </ul>
//     //   ),
//     nextArrow: <NextArrow />, // Use the custom right button
//     prevArrow: <PrevArrow />, // Use the custom left button
//   };
//   return (
//     <Slider {...settings}>
        
//       <div>
//       <img src="https://springs.com.pk/cdn/shop/files/Web_Banner_-_WOW_OFFER_-_25_2.png?v=1745557891&width=1370" alt="" />
//       </div>
//       <div>
//         <img src="https://springs.com.pk/cdn/shop/files/PEPSICOBANNER.jpg?v=1743659904&width=1370" alt="" />
//       </div>
//       <div>
//         <img src="https://springs.com.pk/cdn/shop/files/metro_web_summer_-_desk.png?v=1744971944&width=1370" alt="" />
//       </div>
//       <div>
//         <img src="https://springs.com.pk/cdn/shop/files/drinks_banners_2_2.jpg?v=1743771448&width=1370" alt="" />
//       </div>
//       <div>
//         <img src="https://springs.com.pk/cdn/shop/files/1880-X-720.jpg?v=1744287996&width=1370" alt="" />
//       </div>
      
//     </Slider>
//   );
// }


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./BrandsCarousel.css";

// import React from "react";
// import Slider from "react-slick";

// export default function BrandsCarousel() {
//   const NextArrow = ({ onClick }) => {
//     return <div className="next" onClick={onClick}></div>;
//   };

//   const PrevArrow = ({ onClick }) => {
//     return <div className="prev" onClick={onClick}></div>;
//   };

//   var settings = {
//     dots: false, // Disable dots
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />, // Use the custom right button
//     prevArrow: <PrevArrow />, // Use the custom left button
//   };

//   return (
//     <Slider {...settings}>
//       <div className="div7">
//         <img
//           src="https://springs.com.pk/cdn/shop/files/Web_Banner_-_WOW_OFFER_-_25_2.png?v=1745557891&width=1370"
//           alt=""
//         />
//       </div>
//       <div>
//         <img
//           src="https://springs.com.pk/cdn/shop/files/PEPSICOBANNER.jpg?v=1743659904&width=1370"
//           alt=""
//         />
//       </div>
//       <div>
//         <img
//           src="https://springs.com.pk/cdn/shop/files/metro_web_summer_-_desk.png?v=1744971944&width=1370"
//           alt=""
//         />
//       </div>
//       <div>
//         <img
//           src="https://springs.com.pk/cdn/shop/files/drinks_banners_2_2.jpg?v=1743771448&width=1370"
//           alt=""
//         />
//       </div>
//       <div>
//         <img
//           src="https://springs.com.pk/cdn/shop/files/1880-X-720.jpg?v=1744287996&width=1370"
//           alt=""
//         />
//       </div>
//     </Slider>
//   );
// }


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BrandsCarousel.css";

import React from "react";
import Slider from "react-slick";

export default function BrandsCarousel() {
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
    <div>
    <Slider {...settings}>
      <div className="slide-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UWJ3muxK1-OTAX2k1DqQME2FR-GxWR3fDg&s" alt="" />
      </div>
      <div className="slide-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA34TjZanG-xD2uTttaW4daapj6uc1-paGfj5j9gBm-AYQ3-gl8J3MSOS_i-939ciGlZA&usqp=CAU" alt="" />
      </div>
      <div className="slide-box">Slide 3</div>
      <div className="slide-box">Slide 4</div>
      <div className="slide-box">Slide 5</div>
    </Slider>
    <div>
      <h1>Hello</h1>
    </div>
    </div>
    
  );
}
