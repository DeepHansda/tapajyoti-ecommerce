import React from "react";
import "./Products.css";
import img from "../../assets/img/FRu3TDxmd2tS6A23f216.jpg";
import { useState } from "react";
import { FiHeart, FiShoppingCart} from "react-icons/fi";
import { Link,useNavigate } from "react-router-dom";
import Star from "../Utils/Star"
export default function Product({ product }) {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate()

  const navigator = (id)=>{
    navigate(`/productDetails/${id}`)
  }

  return (
    
      <div className="product" onClick={() =>navigator(product._id)}>
        <div className="product-container">
          <div className="product-img-container">
            <div className="product-img">
              <img src={product.images[0].img} alt="" />
            </div>

            <div className="product-details">
              <div className="product-details-title">
                <h3>{product.name}</h3>
              </div>

              <div className="product-details-desc">
                <p>
                  {readMore
                    ? product.desc
                    : `${product.desc.substring(0, 100)}....`}{" "}
                  <span
                    style={{ color: "#2fcdf4cc" }}
                    onClick={() => setReadMore(readMore ? false : true)}
                  >
                    Read More.
                  </span>
                </p>
              </div>

              <div className="product-details-price">
                <h4>{product.price}</h4>
              </div>

              <div className="product-details-ratings">
                <Star numOfReviews={product.numOfReviews}/>
              </div>
              <div className="product-actions">
                <div className="product-actions-container">
                  <div className="product-actions-wish-list">
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
    
  );
}
