import React, { Fragment, useContext, useEffect } from "react";
import "./Products.css";
import img from "../../assets/p.jpg";
import { useState } from "react";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Star from "../Utils/Star";
import { ProjectContext } from "../../App";
import { addToWishList } from "../../Redux/Actions/WishListActions";
import { useSelector } from "react-redux";
import Toast from "../Utils/Toast";
import { addToCart } from "../../Redux/Actions/CartActions";

export default function Product({ product }) {
  const navigate = useNavigate();
  const { dispatch, setOpenAlert } = useContext(ProjectContext);

  const navigator = (id) => {
    navigate(`/productDetails/${id}`);
  };

  const { wishItems } = useSelector((state) => state.wishList);
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = (id) => {
    dispatch(addToCart(product._id))
      .then((res) => {
        const exist = cartItems.find((item) => item.id == id);

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
  };

  const addToWishHandler = (id) => {
    dispatch(addToWishList(id))
      .then((res) => {
        const exist = wishItems.find((item) => item.product == id);
        console.log(exist);
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

  return (
    <Fragment>
      <Toast />
      <div className="product">
        <div className="product-container">
          <div className="product-img-container">
            <div className="product-img" onClick={() => navigator(product._id)}>
              <img src={img} alt="" />
            </div>

            <div className="product-details">
              <div
                className="product-details-title"
                onClick={() => navigator(product._id)}
              >
                <h3>{product.name}</h3>
              </div>

              <div className="product-details-price">
                <h4>₹{product.price}</h4>
              </div>

              <div className="product-details-ratings">
                <Star ratings={product.ratings} />
              </div>
              <div className="product-actions">
                <div className="product-actions-container">
                  <div
                    className="product-actions-wish-list"
                    onClick={() => addToWishHandler(product._id)}
                  >
                    <FiHeart />
                  </div>

                  <div
                    className="product-actions-cart"
                    onClick={() => addToCartHandler(product._id)}
                  >
                    <FiShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
