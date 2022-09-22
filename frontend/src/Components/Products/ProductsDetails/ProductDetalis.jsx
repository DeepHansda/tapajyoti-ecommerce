import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import { ProjectContext } from "../../../App";
import Star from "../../Utils/Star";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../../Redux/Actions/ProductsActions";
import { addToWishList } from "../../../Redux/Actions/WishListActions";
import { Button, Chip, Input } from "@mui/material";
import { addToCart } from "../../../Redux/Actions/CartActions";
import { Fragment } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Loading from "../../Utils/Loading";
import Toast from "../../Utils/Toast";

export default function ProductDetalis() {
  const { offset, width , dispatch , setOpenAlert } = useContext(ProjectContext);
  const { id } = useParams();
  const {wishItems} = useSelector((state=>state.wishList))

  
  useEffect(() => {
    dispatch(getProductDetails(id));
   
  },[]);

  useEffect(() => {
    if (wishItems.length > 0){
      setOpenAlert({open: true,message:'added to wish list',success:true});
    }
  },[wishItems])

  const productState = useSelector((state) => state.product);
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
      dispatch(addToCart(product._id, quantity));
      setOpenAlert({open: true,message:'added to cart',success:true});
    } else {
      setOpenAlert({open: true,message:'added to cart faild',success:false});
    }
  };

  console.log(quantity);
  return (
    <Fragment>
      <Navbar />
      { loading && <Loading />}
      <Toast/>
      <div className="product-information">
        <section
          className="product-details-main section"
          style={{
            position: `${
              width >= 1280 && (offset > 180 ? "fixed" : "relative")
            }`,
          }}
        >
          <div className="product-details-slider">
            <div className="product-images">
              {/* <img src="" className="active" alt="" /> */}
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
              {/* <img src={img5} alt="" /> */}
            </div>
          </div>

          <div className="main-details">
            <h2 className="product-brand">{product.name}</h2>

            <span className="product-price">₹{product.price}</span>
            <span className="product-actual-price">$200</span>
            <span className="product-discount">( 50% off )</span>

            <div className="ratings">
              <Star numOfReviews={product.numOfReviews} />
            </div>

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
              <Button variant="outlined"
                className="btn cart-btn"
                onClick={() => addToCartHandler()}
              >
                {" "}
                <p><FiShoppingCart /> </p>add to cart
              </Button>
              <Button variant="outlined"
                className="btn"
                onClick={() => dispatch(addToWishList(product._id))}
              >
                <p><FiHeart /> </p>add to wishlist
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
        </section>

        {/* <section className="reviews-section">
        
    </section> */}
      </div>
    </Fragment>
  );
}
