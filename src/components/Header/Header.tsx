import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../models/enums';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/CartSlice';
import { selectUser } from '../../redux/store';
import logo from '../../assets/images/logo/logo.png';
import { userInfo } from 'os';
import { UserData } from '../../models/interface';

const Header: React.FC = () => {
  const { totalPrice, itemsCount } = useSelector(selectCart);
  const { isSignUp, name } = useSelector(selectUser);

  const signUpPath = isSignUp
    ? `${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`
    : ROUTER_PATH.SIGNUP;

  const favoriteItems = '0';
  const userInfo = localStorage.getItem('useInfo');
  const user: UserData = userInfo ? JSON.parse(userInfo) : { name: '', isSignUp: false, email: '' };

  return (
    <header className="header pt-4 border-b px-1">
      <div className="body flex justify-between container m-auto items-center gap-4 pb-4">
        <Link to={ROUTER_PATH.MAIN} className="logo w-[100px] md:w-[164px]">
          <img className={style.headerLogoImage} src={logo} alt="logo" />
        </Link>
        <div className="profile flex md:gap-8 gap-2 items-center">
          <Link to={signUpPath}>
            <div className="icon flex flex-col items-center text-gray-800 hover:text-orange-600 duration-300">
              <svg className="md:w-[35px] w-[30px] md:h-[35px] h-[30px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="M480-492.924q-57.749 0-95.22-37.471t-37.471-95.412q0-57.942 37.471-95.221 37.471-37.278 95.22-37.278t95.22 37.278q37.471 37.279 37.471 95.221 0 57.941-37.471 95.412-37.471 37.471-95.22 37.471Zm-299.999 305.23v-75.922q0-32.23 17.077-56.153 17.077-23.923 44.385-36.769 63.153-28.077 121.756-42.308 58.604-14.23 116.769-14.23 58.166 0 116.473 14.538Q654.769-384 717.672-356.266q28.374 12.812 45.35 36.616 16.977 23.804 16.977 56.034v75.922H180.001Zm45.384-45.384h509.23v-30.538q0-15.615-9.885-29.923-9.884-14.308-25.808-22.462-58.999-28.692-111.302-40.192-52.302-11.5-107.62-11.5-55.318 0-108.428 11.5t-111.11 40.192q-15.923 8.154-25.5 22.462t-9.577 29.923v30.538ZM480-538.307q37.461 0 62.384-24.924 24.923-24.923 24.923-62.384t-24.923-62.384Q517.461-712.922 480-712.922t-62.384 24.923q-24.923 24.923-24.923 62.384t24.923 62.384q24.923 24.924 62.384 24.924Zm0-87.308Zm0 392.537Z"
                />
              </svg>
              <div className="-mt-2 md:block hidden">{isSignUp ? user.name : 'Sign up'}</div>
            </div>
          </Link>
          <div className="favorite flex items-center flex items-center bg-orange-500 md:px-5 px-3 md:py-2 py-2 rounded-3xl md:text-base text-sm font-semibold text-white hover:bg-orange-600 duration-300">
            <Link to={ROUTER_PATH.FAVORITE}>
              <svg className="md:w-[25px] w-[20px] md:h-[30px] h-[20px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="m480-147.54-31.769-28.923q-103.075-94.428-170.268-162.56T171.117-459.962q-39.654-52.808-55.385-95.373-15.731-42.566-15.731-85.357 0-82.294 55.5-137.8 55.5-55.507 137.192-55.507 55.846 0 103.576 28.154Q444-777.691 480-723.998q40.461-55.923 86.829-82.962 46.368-27.039 100.478-27.039 81.692 0 137.192 55.507 55.5 55.506 55.5 137.8 0 42.791-15.731 85.357-15.731 42.565-55.341 95.29-39.609 52.725-106.846 120.939-67.237 68.215-170.312 162.643L480-147.54Zm0-60.153q99.719-91.285 164.121-156.481 64.401-65.197 102.332-114.088 37.931-48.892 53.047-86.933 15.115-38.042 15.115-75.353 0-64.221-41.615-106.144-41.616-41.923-105.468-41.923-51.139 0-94.028 30.538-42.889 30.539-74.889 90.231H460.77q-31.77-59.077-74.651-89.923-42.881-30.846-93.651-30.846-63.468 0-105.275 41.923-41.808 41.923-41.808 106.443 0 37.252 15.177 75.497t52.846 87.383q37.669 49.138 102.708 113.984Q381.154-298.539 480-207.693Zm0-290.461Z"
                />
              </svg>
            </Link>
            <span className="ml-1">{favoriteItems}</span>
          </div>
          <Link
            to={ROUTER_PATH.CART}
            className="cart flex items-center bg-orange-500 md:px-6 px-3 md:py-3 py-2 rounded-3xl md:text-base text-sm font-semibold text-white hover:bg-orange-600 duration-300"
          >
            <div className="sum md:mr-3 mr-1 md:block hidden">
              $ <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="delimiter bg-white opacity-25 h-[25px] w-[1px] md:mr-3 mr-1 md:block hidden"></div>
            <div className="icon flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{itemsCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
