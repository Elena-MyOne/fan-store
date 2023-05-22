import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_PATH, URL } from './models/enums';
import Layout from './components/Layout/Layout';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/Product';
import Cart from './components/pages/Cart/Cart';
import NotFound from './components/pages/NotFound/NotFound';
import Login from './components/pages/Login/Login';
import Logout from './components/pages/Logout/Logout';
import SignUp from './components/pages/SignUp/SignUp';
import Profile from './components/pages/Profile/Profile';
import Checkout from './components/pages/Checkout/Checkout';

function App() {
  const [allProducts, setAllProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [activeFaculty, setActiveFaculty] = React.useState('All');
  const [searchProduct, setSearchProduct] = React.useState('');

  React.useEffect(() => {
    setIsLoading(true);
    fetch(URL.PRODUCTS)
      .then((res) => res.json())
      .then((json) => {
        setAllProducts(json);
        setIsLoading(false);
      });
  }, []);

  React.useEffect(() => {
    fetch(
      `${URL.PRODUCTS}?category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}`
    )
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, activeFaculty, searchProduct]);

  return (
    <Routes>
      <Route
        path={ROUTER_PATH.HOME}
        element={<Layout searchProduct={searchProduct} setSearchProduct={setSearchProduct} />}
      >
        <Route
          index
          element={
            <Home
              products={products}
              allProducts={allProducts}
              loading={isLoading}
              activeCategory={activeCategory}
              onClickCategory={(category: string) => setActiveCategory(category ? category : 'all')}
              activeFaculty={activeFaculty}
              onClickFaculty={(faculty: string) => setActiveFaculty(faculty ? faculty : 'none')}
            />
          }
        ></Route>
        <Route path={ROUTER_PATH.PRODUCT} element={<Product />} />
        <Route path={ROUTER_PATH.CART} element={<Cart />} />
        <Route path={ROUTER_PATH.CHECKOUT} element={<Checkout />} />
        <Route path={ROUTER_PATH.LOGIN} element={<Login />} />
        <Route path={ROUTER_PATH.LOGOUT} element={<Logout />} />
        <Route path={ROUTER_PATH.SIGNUP} element={<SignUp />} />
        <Route path={ROUTER_PATH.PROFILE} element={<Profile />} />
        <Route path={ROUTER_PATH.NOTFOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
