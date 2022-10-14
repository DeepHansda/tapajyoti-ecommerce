import "./main.css";
import React, { Fragment } from "react";
import img from "../../assets/pexels-lukas-669615.jpg";
import img0 from "../../assets/img/FRu3TDxmd2tS6A23f216.jpg";
import Footer from "../Footer/Footer";
import MainSlider from "../Utils/Slider/Slider";
import Categories from "../Utils/Categories/Categories";
import ProductsContainer from "../Products/ProductsContainer";

import { Container, TextField, Button, CircularProgress } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Query from "../Utils/Query";
export default function Main() {
  return (
    <Fragment>
      <Navbar />
      <div className="main">
        <div className="main-container">
          <div className="main-slider">
            <div className="main-slider-container">
              <MainSlider />
            </div>
          </div>

          <div className="main-categories-container">
            <Categories />
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-container">
            <div className="showcase-details">
              <div className="showcase-details-title">
                <h2>About Us</h2>
              </div>
              <div className="showcase-details-para">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat assumenda itaque voluptates magnam aut laboriosam,
                  mollitia ipsum animi numquam facilis cupiditate molestiae,
                  suscipit laborum eum qui unde doloremque officiis quibusdam?
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ducimus illum non earum odit dolores quia, optio sed
                  temporibus veniam, autem magni incidunt maxime beatae. Quod
                  debitis itaque natus eligendi odio corporis atque esse iusto
                  reprehenderit, aliquam laboriosam vel minus excepturi. Nemo,
                  quisquam odit pariatur quasi illum sequi in repellat laborum
                  expedita aut culpa eaque neque dolore repellendus beatae
                  voluptas quo ipsam nesciunt doloribus similique! Illo
                  doloremque exercitationem unde quia praesentium.
                </p>
              </div>
              <div className="showcase-button-container">
                <button>Repair</button>
              </div>
            </div>

            <div className="showcase-images">
              <div className="showcase-images-container">
                <div className="showcase-image">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-brands-container">
          <Categories />
        </div>

        <div className="main-best-of">
          <div className="main-best-of-title">
            <h2>Brands</h2>
          </div>
          <div className="main-best-of-container">
            {/* <ProductsContainer /> */}
          </div>

          <div className="product-show-more">
            <button>Show More</button>
          </div>
        </div>

        <div className="main-rapair">
          <div className="main-rapair-container">
            <div className="rapair-title">
              <h2>Book a rapair</h2>
            </div>
            <div className="rapair-para">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam in similique ratione vitae suscipit dignissimos alias
                dolore tempora dolorem consequuntur quia maxime fuga nobis
                consequatur corrupti, exercitationem incidunt porro nulla
                eveniet numquam vel tempore? Dolor in vitae aliquam possimus
                minus!
              </p>
            </div>

            <div className="rapair-button">
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="main-best-of">
          <div className="main-best-of-title">
            <h2>Best Of</h2>
          </div>
          <div className="main-best-of-container">
            {/* <ProductsContainer /> */}
          </div>

          <div className="product-show-more">
            <button>Show More</button>
          </div>
        </div>

       <Query/>
      <Footer />
      </div>
    </Fragment>
  );
}
