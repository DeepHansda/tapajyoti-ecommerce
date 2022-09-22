import React, { Fragment, useContext, useEffect } from "react";
import "./Products.css";
import img from "../../assets/p.jpg";
import { useState } from "react";
import { FiHeart, FiShoppingCart} from "react-icons/fi";
import { Link,useNavigate } from "react-router-dom";
import Star from "../Utils/Star"
import { ProjectContext } from "../../App";
import { addToWishList } from "../../Redux/Actions/WishListActions";
import { useSelector } from "react-redux";
import Toast from "../Utils/Toast";


export default function Product({ product }) {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate()
  const { dispatch ,setOpenAlert } = useContext(ProjectContext);


  const navigator = (id)=>{
    navigate(`/productDetails/${id}`)
  }

  const {wishItems} = useSelector((state=>state.wishList))

  useEffect(()=>{
    if (wishItems.length > 0){
      setOpenAlert({open: true,message:'added to wish list',success:true});
    }
  },[wishItems])

  return (
    <Fragment>
      <Toast/>
      <div className="product" >
        <div className="product-container">
          <div className="product-img-container">
            <div className="product-img" onClick={() =>navigator(product._id)}>
              <img src={img} alt="" />
            </div>

            <div className="product-details">
              <div className="product-details-title" onClick={() =>navigator(product._id)}>
                <h3>{product.name}</h3>
              </div>

              

              <div className="product-details-price">
                <h4>₹{product.price}</h4>
              </div>

              <div className="product-details-ratings">
                <Star numOfReviews={product.numOfReviews}/>
              </div>
              <div className="product-actions">
                <div className="product-actions-container">
                  <div className="product-actions-wish-list" onClick={() => dispatch(addToWishList(product._id))}>
                    <FiHeart />
                  </div>

                  <div className="product-actions-cart">
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
