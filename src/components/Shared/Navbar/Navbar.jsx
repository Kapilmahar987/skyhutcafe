import React, { useContext, useState } from "react";
import "../../../stylesheets/Navbar/Navbar.css";
import { assets } from "../../../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <img src={assets.logo} alt="" className="logo" />
      </NavLink>

      <ul className="navbar-menu">
        <NavLink
          to={"/"}
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </NavLink>
        <a
          href="#about"
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#explore-menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <NavLink to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </NavLink>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
