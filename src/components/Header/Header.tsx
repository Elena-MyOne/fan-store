import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../models/enums';
import Search from './Search/Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/CartSlice';
import { selectUser } from '../../redux/store';
import logo from '../../assets/images/logo/logo.png';

const Header: React.FC = () => {
  const { totalPrice, itemsCount } = useSelector(selectCart);
  const { isSignUp } = useSelector(selectUser);

  const signUpPath = isSignUp
    ? `${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`
    : ROUTER_PATH.SIGNUP;

  const signUpText = isSignUp ? 'Account' : 'Sign up';

  return (
    <header className="header pt-4 border">
      <div className="body flex justify-between container m-auto items-center flex-wrap md:gap-20 gap-9 pb-4">
        <Link
          to={ROUTER_PATH.HOME}
          className="logo w-[100px] md:w-[164px] md:h-[40px] md:order-1 order-1"
        >
          <img className={style.headerLogoImage} src={logo} alt="logo" />
        </Link>
        <div className="profile flex gap-4 items-center md:gap-10 md:order-3 order-2">
          <Link to={signUpPath}>
            <div className="icon text-gray-800 flex flex-col items-center">
              <svg className="w-[30px] h-[30px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"
                />
              </svg>
              <span className="text min-[400px]:block hidden font-semibold">{signUpText}</span>
            </div>
          </Link>
          <Link
            to={ROUTER_PATH.CART}
            className="cart flex items-center bg-orange-500 md:px-6 px-3 md:py-3 py-2 rounded-3xl font-semibold text-white hover:bg-orange-600 duration-300"
          >
            <div className="sum mr-3">
              $ <span>{totalPrice.toFixed(2)}</span>
            </div>
            <div className="delimiter bg-white opacity-25 h-[25px] w-[1px] mr-3"></div>
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
      <Search />
    </header>
  );
};

export default Header;
