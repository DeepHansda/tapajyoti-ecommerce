import React, { useContext, useEffect, useState } from "react";
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
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { ProjectContext } from "../../App";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";

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

export default function Navbar() {
  const { offset, width ,navigator} = useContext(ProjectContext);
  const [openBar, setOpenBar] = useState(false);
  const {cartItems} = useSelector(state=>state.cart)
  const {wishItems} = useSelector((state)=>state.wishList)

  const data = [
    {
      title: 'wishlist',
      icon:FiHeart() ,
      link:'/wishlist' ,
      count:wishItems.length,
    },

    {
      title: 'cart',
      icon:FiShoppingCart() ,
      link:'/cart' ,
      count:cartItems.length,
    },
    {
      title: 'profile',
      icon:FiUser() ,
      link:'/profile' ,
      // count:,
    }


  ]
  return (
    <div
      className="navbar"
      style={{ position: `${offset > 180 ? "fixed" : "relative"}}` }}
    >
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
            <FiX onClick={() => setOpenBar(false)} />
          </div>
          <div className="navbar-middle-container">
            {width < 700 && <NavContact />}

            <ul className="navbar-middle-items">
              <li className="navbar-middle-item">
                <Link to="/">
                  <p>home</p>
                </Link>
              </li>
              <li className="navbar-middle-item">
                <p>Book Rapair</p>
              </li>
              <li className="navbar-middle-item">
                <Link to="/allProducts">
                  <p>products</p>
                </Link>
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
              <FiMenu onClick={() => setOpenBar(true)} />
            </p>
          )}

          {width > 700 && <SearchBar />}

          <div className="nav-user-options">
            {
              data.map((item, index)=>{
                return (
<li key={index}>
            <Tooltip title={item.title} onClick={() =>navigator(item.link)}>
  <IconButton>
  <Badge badgeContent={item.count} color="primary">
  {item.icon}
</Badge>
  </IconButton>
</Tooltip>
            </li>
                )
              })
            }
            
          </div>
        </div>

        <div className="serach-for-small">{width < 700 && <SearchBar />}</div>
      </nav>
    </div>
  );

  function SearchBar() {
    const [keyword, setKeyword] = useState("");
    console.log(keyword);
    const navigate = useNavigate()

    const navigator = ()=>{
      navigate(`/allProducts?keyword=${keyword}`)
    }
    return (
      <div className="navbar-bottom-search">
        <div className="navbar-bottom-search-container">
          <input type="text" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
        </div>
        <div className="navbar-bottom-search-button">
          <button onClick={()=>navigator()}>
            <FiSearch />
          </button>
        </div>
      </div>
    );
  }
}
