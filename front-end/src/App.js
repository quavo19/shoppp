import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Routes, Link, Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import './style.css'
import CartScreen from './screens/CartScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import { signout } from './actions/userActions';
import PrivateRoute from './components/PrivateRoute';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductsScreen';
import UserList from './screens/ListUsers';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import HomePage from './screens/HomePage';

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
        <header className="row nav-bar">
          
          <div>
            <Link className="brand" to="/">
              CS
          </Link>
          </div>
          {userInfo ? (
              <div className="user-items menu">
                <ul>
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="user-items menu">
                
                  <Link to="/signin">Sign In</Link>
                 
              </div>
              
            )}
          <div>
          <Link to="/cart/?qty=?">
          <i className="fa fa-cart-plus"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? <Link to="/">
              {userInfo.name} <i className="fa fa-user"></i>{' '}
            </Link> : ''
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Routes>
          <Route path="/cart/:id?" element={<CartScreen/>} />
          <Route path="/product/:id" element={<ProductScreen/>}></Route>
          <Route path="/register" element={<RegisterScreen/>}></Route>
          <Route path="/signin" element={<SigninScreen/>}></Route>
          <Route path="/profile" element={<ProfileScreen/>}></Route>
          <Route path="/userlist" element={<UserList/>}></Route>
          <Route path="/orderhistory" element={<OrderHistoryScreen/>}></Route>
          <Route path="/payment" element={<PaymentMethodScreen/>}></Route>
          <Route path="/profile"
          element={
            <PrivateRoute> 
              <ProfileScreen/>
            </PrivateRoute>
          }></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen/>}></Route>
          <Route path="/order/:id" element={<OrderScreen/>}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>
          <Route path="/product" element={<HomeScreen/>} exact></Route>
          <Route path="/" element={<HomePage/>} exact></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;