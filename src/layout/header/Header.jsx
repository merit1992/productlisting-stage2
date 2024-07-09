import React from "react";
import "./Header.css";
import logo from "../../asset/images/logo2.svg";
import search from "../../asset/images/search-bar.svg";
import account from "../../asset/images/account.svg";
import cart from "../../asset/images/cart.svg";

function Header() {
  return (
    <div className="wrap">
      <header className="header">
        <div className="logo">
          <img className="logo-shoe" src={logo} alt="logo" />
          <p className="craft">Craft Lux</p>
        </div>
        <nav className="navbar">
          <ul className="unothered-list flex">
            <li className="list-items">
              <a href="#home" className="list-link">
                home
              </a>
            </li>
            <li className="list-items">
              <a href="#products" className="list-link active">
                products
              </a>
            </li>
            <li className="list-items">
              <a href="#about" className="list-link">
                about us
              </a>
            </li>
          </ul>
          <div className="header-comp flex">
            <img src={search} alt="search" />

            <img src={cart} alt="search" />

            <img src={account} alt="search" />
          </div>
          <div className="account">
            <ul className="account-flex flex">
              <li className="list-items-signup">
                <a href="#products" className="signup">
                  Sign up
                </a>
              </li>
              <li className="list-items-login">
                <a href="#about" className="login">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
