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
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { setAllProducts } from './redux/slices/FilterSlice';
import { setProducts } from './redux/slices/ProductsSlice';

function App() {
  const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();

  // const [products, setProducts] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  const [searchProduct, setSearchProduct] = React.useState('');
  const [totalProducts, setTotalProducts] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`${URL.PRODUCTS}?page=1&limit=${totalProducts}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setAllProducts(json.products));
        setTotalProducts(json.totalProducts);
        setIsLoading(false);
      });
  }, [dispatch, totalProducts]);

  React.useEffect(() => {
    fetch(
      `${URL.PRODUCTS}?page=${currentPage}&limit=8&category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json.products));
        setCurrentPage(json.currentPage);
        setTotalPages(json.totalPages);
      });
    window.scrollTo(0, 0);
  }, [dispatch, activeCategory, activeFaculty, searchProduct, currentPage]);

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
              loading={isLoading}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
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
