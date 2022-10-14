import React from "react";
import {
  FiCamera,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhoneCall,
  FiTwitter,
} from "react-icons/fi";
import SocialContactBar from "../Utils/ContactBar/ContactBar";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-contact">
        <div className="footer-contact-container">
          <div className="footer-contact-number">
            <p>
              <span>
                <FiPhoneCall />
              </span>
              9647750384
            </p>
          </div>
          <div className="footer-contact-email">
            <p>
              <span>
                <FiMail />
              </span>
              deephansda921@gmail.com
            </p>
          </div>
          <div className="footer-contact-address">
            <p>
              <span>
                <FiCamera />
              </span>
              Maheshpur,Salanpur,Asansol,West Bengal , 713357
            </p>
          </div>
        </div>
      </div>
      <div class="row primary">
        <div class="column about">
          <h3>Mr.FixIt</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            voluptatem corporis error non,
          </p>

          <div class="social">
            <SocialContactBar/>
          </div>
        </div>

        <div class="column links">
          <h3>Some Links</h3>

          <ul>
            <li>
              <a href="#faq">F.A.Q</a>
            </li>
            <li>
              <a href="#cookies-policy">Cookies Policy</a>
            </li>
            <li>
              <a href="#terms-of-services">Terms Of Service</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>
        </div>

        <div class="column links">
          <h3>Navigate</h3>
          <ul>
            <li>
              <a href="#faq">Home</a>
            </li>
            <li>
              <a href="#cookies-policy">Products</a>
            </li>
            <li>
              <a href="#terms-of-services">Contact</a>
            </li>
            <li>
              <a href="#support">About</a>
            </li>
          </ul>
        </div>

        <div class="column subscribe">
          <h3>Newsletter</h3>
          <div>
            <input type="email" placeholder="Your email id here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div class="row copyright">
        <p>Copyright &copy; 2021 Mr.FixIt</p>
      </div>
    </footer>
  );
}
