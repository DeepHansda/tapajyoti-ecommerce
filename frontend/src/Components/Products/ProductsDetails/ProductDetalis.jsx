import React, { useContext } from "react";
import "./productDetails.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import { FiHeart, FiShoppingCart } from "react-icons/fi";

import {ProjectContext} from '../../../App'
import Star from "../../Parts/Star";
export default function ProductDetalis() {
const {offset} = useContext(ProjectContext)
console.log(offset)
  return (
    <div className="product-information">
      <section className="product-details-main section" style={{position:`${offset > 180 ? 'fixed' : 'relative'}`}}>
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
          <h2 className="product-brand">calvin klein</h2>
          <p className="product-short-des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <span className="product-price">$99</span>
          <span className="product-actual-price">$200</span>
          <span className="product-discount">( 50% off )</span>

          <div className="ratings">
            <Star/>
          </div>
          <div className="main-details-buttons">
            <button className="btn cart-btn"><FiShoppingCart/>  add to cart</button>
            <button className="btn"><FiHeart/>  add to wishlist</button>
          </div>
        </div>
      </section>

    <section className="product-all-details section">
    <section className="detail-des">
        <h2 className="heading">description</h2>
        <p className="des">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
          quibusdam maxime atque molestias voluptatum sapiente ad? Maiores,
          nostrum laborum! Omnis repudiandae pariatur adipisci harum ut eius
          eveniet delectus sequi recusandae placeat, fuga accusamus, error culpa
          quo! Velit ratione consequuntur ipsa sequi. Consequuntur voluptates
          tempore reprehenderit obcaecati commodi. Corrupti nisi, facere dolore
          eveniet alias adipisci tenetur excepturi cumque molestiae asperiores
          unde?
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
