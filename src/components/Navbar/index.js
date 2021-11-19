import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cartImage from "../../assets/images/cart.svg"
import './index.scss'



const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbarLogo">Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className="navbarCart">
          <h3 className="cartTitle">Cart</h3>
          <img
            className="cartImage"
            src={cartImage}
            alt="shopping cart"
          />
          <div className="cartCounter">{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);