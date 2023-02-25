import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { signout } from './actions/userActions';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductsScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
          </Link>
          </div>
          <div>
          <Link to="/cart/?qty=?">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="/">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Routes>
          <Route path="/cart/:id?" element={<CartScreen/>} />
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/register" element={<RegisterScreen/>}></Route>
          <Route path="/signin" element={<SigninScreen/>}></Route>
          <Route path="/payment" element={<PaymentMethodScreen/>}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}></Route>
          <Route path="/order/:id" element={<OrderScreen/>}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>
          <Route path="/" element={<HomeScreen/>} exact></Route>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;