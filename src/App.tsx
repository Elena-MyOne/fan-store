import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './models/enums';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';
import Logout from './components/pages/Logout/Logout';
import Registration from './components/pages/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route path={ROUTER_PATH.HOME} element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={ROUTER_PATH.PRODUCT} element={<Product />} />
        <Route path={ROUTER_PATH.CART} element={<Cart />} />
        <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTER_PATH.LOGOUT} element={<Logout />} />
        <Route path={ROUTER_PATH.REGISTRATION} element={<Registration />} />
        <Route path={ROUTER_PATH.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
