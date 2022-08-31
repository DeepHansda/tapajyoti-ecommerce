import React from "react";
import "./Products.css";
import img from "../../assets/img/FRu3TDxmd2tS6A23f216.jpg";
import { useState } from "react";
import { FiHeart, FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";
import Star from "../Parts/Star"
export default function Product({ product }) {
  const [readMore, setReadMore] = useState(false);
  

  return (
    <Link to="/productDetails">
      <div className="product">
        <div className="product-container">
          <div className="product-img-container">
            <div className="product-img">
              <img src={img} alt="" />
            </div>

            <div className="product-details">
              <div className="product-details-title">
                <h3>sports shoes</h3>
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
                <h4>$400</h4>
              </div>

              <div className="product-details-ratings">
                <Star/>
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
    </Link>
  );
}
