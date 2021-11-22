import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import Shop from './components/Shop';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import './App.scss';
import { connect } from "react-redux";
import SingleProduct from "./components/SingleProduct";


function App({ current }) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          {!current ?
            <Redirect to="/" />
            :
            <Route exact path="/product/:id" component={SingleProduct} />
          }
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
