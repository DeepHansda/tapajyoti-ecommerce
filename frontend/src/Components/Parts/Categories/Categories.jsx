import React from "react";
import Slider from "react-slick";
import Data from "./Data";
import img from "./img.jpeg";
import "./categories.css";
export default function Categories() {
  const settings = {
   
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint:2000,
        settings:{
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint:1200,
        settings:{
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint:810,
        settings:{
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
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
                  <div className="cate-item" key={index}>
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
