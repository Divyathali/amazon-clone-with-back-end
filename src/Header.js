import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from './firebase';

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to= {!user && '/login'}>
          <div onClick={handleAuthentication} className="header__nav_option">
            <span className="header__nav_option_line1">Hello Guest</span>
            <span className="header__nav_option_line2">{user ? 'Sign Out':'Sign In'}</span>
          </div>
        </Link>

        <div className="header__nav_option">
          <span className="header__nav_option_line1">Returns</span>
          <span className="header__nav_option_line2">Orders</span>
        </div>
        <div className="header__nav_option">
          <span className="header__nav_option_line1">Your</span>
          <span className="header__nav_option_line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__nav_cart">
            <ShoppingCartIcon />
            <span className="header__nav_cart_count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
