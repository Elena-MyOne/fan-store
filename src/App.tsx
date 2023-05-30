import React from 'react';
import './App.scss';
import axios from 'axios';
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
import { setIsLoading, setProducts } from './redux/slices/ProductsSlice';
import { setCurrentPage, setTotalPages, setTotalProducts } from './redux/slices/PaginationSlice';

function App() {
  const { activeCategory, activeFaculty } = useSelector((state: RootState) => state.filter);
  const { currentPage, totalProducts } = useSelector((state: RootState) => state.pagination);
  const { searchProduct } = useSelector((state: RootState) => state.header);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setIsLoading(true));
    axios.get(`${URL.PRODUCTS}?page=1&limit=${totalProducts}`).then((res) => {
      dispatch(setAllProducts(res.data.products));
      dispatch(setTotalProducts(res.data.totalProducts));
      dispatch(setIsLoading(false));
    });
  }, [dispatch, totalProducts]);

  React.useEffect(() => {
    axios
      .get(
        `${URL.PRODUCTS}?page=${currentPage}&limit=8&category=${activeCategory}&faculty=${activeFaculty}&name=${searchProduct}`
      )
      .then((res) => {
        dispatch(setProducts(res.data.products));
        dispatch(setCurrentPage(res.data.currentPage));
        dispatch(setTotalPages(res.data.totalPages));
      });
    window.scrollTo(0, 0);
  }, [dispatch, activeCategory, activeFaculty, searchProduct, currentPage]);

  return (
    <Routes>
      <Route path={ROUTER_PATH.HOME} element={<Layout />}>
        <Route index element={<Home />}></Route>
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
