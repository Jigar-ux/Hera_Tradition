import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import navMenu from "../Assets/dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  const menuRef = useRef();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img id="logo" src={logo} alt="" />
        <p>Hera Tradition</p>
      </div>
      {/* <img className="nav-dropdown" onClick={dropdown} src={navMenu} alt="" /> */}
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#7a7a7a" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("new collection");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#7a7a7a" }}
            to="/new collection"
          >
            New Collection
          </Link>
          {menu === "new collection" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#7a7a7a" }}
            to="/about"
          >
            {" "}
            About Hera
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
