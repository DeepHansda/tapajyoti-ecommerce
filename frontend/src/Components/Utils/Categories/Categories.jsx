import React from "react";
import Slider from "react-slick";
import Data from "./Data";
import img from "./img.jpeg";
import "./categories.css";
import { useNavigate } from "react-router-dom";
// import navigator from "../navigator";
export default function Categories() {
  const settings = {
    dots: false,
    arrows: true,
    // autoplay: true,
    speed: 4000,
    infinite: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  const navigate = useNavigate()

  const navigator = (value)=>{
    navigate(`allProducts?category=${value}`)
  }
  return (
    <div className="categories">
      <div className="categories-container">
        <div className="categories-title">
          <h2>Categories</h2>
        </div>

        <div className="categories-list">
          <div className="categories-list-container">
            <Slider {...settings}>
              {Data.map((value, index) => {
                return (
                  <div className="cate-item" key={index} onClick={() =>navigator(value.name)}>
                    <div className="cate-item-img">
                      <img src={img} alt="icon" />
                    </div>

                    <div className="cate-item-title">
                      <p>{value.name}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
