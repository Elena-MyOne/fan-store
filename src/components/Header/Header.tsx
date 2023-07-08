import React from 'react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../models/enums';
import Search from './Search/Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/CartSlice';
import { getUserFromLocalStorage } from '../../utils/getUserFromLoocalStorage';
import { selectUser } from '../../redux/store';

const Header = () => {
  const { totalPrice, itemsCount } = useSelector(selectCart);
  const { isSignUp } = useSelector(selectUser);
  const { name } = getUserFromLocalStorage();

  const signUpPath = isSignUp
    ? `${ROUTER_PATH.PROFILE}/${ROUTER_PATH.ACCOUNT}`
    : ROUTER_PATH.SIGNUP;

  const signUpText = isSignUp ? name : 'Sign up';

  return (
    <header className="header py-4 border">
      <div className="body flex justify-between container m-auto items-center flex-wrap sm:gap-10 gap-4">
        <Link
          to={ROUTER_PATH.HOME}
          className="logo w-[100px] md:w-[164px] md:h-[40px] lg:order-1 order-1"
        >
          <img className={style.headerLogoImage} src="/assets/images/logo/logo.png" alt="logo" />
        </Link>
        <Search />
        <div className="flex gap-4 items-center md:gap-10 lg:order-3 order-2">
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
          <Link to={signUpPath}>
            <div className="icon text-gray-800 flex flex-col items-center">
              <svg className="w-[30px] h-[30px]" viewBox="0 -960 960 960">
                <path
                  className="fill-current"
                  d="M232.001-253.077q59.923-41.307 119.23-64.038Q410.539-339.846 480-339.846q69.461 0 129.077 22.731 59.615 22.731 119.538 64.038 43.615-50.538 64.807-106.725Q814.615-415.989 814.615-480q0-141.538-96.538-238.077Q621.538-814.615 480-814.615t-238.077 96.538Q145.385-621.538 145.385-480q0 64.011 21.5 120.198t65.116 106.725Zm247.782-204.231q-53.937 0-90.744-37.025-36.808-37.024-36.808-90.961 0-53.936 37.025-90.744 37.024-36.807 90.961-36.807t90.744 37.024q36.808 37.024 36.808 90.961t-37.025 90.744q-37.024 36.808-90.961 36.808Zm.685 357.307q-79.006 0-148.242-29.77-69.235-29.769-120.961-81.576-51.725-51.808-81.494-120.727-29.77-68.92-29.77-148t29.77-147.925q29.769-68.846 81.576-120.654 51.808-51.807 120.727-81.576 68.92-29.77 148-29.77t147.925 29.77q68.846 29.769 120.654 81.576 51.807 51.808 81.576 120.686 29.77 68.878 29.77 147.499 0 79.006-29.77 148.242-29.769 69.235-81.576 120.961-51.808 51.725-120.686 81.494-68.878 29.77-147.499 29.77ZM480-145.385q55.769 0 110-17.731t102.154-57.346q-47.923-35.231-101.5-54.616Q537.077-294.462 480-294.462T369.154-275.27q-53.77 19.192-100.923 54.808Q315.769-180.847 370-163.116q54.231 17.731 110 17.731Zm.054-357.307q35.869 0 59.1-23.284 23.231-23.285 23.231-59.154 0-35.87-23.285-59.101-23.284-23.231-59.154-23.231-35.869 0-59.1 23.285-23.231 23.284-23.231 59.154 0 35.869 23.285 59.1 23.284 23.231 59.154 23.231ZM480-585.077Zm0 365.153Z"
                />
              </svg>
              <span className="text min-[400px]:block hidden">{signUpText}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
