import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// Redux
import { connect } from "react-redux";
import {
    loadCurrentItem,
    addToCart,
} from "../../redux/Shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
    return (
        <div className="product">
            <img
                className="productImage"
                src={product.image}
                alt={product.title}
            />

            <div className="productDetails">
                <p className="detailsTitle">{product.title}</p>
                <p className="detailsDesc">{product.description}</p>
                <p className="detailsPrice">$ {product.price}</p>
            </div>

            <div className="productButton">
                <Link to={`/product/${product.id}`}>
                    <button
                        onClick={() => loadCurrentItem(product)}
                        className="buttons"
                    >
                        View Item
                    </button>
                </Link>
                <button
                    onClick={() => addToCart(product.id)}
                    className="buttons"
                >
                    Add To Cart
                </button>
            </div>
        </div >
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);