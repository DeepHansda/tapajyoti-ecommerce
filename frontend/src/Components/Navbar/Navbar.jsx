import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiBarChart,
  FiCrosshair,
  FiSearch,
} from "react-icons/fi";

function NavContact() {
  return (
    <div className="nav-contact">
      <li>
        <FiFacebook />
      </li>
      <li>
        <FiLinkedin />
      </li>
      <li>
        <FiTwitter />
      </li>
      <li>
        <FiInstagram />
      </li>
    </div>
  );
}

export default function Navbar({ openBar, setOpenBar }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    window.removeEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="navbar">
      <nav className="navbar-container">
        <div className="navbar-upper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div
          className="navbar-middle"
          style={width < 700 ? { top: openBar ? "0" : "-2000px" } : {}}
        >
          <div className="navbar-close-button sideBarButton">
            <FiCrosshair onClick={() => setOpenBar(false)} />
          </div>
          <div className="navbar-middle-container">
            {width < 700 && <NavContact />}

            <ul className="navbar-middle-items">
              <li className="navbar-middle-item">
                <p>home</p>
              </li>
              <li className="navbar-middle-item">
                <p>Book Rapair</p>
              </li>
              <li className="navbar-middle-item">
                <p>products</p>
              </li>
              <li className="navbar-middle-item">
                <p>contact</p>
              </li>
              <li className="navbar-middle-item">
                <p>about</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-bottom">
          {width > 700 && <NavContact />}
          {width < 700 && (
            <p className="sideBarButton">
              <FiBarChart onClick={() => setOpenBar(true)} />
            </p>
          )}

          {width > 700 && <SearchBar />}

          <div className="nav-user-options">
            <li>
              <FiHeart />
            </li>
            <li>
              <FiShoppingCart />
            </li>
            <li>
              <FiUser />
            </li>
          </div>
        </div>

        
        <div className="serach-for-small">
        {width < 700 && <SearchBar />}
          </div>
      </nav>
    </div>
  );

  function SearchBar() {
    return (
      <div className="navbar-bottom-search">
        <div className="navbar-bottom-search-container">
          <input type="text" />
        </div>
        <div className="navbar-bottom-search-button">
          <button>
            <FiSearch />
          </button>
        </div>
      </div>
    );
  }
}
