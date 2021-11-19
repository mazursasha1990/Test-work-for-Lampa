import React from "react";
import "./index.scss";

// Redux
import { connect } from "react-redux";

import Product from "../Poduct";

const Shop = ({ products }) => {
    return (
        <div className="shop">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Shop);