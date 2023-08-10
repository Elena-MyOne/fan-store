import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH } from './models/enums';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';

import SignUp from './components/pages/SignUp/SignUp';
import Checkout from './components/pages/Checkout/Checkout';
import Loader from './components/Loader/Loader';
import Logout from './components/pages/Profile/Logout/Logout';
import Billing from './components/pages/Profile/Billing/Billing';
import ChangePassword from './components/pages/Profile/changePassword/ChangePassword';
import Account from './components/pages/Profile/Account/Account';
import DeleteAccount from './components/pages/Profile/DeleteAccount/DeleteAccount';
import Main from './components/pages/Main/Main';

const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ './components/pages/Cart/Cart')
);
const Profile = React.lazy(
  () => import(/* webpackChunkName: "Profile" */ './components/pages/Profile/Profile')
);

function App() {
  const loaderText = 'Loading...';

  return (
    <Routes>
      <Route path={ROUTER_PATH.MAIN} element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path={ROUTER_PATH.HOME} element={<Home />} />
        <Route path={ROUTER_PATH.PRODUCT} element={<Product />} />
        <Route
          path={ROUTER_PATH.CART}
          element={
            <React.Suspense fallback={<Loader text={loaderText} />}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path={ROUTER_PATH.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTER_PATH.SIGNUP} element={<SignUp />} />
        <Route
          path={ROUTER_PATH.PROFILE}
          element={
            <React.Suspense fallback={<Loader text={loaderText} />}>
              <Profile />
            </React.Suspense>
          }
        >
          <Route path={ROUTER_PATH.ACCOUNT} element={<Account />} />
          <Route path={ROUTER_PATH.CHANGE_PASSWORD} element={<ChangePassword />} />
          <Route path={ROUTER_PATH.BILLING} element={<Billing />} />
          <Route path={ROUTER_PATH.LOGOUT} element={<Logout />} />
          <Route path={ROUTER_PATH.DELETE_ACCOUNT} element={<DeleteAccount />} />
        </Route>
        <Route path={ROUTER_PATH.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
