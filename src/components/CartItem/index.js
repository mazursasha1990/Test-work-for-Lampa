import React, { useState } from "react";
import { connect } from "react-redux";
import { adjustItemQty, removeFromCart } from "../../redux/Shopping/shopping-actions";
import trashImage from "../../assets/images/cart.svg"
import './index.scss'

const CartItem = ({ item, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        if (e.target.value === "0") {
            removeFromCart(item.id)
        } else
            setInput(e.target.value);

        adjustQty(item.id, e.target.value);
    };

    return (
        <div className="cartItem">
            <img
                className="cartItemImage"
                src={item.image}
                alt={item.title}
            />
            <div className="cartItemDetails">
                <p className="detailsTitle">{item.title}</p>
                <p className="detailsDesc">{item.description}</p>
                <p className="detailsPrice">$ {item.price}</p>
            </div>
            <div className="cartItemActions">
                <div className="cartItemQty">

                    <label htmlFor="qty">Qty</label>
                    <input
                        min="0"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="actionsDeleteItemBtn"
                >
                    <img
                        src={trashImage}
                        alt="Move to trash"
                    />
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(CartItem);