import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import cartImage from "../../assets/images/cart.svg"
import './index.scss'

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let price = 0;

    cart.forEach((item) => {
      count += item.qty;
      price += item.qty * item.price;
    });

    setCartCount(count);
    setTotalPrice(price);
  }, [cart, cartCount, totalPrice]);

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="navbarLogo">LOGO</h2>
      </Link>
      <Link to="/cart">
        <div className="navbarCart">
          <section>
            <img
              className="cartImage"
              src={cartImage}
              alt="shopping cart"
            />
          </section>
          <section>
            {cartCount ? (
              <span>Total price: {totalPrice} $</span>
            ) : <span></span>}
          </section>
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