import "./main.css";
import React from "react";
import img from "../../assets/pexels-lukas-669615.jpg";
import img0 from "../../assets/img/FRu3TDxmd2tS6A23f216.jpg";
import Footer from "../Footer/Footer";
import MainSlider from "../Parts/Slider/Slider";
import Categories from "../Parts/Categories/Categories";
import ProductsContainer from "../Products/ProductsContainer";

import {
  Container,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
export default function Main() {
  return (
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
                Ducimus illum non earum odit dolores quia, optio sed temporibus
                veniam, autem magni incidunt maxime beatae. Quod debitis itaque
                natus eligendi odio corporis atque esse iusto reprehenderit,
                aliquam laboriosam vel minus excepturi. Nemo, quisquam odit
                pariatur quasi illum sequi in repellat laborum expedita aut
                culpa eaque neque dolore repellendus beatae voluptas quo ipsam
                nesciunt doloribus similique! Illo doloremque exercitationem
                unde quia praesentium.
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
          <ProductsContainer />
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
              consequatur corrupti, exercitationem incidunt porro nulla eveniet
              numquam vel tempore? Dolor in vitae aliquam possimus minus!
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
          <ProductsContainer />
        </div>

        <div className="product-show-more">
          <button>Show More</button>
        </div>
      </div>

      <div className="main-contact-container">
        <div className="address-container">
          <div className="address-details">
          <div className="address-container-heading">
            <h2>Come & Visit</h2>
          </div>
          <div className="address-container-para">
            <p>Maheshpur,Salanpur,Asansol,West Bengal , 713357</p>
          </div>
          </div>

          <div className="address-container-map">
            <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703.8247203321246!2d86.84474375743781!3d23.783331320660714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6def704429701%3A0x9f82d18c327f5436!2sRadha%20Krishna%20Temple%20-%20Maheshpur%2C%20Salanpur%2C%20Paschim%20Bardhaman!5e0!3m2!1sen!2sin!4v1661570108583!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          
        </div>
        <Container maxWidth="sm">
        <div className="address-container-heading">
            <h2>Any Query</h2>
          </div>
          <form>
            <Container>
              <TextField
                id="standard-basic"
                label="Full Name"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
              />
              <TextField
                id="standard-basic"
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                type="email"
              />
              <TextField
                id="standard-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
                margin="normal"
                fullWidth
                size="small"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ borderRadius: 0, marginRight: "10px" }}
                >
                  Submit
                </Button>

                <CircularProgress color="success" size="30px" />
              </div>
            </Container>
          </form>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
