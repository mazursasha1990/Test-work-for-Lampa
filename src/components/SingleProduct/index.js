import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import './index.scss'

const SingleProduct = ({ current, addToCart }) => {
    return (
        <div className="singleProduct">
            <img
                className="singleProductImage"
                src={current.image}
                alt={current.title}
            />
            <div className="singleProductDetails">
                <p className="detailsTitle">{current.title}</p>
                <p className="detailsDescription">{current.description}</p>
                <p className="detailsPrice">$ {current.price}</p>

                <button
                    onClick={() => addToCart(current.id)}
                    className="detailsAddBtn"
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);