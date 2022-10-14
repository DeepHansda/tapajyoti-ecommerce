import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import { FiHeart, FiPlus, FiShoppingCart } from "react-icons/fi";

import { ProjectContext } from "../../../App";
import Star from "../../Utils/Star";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getProductDetails,
} from "../../../Redux/Actions/ProductsActions";
import { addToWishList } from "../../../Redux/Actions/WishListActions";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Input,
  Modal,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { addToCart } from "../../../Redux/Actions/CartActions";
import { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Loading from "../../Utils/Loading";
import Toast from "../../Utils/Toast";
import ReviewCard from "./ReviewCard";
import { useRef } from "react";

export default function ProductDetalis() {
  const { offset, width, dispatch, setOpenAlert } = useContext(ProjectContext);
  const { id } = useParams();
  const { wishItems } = useSelector((state) => state.wishList);
  const productState = useSelector((state) => state.product);
  const { cartSuccess, cartItems } = useSelector((state) => state.cart);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");
  const [openReviewModal, setOpenReviewModal] = useState(false);

  const product_details_slider = useRef('')
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, []);

  const { loading, product } = productState;
  // Increase quantity
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (product.stock <= quantity) return alert("Product stock limited");
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;
    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    if (product.stock > 0) {
      dispatch(addToCart(product._id, quantity))
        .then((res) => {
          const exist = cartItems.find((item) => item.id == product._id);
          if (exist) {
            setOpenAlert({
              open: true,
              message: "Item Already in Cart",
              success: false,
            });
          } else if (res.success === 1) {
            setOpenAlert({
              open: true,
              message: "Added to Cart",
              success: true,
            });
          }
        })
        .catch((err) => {
          setOpenAlert({
            open: true,
            message: err.message,
            success: false,
          });
        });
    } else {
      setOpenAlert({
        open: true,
        message: "out of stock",
        success: false,
      });
    }
  };
  const addToWishHandler = (id) => {
    dispatch(addToWishList(id))
      .then((res) => {
        const exist = wishItems.find((item) => item.product == id);
        if (exist) {
          setOpenAlert({
            open: true,
            message: "Item Already in Wishlist",
            success: false,
          });
        } else if (res.success === 1) {
          setOpenAlert({
            open: true,
            message: "Added to Wishlist",
            success: true,
          });
        }
      })
      .catch((err) => {
        setOpenAlert({
          open: true,
          message: err.message,
          success: false,
        });
      });
  };

  const handleAddReview = (id) => {
    const data = {
      product_id: id,
      rating: reviewRating,
      comment: reviewComment,
    };

    dispatch(addReview(data))
      .then((res) => {
        if (res.success === 1) {
          setOpenAlert({
            open: true,
            message: res.message,
            success: true,
          });

          window.setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((err) => {
        setOpenAlert({
          open: true,
          message: err.message,
          success: false,
        });
      });
  };

  const imageGallery = (img) =>{
   product_details_slider.current.style.backgroundImage = `url(${img})`
  }
  return (
    <Fragment>
      <Navbar />
      {loading && <Loading />}
      <Toast />
      <div className="product-information">
        <section
          className="product-details-main section"
          style={{
            position: `${
              width >= 1280 && (offset > 180 ? "fixed" : "relative")
            }`,
          }}
        >
          <div className="product-details-slider" ref={product_details_slider}>
            <div className="product-images">
              {/* <img src="" className="active" alt="" /> */}
              <img src={img1} alt="" onClick={()=>imageGallery(img1)}/>
              <img src={img2} alt="" onClick={()=>imageGallery(img2)}/>
              <img src={img3} alt="" />
              {/* <img src={img4} alt="" /> */}
              {/* <img src={img5} alt="" /> */}
            </div>
          </div>

          <div className="main-details">
            <h2 className="product-brand">{product.name}</h2>

            <span className="product-price">₹{product.price}</span>
            <span className="product-actual-price">$200</span>
            <span className="product-discount">( 50% off )</span>

            <Box>
              {console.log(product.ratings)}
              <Star ratings={product.ratings} />
            </Box>

            <div className="cart-paper-quantity">
              <div className="cartInput">
                <Chip
                  label="+"
                  variant="outlined"
                  onClick={() => increaseQuantity()}
                />
                <Input type="number" readOnly value={quantity} />
                <Chip
                  label="-"
                  variant="outlined"
                  onClick={() => decreaseQuantity()}
                />
              </div>
            </div>
            <div className="main-details-buttons">
              <Button
                variant="outlined"
                className="btn cart-btn"
                onClick={() => addToCartHandler()}
              >
                {" "}
                <p>
                  <FiShoppingCart />{" "}
                </p>
                add to cart
              </Button>
              <Button
                variant="outlined"
                className="btn"
                onClick={() => addToWishHandler(product._id)}
              >
                <p>
                  <FiHeart />{" "}
                </p>
                add to wishlist
              </Button>
            </div>
          </div>
        </section>

        <section className="product-all-details section">
          <section className="detail-des">
            <h2 className="heading">description</h2>
            <p className="des">{product.desc}</p>
          </section>

          <section className="product-spec">
            <h2 className="product-spec-heading">specification</h2>
            <p className="des">
              * Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />
              * Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repellendus, maxime?
              <br />
            </p>
          </section>
          <section className="reviews-section">
            <Paper variant="outlined">
              <Container>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "bold", margin: "10px 0" }}
                >
                  Reviews & Comments
                </Typography>
              </Container>
              <Divider />

              <Container sx={{ margin: "10px 0" }}>
                <Chip
                  icon={<FiPlus />}
                  label="Add Review"
                  variant="outlined"
                  onClick={() => setOpenReviewModal(true)}
                />
              </Container>
              <Divider />

              <Modal
                open={openReviewModal}
                sx={{ position: "absolute", top: "50%", margin: "0 auto" }}
              >
                <Container
                  maxWidth="xs"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#fff",
                    padding: "16px",
                  }}
                >
                  <Box>
                    <Typography variant="h6" component="h2">
                      Add Review.
                    </Typography>
                  </Box>
                  <Rating
                    name="review rating"
                    value={reviewRating}
                    onChange={(event, newValue) => {
                      setReviewRating(newValue);
                    }}
                  />

                  <TextField
                    multiline
                    variant="standard"
                    label="Add Comment"
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                  />

                  <Box sx={{ marginTop: "20px" }}>
                    <Button
                      onClick={() => handleAddReview(product._id)}
                      variant="outlined"
                      color="success"
                    >
                      Add
                    </Button>

                    <Button
                      onClick={() => setOpenReviewModal(false)}
                      variant="outlined"
                      color="error"
                      sx={{ marginLeft: "10px" }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Container>
              </Modal>

              {}

              {product.reviews && product.reviews[0] ? (
                product.reviews.map((rev, index) => {
                  return <ReviewCard key={index} review={rev} />;
                })
              ) : (
                <Container>
                  <Typography variant="h6">No Reviews.</Typography>
                </Container>
              )}
            </Paper>
          </section>
        </section>
      </div>
    </Fragment>
  );
}
