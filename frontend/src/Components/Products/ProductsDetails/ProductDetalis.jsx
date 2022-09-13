import React, { useContext, useEffect, useState } from "react";
import "./productDetails.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import {ProjectContext} from '../../../App'
import Star from "../../Utils/Star";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../../Redux/Actions/ProductsActions";
import { addToWishList } from "../../../Redux/Actions/WishListActions";
import { Chip, Input } from "@mui/material";
import { addToCart } from "../../../Redux/Actions/CartActions";






export default function ProductDetalis() {
const dispatch = useDispatch()
const {offset,width} = useContext(ProjectContext)
const {id} = useParams()
useEffect(()=>{
  dispatch(getProductDetails(id))
},[])

const productState = useSelector(state=>state.product)
const {loading,product} = productState
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
  alert("Product Added to cart");
  } else {
    alert("Product stock limited");
  }
};

console.log(quantity)
  return (
    <div className="product-information">
      <section className="product-details-main section" style={{position:`${width >= 1280 &&(offset > 180 ? 'fixed' : 'relative')}`}}>
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
          
          <span className="product-price">{product.price}</span>
          <span className="product-actual-price">$200</span>
          <span className="product-discount">( 50% off )</span>

          <div className="ratings">
            <Star/>
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
            <button className="btn cart-btn" onClick={() =>addToCartHandler()}> <FiShoppingCart/>  add to cart</button>
            <button className="btn" onClick={() => dispatch(addToWishList(product._id))}><FiHeart/>  add to wishlist</button>
          </div>
        </div>
      </section>

    <section className="product-all-details section">
    <section className="detail-des">
        <h2 className="heading">description</h2>
        <p className="des">
          {product.desc}
        </p>
      </section>

      <section className="product-spec">
        <h2 className="product-spec-heading">specification</h2>
        <p className="des">* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>
        * Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, maxime?<br/>
        </p>

      </section>
    </section>


    {/* <section className="reviews-section">
        
    </section> */}
      
    </div>
  );
}
