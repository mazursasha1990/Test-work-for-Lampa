import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import OrderForm from "../OrderForm";
import './index.scss'

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <div className="cart">
            <div className="cartItems">
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
                <div className="summaryPrice">
                    {totalPrice ?
                        <span>TOTAL: {totalPrice}$</span>
                        : <span>Your cart is empty</span>
                    }
                </div>
            </div>
            <div className="cartSummary">
                <OrderForm />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("state.shop.cart", state.shop.cart);
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);