import React from "react";
import "../Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://postandparcel.info/wp-content/uploads/2017/10/MercadoLibreweb-1222x640.png"

      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon
          className="header__SearchIcon"
          type="submit"
          value="search"
        />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne"></span>
            <span className="header__optionLineTwo">Iniciar Sesion</span>
          </div>
        </Link>

        <div className="header__option">
          <Link to="/register">
            <span className="header__optionLineOne"></span>
            <span className="header__optionLineTwo">Creat your account</span>
          </Link>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne"></span>
          <span className="header__optionLineTwo">Product</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
